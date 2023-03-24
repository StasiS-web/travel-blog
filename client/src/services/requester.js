const request = async (method, url, data) => {
  try {
    const auth = JSON.parse(localStorage.getItem('auth') || '{}');
    const headers = {};

    if (auth.accessToken) {
      headers['Authorization'] = `Bearer ${auth.accessToken}`;
    }

    let options = { method, headers };

    if (data) {
      options.headers['Content-Type'] = 'application/json';
      options.body = JSON.stringify(data);
    }

    const response = await fetch(url, options);

    if (response.status === 204) {
      return {};
    }

    const result = await response.json();

    if (!response.ok) {
      throw result;
    }

    return result;
  } catch (error) {
    console.log(error);
    throw error;
  }
};

export const get = request.bind(null, 'GET');
export const post = request.bind(null, 'POST');
export const patch = request.bind(null, 'PATCH');
export const put = request.bind(null, 'PUT');
export const del = request.bind(null, 'DELETE');

  
