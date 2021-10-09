import { AuthService } from ".";
import { HttpService } from "./http";

export class ApiService {
  public constructor(private http: HttpService) {}

  public auth = new AuthService(this.http);
}
