import React from "react";
import Loader from "./Loader";
import { ToastContainer, toast, Bounce } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function Home({ images, loading, setSaved, saved }) {
    const saveImage = (img) => {
        let flag = true;

        if (saved !== null && saved.length > 0) {
            for (let i = 0; i < saved.length; i++) {
                if (saved[i].id === img.id) {
                    flag = false;
                    // console.log("Image already saved", flag);
                    toast.info("Image already saved", {
                        position: "top-center",
                        autoClose: 5000,
                        hideProgressBar: false,
                        closeOnClick: true,
                        pauseOnHover: true,
                        draggable: true,
                        progress: undefined,
                        theme: "colored",
                        transition: Bounce,
                    });
                    break;
                }
            }
        }
        if (flag) {
            setSaved([...saved, img]);
            // console.log("Image saved", flag);
            toast.success("Image Saved", {
                position: "top-center",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "colored",
                transition: Bounce,
            });
        }
    };

    return (
        <>
            <ToastContainer />
            <div id="top" className="container mx-auto">
                {loading ? (
                    <Loader />
                ) : (
                    <div className="card grid auto-cols-auto justify-center items-center gap-2 pt-24 mx-4 text-center">
                        {images.map((image) => (
                            <div
                                key={image.id}
                                onClick={() => saveImage(image)}
                                className="w-full h-auto object-cover flex items-center"
                            >
                                <div className="group flex flex-col rounded-md hover:scale-105 duration-300 hover:shadow-slate-500 hover:shadow-lg">
                                    <img
                                        src={image.src.medium}
                                        alt={image.alt}
                                        className="max-w-full h-auto object-cover rounded-md inline-block"
                                    />
                                    <p className="opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                                        {image.alt}
                                    </p>
                                </div>
                            </div>
                        ))}
                    </div>
                )}
                <div className="mx-auto my-4 flex justify-center items-center bg-[#07A081] text-white font-bold h-10 w-40 rounded-md hover:scale-105 duration-200 hover:shadow-slate-500 hover:shadow-lg">
                    {images.length !== 0 && <a href="#top">Back To Top</a>}
                </div>
            </div>
        </>
    );
}

export default Home;

// Todo
// on image hover photographer name will visible