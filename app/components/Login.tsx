import CustomButton from "./CustomButton";
import Input from "./Input";
import logo from "../assets/logoPV.png";
import image from "../assets/imagePV.png";
import { useRouter } from "next/navigation";
import Image from "next/image";

const Login = () => {
  const router = useRouter();

  const handleLogin = (): void => {
    router.push("/");
  };

  return (
    <div className="flex h-screen">
      <div className="flex flex-col justify-center items-center w-1/2 px-16 space-y-8">
        <Image
          src={logo}
          alt="logo"
          className="h-[46px] w-[46px] rounded-full mb-8 absolute left-24 top-16"
        />
        <h1 className="text-4xl font-medium text-white">
          Welcome back to <span className="text-[#A600FC]">OvaDrive !</span>
        </h1>
        <div className="w-full">
          <Input
            id="email"
            label="Email"
            placeholder="Eg. xyz@gmail.com"
            type="email"
          />
          <Input
            id="password"
            label="Password"
            placeholder="minimum 8 characters"
            type="password"
          />
          <div className="flex justify-end mt-2 relative right-36">
            <p className="text-sm font-normal text-[#A4A4A4] cursor-pointer">
              Forgot Password?
            </p>
          </div>
        </div>
        <CustomButton
          className="font-poppins text-sm w-[60%] h-[56px] text-white rounded-[32px] bg-[#A600FC] mt-8"
          onClick={handleLogin}
          text="Login"
        />
        <div className="flex justify-start mt-4">
          <p className="text-sm font-normal text-[#A4A4A4] cursor-pointer">
            Don&apos;t have an account?{" "}
            <span className="text-[#A600FC] underline">Sign Up</span>
          </p>
        </div>
      </div>

      <div className="w-1/2">
        <Image
          src={image}
          alt="Decorative Background"
          className="h-full w-full object-cover"
        />
      </div>
    </div>
  );
};

export default Login;
