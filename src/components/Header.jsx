import { Bell, Search, Share2 } from "lucide-react";

const Header = () => {
  return (
    <header className="md:flex items-center justify-between md:px-6 px-3 py-1 space-y-3 rounded-md shadow-sm bg-white">
      <h2 className="font-bold text-2xl ">Stock Master</h2>

      <div className="hidden md:flex items-center gap-4">
        <div className="relative">
          <Bell className="h-6 w-6 text-gray-700" />
          <span className="absolute top-0 right-0 block h-2 w-2 rounded-full bg-red-500"></span>
        </div>

        <Share2 className="h-6 w-6 text-gray-700" />

        {/* Avatar */}
        <div className="flex items-center gap-2">
          <div>
            {" "}
            <img
              src="https://randomuser.me/api/portraits/women/44.jpg"
              alt="User"
              className="h-12 w-12 rounded-full object-cover"
            />
          </div>
          <div className="title ">
            <h2 className=" font-semibold">Hello Maimunah</h2>
            <p className="text-xs font-semibold">Admin</p>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
