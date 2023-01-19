const Footer = () => {
    return <div>
        <footer className="footer py-8em">
            <div className="container">
                <div className="row gy-5 justify-content-center cms-content paragraph-lg">
                    <div className="col-lg-5 col-md-12 col-sm-12 col-12">
                        <div className="newsletter">
                            <span className="sub-title">Newsletter</span>
                            <h3>Get The Latest News.</h3>
                            <div className="input-group input-group-lg input-group-outline">
                                <input type="text" className="form-control" placeholder="Your Email Address" />
                                <button type="submit" className="btn btn-secondary" id="inputGroup-sizing-sm">Subscribe</button>
                            </div>
                        </div>
                    </div>
                    <div className="offset-lg-1 col-lg-5 col-md-12 col-sm-12 col-12">
                        <div className="email-contact">
                            <span className="sub-title">Contact Us</span>
                            <a href="#">info@flowershop.com</a>
                        </div>
                        <div className="copy">
                            <small>Copyright &copy; 2023 Verre Vert, Inc. All rights reserved.</small>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    </div>
}
export default Footer