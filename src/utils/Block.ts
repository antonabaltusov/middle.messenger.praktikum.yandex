import EventBus from './EventBus';
import { nanoid } from 'nanoid';
import Handlebars from 'handlebars';
import deepEqual from '../helpers/deepEqual';

// eslint-disable-next-line no-use-before-define
type Events = Values<typeof Block.EVENTS>;

export class Block<P extends Record<string, any>> {
  static EVENTS = {
    INIT: 'init',
    FLOW_CDM: 'flow:component-did-mount',
    FLOW_RENDER: 'flow:render',
    FLOW_UPDATE: 'flow:component-did-update',
  } as const;

  static componentName: string;

  private _element: Nullable<HTMLElement> = null;
  public id = 'id-' + nanoid(6);

  protected readonly props: P;
  // eslint-disable-next-line no-use-before-define
  protected refs = {} as Record<string, Block<Record<string, any>>>;
  // eslint-disable-next-line no-use-before-define
  protected children: Record<string, Block<Record<string, any>>>;

  private eventBus: () => EventBus<Events>;

  constructor(propsAndChildren?: P) {
    const eventBus = new EventBus<Events>();

    const { props, children } = this.getChildren(propsAndChildren);

    this.children = children;

    this.props = this._makePropsProxy(props);

    this.eventBus = () => eventBus;

    this._registerEvents(eventBus);
    eventBus.emit(Block.EVENTS.INIT);
  }

  _registerEvents(eventBus: EventBus<Events>): void {
    eventBus.on(Block.EVENTS.INIT, this.init.bind(this));
    eventBus.on(Block.EVENTS.FLOW_CDM, this._componentDidMount.bind(this));
    eventBus.on(Block.EVENTS.FLOW_RENDER, this._render.bind(this));
    eventBus.on(Block.EVENTS.FLOW_UPDATE, this._componentDidUpdate.bind(this));
  }

  getChildren(propsAndChildren?: P) {
    const children: Record<string, Block<{}>> = {} as Record<string, Block<{}>>;
    const props: P = {} as P;
    if (propsAndChildren) {
      Object.entries(propsAndChildren).map(([key, value]) => {
        if (value instanceof Block) {
          children[key] = value;
        } else if (
          Array.isArray(value) &&
          value.every((v) => v instanceof Block)
        ) {
          value.forEach((block) => {
            if (block instanceof Block) {
              children[block.id] = block;
            }
          });
        } else {
          //@ts-expect-error
          props[key] = value;
        }
      });
    }

    return { props, children };
  }

  init(): void {
    this.eventBus().emit(Block.EVENTS.FLOW_RENDER);
  }

  _componentDidMount(props: P): void {
    this.componentDidMount(props);
  }

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  componentDidMount(oldProps: P) {}

  dispatchComponentDidMount(): void {
    this.eventBus().emit(Block.EVENTS.FLOW_CDM);
  }

  _componentDidUpdate(oldProp: P, newProp: P): void {
    const response = this.componentDidUpdate(oldProp, newProp);

    if (response) {
      this.eventBus().emit(Block.EVENTS.FLOW_RENDER);
    }
  }

  componentDidUpdate(oldProp: P, newPropp: P): boolean {
    return !deepEqual(oldProp, newPropp);
  }

  setProps = (nextProps: P): void => {
    if (!nextProps) {
      return;
    }

    Object.assign(this.props, nextProps);
  };

  get element(): Nullable<HTMLElement> {
    return this._element;
  }
  _removeEvents(): void {
    const events: Record<string, () => void> = (this.props as any).events;

    if (!events || !this._element) {
      return;
    }

    Object.entries(events).forEach(([event, listener]) => {
      this._element!.removeEventListener(event, listener);
    });
  }

  _addEvents(): void {
    const events: Record<string, () => void> = (this.props as any).events;

    if (!events) {
      return;
    }

    Object.entries(events).forEach(([event, listener]) => {
      this._element!.addEventListener(event, listener);
    });
  }

  _render(): void {
    const fragment = this.compile();

    const newElement = fragment.firstElementChild as HTMLElement;

    if (this._element) {
      this._removeEvents();
      this._element.replaceWith(newElement);
    }
    this._element = newElement;

    this._addEvents();
  }

  protected render(): string {
    return '';
  }

  getContent(): HTMLElement {
    if (this.element?.parentNode?.nodeType === Node.DOCUMENT_FRAGMENT_NODE) {
      setTimeout(() => {
        if (
          this.element?.parentNode?.nodeType !== Node.DOCUMENT_FRAGMENT_NODE
        ) {
          this.eventBus().emit(Block.EVENTS.FLOW_CDM);
        }
      }, 100);
    }

    return this.element!;
  }

  _makePropsProxy(props: P): P {
    const self = this;

    const proxyData = new Proxy(props, {
      get(target: P, prop: string) {
        const value = target[prop];
        return typeof value === 'function' ? value.bind(target) : value;
      },
      set(target: Record<string, any>, prop: string, value: unknown) {
        const oldProp = { ...target };

        target[prop] = value;

        self.eventBus().emit(Block.EVENTS.FLOW_UPDATE, oldProp, target);

        return true;
      },
      deleteProperty() {
        throw new Error('нет доступа');
      },
    });

    return proxyData as P;
  }

  _createDocumentElement(tagName: string): HTMLElement {
    return document.createElement(tagName);
  }
  compile(): DocumentFragment {
    const fragment = this._createDocumentElement(
      'template'
    ) as HTMLTemplateElement;

    const templateString = this.render();
    const template = Handlebars.compile(templateString);

    const htmlString = template({
      ...this.props,
      children: this.children,
      refs: this.refs,
    });

    fragment.innerHTML = htmlString;

    Object.entries(this.children).forEach(([id, child]) => {
      const stub = fragment.content.querySelector(`[data-id="${id}"]`);

      if (!stub) {
        return;
      }

      const stubChilds = stub.childNodes.length ? stub.childNodes : [];

      const content = child.getContent();
      stub.replaceWith(content!);

      const layoutContent = content.querySelector('[data-layout="1"]');

      if (layoutContent && stubChilds.length) {
        layoutContent.replaceWith(...stubChilds);
      }
    });

    return fragment.content;
  }

  show() {
    this._element!.style.display = 'block';
  }

  componentBeforeUnmount() {}
}
