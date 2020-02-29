import {
  ADD_COMPANY,
  FETCH_COMPANIES,
  FETCH_COMPANY,
  DELETE_COMPANY,
  ADD_OFFICE,
  FETCH_OFFICE,
  DELETE_OFFICE
} from "../actions/types";
const INITIAL_STATE = {
  companies: [],
  offices: []
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case ADD_COMPANY:
      return { ...state, companies: state.companies.concat(action.payload) };
    case FETCH_COMPANIES:
      return { ...state, companies: action.payload };
    case FETCH_COMPANY:
      return { ...state, companies: action.payload };
    case DELETE_COMPANY:
      return {
        ...state,
        companies: state.companies.filter(
          company => company.companyId !== action.id
        )
      };
    case ADD_OFFICE:
      return { ...state, offices: state.offices.concat(action.payload) };
    case FETCH_OFFICE:
      return { ...state, offices: action.payload };
    case DELETE_OFFICE:
      return {
        ...state,
        offices: state.offices.filter(office => office.officeId !== action.id)
      };

    default:
      return state;
  }
};
