import logoIcon from "../../assets/golobe_logo.png";

interface ILogo {
  className?: string;
  onClick?: () => void;
}
export default function Logo({ className, onClick }: ILogo) {
  return (
    <div className={className} onClick={onClick}>
      <img src={logoIcon} alt="golobe_logo" />
    </div>
  );
}
