import { History } from "history";
import { ApiService } from "../../services";

export class SagasContext {
  public history!: History;

  public api!: ApiService;
}
