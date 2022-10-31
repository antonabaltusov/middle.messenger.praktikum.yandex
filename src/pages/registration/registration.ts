import { Block } from "../../utils/Block";

export class registration extends Block {
  constructor() {
    super();
  }
  render() {
    return `
    {{#GradientModal}}
      <h1>Registration</h1>
      <form action="" class="df-column-center">
        {{{ FormInput placeholder='Email' name="email"}}}
        {{{ FormInput placeholder='Login' name="login"}}}
        {{{ FormInput placeholder='First name' name="first_name"}}}
        {{{ FormInput placeholder='Second name' name="Second_name"}}}
        {{{ FormInput placeholder='Phone' name="phone" type="phone"}}}
        {{{ FormInput placeholder='Password' name="password"}}}
        {{{ FormInput placeholder='Password again' name="password_again"}}}
        {{{ Button label='Create user'}}}
      </form>
      {{{ Link text='sing in' link="../sing-in"}}}
    {{/GradientModal}}
  `;
  }
}
