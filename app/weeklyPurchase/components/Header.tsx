import React, { useMemo } from "react";
import Logo from "@/components/Logo";
import dayjs from "dayjs";

const Header: React.FC = () => {
  return (
    <div className="flex justify-between items-center mb-4">
      <Logo />
    </div>
  );
};

export default Header;
