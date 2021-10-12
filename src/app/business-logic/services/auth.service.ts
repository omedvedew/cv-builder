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
      url: "/auth/sign-up",
      method: "POST",
      data: payload,
    });

  public logOut = () =>
    this.http.request({
      url: "/auth/logout",
      method: "GET",
    });

  public logIn = (payload: { email: string; password: string }) =>
    this.http.request({
      url: "/auth/login",
      method: "POST",
      data: payload,
    });
}
