import { AuthSaga } from "../store/auth/sagas";
import { DashboardSaga } from "../store/dashboard/sagas";
import { GeneralSaga } from "../store/general/sagas";

export const rootSagas = [
  new AuthSaga(),
  new GeneralSaga(),
  new DashboardSaga(),
];
