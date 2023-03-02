// Importing localised strings
const strings = require("../../../LanguageAsset/localisation_en.json");

const Solution = (props) => {
  return (
    <div ref={props.solution}>
      <section className="the-solution pb-8em" ref={props.flag_solution}>
        <div className="container">
          <div className="row">
            <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12">
              <ul className="solution-grid cms-content">
                <li>
                  <span className="sub-title">The Solution</span>
                </li>
                <li>
                  <h2 className="heading-title">{strings.we_are_thrilled}</h2>
                </li>
                <li>
                  <p>
                    The Verre Vert bottle (pronounced /vehr vehr/) is the first
                    of its kind: an unbreakable, environmentally friendly wine
                    bottle that looks, feels, and acts like traditional glass.
                    Its lightweight material slashes shipping costs and carbon
                    emissions as the bottle travels from manufacturing to
                    producers, shelves, and, ultimately, consumers. Moreover,
                    its durable walls eliminate the risk of expensive and
                    frustrating breakage during shipping - as well as the need
                    for wasteful packing materials. Glass linings on both the
                    interior and exterior of the bottle ensure the wine only
                    ever touches glass, guaranteeing an aging process exactly
                    like that of a glass bottle.
                  </p>
                  <img
                    src="https://uploads-ssl.webflow.com/60e7377bb8834a09c683c3f9/60e767135f0dad0740c45be0_winemaker-p-500.jpeg"
                    alt="winemaker"
                  />
                </li>
                <li>
                  <img
                    src="https://uploads-ssl.webflow.com/60e7377bb8834a09c683c3f9/60e7686d5eb9a90a17a316cc_sustainable-wine-bottle-verre-vert.jpg"
                    alt="vert"
                  />
                  <p>
                    So what does this cutting-edge technology mean? For
                    winemakers, Verre Vert bottles are an opportunity to lead
                    the industry toward a more sustainable future and a more
                    cost-effective way to bottle and protect the fruits of their
                    labor. For wine drinkers, Verre Vert bottles reduce carbon
                    emissions and make a difference with every glass consumed -
                    without sacrificing the tradition and mystique of wine.
                  </p>
                  <p>
                    We are delighted to partner with you in this journey. Let’s
                    help the wine world welcome a bright, sustainable, and
                    delicious future.
                  </p>
                </li>
                <li>
                  <img
                    src="https://uploads-ssl.webflow.com/60e7377bb8834a09c683c3f9/60e767135f0dad0740c45be0_winemaker-p-500.jpeg"
                    alt="winemakerp"
                  />
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
export default Solution;
