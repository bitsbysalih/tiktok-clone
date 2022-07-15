import React, { useState } from "react";
import { NextPage } from "next";
import { useRouter } from "next/router";
import Link from "next/link";

//External package imports
import { useGoogleLogin } from "@react-oauth/google";

//Icon imports
import { AiFillHome, AiOutlineMenu } from "react-icons/ai";
import { ImCancelCircle } from "react-icons/im";

//Custom components imports
import Discover from "./Discover";
import SuggestedAccounts from "./SuggestedAccounts";
import Footer from "./Footer";

//State imports
import useAuthStore from "../store/authStore";
import { createOrGetuser } from "../utils";

const Sidebar = () => {
  const { userProfile, addUser } = useAuthStore();

  const login = useGoogleLogin({
    onSuccess: (tokenResponse) => addUser(tokenResponse.access_token),
  });

  const [showSidebar, setShowSidebar] = useState(true);
  const normalLink =
    "flex items-center gap-3 hover:bg-primary p-3 justify-center xl:justify-start cursor-pointer font-semibold text-[#f51997] rounded";

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
              <div className={normalLink}>
                <p className="text-2xl">
                  <AiFillHome />
                </p>
                <span className="text-xl hidden xl:block">For you</span>
              </div>
            </Link>
          </div>
          {!userProfile && (
            <div className="px-2 py-4 hidden xl:block">
              <p className="text-gray-400">
                Log in to like and comment on videos
              </p>
              <div className="pr-4">
                <button
                  className="bg-white text-lg text-[#f51997] border-[1px]
                        border-[#f51997] font-semibold px-6 py-3 rounded-md outline-none
                        w-full mt-3 hover:text-white hover:bg-[#f51997] cursor-pointer"
                  onClick={() => login()}
                >
                  Log in
                </button>
              </div>
            </div>
          )}
          <Discover />
          <SuggestedAccounts />
          <Footer />
        </div>
      )}
    </div>
  );
};

export default Sidebar;
