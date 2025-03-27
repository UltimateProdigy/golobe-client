import { useCookies } from "react-cookie";

export const useCookie = () => {
	const [cookies, setCookie, removeCookie] = useCookies(["accessToken"]);

	const getAccessToken = () => cookies.accessToken;

	const setAccessToken = (token: string) => {
		setCookie("accessToken", token, { path: "/", maxAge: 86400, sameSite: "strict" }); // Expires in 1 day (86400 seconds)
	};

	const removeAccessToken = () => {
		removeCookie("accessToken", { path: "/" });
	};

	return { getAccessToken, setAccessToken, removeAccessToken };
};
