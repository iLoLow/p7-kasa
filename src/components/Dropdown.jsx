import {useState} from "react";
import "../Styles/Dropdown.css"

function Dropdown({dropdownClose = false,title,children}){
    const [dropdownOpen, dropdownSetIsOpen] = useState(false)


    /* Returning the dropdown component. */
    return (
        /* create div with double class for dropdown close or open*/
        <div className={dropdownClose ? "dropdown-close" : "dropdown-large"}>
            <div className={dropdownClose ?"dropdown-close-header" : "dropdown-header"}>
                <h2 className={dropdownClose ?"dropdown-close-title" : "dropdown-title"}>{title}</h2>
                <button  onClick={() => !dropdownOpen ? dropdownSetIsOpen(true) : dropdownSetIsOpen(false) }className="btn">
                    {dropdownOpen ? (
                         <svg width="24" height="15" viewBox="0 0 24 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                         <path d="M21.7268 14.1403L23.8597 11.9951L11.9298 0.0764155L-5.01125e-05 12.0072L2.13287 14.1403L11.9298 4.34257L21.7268 14.1403Z" fill="white"/>
                       </svg>
                     ) : (
                       <svg width="25" height="15" viewBox="0 0 25 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                         <path d="M2.6635 0.859489L0.530579 3.00462L12.4605 14.9233L24.3904 2.99257L22.2575 0.859489L12.4605 10.6572L2.6635 0.859489Z" fill="white"/>
                       </svg>
                     )
                     }
                </button>
            </div>
            {/* If dropdownOpen is true, then it will render the div with the className of
            dropdown-body-close or dropdown-body. */}
            {dropdownOpen &&
                <div className={dropdownClose ? "dropdown-body-close" : "dropdown-body"}>
                    {children}
                </div>
            }
        </div>
    );

}

export default Dropdown;