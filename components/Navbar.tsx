import Image from "next/image";
const Navbar = () => {
  return (
    <header className="bg-gray-200 text-blue-900 body-font">
      <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
        <a className="flex title-font font-medium items-center text-gray-900 ">
          <Image src={"/logo.svg"} width={150} height={30} alt="logo" />
        </a>
      </div>
    </header>
  );
};

export default Navbar;
