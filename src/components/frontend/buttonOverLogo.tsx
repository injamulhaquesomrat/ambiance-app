import Image from "next/image";
import React, { ReactNode } from "react";

function ButtonOverLogo({
  children,
  loading,
}: {
  children: ReactNode;
  loading: boolean;
}) {
  return (
    <div className="group flex justify-center items-center mt-7 mb-5">
      <Image
        className="absolute opacity-10"
        height="10"
        width="120"
        src="/images/logo-sm-2.png"
        alt="logo"
      />
      <button
        disabled={loading}
        className="relative text-lightText text-[15px] tracking-[3px] opacity-60 py-5 group-hover:opacity-80 transition-all ease-in-out duration-300 font-semibold"
      >
        {children}
      </button>
    </div>
  );
}

export default ButtonOverLogo;
