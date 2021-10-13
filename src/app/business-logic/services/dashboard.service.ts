import { HttpService } from "./http";

export class DashboardService {
  public constructor(private http: HttpService) {}

  public getAllTechSkills = () =>
    this.http.request({
      url: "/api/dashboard/all-tech-skills",
      method: "GET",
    });

  public getAllSoftSkills = () =>
    this.http.request({
      url: "/api/dashboard/all-soft-skills",
      method: "GET",
    });
}
