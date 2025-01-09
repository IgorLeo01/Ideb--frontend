import { createSlice } from "@reduxjs/toolkit";
import secureLocalStorage from "react-secure-storage";

export interface AuthState {
  id: number | null;
  token: string;
  nome: string;
  roles: string[];
  perfilPreenchido: boolean;
}

const initialState: AuthState = {
  id: null,
  token: "",
  nome: "",
  roles: [],
  perfilPreenchido: false,
};

const authSlice: any = createSlice({
  name: "auth",
  initialState,
  reducers: {
    setCredentials: (state, action) => {
      console.log(action.payload);
      const authState = action.payload;
      console.log("auth", authState);
      secureLocalStorage.setItem("authState", authState);
      state.id = authState.id;
      state.nome = authState.nome;
      state.roles = authState.roles;
      state.perfilPreenchido = authState.perfilPreenchido;
      state.token = authState.token;
      console.log(state);
    },
    logout: (state) => {
      secureLocalStorage.clear();
      state.id = null;
      state.token = "";
      state.nome = "";
      state.roles = [];
      state.perfilPreenchido = false;
    },
    loadAuthStateFromLocalStorage: (state) => {
      console.log("Trying to get state");
      try {
        console.log("Trying to get state");
        const item = secureLocalStorage.getItem("authState");
        console.log("Item found:", item);
        if (item) {
          const stateRetrieved = item as AuthState;
          state.id = stateRetrieved.id;
          state.nome = stateRetrieved.nome;
          state.roles = stateRetrieved.roles;
          state.perfilPreenchido = stateRetrieved.perfilPreenchido;
          state.token = stateRetrieved.token;
        }
      } catch (error) {
        console.error(
          "Error retrieving auth state from secureLocalStorage:",
          error
        );
      }
    },
  },
});

export const { setCredentials, logout, loadAuthStateFromLocalStorage } =
  authSlice.actions;

export default authSlice.reducer;

export const selectCurrentAuthState = (state: {
  auth: AuthState;
}): AuthState | null => {
  if (state.auth.id !== null) {
    return state.auth;
  }

  try {
    const item = secureLocalStorage.getItem("authState");
    console.log(item);
    if (item) {
      return item as AuthState;
    }
  } catch (error) {
    console.error(
      "Error retrieving auth state from secureLocalStorage:",
      error
    );
  }
  console.log("Not found");
  return null;
};

export const selectCurrentToken = (state: {
  auth: AuthState;
}): string | null => {
  if (state.auth.token !== null && state.auth.token !== undefined) {
    return state.auth.token;
  }

  try {
    const item = secureLocalStorage.getItem("authState");
    if (item) {
      const retrievedAuthState = item as AuthState;
      return retrievedAuthState.token;
    }
  } catch (error) {
    console.error("Error retrieving token from secureLocalStorage:", error);
  }

  return null;
};

export const selectCurrentUserId = (state: {
  auth: AuthState;
}): number | null => {
  if (state.auth.token !== null && state.auth.token !== undefined) {
    return state.auth.id;
  }

  try {
    const item = secureLocalStorage.getItem("authState");
    if (item) {
      const retrievedAuthState = item as AuthState;
      return retrievedAuthState.id;
    }
  } catch (error) {
    console.error("Error retrieving token from secureLocalStorage:", error);
  }

  return null;
};
