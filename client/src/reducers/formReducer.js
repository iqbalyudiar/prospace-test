import {
  ADD_COMPANY,
  FETCH_COMPANY,
  DELETE_COMPANY,
  ADD_OFFICE,
  FETCH_OFFICE,
  DELETE_OFFICE
} from "../actions/types";
const INITIAL_STATE = {
  company: [],
  office: []
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case ADD_COMPANY:
      return { ...state, company: state.company.concat(action.payload) };
    case FETCH_COMPANY:
      return { ...state, company: action.payload };
    case DELETE_COMPANY:
      return {
        ...state,
        company: state.company.filter(
          company => company.companyId !== action.id
        )
      };
    case ADD_OFFICE:
      return { ...state, office: state.office.concat(action.payload) };
    case FETCH_OFFICE:
      return { ...state, office: action.payload };
    case DELETE_OFFICE:
      return {
        ...state,
        office: state.office.filter(office => office.officeId !== action.id)
      };

    default:
      return state;
  }
};
