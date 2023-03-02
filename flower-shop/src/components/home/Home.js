import { useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import Achieve from "../pages/achieve/Achieve";
import Challenge from "../pages/challenge/Challenge";
import ContactUs from "../pages/contact-us/ContactUs";
import Footer from "../pages/footer/Footer";
import Intro from "../pages/intro/Intro";
import Solution from "../pages/solution/Solution";
import Symptoms from "../pages/symptoms/Symptoms";
import TimeLine from "../pages/timeline/TimeLine";
import WhoWeAre from "../pages/who-we-are/WhoWeAre";

const Home = (props) => {
  const location = useLocation();
  const navigate = useNavigate();

  // coming from Header component: state={{ param: data }}
  const flag_challenge = location.state?.challenge_;
  const flag_solution = location.state?.solution_;
  const flag_flowerLifecycle = location.state?.flowerLifecycle_;

  // scroll to reference element
  const executeScroll = (myRef) => {
    myRef.current.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  useEffect(() => {
    if (flag_challenge || flag_solution || flag_flowerLifecycle) {
      executeScroll(flag_challenge || flag_solution || flag_flowerLifecycle);
      // Added navigate to stop
      // Auto scroll to section
      navigate("/");
    }
  }, [navigate, flag_challenge, flag_solution, flag_flowerLifecycle]);

  console.log({ flag_challenge, flag_solution, flag_flowerLifecycle });
  return (
    <div>
      <Intro />
      <Challenge challenge={props.challenge} flag_challenge={flag_challenge} />
      <Symptoms />
      <Solution solution={props.solution} flag_solution={flag_solution} />
      <Achieve />
      <TimeLine
        flowerLifecycle={props.flowerLifecycle}
        flag_flowerLifecycle={flag_flowerLifecycle}
      />
      <WhoWeAre />
      <ContactUs contactUs={props.contactUs} />
      <Footer />
    </div>
  );
};
export default Home;
