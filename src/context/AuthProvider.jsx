import { createContext, useContext, useState, startTransition, Suspense } from "react";
import { Loading } from 'src/components/ui/Loading';

const AuthContext = createContext(null);

export function useAuth() {
  return useContext(AuthContext);
}

export function AuthProvider({ children }) {
  const [user, setUser] = useState(() => localStorage.getItem("user") || null);

  const signin = (newUser, callback) => {    
    startTransition(() => {
      setUser(newUser);
      localStorage.setItem("user", newUser);
      callback();
    })
  }

  const signout = (callback) => {
    startTransition(() => {
      setUser(null);
      localStorage.removeItem("user");
      callback();
    })
  }

  const value = {
    user,
    signin,
    signout,
  }

  return (
    <Suspense fallback={<Loading />}>
      <AuthContext.Provider value={value}>
        { children }
      </AuthContext.Provider>
    </Suspense>
  )
}