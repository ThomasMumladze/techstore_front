import { FaPhoneAlt } from "react-icons/fa";
import { FaMapMarkerAlt } from "react-icons/fa";
import { CiClock2 } from "react-icons/ci";
import { MdOutlineMail } from "react-icons/md";

const Contact = () => {
    return (
        <div className="contact-page">
            <div className="contact-page__contact-info">
                <div>
                    <FaPhoneAlt />
                    <h4>phone</h4>
                    <p>+995 599 59 59 59</p>
                </div>

                <div>
                    <FaMapMarkerAlt />
                    <h4>address</h4>
                    <p>tbilisi georgia</p>
                </div>
                <div>
                    <CiClock2 />
                    <h4>open time</h4>
                    <p>10:00 am to 23:00pm</p>
                </div>
                <div>
                    <MdOutlineMail />
                    <h4>Email</h4>
                    <p>hello@gmail.com</p>
                </div>
            </div>

            <div className="contact-page__map">
                <iframe
                    width="100%"
                    height="600"
                    src="https://maps.google.com/maps?width=100%25&amp;height=600&amp;hl=en&amp;q=georgia%20tbilisi+(My%20Business%20Name)&amp;t=&amp;z=14&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"
                >
                    <a href="https://www.mapsdirections.info/pl/mapa-populacji/">ile osób mieszka na danym obszarze</a>
                </iframe>
            </div>

            <div className="contact-page__message">
                <h2>leave message</h2>

                <form>
                    <div>
                        <input type="text" placeholder="your name" />
                        <input type="text" placeholder="your email" />
                    </div>

                    <textarea placeholder="your message"></textarea>
                    <button>send message</button>
                </form>
            </div>
        </div>
    );
};

export default Contact;
