import { Block } from 'utils/Block';

export class SingIn extends Block<{}> {
  constructor() {
    super();
  }

  render() {
    return `
    {{#GradientModal}}
      <h1>Login</h1>
        {{{FormSingIn}}}
        {{{Link link="../registration" text="registration"}}}
    {{/GradientModal}}
  `;
  }
}
