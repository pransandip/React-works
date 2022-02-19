import React from 'react'
import '../style/Section.css'
import img3 from '../img/showcase-photo3.jpg'
import img1 from '../img/showcase-photo1.jpg'

const Section = () => {
  return (
    <div className="showcase">
        <div className="container">
            <div className="row row-1">
                <div className="img-box">
                    <img src={img3} alt="img3" />
                </div>
                <div className="text-box">text box Lorem ipsum dolor, sit amet consectetur adipisicing elit. Doloribus, quis?</div>
            </div>
            <div className="row row-2">
            <div className="img-box"><img src={img1} alt="img1" /></div>
            <div className="text-box">text box Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia, possimus.</div>
            </div>
        </div>
    </div>
  )
}
export default Section;