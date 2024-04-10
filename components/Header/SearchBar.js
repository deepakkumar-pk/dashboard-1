import { CiSearch } from "react-icons/ci";
import { MdKeyboardCommandKey } from "react-icons/md";

const SearchBar = () => {
  return (
    <div className="hidden rounded-lg bg-gray-100 px-2 py-3 sm:block">
      <form action="https://formbold.com/s/unique_form_id" method="POST">
        <div className="relative">
          <button className="absolute left-0 top-1/2 -translate-y-1/2">
            <CiSearch size={22} className="text-gray-800" />
          </button>

          <input
            type="text"
            placeholder="Search"
            className=" w-full bg-transparent pl-9 pr-4 text-sm font-medium focus:outline-none xl:w-[52.625rem]"
          />
          <button className="absolute right-0 top-1/2 flex -translate-y-1/2 items-center justify-center rounded-md bg-white px-2 py-1">
            <MdKeyboardCommandKey size={16} className="text-gray-800" />
            <span className="pl-1 font-medium text-gray-800">F</span>
          </button>
        </div>
      </form>
    </div>
  );
};

export default SearchBar;
