import { IUser } from "../interfaces";

// Type TAuthAction
type TAuthAction = { type: "LOGIN"; payload: { user: IUser; token: string } } | { type: "LOGOUT" };

export { type TAuthAction };
