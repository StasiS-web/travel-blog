import Cookies from "js-cookie";

const getToken = () => {
  const token = Cookies.get("access-token");

  if(token && token !== "") {
    return token;
  }

  return null;
}

const request = async (method, url, data) => {
  try {
    const headers = {};
    const accessToken = getToken()  

    let options = { method, headers };

    if (data) {
      options.headers['Content-Type'] = 'application/json';
      options.body = JSON.stringify(data);
    }

    if (accessToken) {
      options.headers = {
        ...options.headers,
        'X-Authorization': accessToken,
      }
    }

    const response = await fetch(url, options);

    if (response.status === 204) {
      return {};
    }

    if (response.status === 409) {
      throw new Error("Conflict: The server encountered a conflict while processing the request.");
    }

    const result = await response.json();

    if (!response.ok) {
      throw result;
    }

    return result;
  } catch (error) {
    if (error.message === "Conflict: The server encountered a conflict while processing the request.") {
      // Handle the 409 error here
      console.log("There was a conflict while processing the request.");
    } else {
      console.log(error);
      throw error;
    }
  }
};

export const requestFactory= () => {
  return { 
    get: request.bind(null, 'GET'),
    post: request.bind(null, 'POST'),
    patch: request.bind(null, 'PATCH'),
    put: request.bind(null, 'PUT'),
    delete: request.bind(null, 'DELETE'),
  }
}
