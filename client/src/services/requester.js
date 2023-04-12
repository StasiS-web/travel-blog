const request = async (method, url, data) => {
  try {
    const user = localStorage.getItem('auth');
    let auth;

    if (user === "undefined" || user === undefined) {
      auth = {};
    } else {
      auth = JSON.parse(user);
    }

    const headers = {};
    if (data !== undefined) {
      headers['Content-Type'] = 'application/json';
    }

    if (auth.accessToken) {
      headers['X-Authorization'] = auth.accessToken;
    }

    const options = {
      method,
      headers,
      body: data ? JSON.stringify(data) : undefined,
    };

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
    console.log(error);
  }
};

export const requestFactory = () => {
  return {
    get: request.bind(null, 'GET'),
    post: request.bind(null, 'POST'),
    patch: request.bind(null, 'PATCH'),
    put: request.bind(null, 'PUT'),
    delete: request.bind(null, 'DELETE'),
  };
};

