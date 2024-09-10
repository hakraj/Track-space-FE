import { ReactNode, createContext, useState } from "react";

type IAuthContext = {
  authenticated: boolean,
  setAuthenticated: (newState: boolean) => void
}

const AuthContext = createContext<IAuthContext>({
  authenticated: false,
  setAuthenticated: () => { }
});

const AuthProvider = ({ children }: { children: ReactNode }) => {
  const [authenticated, setAuthenticated] = useState(false)
  return (
    <AuthContext.Provider value={{ authenticated, setAuthenticated }}>{children}</AuthContext.Provider>
  )
}

export { AuthProvider, AuthContext };