import * as yup from "yup";

export const loginSchema = yup.object().shape({
	email: yup
		.string()
		.email("Invalid email address")
		.required("Email is required"),
	password: yup
		.string()
		.min(6, "Password must be at least 6 characters")
		.required("Password is required"),
});

export const registerSchema = yup.object().shape({
	email: yup
		.string()
		.email("Invalid email address")
		.required("Email is required"),
	password: yup
		.string()
		.min(6, "Password must be at least 6 characters")
		.required("Password is required"),
	firstName: yup.string().required("First Name is required"),
	lastName: yup.string().required("Last Name is required"),
	phoneNumber: yup.string().required("Phone Number is required"),
});
