import React, {
  Dispatch,
  SetStateAction,
  createContext,
  useContext,
  useState,
} from "react";

import { signOut } from "firebase/auth";
import { auth } from "../firebase";

interface UserInterface {
  firstName: string;
  surname: string;
  companyName: string;
  contactNumber: string;
  email: string;
  id: string;
}

interface UserContextInterface {
  isLogged: boolean;
  setIsLogged: Dispatch<SetStateAction<boolean>>;
  user: UserInterface | null;
  setUser: Dispatch<SetStateAction<null | UserInterface>>;
}

const UserContext = createContext<UserContextInterface | null>(null);

interface UserProviderProps {
  children: JSX.Element;
}

const UserProvider = ({ children }: UserProviderProps) => {
  const [isLogged, setIsLogged] = useState<boolean>(false);
  const [user, setUser] = useState<null | UserInterface>(null);

  return (
    <UserContext.Provider value={{ isLogged, setIsLogged, user, setUser }}>
      {children}
    </UserContext.Provider>
  );
};

export const useUser = () => {
  const contextData = useContext(UserContext);

  if (!contextData)
    throw new Error("No UserContext.Provider found when calling useUser.");

  const { isLogged, setIsLogged, user, setUser } = contextData;

  const login = (user: any) => {
    setIsLogged(true);
    setUser(user);
  };

  const logout = async () => {
    await signOut(auth);
    setIsLogged(false);
    setUser(null);

    window.location.href = "/";
  };

  return { isLogged, user, login, logout };
};

export default UserProvider;
