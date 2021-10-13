import { AuthService } from "./auth.service";
import { DashboardService } from "./dashboard.service";
import { HttpService } from "./http";

export class ApiService {
  public constructor(private http: HttpService) {}

  public auth = new AuthService(this.http);

  public dashboard = new DashboardService(this.http);
}
