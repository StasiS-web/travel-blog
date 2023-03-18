const baseUrl = "http://localhost:3030";
const userUrl = `${baseUrl}/users`;
const destinationUrl = `${baseUrl}/jsonstore/destinations`;
const tipUrl = `${baseUrl}/jsonstore/tips`;

const paths = {
    registerPath: "/register",
    loginPath: "/login",
    logoutPath: "/logout",

    homePath: "/",
    aboutPath: "/about",
    contactPath: "/contacts",

    profilePath: "/profile/:profileName",
    error404Path: "/404",

    destinationsPath: "/destination",

    createArticle: "destination/create-article",
    updateArticleById: "/destination/edit-article",
    deleteArticleById: "/destination/delete-article"
}

const notifications ={
    name: "Please provide your name.",
    userExists: "User already exists.",
    userDataNotFound: "User data not found",

    passwordWarningMsg: "Password and Confirm password should match.",
    fieldsWarningMsg: "Please fill all required fields.",

    registerSuccessMsg: "You have successfully register.",
    loginSuccessMsg: "You have successfully login.",
    logoutSuccessMsg: "You have successfully logged out.",

    articleCreateMsg: "Article created.",
    articleUpdateMsg: "Article updated.",
    articleDeleteMsg: "Article deleted.",

    invalidInput: "Invalid input!",
}

export {
    userUrl,
    destinationUrl,
    tipUrl,
    paths,
    notifications
}