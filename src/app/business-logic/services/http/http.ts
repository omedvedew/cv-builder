import axios, { AxiosRequestConfig } from "axios";
import { environment } from "../../../../environment";

export class HttpService {
  public async request({ ...config }: AxiosRequestConfig) {
    try {
      const response = await axios({
        baseURL: environment.api_url,
        method: "GET",
        ...config,
      });

      return response.data;
    } catch ({ message }) {
      throw new Error(message as string);
    }
  }
}
