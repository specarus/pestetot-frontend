"use client";

import { createContext, useState } from "react";
import { User } from "../types/User";

type ILoginUser = {
  email: string;
  password: string;
};

interface ModalContextProps {
  user: User;
  confirmPassword: string;
  loginUser: ILoginUser;
  focus1: boolean;
  focus2: boolean;
  focus3: boolean;
  focus4: boolean;
  loginFocus1: boolean;
  loginFocus2: boolean;
  setLoginFocus1: (value: boolean) => void;
  setLoginFocus2: (value: boolean) => void;
  setFocus1: (value: boolean) => void;
  setFocus2: (value: boolean) => void;
  setFocus3: (value: boolean) => void;
  setFocus4: (value: boolean) => void;
  changeUsername: (ev: any) => void;
  changeEmail: (ev: any) => void;
  changePassword: (ev: any) => void;
  changeConfirmPassword: (ev: any) => void;
  resetUser: () => void;
  resetLoginUser: () => void;
  resetFocuses: () => void;
  resetLoginFocuses: () => void;
  changeLoginEmail: (ev: any) => void;
  changeLoginPassword: (ev: any) => void;
}

export const ModalContext = createContext<ModalContextProps>(null!);

const ModalContextProvider = ({ children }: { children: React.ReactNode }) => {
  const [user, setUser] = useState({} as User);
  const [confirmPassword, setConfirmPassword] = useState("");

  const [loginUser, setLoginUser] = useState({} as ILoginUser);

  const [focus1, setFocus1] = useState(false);
  const [focus2, setFocus2] = useState(false);
  const [focus3, setFocus3] = useState(false);
  const [focus4, setFocus4] = useState(false);

  const [loginFocus1, setLoginFocus1] = useState(false);
  const [loginFocus2, setLoginFocus2] = useState(false);

  function resetUser() {
    setUser((prev) => {
      return {
        ...prev,
        username: "",
        email: "",
        password: "",
      };
    });
    setConfirmPassword("");
  }

  function resetLoginUser() {
    setLoginUser((prev) => {
      return { ...prev, email: "", password: "" };
    });
  }

  function resetFocuses() {
    setFocus1(false);
    setFocus2(false);
    setFocus3(false);
    setFocus4(false);
  }

  function resetLoginFocuses() {
    setLoginFocus1(false);
    setLoginFocus2(false);
  }

  function changeUsername(ev: any) {
    setUser((prev) => {
      return { ...prev, username: ev.target.value };
    });
  }

  function changeEmail(ev: any) {
    setUser((prev) => {
      return { ...prev, email: ev.target.value };
    });
  }

  function changePassword(ev: any) {
    setUser((prev) => {
      return { ...prev, password: ev.target.value };
    });
  }

  function changeConfirmPassword(ev: any) {
    setConfirmPassword(ev.target.value);
  }

  function changeLoginEmail(ev: any) {
    setLoginUser((prev) => {
      return { ...prev, email: ev.target.value };
    });
  }

  function changeLoginPassword(ev: any) {
    setLoginUser((prev) => {
      return { ...prev, password: ev.target.value };
    });
  }

  return (
    <ModalContext.Provider
      value={{
        user,
        confirmPassword,
        loginUser,
        focus1,
        focus2,
        focus3,
        focus4,
        loginFocus1,
        loginFocus2,
        setLoginFocus1,
        setLoginFocus2,
        setFocus1,
        setFocus2,
        setFocus3,
        setFocus4,
        changeUsername,
        changeEmail,
        changePassword,
        changeConfirmPassword,
        resetUser,
        resetLoginUser,
        resetFocuses,
        resetLoginFocuses,
        changeLoginEmail,
        changeLoginPassword,
      }}
    >
      {children}
    </ModalContext.Provider>
  );
};

export default ModalContextProvider;
