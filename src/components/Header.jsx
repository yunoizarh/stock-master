import { Bell, Search, Share2 } from "lucide-react";

const Header = () => {
  return (
    <header className="md:flex items-center justify-between md:px-6 px-3 py-2 space-y-3 rounded-md shadow-sm bg-white">
      {/* Greeting */}
      <h2 className="text-lg font-semibold">Hello Maimunah(Admin)</h2>

      {/* Search Bar */}
      <div className="flex items-center gap-2 flex-1 max-w-lg md:mx-6">
        <div className="relative w-full">
          <span className="absolute inset-y-0 left-2 flex items-center text-gray-500">
            <Search className="h-5 w-5" />
          </span>
          <input
            type="text"
            placeholder="Search"
            className="w-full pl-10 pr-10 py-2 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          {/* <span className="absolute inset-y-0 right-2 flex items-center text-gray-500 text-sm">
            ⌘K
          </span> */}
        </div>
      </div>

      {/* Icons + Avatar */}
      <div className="hidden md:flex items-center gap-4">
        <div className="relative">
          <Bell className="h-6 w-6 text-gray-700" />
          <span className="absolute top-0 right-0 block h-2 w-2 rounded-full bg-red-500"></span>
        </div>

        <Share2 className="h-6 w-6 text-gray-700" />

        {/* Avatar */}
        {/* <img
          src="https://randomuser.me/api/portraits/women/44.jpg"
          alt="User"
          className="h-8 w-8 rounded-full object-cover"
        /> */}
      </div>
    </header>
  );
};

export default Header;
