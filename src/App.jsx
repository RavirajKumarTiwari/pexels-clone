import React, { useState, useEffect } from "react";
import Navbar from "./components/Navbar";
import axios from "axios";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import Saved from "./components/Saved";

function App() {
    // const API_KEY = process.env.REACT_APP_API_KEY;
    const API_KEY = "hKhFZRkHBBlcaoevODg0Dgi8sLrWFB5UYw14qifnp9CVJUY42AWbYsL9";

    const [images, setImages] = useState([]);
    const [search, setSearch] = useState("nature");
    const [loading, setLoading] = useState(true);
    const [saved, setSaved] = useState([]);

    useEffect(() => {
        setLoading(true);
        const fetchImage = async () => {
            const res = await axios.get(
                `https://api.pexels.com/v1/search?query=${search}&per_page=80`,
                {
                    headers: {
                        Authorization: API_KEY,
                    },
                }
            );
            // console.log(res);
            setImages(res.data.photos);
            setLoading(false);
            // console.log(images);

            const data = JSON.parse(localStorage.getItem("savedImages"));
            if (data) {
                setSaved(data);
            }
        };
        fetchImage();
    }, [search, setSaved]);

    useEffect(() => {
        if (saved.length !== 0) {
            const savedImages = JSON.stringify(saved);
            localStorage.setItem("savedImages", savedImages);
        }
    }, [saved]);

    // console.log(search)
    // console.log("savd images", saved)

    return (
        <>
            <Router>
                <Navbar setSearch={setSearch} />

                <Routes>
                    <Route
                        path="/"
                        element={
                            <Home
                                images={images}
                                loading={loading}
                                saved={saved}
                                setSaved={setSaved}
                            />
                        }
                    />
                    <Route
                        path="/saved"
                        element={<Saved saved={saved} loading={loading} />}
                    />
                </Routes>
            </Router>
        </>
    );
}

export default App;
