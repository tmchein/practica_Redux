import { combineReducers } from "redux";
import productosReducer from "./productosReducers";
import alertaReducer from "./alertaReducer";

export default combineReducers({
  productos: productosReducer,
  alerta: alertaReducer,
});
