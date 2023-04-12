const paths = {
    homePath: "/",
    aboutPath: "/about",
    contactPath: "/contacts",

    registerPath: "/register",
    loginPath: "/login",
    logoutPath: "/logout",

    profilePath: "/profile",
    editProfile: "/profile-edit",
    error404Path: "/404",

    destinationsPath: "/destinations",
    detailsPath: "/destinations/:articleId",

    createArticlePath: "/destinations/create-article",
    updateArticlePath: "/destinations/edit-article/:articleId",
}

const notifications ={
    name: "Please provide your name.",
    userExists: "User already exists.",
    emailExists: "This email already exists.",
    userDataNotFound: "User data not found",

    emailErrorMsg: "Email must be at least 6 characters long.",
    fieldsErrorMsg: "All Fields are required. They should not be empty.",

    emailFieldErrorMsg: "Email should not be empty.",
    passwordFieldErrorMsg: "Password should not be empty.",
    confirmPasswordFieldErrorMsg: "Confirm Password should not be empty.",

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

    likeSucceededMsg: "Successfully liked this article.",
    likeErrorMsg: "You have already liked this article.",

    commentCreateErrorMsg: "You were not able to create a comment.",

    invalidInput: "Invalid input!",
    notReceivedData: "Authentication data not received."
}

export {
    paths,
    notifications
}