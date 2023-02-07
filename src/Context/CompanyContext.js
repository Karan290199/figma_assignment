import { createContext, useReducer } from "react";

export const CompanyContext = createContext();

export const companyReducer = (state, action) => {
  switch (action.type) {
    case "SET_COMPANY":
      return {
        companies: action.payload
      };
    case "GET_COMPANY": {
      return {
        companies: state.companies.filter(
          (company) => company.id === action.payload.id
        )
      };
    }
    case "ADD_COMPANY": {
      return {
        companies: [...state.companies, action.payload]
      };
    }
    default:
      return state;
  }
};

export const CompanyContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(companyReducer, { companies: null });

  return (
    <CompanyContext.Provider value={{ ...state, dispatch }}>
      {children}
    </CompanyContext.Provider>
  );
};
