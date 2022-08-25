
import http from "../../utils/https-common";
import {
  ADD_ASSET,
  ASSETS_LOADING,
  GET_TEMP_WALLETS,
  GET_ASSET,
  GET_ERRORS,
} from "../types";
import headers from "./headers";

export const getAssets = (id: any) => (dispatch: any) => {
  dispatch({ type: ASSETS_LOADING });
  http
    .get(`/portfolio/${id}/assets`, headers())
    .then((res) => {
      const data = res.data.data;
      dispatch({
        type: GET_ASSET,
        payload: data,
      });
    })
    .catch((err) => {
      dispatch({
        type: GET_ERRORS,
        payload: err,
      });
    });
};

export const createAsset = (data: any) => (dispatch: any) => {
  dispatch({ type: ASSETS_LOADING });
  http
    .post(`/portfolio/asset/add`, data, headers())
    .then((res) => {
      const data = res.data.data;
      dispatch({
        type: ADD_ASSET,
        payload: data,
      });
      dispatch(getAssets(data.portfolio_id));
    })
    .catch((err) => {
      dispatch({
        type: GET_ERRORS,
        payload: err,
      });
    });
};

export const getTempWallets = () => (dispatch: any) => {
  dispatch({ type: ASSETS_LOADING });
  http
    .get(`/tempwallets`, headers())
    .then((res) => {
      const data = res.data.data;
      dispatch({
        type: GET_TEMP_WALLETS,
        payload: data,
      });
    })
    .catch((err) => {
      dispatch({
        type: GET_ERRORS,
        payload: err,
      });
    });
};
