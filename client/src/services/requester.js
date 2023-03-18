const request = async (method, url, data, options = {}) => {
    const { headers: customHeaders = {}, ...customOptions } = options;
    const token = localStorage.getItem('auth');
    const auth = token ? JSON.parse(token) : {};
  
    const headers = {
      ...customHeaders,
      'content-type': 'application/json',
    };
  
    if (auth.accessToken) {
      headers['Authorization'] = `Bearer ${auth.accessToken}`;
    }
  
    const requestOptions = {
      method,
      headers,
      ...customOptions,
    };
  
    if (data) {
      requestOptions.body = JSON.stringify(data);
    }
  
    try {
      const response = await fetch(url, requestOptions);
      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.error || 'An error occurred');
      }
  
      const result = await response.text();

      if(result && result.trim() !== '') {
        const jsonData = JSON.parse(result);
        return jsonData;
      }
      else{
        throw new Error("Error or null response");
      }
    } catch (error) {
      console.log(error);
      console.log(error);
      throw new Error("Error parsing JSON" + error.message);
    }
  };
  
  export const get = (url, options) => request('GET', url, null, options);
  export const post = (url, data, options) => request('POST', url, data, options);
  export const patch = (url, data, options) => request('PATCH', url, data, options);
  export const put = (url, data, options) => request('PUT', url, data, options);
  export const del = (url, options) => request('DELETE', url, null, options);
  
