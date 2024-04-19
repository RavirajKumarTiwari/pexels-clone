import React from "react";
import pexels_icon from "../assets/pexels_icon.png";
import { useNavigate, useLocation } from "react-router-dom";

function Navbar({ setSearch }) {
    const navigate = useNavigate();
    const location = useLocation();
    return (
        <>
            <div className="flex items-center justify-between w-full h-20 text-white bg-[#07A081] px-4 fixed z-10">
                <div
                    onClick={() => navigate("/")}
                    className="flex m-4 items-center justify-center hover:cursor-pointer hover:scale-105 duration-200"
                >
                    <img
                        src={pexels_icon}
                        alt="pexels_icon"
                        className="h-14 rounded-md"
                    />
                    <h1 className="text-xl font-bold ml-1 hover:text-gray-200">
                        Pexels
                    </h1>
                </div>
                <div className="flex mt-3">
                    <div
                        onClick={() => {
                            setSearch("nature"), navigate("/");
                        }}
                        className="mx-3 duration-200 hover:scale-105 hover:cursor-pointer"
                    >
                        Nature
                    </div>
                    <div
                        className="mx-3 duration-200 hover:scale-105 hover:cursor-pointer"
                        onClick={() => {
                            setSearch("travel"), navigate("/");
                        }}
                    >
                        Travel
                    </div>
                    <div
                        className="mx-3 duration-200 hover:scale-105 hover:cursor-pointer "
                        onClick={() => {
                            setSearch("city"), navigate("/");
                        }}
                    >
                        City
                    </div>
                    <div
                        className="mx-3 duration-200 hover:scale-105 hover:cursor-pointer "
                        onClick={() => {
                            setSearch("car"), navigate("/");
                        }}
                    >
                        Car
                    </div>
                    <div
                        className="mx-3 duration-200 hover:scale-105 hover:cursor-pointer "
                        onClick={() => {
                            setSearch("fashion"), navigate("/");
                        }}
                    >
                        Fashion
                    </div>
                    <div
                        className="mx-3 duration-200 hover:scale-105 hover:cursor-pointer "
                        onClick={() => {
                            setSearch("animals"), navigate("/");
                        }}
                    >
                        Animals
                    </div>
                    <div
                        className="mx-3 duration-200 hover:scale-105 hover:cursor-pointer "
                        onClick={() => {
                            setSearch("technology"), navigate("/");
                        }}
                    >
                        Technology
                    </div>
                    <div
                        className="mx-3 duration-200 hover:scale-105 hover:cursor-pointer "
                        onClick={() => {
                            setSearch("business&finance"), navigate("/");
                        }}
                    >
                        Business & Finance
                    </div>
                    <div
                        className="mx-3 duration-200 hover:scale-105 hover:cursor-pointer "
                        onClick={() => {
                            setSearch("tokyo"), navigate("/");
                        }}
                    >
                        Tokyo
                    </div>
                    <div
                        className="mx-3 duration-200 hover:scale-105 hover:cursor-pointer "
                        onClick={() => {
                            setSearch("dubai"), navigate("/");
                        }}
                    >
                        Dubai
                    </div>

                    {location.pathname === "/saved" ? (
                        <div
                            className="mx-3 duration-200 hover:scale-105 hover:cursor-pointer "
                            onClick={() => navigate("/")}
                        >
                            Home
                        </div>
                    ) : (
                        <div
                            className="mx-3 duration-200 hover:scale-105 hover:cursor-pointer "
                            onClick={() => navigate("/saved")}
                        >
                            Save
                        </div>
                    )}
                </div>

                {location.pathname === "/" && (<div>
                    <input
                        type="text"
                        placeholder="Search for free photos"
                        onChange={(e) => setSearch(e.target.value)}
                        className="h-10 px-2 rounded-md text-black focus:outline-none focus:ring-2 focus:ring-[#07A081] focus:ring-opacity-50 hover:shadow-md duration-200 w-96"
                    />
                </div>)}
            </div>
        </>
    );
}

export default Navbar;
