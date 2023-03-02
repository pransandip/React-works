// Importing localised strings
const strings = require("../../../LanguageAsset/localisation_en.json");

const Challenge = (props) => {
  return (
    <div ref={props.challenge}>
      <section
        className="the-challenge paragraph-lg py-8em"
        ref={props.flag_challenge}
      >
        <div className="container">
          <div className="row justify-content-center cms-content">
            <div className="col-xl-10 col-lg-12 col-md-12 col-sm-12 col-12">
              <div className="row">
                <div className="col-lg-4 col-md-12 col-sm-12 col-12">
                  <span className="sub-title">The Challenge</span>
                </div>
                <div className="col-lg-8 col-md-12 col-sm-12 col-12">
                  <h2 className="heading-title">
                    {strings.the_bottle_of_yesterday}
                  </h2>
                  <p>
                    <strong>
                      Glass bottles are costly and destructive to the
                      environment that winemakers rely on to produce
                      high-quality fruit.
                    </strong>
                  </p>
                  <p>
                    Glass bottles can even fall short in achieving their chief
                    objective: protecting the wine inside.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
export default Challenge;
