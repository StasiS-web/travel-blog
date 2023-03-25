import { notifications } from "../constants/Constants";
import { types } from "../contexts/NotificationContext";

let message;
let type;

const patternEmail = /^[A-Za-z]{3,}\s[A-Za-z]{4,}$/;

export const validateUser = (value) => {
  if (value.name === "email" || value === "email") {
    let isValid = patternEmail.test(value.email);
    if (value.name === "" || !isValid) {
      message = notifications.emailWarningMsg;
      type = types.warning;
    } else {
      message = "";
    }
  }

  if (value.name === "password" || value === "password") {
    if (value.value === "" || value.length < 6) {
      message = notifications.passwordWarningMsg;
      type = types.warning;
    } else {
      message = "";
    }
  }

  return [ message, type ];
};
