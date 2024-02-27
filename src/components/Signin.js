import { useState, forwardRef } from 'react';
import TextInput from "./TextInput";

const Signin = forwardRef(function Signin({ onSubmit }, ref) {
  const [inputs, setInputs ] = useState({
    username: "",
    password: "",
  });

  const onChange = (event) => {
    setInputs((prevState) => ({
      ...prevState,
      [event.target.name]: event.target.value
    }));
  };

  return (
    <div>
      <h1 className="header text-3xl font-bold">Auth</h1>
      <form className="form shadow"
        onChange={onChange}
        onSubmit={(e) => onSubmit(e, inputs)}
        ref={ref}
      >
        <TextInput
          name="username"
          type="text"
          label="Name"
          required
          placeholder="Enter your name"
          size="md"
          radius="xs"
        />

        <TextInput
          name="password"
          type="password"
          label="Password"
          required
          placeholder="Enter your password"
          size="md"
          radius="xs"
        />

        <button type="submit"
          className="text-center py-2 px-5 bg-rm-yellow rounded hover:opacity-80"
        >
          Sign in
        </button>
      </form>    
    </div>
  )
});

export default Signin;