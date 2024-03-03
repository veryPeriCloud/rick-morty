import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "~/context/AuthProvider";

export function AuthStatus() {
  const auth = useAuth();
  const navigate = useNavigate();

  const handleSignOut = () => {
    auth.signout(() => {
      navigate("/")
    })
  }

  if (auth.user === null) {
    return <Link to="/login" className="bg-rm-yellow rounded px-3 py-1 font-medium">Sign in</Link>
  }

  return (
    <div className="flex items-center gap-2">
      <div className="text-rm-yellow font-bold">
        {auth.user}
      </div>
      
      <button
        className="bg-rm-yellow rounded px-3 py-1 font-medium" 
        onClick={handleSignOut}
      >Sign out</button>
    </div>
  )
}