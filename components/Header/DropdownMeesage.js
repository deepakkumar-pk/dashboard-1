import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { BsUniversalAccessCircle } from "react-icons/bs";

const DropdownMessage = () => {
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [notifying, setNotifying] = useState(true);

  const trigger = useRef(null);
  const dropdown = useRef(null);

  // close on click outside
  useEffect(() => {
    const clickHandler = ({ target }) => {
      if (!dropdown.current) return;
      if (
        !dropdownOpen ||
        dropdown.current.contains(target) ||
        trigger.current.contains(target)
      )
        return;
      setDropdownOpen(false);
    };
    document.addEventListener("click", clickHandler);
    return () => document.removeEventListener("click", clickHandler);
  });

  // close if the esc key is pressed
  useEffect(() => {
    const keyHandler = ({ keyCode }) => {
      if (!dropdownOpen || keyCode !== 27) return;
      setDropdownOpen(false);
    };
    document.addEventListener("keydown", keyHandler);
    return () => document.removeEventListener("keydown", keyHandler);
  });

  return (
    <li className="relative">
      <Link
        ref={trigger}
        onClick={() => {
          setNotifying(false);
          setDropdownOpen(!dropdownOpen);
        }}
        className="relative flex h-8.5 w-8.5 items-center justify-center rounded-full  hover:text-primary dark:border-strokedark dark:bg-meta-4 dark:text-white"
        href="#"
      >
        <svg
          width="28"
          height="28"
          viewBox="0 0 25 25"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M11.204 8.62332C11.204 7.75918 11.9051 7.05811 12.7692 7.05811C13.6333 7.05811 14.3344 7.75918 14.3344 8.62332C14.3344 9.48747 13.6333 10.1885 12.7692 10.1885C11.9051 10.1885 11.204 9.48747 11.204 8.62332ZM12.7692 8.10158C12.4813 8.10158 12.2475 8.33547 12.2475 8.62332C12.2475 8.91118 12.4813 9.14506 12.7692 9.14506C13.0571 9.14506 13.2909 8.91118 13.2909 8.62332C13.2909 8.33547 13.0571 8.10158 12.7692 8.10158Z"
            fill="#263238"
          />
          <path
            d="M9.34945 10.1009L12.2475 12.0329V13.7174L10.2156 17.7813C10.0867 18.039 10.1912 18.3524 10.4489 18.4812C10.7067 18.6101 11.0201 18.5056 11.1489 18.2479L12.7692 15.0073L14.3896 18.2479C14.5184 18.5056 14.8318 18.6101 15.0895 18.4812C15.3473 18.3524 15.4517 18.039 15.3228 17.7813L13.291 13.7175V12.0331L16.1891 10.1009C16.4289 9.94109 16.4937 9.61716 16.3339 9.3774C16.174 9.13765 15.8501 9.07286 15.6103 9.2327L12.7693 11.1267L9.92827 9.2327C9.68852 9.07286 9.36458 9.13765 9.20475 9.3774C9.04491 9.61716 9.1097 9.94109 9.34945 10.1009Z"
            fill="#263238"
          />
          <path
            d="M12.7692 2.69712C7.19069 2.69712 2.66923 7.21859 2.66923 12.7971C2.66923 18.3756 7.19069 22.8971 12.7692 22.8971C18.3477 22.8971 22.8692 18.3756 22.8692 12.7971C22.8692 7.21859 18.3477 2.69712 12.7692 2.69712ZM3.92186 12.7971C3.92186 7.91039 7.8825 3.94975 12.7692 3.94975C17.656 3.94975 21.6166 7.91039 21.6166 12.7971C21.6166 17.6839 17.656 21.6445 12.7692 21.6445C7.8825 21.6445 3.92186 17.6839 3.92186 12.7971Z"
            fill="#263238"
            stroke="#263238"
            stroke-width="0.2"
          />
        </svg>
      </Link>

      {/* <!-- Dropdown Start --> */}
      <div
        ref={dropdown}
        onFocus={() => setDropdownOpen(true)}
        onBlur={() => setDropdownOpen(false)}
        className={`absolute -right-16 mt-2.5 flex h-90 w-75 flex-col rounded-sm border border-stroke bg-white shadow-default dark:border-strokedark dark:bg-boxdark sm:right-0 sm:w-80 ${
          dropdownOpen === true ? "block" : "hidden"
        }`}
      >
        <div className="px-4.5 py-3">
          <h5 className="text-sm font-medium text-bodydark2">Messages</h5>
        </div>

        <ul className="flex h-auto flex-col overflow-y-auto">
          <li>
            <Link
              className="flex gap-4.5 border-t border-stroke px-4.5 py-3 hover:bg-gray-2 dark:border-strokedark dark:hover:bg-meta-4"
              href="/messages"
            >
              <div className="h-12.5 w-12.5 rounded-full">
                <Image
                  width={112}
                  height={112}
                  src={"/images/user/user-02.png"}
                  alt="User"
                  style={{
                    width: "auto",
                    height: "auto",
                  }}
                />
              </div>

              <div>
                <h6 className="text-sm font-medium text-black dark:text-white">
                  Mariya Desoja
                </h6>
                <p className="text-sm">I like your confidence 💪</p>
                <p className="text-xs">2min ago</p>
              </div>
            </Link>
          </li>
          <li>
            <Link
              className="flex gap-4.5 border-t border-stroke px-4.5 py-3 hover:bg-gray-2 dark:border-strokedark dark:hover:bg-meta-4"
              href="/messages"
            >
              <div className="h-12.5 w-12.5 rounded-full">
                <Image
                  width={112}
                  height={112}
                  src={"/images/user/user-01.png"}
                  alt="User"
                  style={{
                    width: "auto",
                    height: "auto",
                  }}
                />
              </div>

              <div>
                <h6 className="text-sm font-medium text-black dark:text-white">
                  Robert Jhon
                </h6>
                <p className="text-sm">Can you share your offer?</p>
                <p className="text-xs">10min ago</p>
              </div>
            </Link>
          </li>
          <li>
            <Link
              className="flex gap-4.5 border-t border-stroke px-4.5 py-3 hover:bg-gray-2 dark:border-strokedark dark:hover:bg-meta-4"
              href="/messages"
            >
              <div className="h-12.5 w-12.5 rounded-full">
                <Image
                  width={112}
                  height={112}
                  src={"/images/user/user-03.png"}
                  alt="User"
                  style={{
                    width: "auto",
                    height: "auto",
                  }}
                />
              </div>

              <div>
                <h6 className="text-sm font-medium text-black dark:text-white">
                  Henry Dholi
                </h6>
                <p className="text-sm">I cam across your profile and...</p>
                <p className="text-xs">1day ago</p>
              </div>
            </Link>
          </li>
          <li>
            <Link
              className="flex gap-4.5 border-t border-stroke px-4.5 py-3 hover:bg-gray-2 dark:border-strokedark dark:hover:bg-meta-4"
              href="/messages"
            >
              <div className="h-12.5 w-12.5 rounded-full">
                <Image
                  width={112}
                  height={112}
                  src={"/images/user/user-04.png"}
                  alt="User"
                  style={{
                    width: "auto",
                    height: "auto",
                  }}
                />
              </div>

              <div>
                <h6 className="text-sm font-medium text-black dark:text-white">
                  Cody Fisher
                </h6>
                <p className="text-sm">I’m waiting for you response!</p>
                <p className="text-xs">5days ago</p>
              </div>
            </Link>
          </li>
          <li>
            <Link
              className="flex gap-4.5 border-t border-stroke px-4.5 py-3 hover:bg-gray-2 dark:border-strokedark dark:hover:bg-meta-4"
              href="/messages"
            >
              <div className="h-12.5 w-12.5 rounded-full">
                <Image
                  width={112}
                  height={112}
                  src={"/images/user/user-02.png"}
                  alt="User"
                  style={{
                    width: "auto",
                    height: "auto",
                  }}
                />
              </div>

              <div>
                <h6 className="text-sm font-medium text-black dark:text-white">
                  Mariya Desoja
                </h6>
                <p className="text-sm">I like your confidence 💪</p>
                <p className="text-xs">2min ago</p>
              </div>
            </Link>
          </li>
        </ul>
      </div>
      {/* <!-- Dropdown End --> */}
    </li>
  );
};

export default DropdownMessage;
