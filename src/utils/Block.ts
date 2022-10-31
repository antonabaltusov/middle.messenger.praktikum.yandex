import EventBus from "./EventBus";
import { nanoid } from "nanoid";
import Handlebars from "handlebars";
import deepEqual from "../helpers/deepEqual";

export class Block {
  static EVENTS = {
    INIT: "init",
    FLOW_CDM: "flow:component-did-mount",
    FLOW_RENDER: "flow:render",
    FLOW_UPDATE: "flow:component-did-update",
  };

  private _element: HTMLElement | null = null;
  public id = "id-" + nanoid(6);

  protected props: any;
  protected refs: {[key: string]: Block} = {};
  protected children: Record<string, Block>;
  private eventBus: () => EventBus;

  /** JSDoc
   * @param {string} tagName
   * @param {Object} props
   *
   * @returns {void}
   */
  constructor(propsAndChildren: any = {}) {
    const eventBus = new EventBus();
    
    const { props, children } = this.getChildren(propsAndChildren);
    
    
    
    this.children = children;

    this.initChildren();

    this.props = this._makePropsProxy(props);

    this.eventBus = () => eventBus;

    this._registerEvents(eventBus);
    eventBus.emit(Block.EVENTS.INIT);
  }
  getChildrens() {
    return this.children;
    
  }

  getChildren(propsAndChildren: any) {
    const children: any = {};
    const props: any = {};

    Object.entries(propsAndChildren).map(([key, value]) => {
      if (value instanceof Block) {
        children[key] = value;
      } else if (
        Array.isArray(value) &&
        value.every((v) => v instanceof Block)
      ) {
        children[key] = value;
      } else {
        props[key] = value;
      }
    });

    return { props, children };
  }
  protected initChildren() {}

  _registerEvents(eventBus: any) {
    eventBus.on(Block.EVENTS.INIT, this.init.bind(this));
    eventBus.on(Block.EVENTS.FLOW_CDM, this._componentDidMount.bind(this));
    eventBus.on(Block.EVENTS.FLOW_RENDER, this._render.bind(this));
    eventBus.on(Block.EVENTS.FLOW_UPDATE, this._componentDidUpdate.bind(this));
  }

  init() {
    //this._createResources();
    this.eventBus().emit(Block.EVENTS.FLOW_RENDER);
  }

  _componentDidMount(props: any) {
    this.componentDidMount(props);
  }

  // Может переопределять пользователь, необязательно трогать
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  componentDidMount(oldProps: any) {}

  dispatchComponentDidMount() {
    this.eventBus().emit(Block.EVENTS.FLOW_CDM);
  }

  _componentDidUpdate(oldProp, newPropp) {
    
    
    const response = this.componentDidUpdate(oldProp, newPropp);
   
    
    if (response) {
      this.eventBus().emit(Block.EVENTS.FLOW_RENDER);
    }
  }

  // Может переопределять пользователь, необязательно трогать
  componentDidUpdate(oldProp: any, newPropp: any): boolean {
    return !deepEqual(oldProp, newPropp);
  }

  setProps = (nextProps: any) => {
    if (!nextProps) {
      return;
    }

    Object.assign(this.props, nextProps);
  };

  get element() {
    return this._element;
  }
  _removeEvents() {
    const events: Record<string, () => void> = (this.props as any).events;

    if (!events || !this._element) {
      return;
    }

    Object.entries(events).forEach(([event, listener]) => {
      this._element!.removeEventListener(event, listener);
    });
  }

  _addEvents() {
    const events: Record<string, () => void> = (this.props as any).events;

    if (!events) {
      return;
    }

    Object.entries(events).forEach(([event, listener]) => {
      this._element!.addEventListener(event, listener);
    });
  }

  _render() {
    

    const fragment = this.compile();

    const newElement = fragment.firstElementChild as HTMLElement;

    if (this._element) {
      this._removeEvents();
      this._element.replaceWith(newElement);
    }
    this._element = newElement;

    this._addEvents();
  }

  // Может переопределять пользователь, необязательно трогать
  protected render(): string {
    return "";
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

    return this.element;
  }

  _makePropsProxy(props: any) {
    const self = this;

    const proxyData = new Proxy(props, {
      get(target, prop) {
        const value = target[prop];
        return typeof value === "function" ? value.bind(target) : value;
      },
      set(target, prop, value) {
        const oldProp = { ...target };

        target[prop] = value;

        self.eventBus().emit(Block.EVENTS.FLOW_UPDATE, oldProp, target);

        return true;
      },
      deleteProperty() {
        throw new Error("нет доступа");
      },
    });

    return proxyData;
  }

  _createDocumentElement(tagName: string) {
    return document.createElement(tagName);
  }
  compile() {
    const fragment = this._createDocumentElement(
      "template"
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
        layoutContent.append(...stubChilds);
      }
    });

    return fragment.content;
  }

  // show() {
  //   this._element.style.display = "block";
  // }

  // hide() {
  //   this._element.style.display = "none";
  // }
}
