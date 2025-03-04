import { RingLoader } from "react-spinners";
import Logo from "../icons/logo";

export default function Loader() {
	return (
		<div className="flex justify-center items-center h-screen">
			<div className="flex flex-col items-center">
				<RingLoader color="#8DD3BB" />
				<Logo className="mt-4" />
			</div>
		</div>
	);
}
