import { ReactNode } from "react";
import { Link } from "react-router-dom";

type TProps = { children: ReactNode; to?: string | undefined };

const Button = ({ children, to = "#" }: TProps) => {
  return (
    <button className=" px-2 py-1.5 bg-teal-400 rounded-md text-white hover:bg-teal-300 duration-300">
      <Link to={to}>{children}</Link>
    </button>
  );
};

export default Button;
