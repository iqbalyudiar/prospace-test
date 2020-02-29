import {
  ADD_COMPANY,
  FETCH_COMPANIES,
  FETCH_COMPANY,
  DELETE_COMPANY,
  ADD_OFFICE,
  FETCH_OFFICES,
  DELETE_OFFICE
} from "./types";
import forms from "../apis/forms";

// export const addCompany = company => ({ type: ADD_COMPANY, payload: company });
// export const fetchCompany = company => ({
//   type: FETCH_COMPANY,
//   payload: company
// });
// export const deleteCompany = company => ({
//   type: DELETE_COMPANY,
//   payload: company
// });

// export const addOffice = office => ({ type: ADD_OFFICE, payload: office });
// export const fetchOffice = office => ({
//   type: FETCH_OFFICE,
//   payload: office
// });
// export const deleteOffice = office => ({
//   type: DELETE_OFFICE,
//   payload: office
// });

export const addCompany = company => async dispatch => {
  const response = await forms.post("/forms/company", { ...company });

  dispatch({ type: ADD_COMPANY, payload: response });
};

export const fetchCompanies = () => async dispatch => {
  const response = await forms.get("/forms/company");

  dispatch({ type: FETCH_COMPANIES, payload: response.data });
};

export const fetchCompany = id => async dispatch => {
  const response = await forms.get(`/forms/company/${id}`);

  dispatch({ type: FETCH_COMPANY, payload: response.data });
};

export const deleteCompany = id => async dispatch => {
  await forms.delete(`/forms/company/${id}`);

  dispatch({ type: DELETE_COMPANY, payload: id });
};

export const addOffice = office => async dispatch => {
  const response = await forms.post(
    `forms/company/${office.companyId}/office`,
    {
      ...office
    }
  );

  dispatch({ type: ADD_OFFICE, payload: response.data });
};

export const fetchOffices = id => async dispatch => {
  const response = await forms.get(`forms/company/${id}/office`);

  dispatch({ type: FETCH_OFFICES, payload: response.data });
};

export const deleteOffice = id => async dispatch => {
  await forms.delete(`forms/company/${id.company}/office/${id.office}`);

  dispatch({ type: DELETE_OFFICE, payload: id });
};
