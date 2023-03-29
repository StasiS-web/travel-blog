import { notifications } from "../constants/Constants";
import { types } from "../contexts/NotificationContext";

const patternImage = /^http(|s):\/\//;
const patternEmail = /^[A-Za-z]{3,}\s[A-Za-z]{4,}$/;

export const validateArticle = (value) => {
  let message = "";
  let type = "";

  if(value.name === "title"){
    if(value.value === "" || value.value.length < 15) {
      message = notifications.titleWarningMsg;
      type = types.warning;
    }
  }

  if(value.name === "content") {
    if(value.value === "" || value.value.length < 150){
      message = notifications.contentWarningMsg;
      type = types.warning;
    }
  }

  if(value.name === "imageUrl") {
    let isValid = patternImage.test(value.value);

    if(value.value === "" || !isValid){
      message = notifications.imageWarningMsg;
      type = types.error;
    }
  }

  return [ message, type ];
};

export const validateUser = (value) => {
  let message = "";
  let type = "";

  if (value.name === "email") {
    let isValid = patternEmail.test(value.value);
    if (value.value === "" || !isValid) {
      message = notifications.emailWarningMsg;
      type = types.warning;
    }
  }

  if (value.name === "password") {
    if (value.value === "" || value.value.length < 6) {
      message = notifications.passwordWarningMsg;
      type = types.warning;
    }
  }

  return [ message, type ];
}; 
