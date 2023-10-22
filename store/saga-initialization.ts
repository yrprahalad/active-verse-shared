import { watchUserLogin } from "./auth/sagas";
import { sagaMiddleware } from "./main";

export function attachSagasLocally() {
    sagaMiddleware.run(watchUserLogin);
}