import { useState, useEffect, useRef } from "react";
import { ArrowBigLeft, ArrowBigRight } from "lucide-react";

type ImageSliderProps = {
    imageUrls: string[];
};

function ImageSlider({ imageUrls }: ImageSliderProps) {
    const [imageIndex, setImageIndex] = useState(0);
    const intervalRef = useRef<number | null>(null);

    useEffect(() => {
        // Start the auto-sliding interval when the component mounts
        intervalRef.current = setInterval(showNextImage, 2000);

        // Clear the interval when the component unmounts
        return () => clearInterval(intervalRef.current!);
    }, [showNextImage]); // Include showNextImage in the dependency array

    function showNextImage() {
        setImageIndex((index) => (index === imageUrls.length - 1 ? 0 : index + 1));
    }

    function showPrevImage() {
        setImageIndex((index) => (index === 0 ? imageUrls.length - 1 : index - 1));
    }

    // Pause/Resume Logic (optional)
    function handleMouseEnter() {
        clearInterval(intervalRef.current!);
    }

    function handleMouseLeave() {
        intervalRef.current = setInterval(showNextImage, 2000);
    }

    return (
        <div
            className="img-slider"
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
        >
            <img src={imageUrls[imageIndex]} className="img-slider-item" />
            <button className="img-slider-btn" style={{ left: 0 }} onClick={showPrevImage}>
                <ArrowBigLeft className="img-slider-arrow" />
            </button>
            <button className="img-slider-btn" style={{ right: 0 }} onClick={showNextImage}>
                <ArrowBigRight className="img-slider-arrow" />
            </button>
        </div>
    );
}

export default ImageSlider;
