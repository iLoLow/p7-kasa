import React from "react"
import { useState } from "react"
import "../Styles/Gallery.css"



function Gallery({pictures}){
    const [currentSlide, setCurrentSlide] = useState(0)

    const lengthArray = pictures.length

    /* const next slide*/
    const nextSlide = () => {
        setCurrentSlide (currentSlide === lengthArray -1 ? 0 : currentSlide +1);
    };
    /* const previous slide*/
    const previousSlide = () => {
        setCurrentSlide (currentSlide === 0 ? lengthArray -1  : currentSlide -1);
    };

    return(
        <section className="gallery">
        {pictures.map((picture, index) =>
            currentSlide === index && (
                /* create div with img housting */
                <div key={picture} className="gallery-img">
                    <img src={picture} alt="housing"  />
                </div> 
            )
        )}
            {/*  create span for counter slide */}
            <span className="gallery-count">
                {currentSlide +1}/{lengthArray}
            </span>
            {lengthArray > 1 ?(
                /* create div for 2 arrow svg */
                <div className="gallery-arrow">
                    {/* create div for arrow Left woth onclick previousSlide */}   
                    <div className="gallery-arrowLeft" onClick={previousSlide}>
                    <svg fill="#FFFFFF" width="48" height="80" viewBox="0 0 48 80" xmlns="http://www.w3.org/2000/svg">
                    <path d="M47.04 7.78312L39.92 0.703125L0.359985 40.3031L39.96 79.9031L47.04 72.8231L14.52 40.3031L47.04 7.78312Z" />
                    </svg>
                    </div>
                    {/* create div for arrow Left woth onclick nextSlide */} 
                    <div className="gallery-arrowRight" onClick={nextSlide}>
                    <svg fill="#FFFFFF" width="48" height="80" viewBox="0 0 48 80"  xmlns="http://www.w3.org/2000/svg">
                    <path d="M0.960022 72.3458L8.04002 79.4258L47.64 39.8258L8.04002 0.22583L0.960022 7.30583L33.48 39.8258L0.960022 72.3458V72.3458Z"/>
                    </svg>
                    </div>
                </div>
                /* if zero no arrow displayed */
            ) : null}
        </section>
    )

}

export default Gallery;