import { useEffect, useState } from "react";

// Importing localised strings
const strings = require("../../../LanguageAsset/localisation_en.json");

const WhoWeAre = (props) => {
  const [match, setMatch] = useState(false);

  useEffect(() => {
    let path = window.location.pathname;
    if (path === "/team") {
      setMatch(true);
    }
  }, []);

  return (
    <div
      style={{
        paddingTop: `${match ? `5.47em` : `0px`}`,
        backgroundColor: `${match ? `#e1ebff` : `#f0f3f9`}`,
      }}
    >
      <section className="who-we-are pb-8em">
        <div className="container">
          <div className="row justify-content-end cms-content paragraph-lg">
            <div className="col-xl-11 col-lg-12 col-md-12 col-sm-12 col-12">
              <div className="row">
                <div className="col-lg-12 col-md-12 col-sm-12 col-12">
                  <span className="sub-title">Who We Are</span>
                </div>
                <div className="col-lg-8 col-md-12 col-sm-12 col-12">
                  <h2>{strings.bottles_made_for_people}</h2>
                </div>
                <div className="offset-lg-2 col-lg-8 col-md-12 col-sm-12 col-12">
                  <p>
                    <strong>
                      Collectively, the Verre Vert team brings decades of
                      leadership and expertise from top-tier hospitality teams
                      and world-className businesses.
                    </strong>
                  </p>
                  <p>
                    Prepared with experience founding multiple wine companies,
                    leading three-Michelin starred restaurants, and advising
                    Fortune 50 companies on strategy and management, the Verre
                    Vert team understands the wine industry - and what it takes
                    to transform it for the better.
                  </p>
                </div>
              </div>
              <div className="row pt-5em strengths">
                <div className="offset-lg-2 col-lg-10 col-md-12 col-sm-12 col-12">
                  <div className="row pb-5">
                    <div className="col-xl-12 col-lg-5 col-md-5 col-sm-12 col-12">
                      <span className="sub-title">Strengths</span>
                    </div>
                    <div className="col-xl-12 col-lg-7 col-md-7 col-sm-12 col-12">
                      <div className="row gy-5">
                        <div className="col-xl-4 col-lg-12 col-md-12 col-sm-12 col-12">
                          <h3>Wine knowledge:</h3>
                          <p>Master Sommelier and Advanced WSET.</p>
                        </div>
                        <div className="col-xl-4 col-lg-12 col-md-12 col-sm-12 col-12">
                          <h3>Technical expertise:</h3>
                          <p>
                            PhD in Chemical Engineering, Stanford University.
                          </p>
                        </div>
                        <div className="col-xl-4 col-lg-12 col-md-12 col-sm-12 col-12">
                          <h3>Business insight:</h3>
                          <p>Two MBAs, Stanford Graduate School of Business.</p>
                        </div>
                      </div>
                    </div>
                  </div>
                  <a href="#" className="btn btn-primary rounded-pill">
                    Meet The Team
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
export default WhoWeAre;
