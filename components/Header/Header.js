import Logo from "./Logo";
import SearchBar from "./SearchBar";
import DropdownMessage from "./DropdownMeesage";
import DropdownNotification from "./DropdownNotification";
import DropdownUser from "./DropdownUser";

const Header = (props) => {
  return (
    <header className="sticky top-0 z-40 flex w-full bg-white border-b border-gray/25">
      <div className="flex flex-grow items-center justify-between shadow-2 md:px-6 2xl:px-6 ">
        {/* Logo Component */}
        <div className="flex items-center gap-2 sm:gap-4">
          <button
            aria-controls="sidebar"
            onClick={(e) => {
              e.stopPropagation();
              props.setSidebarOpen(!props.sidebarOpen);
            }}
            className="z-99999 block rounded-sm border border-stroke bg-white p-1.5 shadow-sm dark:border-strokedark dark:bg-boxdark lg:hidden"
          >
            <span className="relative block h-5.5 w-5.5 cursor-pointer">
              <span className="du-block absolute right-0 h-full w-full">
                <span
                  className={`relative left-0 top-0 my-1 block h-0.5 w-0 rounded-sm bg-black delay-[0] duration-200 ease-in-out dark:bg-white ${
                    !props.sidebarOpen && "!w-full delay-300"
                  }`}
                ></span>
                <span
                  className={`relative left-0 top-0 my-1 block h-0.5 w-0 rounded-sm bg-black delay-150 duration-200 ease-in-out dark:bg-white ${
                    !props.sidebarOpen && "delay-400 !w-full"
                  }`}
                ></span>
                <span
                  className={`relative left-0 top-0 my-1 block h-0.5 w-0 rounded-sm bg-black delay-200 duration-200 ease-in-out dark:bg-white ${
                    !props.sidebarOpen && "!w-full delay-500"
                  }`}
                ></span>
              </span>
              <span className="absolute right-0 h-full w-full rotate-45">
                <span
                  className={`absolute left-2.5 top-0 block h-full w-0.5 rounded-sm bg-black delay-300 duration-200 ease-in-out dark:bg-white ${
                    !props.sidebarOpen && "!h-0 !delay-[0]"
                  }`}
                ></span>
                <span
                  className={`delay-400 absolute left-0 top-2.5 block h-0.5 w-full rounded-sm bg-black duration-200 ease-in-out dark:bg-white ${
                    !props.sidebarOpen && "!h-0 !delay-200"
                  }`}
                ></span>
              </span>
            </span>
          </button>
          <Logo />
        </div>
        <div className="flex  items-center justify-between gap-56">
          {/* SearchBar Component */}
          <SearchBar />

          {/* UserDropdown Component */}
          <div className="flex items-center gap-x-4">
            <ul className="flex items-center gap-x-4">
              <DropdownNotification />
              <DropdownMessage />
            </ul>
            <DropdownUser />
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
