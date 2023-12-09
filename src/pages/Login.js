import { useLocation, useNavigate } from "react-router-dom";
import { useRef } from "react";
import { useAuth } from "../context/AuthProvider";
import Signin from "../components/Signin";

export function Login() {
  const navigate = useNavigate();
  const location = useLocation();
  const auth = useAuth();
  const from = location.state?.from || "/";
  const formRef = useRef(null);

  const onSubmit = (event, arg) =>{
    event.preventDefault();

    const username = arg.username;
    auth.signin(username, () => {
      navigate(from, {
        replace: true,
      })
    })
  }

  return (
    <div className="login-page">
      <div className="main-container pt-[72px] flex flex-col items-center">
      <Signin
        ref={formRef}
        onSubmit={onSubmit}
      />
      </div>
    </div>
  )
}