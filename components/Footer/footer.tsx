import Image from "next/image";

export const Footer = () => {
  return (
    <footer className="flex flex-col md:flex-row py-20 px-8 justify-center items-center gap-20 bg-[#e9e0f9]">
      <Image
        src="/images/logo.png"
        alt="Landscape picture"
        width={280}
        height={200}
      />
      <p className="text-gray-600 text-center text-lg md:text-left">
        ©2024 e-learn.co <br />
        e-learn is a registered trademark of e-learn.co
      </p>
    </footer>
  );
};