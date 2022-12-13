import React from "react"
import { useState } from "react"
import ArrowLeft from "../assets/arrow-left.svg";
import ArrowRigth from "../assets/arrow-rigth.svg";


function Gallery({pictures}){
    const [currentSlide, setCurrentSlide] = useState(0)
    const lengthArray = pictures.length

    const nextSlide = () => {
        setCurrentSlide (currentSlide === lengthArray -1 ? 0 : currentSlide +1);
    };

    const previousSlide = () => {
        setCurrentSlide (currentSlide === 0 ? lengthArray -1  : currentSlide -1);
    };

    return(
        <section className="gallery">
        {pictures.map(
            (picture, index) =>
            currentSlide === index && (
                <div key={picture} className="gallery-img">
                    <span className="gallery-count">
                        {index +1}/{lengthArray}
                    </span>
                    <img src={picture} alt="housing" />
                    {lengthArray > 1 ?(
                        <>
                            <div className="gallery-arrowLeft" onClick={previousSlide}>
                                <img src={ArrowLeft} alt="arrow previous" />
                            </div>
                            <div className="gallery-arrowRight" onClick={nextSlide}>
                                <img src={ArrowRigth} alt="arrow next" />
                            </div>
                        </>
                    ) : null}
                </div>
                
            )
        )}
        </section>
    )

}

export default Gallery;