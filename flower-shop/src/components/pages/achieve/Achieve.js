// Importing localised strings
const strings = require('../../../LanguageAsset/localisation_en.json')

const Achieve = () => {

    return <div>
        <section className="how-we-achieve py-7em">
            <div className="container">
                <div className="row justify-content-end cms-content paragraph-lg">
                    <div className="col-xl-11 col-lg-12 col-md-12 col-sm-12 col-12">
                        <div className="row">
                            <div className="col-lg-12 col-md-12 col-sm-12 col-12">
                                <span className="sub-title">How We Achieve This</span>
                            </div>
                            <div className="col-lg-9 col-md-12 col-sm-12 col-12">
                                <h2>{strings.what_makes_verre}</h2>
                            </div>
                            <div className="offset-lg-1 col-lg-8 col-md-12 col-sm-12 col-12">
                                <p>Featuring patented glass-coating technology, Verre Vert blends tradition and innovation to elevate wine bottling, storage, shipping, and drinking.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    </div>
}

export default Achieve