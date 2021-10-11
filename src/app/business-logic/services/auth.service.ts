import { HttpService } from "./http";

export class AuthService {
  public constructor(private http: HttpService) {}

  public getUser = () =>
    this.http.request({
      url: "/api/current-user",
      method: "GET",
    });

  public signUp = (payload: {
    email: string;
    password: string;
    firstName: string;
    lastName: string;
  }) =>
    this.http.request({
      url: "/auth/basic",
      method: "POST",
      data: payload,
    });
}
