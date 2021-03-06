import { Resume } from "../../typescript/types";
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

  public saveCV = (payload: Resume) =>
    this.http.request({
      url: "/api/dashboard/resume-save",
      method: "post",
      data: payload,
    });

  public getCVs = (payload: string) =>
    this.http.request({
      url: `/api/dashboard/resumes?userId=${payload}`,
      method: "get",
    });
}
