import { HttpService } from "./http";

export class AuthService {
  public constructor(private http: HttpService) {}

  public getUser = () =>
    this.http.request({
      url: "/api/current-user",
      method: "GET",
    });
}
