/* eslint-disable indent */
export enum ValidateType {
  Login = 'login',
  Password = 'password',
  PasswordAgain = 'password_again',
  PasswordOld = 'password_old',
  Email = 'email',
  FirstName = 'first_name',
  SecondName = 'second_name',
  Phone = 'phone',
  Message = 'message',
}

type ValidateRule = {
  type: ValidateType;
  value: string;
};

export function validateInput(item: ValidateRule): string[] {
  const errorMessage = [];
  switch (item.type) {
    case ValidateType.Message:
      if (!item.value.match('')) {
        errorMessage.push('не должно быть пустым');
      }
      break;
    case ValidateType.Phone:
      if (!item.value.match(/^[+]?[\d]{10,15}/)) {
        errorMessage.push(
          'от 10 до 15 символов, состоит из цифр, может начинается с плюса'
        );
      }
      break;
    case ValidateType.FirstName:
    case ValidateType.SecondName:
      if (!item.value.match(/^[A-ZА-ЯЁ]/)) {
        errorMessage.push('Первая буква должна быть заглавной');
        break;
      }
      if (item.value.match(/[^a-zа-яё-]/i)) {
        errorMessage.push('Только кириллица или латиница');
        break;
      }
      break;
    case ValidateType.Login:
      if (item.value.length < 3 || item.value.length > 20) {
        errorMessage.push('Необходимо от 3 до 20 символов');
        break;
      }
      if (
        !item.value.match(/^[a-zA-Z]+$/) &&
        !item.value.match(/^[a-zA-Z0-9_-]+$/)
      ) {
        errorMessage.push(`Может содержать только латиницу, 
        может содержать цифры, но не состоять из них, 
        без пробелов, без спецсимволов (допустимы дефис и нижнее подчёркивание)`);
        break;
      }
      break;
    case ValidateType.Password:
    case ValidateType.PasswordAgain:
    case ValidateType.PasswordOld:
      if (item.value.length < 8 || item.value.length > 40) {
        errorMessage.push('Необходимо от 8 до 40 символов');
        break;
      }
      if (!item.value.match(/(?=.*[A-Z])/)) {
        errorMessage.push('обязательно хотя бы одна заглавная буква');
        break;
      }
      if (!item.value.match(/(?=.*[0-9])/)) {
        errorMessage.push('обязательно хотя бы одна цифра');
        break;
      }
      break;
    case ValidateType.Email:
      if (
        !item.value.match(
          // eslint-disable-next-line max-len
          /^((([0-9A-Za-z]{1}[-0-9A-z\.]{0,30}[0-9A-Za-z]?)|([0-9А-Яа-я]{1}[-0-9А-я\.]{0,30}[0-9А-Яа-я]?))@([-A-Za-z]{1,}\.){1,}[-A-Za-z]{2,})$/i
        )
      ) {
        errorMessage.push('Email не соответствует валидации');
        break;
      }
    default:
      break;
  }

  return errorMessage;
}
