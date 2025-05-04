import { FC } from "react";
import Logo from "@/components/Logo";

const Header: FC = () => {
  return (
    <div className="h-[70px] bg-white/90 shadow-lg">
      <Logo />
    </div>
  );
};

export default Header;
