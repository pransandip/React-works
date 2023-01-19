import fstImage from './Dustin20CMO20Vert20Team500.jpeg'
import sndImage from './dylan-robbins-CEO-Verre.jpeg'
import thrdImage from './Morgan20CM.jpeg'
import frthImage from './Shan_Yu_CEO_Verre_Vert_Glass.jpg'

// Importing localised strings
const strings = require('../../../LanguageAsset/localisation_en.json')

const MeetTheTeam = props => {
    return (
        <div>
            <section className="symptoms pb-8em pt-7em">
                <div className="container">
                    <div className="row justify-content-end cms-content">
                        <div className="col-xl-11 col-lg-12 col-md-12 col-sm-12 col-12">
                            <div className="row">
                                <div className="col-lg-12 col-md-12 col-sm-12 col-12">
                                    <span className="sub-title">Meet The Team</span>
                                </div>
                                <div className="col-lg-12 col-md-12 col-sm-12 col-12">
                                    <div className="row gx-xl-5 gy-5 fix_img">
                                        <div className="col-md-3">
                                            <div className="text-container symptom-box">
                                                <img src={fstImage} alt="bottle image" className="" />
                                                <h3>Harmful emissions</h3>
                                                <h4>Heavy glass bottles emit</h4>
                                                <p>Roughly 2% of glass bottles break in transit, hurting winery margins and consumer sentiment.</p>
                                            </div>
                                        </div>
                                        <div className="col-md-3">
                                            <div className="text-container symptom-box">
                                                <img src={sndImage} alt="bottle image" className="" />
                                                <h3>Fragile Smith</h3>
                                                <h4>Heavy glass bottles emit</h4>
                                                <p>Roughly 2% of glass bottles break in transit, hurting winery margins and consumer sentiment.</p>
                                            </div>
                                        </div>
                                        <div className="col-md-3">
                                            <div className="text-container symptom-box">
                                                <img src={thrdImage} alt="bottle image" className="" />
                                                <h3>Wasteful packaging.</h3>
                                                <h4>Heavy glass bottles emit</h4>
                                                <p>Roughly 2% of glass bottles break in transit, hurting winery margins and consumer sentiment.</p>
                                            </div>
                                        </div>
                                        <div className="col-md-3">
                                            <div className="text-container symptom-box">
                                                <img src={frthImage} alt="bottle image" className="" />
                                                <h3>Flimsy alternatives.</h3>
                                                <h4>Heavy glass bottles emit</h4>
                                                <p>Roughly 2% of glass bottles break in transit, hurting winery margins and consumer sentiment.</p>
                                            </div>
                                        </div>
                                        <div className="col-md-3">
                                            <div className="text-container symptom-box">
                                                <img src={frthImage} alt="bottle image" className="" />
                                                <h3>Burdensome</h3>
                                                <h4>Heavy glass bottles emit</h4>
                                                <p>Roughly 2% of glass bottles break in transit, hurting winery margins and consumer sentiment.</p>
                                            </div>
                                        </div>
                                        <div className="col-md-3">
                                            <div className="text-container symptom-box">
                                                <img src={thrdImage} alt="bottle image" className="" />
                                                <h3>Burdensome</h3>
                                                <h4>Heavy glass bottles emit</h4>
                                                <p>Roughly 2% of glass bottles break in transit, hurting winery margins and consumer sentiment.</p>
                                            </div>
                                        </div>
                                        <div className="col-md-3">
                                            <div className="text-container symptom-box">
                                                <img src={fstImage} alt="bottle image" className="" />
                                                <h3>Burdensome</h3>
                                                <h4>Heavy glass bottles emit</h4>
                                                <p>Roughly 2% of glass bottles break in transit, hurting winery margins and consumer sentiment.</p>
                                            </div>
                                        </div>
                                        <div className="col-md-3">
                                            <div className="text-container symptom-box">
                                                <img src={sndImage} alt="bottle image" className="" />
                                                <h3>Burdensome</h3>
                                                <h4>Heavy glass bottles emit</h4>
                                                <p>Roughly 2% of glass bottles break in transit, hurting winery margins and consumer sentiment.</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}
export default MeetTheTeam