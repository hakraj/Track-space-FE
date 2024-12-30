import { ReactNode, createContext, useState, useEffect } from "react";

type IAuthContext = {
  authenticated: boolean;
  setAuthenticated: (newState: boolean) => void;
  user: { username: string; userID: string, token: string };
  setUser: (newState: { username: string; userID: string, token: string }) => void;
};

const AuthContext = createContext<IAuthContext>({
  authenticated: false,
  setAuthenticated: () => { },
  user: { username: "", userID: "", token: "" },
  setUser: () => { },
});

const AuthProvider = ({ children }: { children: ReactNode }) => {
  const [authenticated, setAuthenticated] = useState<boolean>(
    () => JSON.parse(sessionStorage.getItem("authenticated") || "false")
  );
  const [user, setUser] = useState<{ username: string; userID: string, token: string }>(() => {
    const storedUser = sessionStorage.getItem("user");
    return storedUser ? JSON.parse(storedUser) : { username: "", userID: "", token: "" };
  });

  useEffect(() => {
    sessionStorage.setItem("authenticated", JSON.stringify(authenticated));
  }, [authenticated]);

  useEffect(() => {
    sessionStorage.setItem("user", JSON.stringify(user));
  }, [user]);

  return (
    <AuthContext.Provider
      value={{ authenticated, setAuthenticated, user, setUser }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export { AuthContext, AuthProvider };
