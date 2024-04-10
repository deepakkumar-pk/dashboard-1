import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { SlBell } from "react-icons/sl";

const DropdownNotification = () => {
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [notifying, setNotifying] = useState(true);

  const trigger = useRef(null);
  const dropdown = useRef(null);

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
        href="#"
        className="relative flex h-8.5 w-8.5 items-center justify-center rounded-full   hover:text-primary  dark:bg-meta-4 dark:text-white"
      >
        <span
          className={`absolute top-0 right-0.5 z-1 h-2 w-2 rounded-full bg-error ${
            notifying === false ? "hidden" : "inline"
          }`}
        >
          <span className="absolute -z-1 top-0 right-0 inline-flex h-full w-full animate-ping rounded-full bg-error opacity-75"></span>
        </span>

        <svg
          width="22"
          height="22"
          viewBox="0 0 17 19"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M8.30887 2.29891C8.00123 2.29891 7.70619 2.42112 7.48866 2.63865C7.27401 2.8533 7.15218 3.14342 7.14899 3.44664C7.1513 3.58302 7.11325 3.71696 7.04099 3.83129C6.9887 3.91402 6.9185 3.98649 6.8327 4.04219C6.80243 4.06193 6.77052 4.07939 6.73723 4.0943C5.79145 4.54444 4.98514 5.24236 4.40403 6.11403C3.82314 6.98536 3.48906 7.99763 3.43711 9.04336V11.8104C3.43711 11.8384 3.43543 11.8663 3.43207 11.8941C3.34914 12.5792 3.10651 13.2352 2.72372 13.8094C2.70378 13.8393 2.68348 13.869 2.66284 13.8983H13.9549C13.9342 13.869 13.914 13.8393 13.894 13.8094C13.5112 13.2352 13.2686 12.5792 13.1857 11.8941C13.1823 11.8663 13.1806 11.8384 13.1806 11.8104V9.04336C13.1287 7.99763 12.7946 6.98536 12.2137 6.11403C11.6299 5.2383 10.8188 4.53794 9.86727 4.08803C9.62397 3.97298 9.46881 3.72798 9.46881 3.45885C9.46881 3.15122 9.3466 2.85618 9.12907 2.63865C8.91154 2.42112 8.6165 2.29891 8.30887 2.29891ZM5.79643 3.01191C5.8873 2.50112 6.13254 2.02628 6.50442 1.65441C6.98299 1.17584 7.63207 0.906982 8.30887 0.906982C8.98566 0.906982 9.63474 1.17584 10.1133 1.65441C10.4852 2.02629 10.7304 2.50112 10.8213 3.01192C11.8464 3.56884 12.7225 4.3679 13.3719 5.34193C14.0958 6.42784 14.5106 7.69028 14.5718 8.99395C14.5723 9.00481 14.5726 9.01569 14.5726 9.02658V11.7663C14.6337 12.2207 14.7976 12.6555 15.0522 13.0373C15.3141 13.4301 15.6646 13.756 16.0754 13.9887C16.3505 14.1444 16.486 14.466 16.4055 14.7716C16.325 15.0773 16.0486 15.2903 15.7325 15.2903H0.885238C0.56916 15.2903 0.292773 15.0773 0.212241 14.7716C0.131709 14.466 0.267257 14.1444 0.542299 13.9887C0.953162 13.756 1.30366 13.4301 1.56557 13.0373C1.82011 12.6555 1.98408 12.2207 2.04518 11.7663V9.02658C2.04518 9.01569 2.04543 9.00481 2.04595 8.99395C2.10714 7.69028 2.52193 6.42784 3.24587 5.34193C3.89522 4.3679 4.77134 3.56884 5.79643 3.01191Z"
            fill="#263238"
          />
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M5.52501 13.8983C5.90938 13.8983 6.22097 14.2099 6.22097 14.5943V15.5223C6.22097 16.076 6.44094 16.6071 6.8325 16.9986C7.22406 17.3902 7.75512 17.6101 8.30887 17.6101C8.86261 17.6101 9.39367 17.3902 9.78523 16.9986C10.1768 16.6071 10.3968 16.076 10.3968 15.5223V14.5943C10.3968 14.2099 10.7084 13.8983 11.0927 13.8983C11.4771 13.8983 11.7887 14.2099 11.7887 14.5943V15.5223C11.7887 16.4452 11.4221 17.3303 10.7695 17.9829C10.1169 18.6355 9.23177 19.0021 8.30887 19.0021C7.38596 19.0021 6.50085 18.6355 5.84826 17.9829C5.19566 17.3303 4.82904 16.4452 4.82904 15.5223V14.5943C4.82904 14.2099 5.14063 13.8983 5.52501 13.8983Z"
            fill="#263238"
          />
        </svg>
      </Link>

      <div
        ref={dropdown}
        onFocus={() => setDropdownOpen(true)}
        onBlur={() => setDropdownOpen(false)}
        className={`absolute -right-27 mt-2.5 flex h-90 w-75 flex-col rounded-sm border border-stroke bg-white shadow-default dark:border-strokedark dark:bg-boxdark sm:right-0 sm:w-80 ${
          dropdownOpen === true ? "block" : "hidden"
        }`}
      >
        <div className="px-4.5 py-3">
          <h5 className="text-sm font-medium text-bodydark2">Notification</h5>
        </div>

        <ul className="flex h-auto flex-col overflow-y-auto">
          <li>
            <Link
              className="flex flex-col gap-2.5 border-t border-stroke px-4.5 py-3 hover:bg-gray-2 dark:border-strokedark dark:hover:bg-meta-4"
              href="#"
            >
              <p className="text-sm">
                <span className="text-black dark:text-white">
                  Edit your information in a swipe
                </span>{" "}
                Sint occaecat cupidatat non proident, sunt in culpa qui officia
                deserunt mollit anim.
              </p>

              <p className="text-xs">12 May, 2025</p>
            </Link>
          </li>
          <li>
            <Link
              className="flex flex-col gap-2.5 border-t border-stroke px-4.5 py-3 hover:bg-gray-2 dark:border-strokedark dark:hover:bg-meta-4"
              href="#"
            >
              <p className="text-sm">
                <span className="text-black dark:text-white">
                  It is a long established fact
                </span>{" "}
                that a reader will be distracted by the readable.
              </p>

              <p className="text-xs">24 Feb, 2025</p>
            </Link>
          </li>
          <li>
            <Link
              className="flex flex-col gap-2.5 border-t border-stroke px-4.5 py-3 hover:bg-gray-2 dark:border-strokedark dark:hover:bg-meta-4"
              href="#"
            >
              <p className="text-sm">
                <span className="text-black dark:text-white">
                  There are many variations
                </span>{" "}
                of passages of Lorem Ipsum available, but the majority have
                suffered
              </p>

              <p className="text-xs">04 Jan, 2025</p>
            </Link>
          </li>
          <li>
            <Link
              className="flex flex-col gap-2.5 border-t border-stroke px-4.5 py-3 hover:bg-gray-2 dark:border-strokedark dark:hover:bg-meta-4"
              href="#"
            >
              <p className="text-sm">
                <span className="text-black dark:text-white">
                  There are many variations
                </span>{" "}
                of passages of Lorem Ipsum available, but the majority have
                suffered
              </p>

              <p className="text-xs">01 Dec, 2024</p>
            </Link>
          </li>
        </ul>
      </div>
    </li>
  );
};

export default DropdownNotification;
