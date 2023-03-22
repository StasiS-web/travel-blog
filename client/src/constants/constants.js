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
    detailsPath: "/detail/:postId",

    createArticle: "destination/create-article",
    updateArticleById: "/destination/:postId/edit-article"
}

const notifications ={
    name: "Please provide your name.",
    userExists: "User already exists.",
    emailExists: "This email already exists.",
    userDataNotFound: "User data not found",

    emailWarningMsg: "Email must be at least 6 characters long.",
    passwordWarningMsg: "Password and Confirm password should match.",
    fieldsErrorMsg: "Please fill all required fields.",

    registerSuccessMsg: "You have successfully register.",
    loginSuccessMsg: "You have successfully login.",
    logoutSuccessMsg: "You have successfully logged out.",

    articleCreateMsg: "Article created.",
    articleUpdateMsg: "Article updated.",
    articleDeleteMsg: "Article deleted.",

    invalidInput: "Invalid input!",
    notReceivedData: "Authentication data not received."
}

export {
    userUrl,
    destinationUrl,
    tipUrl,
    paths,
    notifications
}