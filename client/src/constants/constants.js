
const paths = {
    registerPath: "/register",
    loginPath: "/login",
    logoutPath: "/logout",

    homePath: "/",
    aboutPath: "/about",
    contactPath: "/contacts",

    profilePath: "/profile",
    error404Path: "/404",

    destinationsPath: "/destination",
    detailsPath: "/destination/:postId",

    createArticle: "/destination/create-article",
    updateArticleById: "/destination/edit-article/:postId",
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
    paths,
    notifications
}