import Link from "next/link";

const Navbar = () => {


  return (
    <div className="bg-blue-900 fixed flex justify-between items-center shadow-lg px-4 h-[80px] w-full z-10">
      <div className="">
        <h1 className="text-2xl font-bold text-white">Dental Clinic</h1>
      </div>
      <Link href="/crypto/demo-1">
        <button className="py-1 px-5 rounded-lg font-bold duration-200 hover:scale-105 border-blue-900 bg-blue-900 text-white">
          Logout
        </button>
      </Link>
    </div>
  );
};

export default Navbar;
