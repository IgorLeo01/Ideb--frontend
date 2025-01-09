import { createContext, useContext, useReducer } from 'react';

const NavbarContext = createContext();

const initialState = {
  isMobileMenuOpen: false,
  value: 'zero',
  isMobileView: false,
};

const navbarReducer = (state, action) => {
  switch (action.type) {
    case 'SET_NAVBAR_STATE':
      return {
        ...state,
        ...action.payload,
      };
    default:
      return state;
  }
};

const NavbarProvider = ({ children }) => {
  const [state, dispatch] = useReducer(navbarReducer, initialState);

  return (
    <NavbarContext.Provider value={{ state, dispatch }}>
      {children}
    </NavbarContext.Provider>
  );
};

const useNavbar = () => {
  const context = useContext(NavbarContext);
  if (!context) {
    throw new Error('erro no provider');
  }
  return context;
};

export { NavbarProvider, useNavbar };
