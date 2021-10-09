import { AuthSaga } from "../store/auth/sagas";
import { GeneralSaga } from "../store/general/sagas";

export const rootSagas = [new AuthSaga(), new GeneralSaga()];
