import axios, { AxiosRequestConfig } from 'axios';

const baseURL = process.env.REACT_APP_API_BASEURL;

async function makeApiCall<T = any>(
  url: string,
  method: AxiosRequestConfig['method'] = 'get',
  payload?: AxiosRequestConfig['data'],
  axiosRequestConfig?: Omit<AxiosRequestConfig, 'url' | 'method' | 'data'>
): Promise<T> {
  try {
    if (!baseURL || typeof baseURL !== 'string') {
      throw new Error('REACT_APP_API_BASEURL is not defined');
    }
    const response = await axios({
      url,
      method,
      data: payload,
      baseURL,
      ...axiosRequestConfig,
    });
    return response.data;
  } catch (error: any) {
    if (error.response) {
      const serverMessage = error.response?.data?.message;
      throw new Error(serverMessage);
    }
    throw new Error(error.message);
  }
}

export default makeApiCall;
