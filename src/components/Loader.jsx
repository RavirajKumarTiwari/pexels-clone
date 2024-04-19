import React from "react";
import "./Loader.css";

const Loader = () => {
    return (
        <div className="flex justify-center items-center h-[100vh]">
            <div className="spinner">
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
            </div>
        </div>
    );
};

export default Loader;
