import { Input, Button } from "../components/Components";
import { BsGoogle } from "react-icons/bs";

function Register() {
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
          <Input type="text" placeholder="Email" />
          <Input type="password" placeholder="Password" />
          <Input type="password" placeholder="Confirm Password" />
        </div>
        <div className="flex">
          <Button text="Signin" width={"[20rem]"} height={14} textSize="lg" />
        </div>
      </div>
      {/* <div className="flex-1 md:flex hidden"></div> */}
    </div>
  );
}

export default Register;
