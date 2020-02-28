import {
  ADD_COMPANY,
  FETCH_COMPANY,
  DELETE_COMPANY,
  ADD_OFFICE,
  FETCH_OFFICE,
  DELETE_OFFICE
} from "./types";

export const addCompany = company => ({ type: ADD_COMPANY, payload: company });
export const fetchCompany = company => ({
  type: FETCH_COMPANY,
  payload: company
});
export const deleteCompany = company => ({
  type: DELETE_COMPANY,
  payload: company
});

export const addOffice = office => ({ type: ADD_OFFICE, payload: office });
export const fetchOffice = office => ({
  type: FETCH_OFFICE,
  payload: office
});
export const deleteOffice = office => ({
  type: DELETE_OFFICE,
  payload: office
});
