import { useState } from 'react';
import { Store } from 'react-notifications-component';
import logoImage from './logo.svg';

// Importing localised strings
const strings = require('../../../LanguageAsset/localisation_en.json')

const ContactUs = props => {

    // Define State
    const [name, setName] = useState("")
    const [email, setEmail] = useState("")
    const [wineryName, setWineryName] = useState("")
    const [annualCaseProd, setAnnualCaseProd] = useState("")
    const [reasonForReachOut, setReasonForReachOut] = useState("")
    const [emailIsValid, setEmailIsValid] = useState();

    // Define Reference
    const [nameError, setNameError] = useState(false)
    const [emailError, setEmailError] = useState(false)
    const [wineryNameError, setWineryNameError] = useState(false)
    const [annualCaseProdError, setAnnualCaseProdError] = useState(false)
    const [reasonForReachOutError, setReasonForReachOutError] = useState(false)
    const [validEmailError, setValidEmailError] = useState(false)


    const validateEmailHandler = () => {
        setEmailIsValid(email.includes('@'));
        setValidEmailError(!email.includes('@'))
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (name !== "" && email !== "" && wineryName !== "" && annualCaseProd !== "" && reasonForReachOut !== "") {
            if (emailIsValid) {
                setName("");
                setEmail("");
                setWineryName("");
                setAnnualCaseProd("");
                setReasonForReachOut("");

                Store.addNotification({
                    title: "Success",
                    message: "Mail Sent Successfully",
                    type: "success",
                    insert: "top",
                    container: "top-center",
                    width: "400",
                    animationIn: ["animate__animated", "animate__fadeIn"],
                    animationOut: ["animate__animated", "animate__fadeOut"],
                    dismiss: {
                        duration: 3000,
                        showIcon: true
                    }
                });
            }

        } else {
            if (name === "") {
                setNameError(true)
            }
            if (email === "") {
                setEmailError(true)
                setValidEmailError(false)
            }
            if (wineryName === "") {
                setWineryNameError(true);
            }
            if (annualCaseProd === "") {
                setAnnualCaseProdError(true);
            }
            if (reasonForReachOut === "") {
                setReasonForReachOutError(true);
            }
        }
    };

    return (
        <div ref={props.contactUs}>
            <section className="contact-wrap pt-8em">
                <div className="container">
                    <div className="row cms-content paragraph-lg">
                        <div className="col-lg-8 col-md-12 col-sm-12 col-12">
                            <div className="contact-form">
                                <div className="row">
                                    <div className="offset-1 col-10">
                                        <span className="sub-title">Contact Us</span>
                                        <h2>{strings.intrigued_reach}</h2>
                                        <form onSubmit={handleSubmit}>
                                            <div className="row mb-5">
                                                <div className="col-sm-4 col-12">
                                                    <label htmlFor="name" className="form-label">Your Name</label>
                                                </div>
                                                <div className="col-sm-8 col-12">
                                                    <input type="text" id="name" name="name" placeholder="Jone Doe" className="form-control" value={name} onChange={(e) => { setName(e.target.value); setNameError(false) }} />
                                                    {nameError && (<small className="error">Name can not be blank</small>)}
                                                </div>
                                            </div>
                                            <div className="row mb-5">
                                                <div className="col-sm-4 col-12">
                                                    <label htmlFor="email" className="form-label">Your Email Address</label>
                                                </div>
                                                <div className="col-sm-8 col-12">
                                                    <input type="text" id="email" name="email" placeholder="jone.doe@gmail.com" className="form-control" value={email} onChange={(e) => { setEmail(e.target.value); setEmailError(false) }} onKeyUp={validateEmailHandler} />
                                                    {emailError && (<small className="error">Email can not be blank</small>)}
                                                    {validEmailError && (<small className="error">Enter a valid email address</small>)}
                                                </div>
                                            </div>
                                            <div className="row mb-5">
                                                <div className="col-sm-4 col-12">
                                                    <label htmlFor="wineryName" className="form-label">Winery Name</label>
                                                </div>
                                                <div className="col-sm-8 col-12">
                                                    <input type="text" id="wineryName" name="wineryName" placeholder="Napa Wine Inc." className="form-control" value={wineryName} onChange={(e) => { setWineryName(e.target.value); setWineryNameError(false) }} />
                                                    {wineryNameError && (<small className="error">Winery name can not be blank</small>)}
                                                </div>
                                            </div>
                                            <div className="row mb-5">
                                                <div className="col-sm-4 col-12">
                                                    <label htmlFor="annualCaseProd" className="form-label">Annual Case Production</label>
                                                </div>
                                                <div className="col-sm-8 col-12">
                                                    <input type="number" id="annualCaseProd" name="annualCaseProd" placeholder="10,000" className="form-control" value={annualCaseProd} onChange={(e) => { setAnnualCaseProd(e.target.value); setAnnualCaseProdError(false) }} />
                                                    {annualCaseProdError && (<small className="error">This field can not be blank</small>)}
                                                </div>
                                            </div>
                                            <div className="row mb-5">
                                                <div className="col-sm-4 col-12">
                                                    <label htmlFor="ReasonForReachOut" className="form-label">Reason For Reaching Out</label>
                                                </div>
                                                <div className="col-sm-8 col-12">
                                                    <textarea id="ReasonForReachOut" name="ReasonForReachOut" placeholder="Tell us about your inquiry." rows="6" className="form-control" value={reasonForReachOut} onChange={(e) => { setReasonForReachOut(e.target.value); setReasonForReachOutError(false) }}></textarea>
                                                    {reasonForReachOutError && (<small className="error">This field can not be blank</small>)}
                                                </div>
                                            </div>
                                            <div className="row">
                                                <div className="offset-sm-4 col-sm-8 col-12">
                                                    <div className="d-grid gap-2">
                                                        <button type="submit" className="btn btn-primary rounded-pill">Submit</button>
                                                    </div>
                                                </div>
                                            </div>
                                        </form>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="row justify-content-center cms-content paragraph-lg">
                        <div className="col-lg-8 col-md-12 col-sm-12 col-12">
                            <div className="text-center footer-content text-center">
                                <h3>Verre Vert makes wine bottles htmlFor winemakers who are passionate about their craft, dedicated to preserving the environment htmlFor future vintages, and bold enough to blaze trails htmlFor the industry.</h3>
                            </div>
                        </div>
                        <div className="col-lg-8 col-md-12 col-sm-12 col-12">
                            <div className="text-center">
                                <img src={logoImage} alt="logo" />
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}
export default ContactUs