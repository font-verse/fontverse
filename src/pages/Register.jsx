import { Input, Button } from "../components/Components";
import { BsGoogle } from "react-icons/bs";
import { useState } from "react";
import axios from "axios";

function Register() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const handleSignUp = async () => {
    const user = {
      email: email,
      password: password,
    };

    if (confirmPassword == password) {
      const signUp = await axios.post(
        "https://api-fontverse.herokuapp.com/api/user/auth/signin",
        user
      );
      console.log(signUp);
    }
  };

  return (
    // flex justify-between items-center
    <div className="min-h-screen flex text-light gradient-3">
      <div className=" flex-1 flex flex-col items-center justify-evenly py-20 md:py-5">
        <h1 className="font-[Mattone] text-5xl text-red">SignIn</h1>
        <div>
          <button className="w-[20rem] h-12 bg-white text-dark-200 hover:bg-slate-300 flex items-center justify-center rounded-lg">
            <BsGoogle fontSize={20} className="mr-5" />
            Signin with Google
          </button>
        </div>
        <div className="flex flex-col">
          <Input type="text" placeholder="Email" setInput={setEmail} />
          <Input
            type="password"
            placeholder="Password"
            setInput={setPassword}
          />
          <Input
            type="password"
            placeholder="Confirm Password"
            setInput={setConfirmPassword}
          />
        </div>
        <div className="flex">
          <Button
            text="Signin"
            width={"[20rem]"}
            height={14}
            textSize="lg"
            func={handleSignUp}
          />
        </div>
      </div>
      {/* <div className="flex-1 md:flex hidden"></div> */}
    </div>
  );
}

export default Register;
