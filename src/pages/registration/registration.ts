import Block from 'utils/Block';

export class Registration extends Block<{}> {
  constructor() {
    super();
  }
  render() {
    return `
    {{#GradientModal}}
      <h1>Registration</h1>
      {{{FormRegistr}}}
      {{{ Link text='sing in' link="../sing-in"}}}
    {{/GradientModal}}
  `;
  }
}
