import { useEffect, useRef, useState } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import Masonry from "masonry-layout";

const GallerySection = () => {
    const grid = useRef(null);
    const [images, setImages] = useState([]);

    useEffect(() => {
        AOS.init({
            duration: 3000,
            easing: "ease-in-out",
            once: false,
            offset: 120,
        });

        AOS.refresh();
        new Masonry(grid.current, {
            itemSelector: ".grid-item",
            columnWidth: 200,
            gutter: 5,
        });

        const fetchData = async () => {
            try {
                const response = await fetch(
                    `${process.env.NEXT_PUBLIC_BASE_URL}/images.json`
                );
                const data = await response.json();
                setImages(data);
            } catch (error) {
                console.error("Error fetching data:", error);
            }
        };

        fetchData();
    }, []);

    return (
        <div>
            <div className="container py-5">
                <h2 className="text-center mb-4">Gallery</h2>
                <div className="row" ref={grid}>
                    {images.map((image, index) => (
                        <div
                            key={image.id}
                            className="col-md-3 mb-4 grid-item"
                            data-aos="fade-up"
                            data-aos-delay={index * 100}>
                            <div className="">
                                <img
                                    src={image?.url}
                                    style={{ borderRadius: "5px" }}
                                    alt={image?.title || "Default Image"}
                                    className="img-fluid"
                                />
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default GallerySection;
