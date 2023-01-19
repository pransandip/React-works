import ContactUs from "../pages/contact-us/ContactUs"
import Footer from "../pages/footer/Footer"
import MeetTheTeam from "../pages/meet-the-team/MeetTheTeam"
import WhoWeAre from "../pages/who-we-are/WhoWeAre"

const Team = props => {
    return (
        <div>
            <WhoWeAre />
            <MeetTheTeam />
            <ContactUs contactUs={props.contactUs} />
            <Footer />
        </div>
    )
}
export default Team