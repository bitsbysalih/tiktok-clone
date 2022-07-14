import React, { useState } from "react";
import { NextPage } from "next";
import { useRouter } from "next/router";
import Link from "next/link";

//External package imports
import { GoogleLogin, GoogleLogout } from "react-google-login";

//Icon imports
import { AiFillHome, AiOutlineMenu } from "react-icons/ai";
import { ImCancelCircle } from "react-icons/im";

const Sidebar = () => {
  const [showSidebar, setShowSidebar] = useState(true);
  return (
    <div>
      <div
        className="block xl:hidden m-2 ml-4 mt-3 text-xl"
        onClick={() => setShowSidebar((prevState) => !prevState)}
      >
        {showSidebar ? <ImCancelCircle /> : <AiOutlineMenu />}
      </div>
      {showSidebar && (
        <div className="xl:w-400 w-20 flex flex-col justify-start mb-10 border-r-2 border-gray-100 xl:border-0 p-3">
          <div className="xl:boder-b-2 border-gray-200 xl:pb-4">
            <Link href="/">
              <div>
                <p className="text-2xl">
                  <AiFillHome />
                </p>
              </div>
            </Link>
          </div>
        </div>
      )}
    </div>
  );
};

export default Sidebar;
