import { useState, useEffect } from "react"
import { FaAngleDoubleUp } from 'react-icons/fa'

const ScrollToTop = () => {
    const [showScrollTopButton, setShowScrollTopButton] = useState(false);

    useEffect(() => {
        window.addEventListener("scroll", () => {
            if (window.scrollY > 300) {
                setShowScrollTopButton(true);
            } else {
                setShowScrollTopButton(false);
            }
        });
    }, []);

    const scrollTop = () => {
        window.scrollTo({
            top: 0,
            behavior: "smooth",
        })
    }

    return (
        <div>
            {showScrollTopButton && <a className="top-btn-style">
                <FaAngleDoubleUp className="top-btn-position" onClick={scrollTop} style={{ cursor: 'pointer' }} />
            </a>}
        </div>
    )

}
export default ScrollToTop