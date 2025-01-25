import { Context, createContext, Reducer, useContext, useEffect, useReducer } from "react";
import { IAuthContext, IAuthProviderProps, IInitialStateAuth, IUser } from "../interfaces";
import { TAuthAction } from "../types";
import { jwtDecode } from "jwt-decode";

const AuthContext: Context<any> = createContext<IAuthContext | null>(null);

const initialStateAuth: IInitialStateAuth = {
  user: null,
  token: null,
};

function authReducer(state: IInitialStateAuth, action: TAuthAction): IInitialStateAuth {
  switch (action.type) {
    case "LOGIN":
      return {
        ...state,
        user: action.payload.user,
        token: action.payload.token,
      };
    case "LOGOUT":
      return {
        ...state,
        user: null,
        token: null,
      };
  }
}

function AuthProvider({ children }: IAuthProviderProps): JSX.Element {
  const [state, dispatch] = useReducer<Reducer<IInitialStateAuth, TAuthAction>>(authReducer, initialStateAuth);

  function login(user: IUser, token: string): void {
    dispatch({ type: "LOGIN", payload: { user, token } });
  }

  function logout(): void {
    localStorage.removeItem("token");
    dispatch({ type: "LOGOUT" });
  }

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (token) {
      const decodedToken = jwtDecode<{ firstName: string; lastName: string }>(token);
      if (decodedToken && decodedToken.firstName && decodedToken.lastName) {
        const user = {
          firstName: decodedToken.firstName,
          lastName: decodedToken.lastName,
        };
        dispatch({ type: "LOGIN", payload: { user, token } });
      }
    }
  }, []);

  return <AuthContext.Provider value={{ state, login, logout }}>{children}</AuthContext.Provider>;
}

function useAuth(): IAuthContext | null {
  const authContext: IAuthContext | null = useContext<IAuthContext | null>(AuthContext);
  if (authContext === undefined) {
    throw new Error("AuthContext was used outside AuthProvider.");
  }
  return authContext;
}

export default AuthProvider;
export { useAuth };
