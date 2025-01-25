import { Dispatch, MouseEvent, ReactNode, SetStateAction } from "react";
import { FieldErrors, UseFormRegister } from "react-hook-form";
import { TFormInputs } from "../pages/RegisterPage/RegisterPage";

// Interface IMainLayoutProps
interface IMainLayoutProps {
  children: ReactNode;
}

// Interface INavLayoutProps
interface INavLayoutProps {
  setIsModalOpen: Dispatch<SetStateAction<boolean>>;
}

// Interface IButtonProps
interface IButtonProps {
  type:
    | "outline-blue"
    | "solid-blue"
    | "solid-blue-block"
    | "solid-red"
    | "outline-default-block"
    | "solid-blue-icon"
    | "outline-white";
  isSubmitting?: boolean;
  onClick?(e?: MouseEvent<HTMLButtonElement>): void;
  children: ReactNode;
}

// Interface IAlertProps
interface IAlertProps {
  type: "success" | "error";
  children: ReactNode;
}

// Interface IModalProps
interface IModalProps {
  setIsOpenModal: Dispatch<SetStateAction<boolean>>;
}

// Interface ISignOutModalProps
interface ISignOutModalProps {
  setIsModalOpen: Dispatch<SetStateAction<boolean>>;
}

// Interface IInputProps
interface IInputProps {
  type: "email" | "firstName" | "lastName" | "password" | "confirmPassword";
  register: UseFormRegister<TFormInputs>;
  errors: FieldErrors<TFormInputs>;
}

// Interface IAuthContext
interface IAuthContext {
  state: IInitialStateAuth;
  login(user: IUser, token: string): void;
  logout(): void;
}

// Interface IAuthContext
interface IInitialStateAuth {
  user: IUser | null;
  token: string | null;
}

// Interface IUser
interface IUser {
  firstName: string;
  lastName: string;
}

// Interface IAuthProviderProps
interface IAuthProviderProps {
  children: ReactNode;
}

export {
  type IMainLayoutProps,
  type INavLayoutProps,
  type IButtonProps,
  type IAlertProps,
  type IModalProps,
  type ISignOutModalProps,
  type IInputProps,
  type IAuthContext,
  type IInitialStateAuth,
  type IUser,
  type IAuthProviderProps,
};
