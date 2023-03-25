import { notifications } from "../constants/Constants";
import { types } from "../contexts/NotificationContext";

let message;
let type;

const patternImage = /^http(|s):\/\//;
const patternEmail = /^[A-Za-z]{3,}\s[A-Za-z]{4,}$/;

export const validateArticle = (value) => {
   if(value.name === "title" || value === "title"){
     if(value.value === "" || value.length < 15) {
       message = notifications.titleWarningMsg;
       type = types.warning;
     }
     else {
      message = "";
     }
   }

   if(value.name === "content" || value === "content") {
     if(value.value === "" || value.length < 150){
       message = notifications.contentWarningMsg;
       type = types.warning;
     }
     else{
      message = "";
     }
   }

   if(value.name === "imageUrl" || value === "imageUrl") {
     let isValid = patternImage.test(value.value);

     if(value.value === "" || !isValid){
       message = notifications.imageWarningMsg;
       type = types.error;
     }
     else {
      message = "";
     }
   }

   return [ message, type ];
};

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
