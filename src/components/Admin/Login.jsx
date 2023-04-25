import React from "react";
import { toast } from "react-hot-toast";
const Login = () => {
  const [password, setPassword] = React.useState("");

  const onLogin = (e) => {
    e.preventDefault();
    if (password === "sepm") {
      localStorage.setItem("slot_pass", password);
      window.location.reload();
    } else {
      toast.error("Wrong Password");
    }
  };

  return (
    <div className="flex h-screen">
      <div className="m-auto grid place-content-center">
        <h1 className="lg:text-4xl text-2xl font-bold text-center">
          Slot Booking
        </h1>
        <input
          onChange={(e) => setPassword(e.target.value)}
          placeholder="Password"
          className="w-full mt-10 border-primary pr-12 pl-3 py-2 text-gray-500 bg-transparent outline-none border shadow-sm rounded-lg"
        />
        <a
          onClick={onLogin}
          className="cursor-pointer text-center mt-5 inline-block rounded border border-primary bg-primary px-12 py-3 text-sm font-medium text-white hover:bg-transparent hover:text-primary focus:outline-none focus:ring"
        >
          Login
        </a>
      </div>
    </div>
  );
};

export default Login;
