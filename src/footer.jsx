import react from "react";

function Footer1(){
    return(
    <footer className="footer-bg">
    <footer className="footer-main">
        <div className="title-footer first">
            <div className="mega-mart">
            MegaMart
            </div>
            <section className="footer-first-column">
                <div className="contact-us">Contact Us</div>
                <div className="whats-app">
                    <div>   
                        Whats App    
                    </div>
                <div>+7 980-750-70-11</div>
                </div>
                <div className="call-us">
                    <div >Call Us</div>
                    <div>+7 980-750-70-11</div>
                </div>
            </section>
        </div>
        <div className="title-footer second">
            <section className="footer-second-column">
                <div className="MostPop" >Most Popular Categories</div>
                <br />
                <ul>
                    <li className="footer-ul">Staples</li>
                    <li className="footer-ul">Beverages</li>
                    <li className="footer-ul">Personal Care</li>
                    <li className="footer-ul">Home Care</li>
                    <li className="footer-ul">Baby Care</li>
                    <li className="footer-ul">Vegetables & Fruits</li>
                    <li className="footer-ul">Snacks & Foods</li>
                    <li className="footer-ul">Dairy & Bakery</li>
                </ul>
            </section>
        </div>
        <div className="title-footer third">
            <section className="footer-third-column">
                <div className="Customer">Customer Services</div>
                <br></br>
                <ul>
                    <li className="footer-ul">About Us</li>
                    <li className="footer-ul">Terms & Conditions</li>
                    <li className="footer-ul">FAQ</li>
                    <li className="footer-ul">Privacy Policy</li>
                    <li className="footer-ul">E-waste Policy</li>
                    <li className="footer-ul">Cancellation & Return Policy</li>
                </ul>
            </section>
        </div>
    </footer>
        <div className="copyright-box">
            <article className="footer-copyright"> &copy; 2022 All rights reserved. Reliance Retail Ltd.</article>
        </div>
    </footer>   

    )
}

export default Footer1;