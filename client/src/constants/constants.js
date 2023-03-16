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
    detailsDestinationPath: "/destination/:id",

    createPath: "/create-article",
    updatePath: "/destination/:id/edit-article"
}

const notifications ={
    name: "Please provide your name.",
    emailRequired: "Please provide your email.",
    passwordRequired: "Please provide a password.",
    passwordShouldMatch: "Password and Confirm password should match.",
    userExists: "User already exists.",
    articleTitleRequired: "Please provide article title.",
    articleAuthorRequired: "Please provide article author.",
    articleCategoryRequired: "Please provide article category.",
    articleImageRequired: "Please provide article image URL.",
    articleContentRequired: "Please provide article content.",
}

const notificationMessages = {
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
    notifications,
    notificationMessages
}