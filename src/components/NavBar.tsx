/* This example requires Tailwind CSS v2.0+ */
import { Fragment } from "react";
import { Link } from "react-router-dom";

function classNames(...classes: any[]) {
  return classes.filter(Boolean).join(" ");
}

interface NavBarProps {
  navigation: Array<{
    name: string;
    href: string;
  }>;
}

const NavBar: React.FC<NavBarProps> = ({ navigation }) => {
  return (
    <>
      <div className="max-w-7xl mx-auto px-2">
        <div className="relative flex items-center justify-between h-16">
          <div className="flex-1 flex items-center justify-center lg:items-stretch lg:justify-start">
            <div className=" flex items-center w-14">
              <a href="/" className="text-black">
                <img
                  src="/assets/github-square-brands.svg"
                  alt="Logo"
                  className="rounded-full h-28 "
                />
              </a>
            </div>

            <div className="hidden top-0 lg:block w-full z-0">
              <div className="flex justify-center gap-10 xl:pl-16">
                {navigation.map((item) => (
                  <a
                    key={item.name}
                    href={item.href}
                    className={classNames("px-2 py-6")}
                  >
                    {item.name}
                  </a>
                ))}
              </div>
            </div>
          </div>

          <div className="right-0 flex items-center sm:pr-0 z-1">
            {/* Profile dropdown */}
            <Link
              to="/settings"
              className="text-xs md:text-base text-white py-3 px-6 rounded-xl"
              style={{ backgroundColor: "#343434" }}
            >
              Settings
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default NavBar;
