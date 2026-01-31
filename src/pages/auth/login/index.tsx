import { useForm } from "react-hook-form";
import { Button, Input, InputGroup, InputRightElement } from "@chakra-ui/react";
import { yupResolver } from "@hookform/resolvers/yup";
import { EyeClosed, EyeIcon } from "lucide-react";
import Logo from "../../../components/icons/logo";
import { useState } from "react";
import { useMutation } from "@tanstack/react-query";
import api from "../../../api";
import { loginSchema } from "../../../lib/utils/yupValidations";
import { useCustomToast } from "../../../hooks/useToast";
import { useNavigate } from "react-router-dom";
import { routes } from "../../../lib/constants/routes";
import { LoginResponse } from "../../../lib/types";
import { AxiosError, AxiosResponse } from "axios";
import loginImage from "../../../assets/login.png";
import { useAuth } from "../../../context/authContext";

interface LoginProps {
  email: string;
  password: string;
}

export default function Login() {
  const [show, setShow] = useState(false);
  const showToast = useCustomToast();
  const navigate = useNavigate();
  const { setUser } = useAuth();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<LoginProps>({ resolver: yupResolver(loginSchema) });

  const loginMutation = useMutation<
    AxiosResponse<LoginResponse>,
    AxiosError,
    LoginProps
  >({
    mutationFn: (data: LoginProps) => {
      return api.post<LoginResponse>("/auth/login", data);
    },
    onSuccess: (response) => {
      const res = response as AxiosResponse<LoginResponse>;
      const { id, firstName, lastName } = res.data.user;
      setUser({ id, firstName, lastName });
      showToast({
        title: "Welcome",
        description: "Login Successful",
        status: "success",
      });
      navigate(routes.index);
    },
    onError: (error) => {
      showToast({
        title: "Login Failed",
        description: `${error.message}`,
        status: "error",
      });
    },
  });

  const onSubmit = (data: LoginProps) => {
    loginMutation.mutate(data);
  };

  return (
    <div className="px-20 py-15 flex gap-20">
      <div className="w-full">
        <Logo
          className="mb-8 cursor-pointer"
          onClick={() => navigate(routes.index)}
        />
        <p className="font-bold text-4xl">Login</p>
        <form onSubmit={handleSubmit(onSubmit)} className="mt-10 w-[40vw]">
          <div className="mb-4">
            <label>E-mail</label>
            <Input borderColor="black" mt={2} {...register("email")} />
            {errors.email && (
              <p className="text-red-500">{errors.email.message}</p>
            )}
          </div>
          <div className="mb-6">
            <label>Password</label>
            <InputGroup size="md">
              <Input
                pr="4.5rem"
                type={show ? "text" : "password"}
                mt={2}
                borderColor="black"
                {...register("password")}
              />
              <InputRightElement width="4.5rem" mt={2}>
                <Button
                  bg="gray.300"
                  h="1.75rem"
                  size="sm"
                  onClick={() => setShow(!show)}
                >
                  {show ? <EyeIcon /> : <EyeClosed />}
                </Button>
              </InputRightElement>
            </InputGroup>
            {errors.password && (
              <p className="text-red-500">{errors.password.message}</p>
            )}
          </div>
          <p className="text-red-700 cursor-pointer">Forgot Password?</p>
          <Button
            type="submit"
            bg="#8DD3BB"
            width="full"
            mt={4}
            isLoading={loginMutation.isPending}
          >
            Login
          </Button>
        </form>
      </div>

      <div className="mr-20">
        <img src={loginImage} alt="login_img" className="w-[50vw]" />
      </div>
    </div>
  );
}
