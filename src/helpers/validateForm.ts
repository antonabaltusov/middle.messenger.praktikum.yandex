export enum ValidateType {
  Login = "login",
  Password = "password",
}
// first_name, second_name — латиница или кириллица,
//    первая буква должна быть заглавной, без пробелов и без цифр, 
//    нет спецсимволов (допустим только дефис).
// login — от 3 до 20 символов, латиница, может содержать цифры, 
//    но не состоять из них, без пробелов, без спецсимволов 
//    (допустимы дефис и нижнее подчёркивание).
// email — латиница, может включать цифры и спецсимволы вроде дефиса, 
//    обязательно должна быть «собака» (@) и точка после неё, 
//    но перед точкой обязательно должны быть буквы.
// password — от 8 до 40 символов, обязательно хотя бы одна 
//    заглавная буква и цифра.
// phone — от 10 до 15 символов, состоит из цифр, может начинается с плюса.
// message — не должно быть пустым.
type ValidateRule = {
  type: ValidateType;
  value: string;
};

export function validateInput(item: ValidateRule): string[] {
  let errorMessage = [];
  switch (item.type) {
    case ValidateType.Login:
      console.log(item.value.match(/^[a-zA-Z0-9]+$/));
      
      if ( item.value.length < 3 || item.value.length > 20) {
        errorMessage.push('Необходимо от 3 до 20 символов');
        break;
      }
      if ( !item.value.match(/^[a-zA-Z]+$/) && !item.value.match(/^[a-zA-Z0-9_-]+$/)) {
        errorMessage.push(`Может содержать только латиницу, 
        может содержать цифры, но не состоять из них, 
        без пробелов, без спецсимволов (допустимы дефис и нижнее подчёркивание)`);
        break;
      }
       
      break;
  
    default:
      break;
  }
  console.log(errorMessage);
  
  return errorMessage;
}
