import React from "react";
import Loader from "./Loader";
import { useNavigate } from "react-router-dom";
import { ToastContainer, toast, Bounce } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function Saved({ saved, loading }) {
    const navigate = useNavigate();

    return (
        <>
            <ToastContainer />
            <div id="top" className="container mx-auto">
                {loading ? (
                    <Loader />
                ) : (
                    <div className="card grid auto-cols-auto justify-center items-center gap-2 pt-24 mx-4 text-center">
                        {saved.map((image) => (
                            <div
                                key={image.id}
                                className="w-full h-auto object-cover flex items-center"
                            >
                                <div className="flex flex-col rounded-md hover:scale-105 duration-300 hover:shadow-slate-500 hover:shadow-lg">
                                    <img
                                        src={image.src.medium}
                                        alt={image.alt}
                                        className="max-w-full h-auto object-cover rounded-md inline-block"
                                    />
                                    <p>{image.alt} </p>
                                </div>
                            </div>
                        ))}
                    </div>
                )}
                {saved.length !== 0 ? (
                    <div className="mx-auto my-4 flex justify-center items-center bg-[#07A081] text-white font-bold h-10 w-40 rounded-md hover:cursor-pointer hover:scale-105 duration-200 hover:shadow-slate-500 hover:shadow-lg">
                        <a href="#top">Back To Top</a>
                    </div>
                ) : (
                    <div className="mx-auto my-80 flex justify-center items-center bg-[#07A081] text-white font-bold h-10 w-40 rounded-md hover:scale-105 duration-200 hover:shadow-slate-500 hover:shadow-lg">
                            <h1>Empty</h1>
                            {/* add tost here */}
                    </div>
                )}
            </div>
        </>
    );
}

export default Saved;
