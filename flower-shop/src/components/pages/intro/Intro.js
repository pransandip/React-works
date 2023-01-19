import bottleHero from './bottle-hero.png';

// Importing localised strings
const strings = require('../../../LanguageAsset/localisation_en.json')

const Intro = () => {

    return <div>
        <section className="intro">
            <div className="container">
                <div className="intro-grid paragraph-lg">
                    <ul>
                        <li>
                            <div className="mb_80">
                                <h1>{strings.the_world_is_ready}</h1>
                                <p>We are thrilled to introduce the Verre Vert bottle: a bottle designed with winemakers and wine drinkers of both today and tomorrow in mind.</p>
                                <a href="#" className="btn btn-primary rounded-pill">Learn More</a>
                            </div>
                        </li>
                        <li>
                            <ul className="material-list">
                                <li>
                                    <div className="material-box">
                                        <div className="label-title">Bottle Weight:</div>
                                        <div className="metrics">72%</div>
                                        <div className="label-title">Savings</div>
                                    </div>
                                </li>
                                <li>
                                    <div className="material-box">
                                        <div className="label-title">Packaging required:</div>
                                        <div className="metrics">94%</div>
                                        <div className="label-title">Savings</div>
                                    </div>
                                </li>
                                <li>
                                    <div className="material-box">
                                        <div className="label-title">Energy Usage:</div>
                                        <div className="metrics">31%</div>
                                        <div className="label-title">Savings</div>
                                    </div>
                                </li>
                                <li>
                                    <div className="material-box">
                                        <div className="label-title">CO2 Emissions:</div>
                                        <div className="metrics">58%</div>
                                        <div className="label-title">Savings</div>
                                    </div>
                                </li>
                                <li>
                                    <div className="material-box">
                                        <div className="label-title">Total Cost:</div>
                                        <div className="metrics">45%</div>
                                        <div className="label-title">Savings</div>
                                    </div>
                                </li>
                            </ul>
                        </li>
                        <li>
                            <div className="intro-bottle">
                                <img src={bottleHero} alt="bottle image" className="bottle-position" />
                                <div className="bottle-bg"></div>
                            </div>
                        </li>
                    </ul>
                </div>
            </div>
        </section>
    </div>
}

export default Intro