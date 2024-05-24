

const Footer = () => {
    return (
        <div>
            <footer className="footer p-10 bg-base-200 text-base-content">
  <aside>
    <img className=" h-[50px]" src="https://i.ibb.co/nPHNzLj/diabetes.png" alt="" />
    <p>Health Talk.<br/>Providing reliable health care since 1992</p>
    <button className=" btn border-[1px] border-blue-500 text-blue-500">Appointment</button>
  </aside> 
  <nav>
    <h6 className="footer-title">Quick Links</h6> 
    <a className="link link-hover">About</a>
    <a className="link link-hover">Service</a>
    <a className="link link-hover">Doctor</a>
    <a className="link link-hover">departments</a>
    <a className="link link-hover">Online payment</a>
    <a className="link link-hover">Contact Us</a>
    <a className="link link-hover">My Account</a>
  </nav> 
  <nav>
    <h6 className="footer-title">Health Talk Services</h6> 
    <a className="link link-hover">Pediatric Clinic</a>
    <a className="link link-hover">Diagnosis Clinic</a>
    <a className="link link-hover">Laboratory Analysis</a>
    <a className="link link-hover">Gynecological Clinic</a>
    <a className="link link-hover">Personal Counseling</a>
    <a className="link link-hover">Dental Clinic</a>
  
  </nav> 
  <nav>
    <h6 className="footer-title">Working Hours</h6> 
    <a className="link link-hover">Monday - 10 am to 7 pm</a>
    <a className="link link-hover">Tuesday - 10 am to 7 pm
    </a>
    <a className="link link-hover">Thursday - 10 am to 7 pm
    </a>
    <a className="link link-hover">Friday - 10 am to 7 pm
    </a>
    <a className="link link-hover">Saturday - 10 am to 7 pm
    </a>
    <a className="link link-hover">Sunday - 10 am to 7 pm
    </a>
  </nav>
</footer>
            
        </div>
    );
};

export default Footer;