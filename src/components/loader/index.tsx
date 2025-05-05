import Logo from "../icons/logo";

export default function Loader() {
	return (
		<div className="flex justify-center items-center h-screen">
			<div className="flex flex-col items-center">
				<img width={200} src="/src/assets/plane_2.gif" alt="gif" />
				<Logo className="mt-4" />
			</div>
		</div>
	);
}
