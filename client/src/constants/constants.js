
const paths = {
    registerPath: "/register",
    loginPath: "/login",
    logoutPath: "/logout",

    homePath: "/",
    aboutPath: "/about",
    contactPath: "/contacts",

    profilePath: "/profile",
    editProfile: "/profile-edit",
    error404Path: "/404",

    destinationsPath: "/destinations",
    detailsPath: "/destinations/:articleId",

    createArticle: "/destinations/create-article",
    updateArticleById: "/destinations/edit-article/:articleId",
}

const notifications ={
    name: "Please provide your name.",
    userExists: "User already exists.",
    emailExists: "This email already exists.",
    userDataNotFound: "User data not found",

    emailErrorMsg: "Email must be at least 6 characters long.",
    fieldsErrorMsg: "Filed should not be empty.",

    passwordWarningMsg: "Password and Confirm password should match.",
    emailWarningMsg: "Please insert a valid email.",
    nameWarningMsg: "Please insert a valid name.",
    tokenErrorMsg: "Invalid token! Please make sure you got a valid token.",
    userNotAuthorizedMsg: "Unauthorized user.",

    titleWarningMsg: "The article title must be at least 15 characters long.",
    contentWarningMsg: "The article content must be at least 150 characters long.",
    imageErrorMsg: "The image address must contain http(s)://",

    registerSuccessMsg: "You have successfully register.",
    loginSuccessMsg: "You have successfully login.",
    logoutSuccessMsg: "You have successfully logged out.",

    articleCreateMsg: "Article created.",
    articleUpdateMsg: "Article updated.",
    articleDeleteMsg: "Article deleted.",
    articleInfoMsg: "Sorry, we couldn't find the article you are looking for.",

    invalidInput: "Invalid input!",
    notReceivedData: "Authentication data not received."
}

export {
    paths,
    notifications
}