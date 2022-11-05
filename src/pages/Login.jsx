import { Input, Button } from "../components/Components";
import { BsGoogle } from "react-icons/bs";
import { Link } from "react-router-dom";

function Login() {
  return (
    // flex justify-between items-center
    <div className="min-h-screen h-auto flex text-light gradient-4">
      <div className="flex-1 flex flex-col items-center justify-evenly py-20 md:py-5">
        <h1 className="font-[Mattone] text-5xl text-red">Login</h1>
        <div>
          <button className="w-[20rem] h-12 bg-white text-dark-200 hover:bg-slate-300  flex items-center justify-center rounded-lg">
            <BsGoogle fontSize={20} className="mr-5" />
            Signin with Google
          </button>
        </div>
        <div className="flex flex-col">
          <Input type="text" placeholder="Email" />
          <Input type="password" placeholder="Password" />
          <a>
            <p className="mt-3 text-sm text-blue-600">Forgot password?</p>
          </a>
        </div>
        <div className="flex flex-col ">
          <Button text="Login" width={"[20rem]"} height={14} textSize="lg" />

          <p className="mt-3 text-sm text-blue-600">
            I have an account{" "}
            <Link to="/register" className=" underline">
              Signin
            </Link>
          </p>
        </div>
      </div>
      {/* <div className="flex-1 hidden md:flex"></div> */}
    </div>
  );
}

export default Login;
