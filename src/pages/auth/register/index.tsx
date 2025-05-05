import { useForm } from "react-hook-form";
import { Button, Input, InputGroup, InputRightElement } from "@chakra-ui/react";
import { yupResolver } from "@hookform/resolvers/yup";
import { EyeClosed, EyeIcon } from "lucide-react";
import Logo from "../../../components/icons/logo";
import { useState } from "react";
import { useMutation } from "@tanstack/react-query";
import api from "../../../api";
import { registerSchema } from "../../../lib/utils/yupValidations";
import { useCustomToast } from "../../../hooks/useToast";
import { useNavigate } from "react-router-dom";
import { routes } from "../../../lib/constants/routes";
import { AxiosError, AxiosResponse } from "axios";

interface IRegister {
	firstName: string
	lastName: string
	email: string
	phoneNumber: string
	password: string
}

export default function Register() {
	const [show, setShow] = useState(false);
	const handleClick = () => setShow(!show);
	const showToast = useCustomToast();
	const navigate = useNavigate();

	const {
		register,
		handleSubmit,
		formState: { errors },
	} = useForm<IRegister>({ resolver: yupResolver(registerSchema) });

	const createUser = useMutation<AxiosResponse, AxiosError, IRegister>({
		mutationFn: (data) => {
			return api.post<IRegister>("/register", data);
		},
		onSuccess: () => {
			showToast({
				title: "Welcome",
				description: "Registration Successful, Please Login",
				status: "success",
			});
			navigate(routes.auth.login);
		},
		onError: (error) => {
			showToast({
				title: "Registration Failed",
				description: `${error.response?.data || error?.message}`,
				status: "error",
			});
		},
	});

	const onSubmit = (data: IRegister) => {
		createUser.mutate(data);
	};

	return (
		<div className="min-h-screen flex flex-col md:flex-row items-center p-6 bg-gray-50">
			<div className="md:w-1/2 flex justify-center mb-8 md:mb-0">
				<img
					src="/src/assets/register.png"
					alt="register_img"
					className="w-[25vw] max-w-md md:max-w-lg"
				/>
			</div>

			<div className="md:w-1/2 w-full max-w-md">
				<Logo
					className="mb-4 cursor-pointer"
					onClick={() => navigate(routes.index)}
				/>
				<p className="font-bold text-2xl pb-4">Sign Up</p>
				<form onSubmit={handleSubmit(onSubmit)} className="w-full">
					<div>
						<div className="mb-2">
							<label className="block text-sm font-medium mb-1">
								First Name
							</label>
							<Input
								borderColor="black"
								{...register("firstName")}
							/>
							{errors.firstName && (
								<p className="text-red-500 text-sm mt-1">
									{errors.firstName.message}
								</p>
							)}
						</div>
						<div className="mb-2">
							<label className="block text-sm font-medium mb-1">
								Last Name
							</label>
							<Input
								borderColor="black"
								{...register("lastName")}
							/>
							{errors.lastName && (
								<p className="text-red-500 text-sm mt-1">
									{errors.lastName.message}
								</p>
							)}
						</div>
					</div>
					<div>
						<div className="mb-2">
							<label className="block text-sm font-medium mb-1">
								E-mail
							</label>
							<Input borderColor="black" {...register("email")} />
							{errors.email && (
								<p className="text-red-500 text-sm mt-1">
									{errors.email.message}
								</p>
							)}
						</div>
						<div className="mb-2">
							<label className="block text-sm font-medium mb-1">
								Phone Number
							</label>
							<Input
								borderColor="black"
								{...register("phoneNumber")}
							/>
							{errors.phoneNumber && (
								<p className="text-red-500 text-sm mt-1">
									{errors.phoneNumber.message}
								</p>
							)}
						</div>
					</div>
					<div className="mb-3">
						<label className="block text-sm font-medium mb-1">
							Password
						</label>
						<InputGroup>
							<Input
								pr="4.5rem"
								type={show ? "text" : "password"}
								borderColor="black"
								{...register("password")}
							/>
							<InputRightElement width="4.5rem">
								<Button
									bg="white"
									h="1.75rem"
									size="sm"
									onClick={handleClick}
								>
									{show ? <EyeIcon /> : <EyeClosed />}
								</Button>
							</InputRightElement>
						</InputGroup>
						{errors.password && (
							<p className="text-red-500 text-sm mt-1">
								{errors.password.message}
							</p>
						)}
					</div>
					<p className="text-red-700 text-sm cursor-pointer mb-4">
						Forgot Password?
					</p>
					<Button
						type="submit"
						bg="#8DD3BB"
						width="full"
						mt={4}
						isLoading={createUser.isPending}
						_hover={{ bg: "#7cc1a9" }}
					>
						Sign Up
					</Button>
				</form>
			</div>
		</div>
	);
}
