import Achieve from "../pages/achieve/Achieve"
import Challenge from "../pages/challenge/Challenge"
import ContactUs from "../pages/contact-us/ContactUs"
import Footer from "../pages/footer/Footer"
import Intro from "../pages/intro/Intro"
import Solution from "../pages/solution/Solution"
import Symptoms from "../pages/symptoms/Symptoms"
import TimeLine from "../pages/timeline/TimeLine"
import WhoWeAre from "../pages/who-we-are/WhoWeAre"

const Home = props => {
    return (
        <div>
            <Intro />
            <Challenge challenge={props.challenge} />
            <Symptoms />
            <Solution solution={props.solution} />
            <Achieve />
            <TimeLine flowerLifecycle={props.flowerLifecycle} />
            <WhoWeAre />
            <ContactUs contactUs={props.contactUs} />
            <Footer />
        </div>
    )
}
export default Home