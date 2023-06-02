import React, { useState } from "react";
interface Istate {
  user: {
    userEmail: string;
    password: string;
  };
}
const Login: React.FC = () => {
  const [state, setState] = useState<Istate>({
    user: {
      userEmail: "",
      password: "",
    },
  });
  const [error, setError] = useState("");

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>): void => {
    setState({
      user: {
        ...state.user,
        [event.target.name]: event.target.value,
      },
    });
  };
  const handleSubmit = (event: React.FormEvent<HTMLFormElement>): void => {
    event.preventDefault();
    if (state.user.userEmail.trim() === "") {
      setError("Email is required");
      return;
    }
   
    if (state.user.password.trim() === "") {
      setError("Password is required");
      return;
    }
    setError("");
    setState({
      user: {
        userEmail: "",
        password: "",
      },
    });
    console.log(state);
  };
  return (
    <form className="text-center " onSubmit={handleSubmit}>
      <input
        className="border w-80 rounded-lg pl-2 py-2 my-4"
        type="email"
        name="userEmail"
        value={state.user.userEmail}
        onChange={handleChange}
        placeholder="Enter your email"
        pattern=".+@gmail\.com"
      />
      <br />
      <input
        className="border w-80 rounded-lg pl-2 py-2 my-2"
        name="password"
        type="text"
        placeholder="Enter your Password"
        value={state.user.password}
        onChange={handleChange}
      />
      <p className="text-black/25 text-xs pl-56 font-semibold">
        Forgot Password?
      </p>
      <br />
      {error && (
        <p className="text-red-500 font-bold m-56 w-80 rounded-lg my-2">
          {error}
        </p>
      )}
      <button
        type="submit"
        className="w-80 rounded-lg font-bold bg-black text-white p-4 mt-10 shadow-2xl shadow-black/50"
        id="Submit"
      >
        Log In
      </button>
    </form>
  );
};

export default Login;
