import React from "react";
import { Button } from "./Button";
import './Footer.css';
import { Link } from 'react-router-dom';



function Footer() {
    return(
        <div className="footer-container" id='footer'>
            <section className="footer-subscription">
                <p className="footer-subscription-heading">
                    Podoba Ci się nasza strona?
                </p>
                <p className="footer-subscription-text">
                    Podaj swój mail pod spodem i zapisz się do newslettera!
                </p>
                <div className="input-areas">
                    <form>
                        <input className="footer-input" type="email" name="email" placeholder="abc@gmail.com"/>
                        <Button buttonStyle='btn--outline'>Subskrybuj</Button>
                    </form>
                </div>
            </section>
            <section className="social-media">
                <div className="social-media-wrap">
                    <div className="footer-logo">
                        <Link to="/" className="social-logo">
                            MP  <i class="fas fa-bacon"/>
                        </Link>
                    </div>
                    <small className="website-rights"> © Maciej Pilarski 55217 INIS4 </small>
                    <div className="social-icons">
                        <Link to={"//www.facebook.com/spacextechnologies"} className="social-icon-link facebook" target='_blank' aria-label="Facebook">
                            <i className="fab fa-facebook-f"></i>
                        </Link>
                        <Link to={"//www.instagram.com/spacex/"} className="social-icon-link instagram" target='_blank' aria-label="Instagram">
                            <i className="fab fa-instagram"></i>
                        </Link>
                        <Link to={"//www.youtube.com/c/SpaceX"} className="social-icon-link youtube" target='_blank' aria-label="Youtube">
                            <i className="fab fa-youtube"></i>
                        </Link>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default Footer;