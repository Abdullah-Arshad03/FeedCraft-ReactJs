import React from "react";
import { useNavigate } from "react-router-dom";
import Button from "./Button";

const Navbar = ({ feed }) => {
  const link = "/signup";
  const color = "#FBFCFA";
  const Register = "Register";
  const navigate = useNavigate();
  return (
    <>
      <div className="navbar flex  justify-between bg-[#f5e8de] h-14 drop-shadow-md">
        <div className="flex justify-start">
          <h1
            onClick={() => navigate("/")}
            className=" cursor-pointer hover:text-[#114B5F]  ml-4 mt-3 heading font-mono font-semibold text-2xl"
            style={{
              fontFamily: "'Poiret One', sans-serif",
            }}
          >
            FeedCraft
          </h1>

          {feed ? (
            <>
              <p className="ml-4 mt-3">
                <a
                  className=" cursor-pointer hover:text-[#114B5F]  ml-4  heading font-mono font-semibold text-2xl"
                  style={{
                    fontFamily: "'Poiret One', sans-serif",
                  }}
                  href="/feed"
                >
                  Feed
                </a>
              </p>
            </>
          ) : (
            <></>
          )}
          {!localStorage.getItem('token') || !feed ? (<>
            </>):(<><p className="mr-2 mt-3">
                <a
                  className=" cursor-pointer hover:text-[#114B5F]  ml-4  heading font-mono font-semibold text-2xl"
                  style={{
                    fontFamily: "'Poiret One', sans-serif",
                  }}
                  href="/profile"
                >
                  Profile
                </a>
              </p></>)}
        </div>
        <div className="nav-list mr-4 mt-3 ">
          <ul className=" flex justify-evenly w-auto ">
            {/* <li><a href="/feed">Login</a></li> */}
            {/* <li><a href="/feed">Logout</a></li> */}
            {!localStorage.getItem("token") ? (
              <>
                <div className="mr-2">
                  <Button link={link} color={color} name={Register}></Button>
                  <Button link="/signin" color={color} name="Login"></Button>
                </div>
              </>
            ) : (
              <Button link="/" color={color} name="logout"></Button>
            )}
          </ul>
        </div>
      </div>
    </>
  );
};

export default Navbar;
