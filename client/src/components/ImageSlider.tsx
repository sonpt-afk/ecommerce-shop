import { useState } from "react";
import { ArrowBigLeft, ArrowBigRight } from "lucide-react"
type ImageSliderProps = {
    imageUrls: string[]
}

function ImageSlider({ imageUrls }: ImageSliderProps) {
    const [imageIndex, setImageIndex] = useState(0)

    function showNextImage() {
        setImageIndex(index => {
            if (index === imageUrls.length - 1) return 0
            return index + 1
        })
    }
    function showPrevImage() {
        setImageIndex(index => {
            if (index === 0) return imageUrls.length - 1
            return index - 1
        })
    }
    return (
        <div className="img-slider">
            <img src={imageUrls[imageIndex]} className="img-slider-item" />
            <button className="img-slider-btn" style={{ left: 0 }}
                onClick={showPrevImage}
            >
                <ArrowBigLeft className="img-slider-arrow" />
            </button>
            <button className="img-slider-btn" style={{ right: 0 }}
                onClick={showNextImage}

            >
                <ArrowBigRight className="img-slider-arrow" />
            </button>
        </div>
    )
}
export default ImageSlider;