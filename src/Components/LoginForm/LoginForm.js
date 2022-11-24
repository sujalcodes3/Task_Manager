import React from "react";
import Card from "../master_UI/Card";
import InputBox from "../master_UI/InputBox";

const LoginForm = (props) => {
  return (
    <Card className="w-80 h-96 flex justify-around align-middle  flex-col m-auto mt-28 bg-gradient-to-r from-pink-500 via-red-500 to-yellow-500">
      <div className="text-center pt-5 text-3xl font-bold text-white drop-shadow-md">
        Sign in
      </div>
      <div className="flex flex-col">
        <InputBox placeholder="e.g. mike123" for="username" label="Username" />
        <InputBox placeholder="******" for="password" label="Password" />
      </div>
      <button className="mb-3 text-black font-bold bg-white w-32 ml-40 rounded-md p-2 shadow-sm shadow-sky-200 hover:bg-pink-800 hover:text-white hover:shadow-lg">
        Go!
      </button>
    </Card>
  );
};

export default LoginForm;
