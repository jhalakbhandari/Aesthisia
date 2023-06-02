import "./App.css";
import logo from "./assets/logo.png";
import LanguageSharpIcon from "@mui/icons-material/LanguageSharp";

import petals from "./assets/petals 1.png";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import backgroundImg from "./assets/Rectangle 15.png";
import Login from "./components/Login";
function App() {
  return (
    <div className="App">
      <div className="w-screen h-screen grid grid-cols-2 gap-4">
        {/* left box */}
        <div className="w-full h-full ">
          <div className=" flex relative justify-center items-center w-full h-full">
            <img src={backgroundImg} alt="bg" />
          </div>
          <div className="absolute text font-sans">
            <h1 className="text-white font-medium text-4xl tracking-wider">
              100% Uptime😎
            </h1>
            <h2 className="text-white/75 tracking-wider poppins text-2xl">
              Zero Infrastructure
              <br />
              Management
            </h2>
          </div>
          <div className="social flex gap-x-2 w-10 ">
            <LinkedInIcon className="text-white" fontSize="small" />
            <FacebookIcon className="text-white" fontSize="small" />
            <InstagramIcon className="text-white" fontSize="small" />
          </div>
          <div className="flex gap-1 bg-black absolute pagin h-1.5">
            <div className="bg-white w-5 rounded-lg"></div>
            <div className="bg-gray-500 w-2 rounded-full"></div>
            <div className="bg-gray-500 w-2 rounded-full"></div>
          </div>
          <div className="absolute logo">
            <img className=" " src={logo} alt="logo" />
          </div>
          <div className="absolute web flex gap-1">
            <LanguageSharpIcon className="text-white/75" fontSize="small" />
            <p className="leading-5 text-white/75 ">aesthisia.com</p>
          </div>
        </div>

        {/* right box */}
        <div className="w-full h-full text-center mt-32">
          <div className="flex justify-center">
            <img src={petals} alt="petals " />
          </div>
          <div className="flex gap-2 justify-center">
            <h1 className="text-black font-bold text-4xl">Welcome</h1>
            <h1 className="green font-bold text-4xl">Back!</h1>
          </div>
          <p className="text-black/50 font-semibold">Glad to see you, Again!</p>
          <div className="w-full text-center">
            <Login />
          </div>
          <div className="flex gap-1 justify-center mt-14 font-semibold">
            <p className="text-black/50">Don't have an account yet?</p>
            <p className="green">Sign Up</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
