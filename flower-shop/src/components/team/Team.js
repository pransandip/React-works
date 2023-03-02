import { useEffect } from "react";
import ContactUs from "../pages/contact-us/ContactUs";
import Footer from "../pages/footer/Footer";
import MeetTheTeam from "../pages/meet-the-team/MeetTheTeam";
import WhoWeAre from "../pages/who-we-are/WhoWeAre";

const Team = (props) => {
  const { setMatchURL } = props;

  useEffect(() => {
    let path = window.location.pathname;
    if (path === "/team") {
      setMatchURL(true);
    }

    return () => {
      setMatchURL(false);
    };
  }, [setMatchURL]);

  return (
    <div>
      <WhoWeAre />
      <MeetTheTeam />
      <ContactUs contactUs={props.contactUs} />
      <Footer />
    </div>
  );
};
export default Team;
