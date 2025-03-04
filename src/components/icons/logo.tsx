interface ILogo {
	className?: string;
	onClick?: () => void;
}
export default function Logo({ className, onClick }: ILogo) {
	return (
		<div className={className} onClick={onClick}>
			<img src="/src/assets/golobe_logo.png" alt="golobe_logo" />
		</div>
	);
}
