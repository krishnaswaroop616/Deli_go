import React from "react";
import "./Footer.css";


const Footer = () => {
    return (
        <div className="Footer">
            <div className="footer " id="footer">
            <div className="footer-content">
                <h1>DeliGo</h1>
                <div className="footer-content-icons">
                    <div><i className="fa-brands fa-twitter"></i></div>
                    <div><i className="fa-brands fa-linkedin-in"></i></div>
                    <div><i className="fa-brands fa-instagram"></i></div>
                </div>
            </div>
            <div className="footer-company">
                <h3>COMPANY</h3>
                    <a href="#" className="text-light">Home</a>
                    <a href="#"  className="text-light">About us</a>
                    <a href="#"  className="text-light">Delivery</a>
                    <a href="#"  className="text-light">Privacy policy</a>
            </div>
            <div className="footer-contact">
                <h3>GET IN TOUCH</h3>
                <p><i className="fa-solid fa-phone"></i> +91-xxxxxxxxxx</p>
                <p><i className="fa-solid fa-envelope"></i> contact@deligo.com</p>
            </div>
        </div>
            <div className="copyright">
                <p>Copyright 2024 &copy; DeliGo.com-All Right Reserved</p>
            </div>
        </div>
       
    );
}

export default Footer;