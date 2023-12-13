import React, { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom"; // Import Link from react-router-dom
import { useInView } from "react-intersection-observer";
import imageSlide from "../hero/data.js";
import { Logo } from "../../assets/index.js";
import emailjs from "@emailjs/browser";
import "./Contact.css";

const PhoneNumber = "(951) 591-3297";
const phoneLink = `tel:${PhoneNumber}`;

const Title = ({ title, subtitle }) => {
  const { ref, inView } = useInView({
    triggerOnce: false,
  });

  return (
    <div ref={ref} className={`Title ${inView ? "zoomIn" : "zoomOut"}`}>
      <h1> {title}</h1>
      <p>{subtitle}</p>
    </div>
  );
};

const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm(
      "service_p0jbhyl",
      "template_gb44azs",
      form.current,
      "Ah9VqXeck2rq2S5Me"
    );
  };

  const [user_name, setUsername] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [user_email, setEmail] = useState("");
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");
  const [errMsg, setErrMsg] = useState("");
  const [successMsg, setSuccessMsg] = useState("");

  // ========== Email Validation start here ==============
  const emailValidation = () => {
    return String(user_email)
      .toLocaleLowerCase()
      .match(/^\w+([.-]?\w+)*@\w+([-]?\w+)*(\.\w{2,3})+$/);
  };
  // ========== Email Validation end here ================

  const handleSend = (e) => {
    e.preventDefault();
    if (user_name === "") {
      setErrMsg("Username is required!!");
    } else if (phoneNumber === "") {
      setErrMsg("Phone number is required!");
    } else if (user_email === "") {
      setErrMsg("Please give your Email!");
    } else if (!emailValidation(user_email)) {
      setErrMsg("Give a valid Email!");
    } else if (subject === "") {
      setErrMsg("Plese give your Subject!");
    } else if (message === "") {
      setErrMsg("Message is required!");
    } else {
      setSuccessMsg(
        `Thank you ${user_name}, Your Message has been sent Successfully!`
      );
      sendEmail(e);
      setErrMsg("");
      setUsername("");
      setPhoneNumber("");
      setEmail("");
      setSubject("");
      setMessage("");
    }
  };

  const [currentState, setCurrentState] = useState(0);
  useEffect(() => {
    const timer = setTimeout(() => {
      if (currentState === 3) {
        setCurrentState(0);
      } else {
        setCurrentState(currentState + 1);
      }
    }, 8000);
    return () => clearTimeout(timer);
  }, [currentState]);

  const bgImageStyle = {
    backgroundImage: `url(${imageSlide[currentState].url})`,
    backgroundPosition: "center",
    backgroundSize: "cover",
    height: "100%",
    weight: "100%",
    transition: "background-image 3s ease",
    borderRadius: "25px",
  };
  const { ref, inView } = useInView({
    triggerOnce: false,
  });

  return (
    <section className="main">
      <div className="head">
        <Link
          to="/"
          className="headLogo"
          style={{ textDecoration: "none", fontSize: "10px" }}
        >
          <h1>Hecho Por Jenny</h1>
        </Link>
        <a className="headNumber" href={phoneLink}>
          {PhoneNumber}
        </a>
      </div>
      <div style={bgImageStyle}></div>
      <div className="navbarItems">
        <div className="navbarLogo">
          <Link to="/">
            <img
              src={Logo}
              alt="Logo"
              title="Hecho Por Jenny Logo"
              width="1208"
              height="1118"
              loading="eager"
            />
          </Link>
        </div>
        <div className="navLinks">
          <div className="icon-with-text">
            <Link to="/" className="navMenu">
              <h1>Home</h1>
            </Link>
          </div>
        </div>
      </div>
      <div className="countinerStyle">
        <div style={bgImageStyle}></div>
        <div className="transparent-background"></div>
      </div>
      <Title title="Contact" subtitle="Send a Message I'm Here For You" />
      <div
        ref={ref}
        className={`fancyContainer ${inView ? "zoomIn" : "zoomOut"}`}
      >
        <div className="ContactFancyTitle">
          <h1>Hecho Por Jenny</h1>
        </div>
        <div className="contactSVGName">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="757"
            height="80"
            version="1.1"
          >
            <path id="textPath" d="M 10 50 H 400" fill="transparent" />
            <text className="cursive-text">
              <textPath href="#textPath">
                <animateMotion repeatCount="indefinite">
                  <mpath
                    href="#textPath"
                    keyPoints="0;1;0"
                    keyTimes="0;0.5;1"
                    dur="4s"
                  />
                </animateMotion>
                Hecho Por Jenny
              </textPath>
            </text>
          </svg>
        </div>

        <div className="contactSVGLine">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="400"
            height="40"
            version="1.1"
          >
            <path
              id="line"
              d="M 10 20 C 100 5, 150 35, 350 20"
              fill="none"
              stroke-width="3.5"
              stroke-dasharray="200 300"
              stroke-linecap="round"
            >
              <animate
                attributeName="stroke-dashoffset"
                from="0"
                to="500"
                dur="8s"
                repeatCount="indefinite"
              />
            </path>

            <path
              id="inverseLine"
              d="M 350 20 C 250 35, 200 5, 10 20"
              fill="none"
              stroke-width="4"
              stroke-dasharray="200 300"
              stroke-linecap="round"
            >
              <animate
                attributeName="stroke-dashoffset"
                from="-500"
                to="0"
                dur="8s"
                repeatCount="indefinite"
              />
            </path>
          </svg>
        </div>
      </div>

      <div
        ref={ref}
        className={`contact-form ${inView ? "zoomIn" : "zoomOut"}`}
      >
        <form ref={form} className="">
          {errMsg && <p className="outline-designColor">{errMsg}</p>}
          {successMsg && <p className="successMsg">{successMsg}</p>}

          <div className="">
            <div className="">
              <h1 className="">YOUR NAME</h1>
              <input
                onChange={(e) => setUsername(e.target.value)}
                value={user_name}
                name="user_name"
                className={`${
                  errMsg === "Username is required!" && "outline-designColor"
                } contactInput`}
                type="text"
              />
            </div>
            <div className="">
              <h1 className="">Phone Number</h1>
              <input
                onChange={(e) => setPhoneNumber(e.target.value)}
                value={phoneNumber}
                name="phoneNumber"
                className={`${
                  errMsg === "Phone number is required!" &&
                  "outline-designColor"
                } contactInput`}
                type="text"
              />
            </div>
          </div>
          <div className="">
            <h1 className="">Email</h1>
            <input
              onChange={(e) => setEmail(e.target.value)}
              value={user_email}
              name="user_email"
              className={`${
                errMsg === "Please give your Email!" && "outline-designColor"
              } contactInput`}
              type="email"
            />
          </div>
          <div className="">
            <h1 className="">Subject</h1>
            <input
              onChange={(e) => setSubject(e.target.value)}
              name="subject"
              value={subject}
              className={`${
                errMsg === "Plese give your Subject!" && "outline-designColor"
              } contactInput`}
              type="text"
            />
          </div>
          <div className="">
            <h1 className="">Message (Please Include Your City)</h1>
            <textarea
              onChange={(e) => setMessage(e.target.value)}
              value={message}
              name="message"
              className={`${
                errMsg === "Message is required!" && "outline-designColor"
              } contactTextArea`}
              cols="30"
              rows="8"
            ></textarea>
          </div>
          <div className="w-full">
            <button onClick={handleSend} className="">
              Send Message
            </button>
          </div>
          {errMsg && <p className="errorMsg">{errMsg}</p>}
          {successMsg && <p className="successMsg">{successMsg}</p>}
        </form>
      </div>

      <footer className="Footer">
        <div className="footer-content">
          <div className="left-content">
            <h1>Hecho Por Jenny &copy; 2023</h1>
          </div>
          <div className="right-content">
            <a
              href="https://aldahir-cornejo-portfolio.vercel.app/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <h1>Site Design</h1>
            </a>
          </div>
        </div>
      </footer>
    </section>
  );
};

export default Contact;
