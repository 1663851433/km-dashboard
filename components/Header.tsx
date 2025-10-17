import { FC } from "react";

import Logo from "@/components/Logo";

const Header: FC = () => {
  return (
    <div className="h-[70px] shadow-lg bg-[teal]/80">
      <Logo />
    </div>
  );
};

export default Header;
