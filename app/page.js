"use client";
import Project from "@/components/Project";
import Head from "next/head";
import Image from "next/image";
import { useCallback, useState } from "react";
import Particles from "react-particles";
import { motion } from "framer-motion";
import { loadSlim } from "tsparticles-slim";
import ReCAPTCHA from "react-google-recaptcha";
import About from "@/components/About";

export default function Home() {
  const [isVerified, setIsVerified] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [formStatus, setFormStatus] = useState({
    submitting: false,
    submitted: false,
    error: null,
  });
  const [formErrors, setFormErrors] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const handleVerification = (value) => {
    setIsVerified(value);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
    // Clear validation errors when a field is changed
    setFormErrors((prevErrors) => ({
      ...prevErrors,
      [name]: "",
    }));
  };

  const validateForm = () => {
    let isValid = true;
    const newErrors = {};

    if (!formData.name) {
      isValid = false;
      newErrors.name = "Name is required";
    }

    if (!formData.email) {
      isValid = false;
      newErrors.email = "Email is required";
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      isValid = false;
      newErrors.email = "Invalid email format";
    }

    if (!formData.subject) {
      isValid = false;
      newErrors.subject = "Subject is required";
    }

    if (!formData.message) {
      isValid = false;
      newErrors.message = "Message is required";
    }

    setFormErrors(newErrors);

    return isValid;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!isVerified) {
      alert("Please complete the reCAPTCHA verification.");
      return;
    }

    if (!validateForm()) {
      return;
    }

    setFormStatus({ submitting: true, submitted: false, error: null });

    try {
      const response = await axios.post(
        "https://example.com/api/submit",
        formData
      );

      if (response.data.success) {
        setFormStatus({ submitting: false, submitted: true, error: null });
      } else {
        setFormStatus({
          submitting: false,
          submitted: false,
          error: "API request failed",
        });
      }
    } catch (error) {
      setFormStatus({
        submitting: false,
        submitted: false,
        error: "API request failed",
      });
    }
  };
  const particlesInit = useCallback(async (engine) => {
    console.log(engine);
    // you can initiate the tsParticles instance (engine) here, adding custom shapes or presets
    // this loads the tsparticles package bundle, it's the easiest method for getting everything ready
    // starting from v2 you can add only the features you need reducing the bundle size
    //await loadFull(engine);
    await loadSlim(engine);
  }, []);

  const particlesLoaded = useCallback(async (container) => {
    await console.log(container);
  }, []);
  console.log(process.env.GOOGLE_CAPTCHA_KEY, "process.env.GOOGLE_CAPTCHA_KEY");
  return (
    <main>
      <div className="grid lg:grid-cols-2 sm:grid-cols-1">
        <div className="lg:fixed lg:right-[50%] ">
          <div className="flex relative justify-center  items-center">
            <Particles
              id="tsparticles"
              init={particlesInit}
              loaded={particlesLoaded}
              options={{
                fpsLimit: 120,
                interactivity: {
                  events: {
                    onClick: {
                      enable: true,
                      mode: "push",
                    },
                    onHover: {
                      enable: true,
                      mode: "repulse",
                    },
                    resize: true,
                  },
                  modes: {
                    push: {
                      quantity: 4,
                    },
                    repulse: {
                      distance: 200,
                      duration: 0.4,
                    },
                  },
                },
                particles: {
                  color: {
                    value: "#ffffff",
                  },
                  links: {
                    color: "#ffffff",
                    distance: 150,
                    enable: true,
                    opacity: 0.5,
                    width: 1,
                  },
                  move: {
                    direction: "none",
                    enable: true,
                    outModes: {
                      default: "bounce",
                    },
                    random: false,
                    speed: 3,
                    straight: false,
                  },
                  number: {
                    density: {
                      enable: true,
                      area: 800,
                    },
                    value: 80,
                  },
                  opacity: {
                    value: 0.5,
                  },
                  shape: {
                    type: "circle",
                  },
                  size: {
                    value: { min: 1, max: 5 },
                  },
                },
                detectRetina: true,
              }}
            />
            <Image
              className="object-cover object-center "
              alt="banner"
              src="/bg3.jpeg"
              width={0}
              height={0}
              style={{ width: "100%", height: "100vh" }}
            />
            <div className="absolute w-full h-full bg-black opacity-30 z-10" />
            <div className="absolute w-full h-full flex flex-col justify-start lg:items-start items-center py-10 px-8 md:px-15 z-20">
              <Image
                className="object-cover object-center "
                alt="logo"
                src="/logo.png"
                width={200}
                height={200}
              />
            </div>
            <div className="absolute w-full h-full flex flex-col justify-center lg:items-start items-center px-8 md:px-15 z-20">
              <motion.h1
                initial={{ y: -100, opacity: 0 }}
                animate={{
                  opacity: 1,
                  y: 0,
                  transition: {
                    duration: 0.5,
                  },
                }}
                className="text-4xl lg:text-5xl  font-bold text-center lg:text-left text-white"
              >
                Welcome to Web and Threads
              </motion.h1>
              <motion.p
                initial={{ x: 100, opacity: 0 }}
                animate={{
                  opacity: 1,
                  x: 0,
                  transition: {
                    duration: 0.5,
                    delay: 0.1,
                  },
                }}
                className="text-white w-2/3 lg:text-lg text-center lg:text-left"
              >
                Your Partner in Innovation
              </motion.p>
              <motion.p
                initial={{ y: 100, opacity: 0 }}
                animate={{
                  opacity: 1,
                  y: 0,
                  transition: {
                    duration: 0.5,
                    delay: 0.2,
                  },
                }}
                className="text-white mt-5"
              >
                At Web and Threads, we specialize in weaving cutting-edge
                technology into exceptional web and mobile app solutions. Our
                team of skilled developers, designers, and strategists
                collaborate to craft digital experiences that stand out. Whether
                you're a startup looking to establish your online presence or an
                established business aiming to evolve, we're here to turn your
                ideas into reality.
              </motion.p>
              <motion.div
                initial={{
                  scaleY: 0,
                  opacity: 0,
                }}
                animate={{
                  scaleY: 1,
                  opacity: 1,
                  transition: {
                    duration: 0.5,
                    delay: 0.3,
                  },
                }}
                className="flex flex-row justify-center items-center mt-5"
                style={{ gap: "10px" }}
              >
                <motion.a
                  whileHover={{
                    scale: 1.1,
                    transition: {
                      duration: 0.2,
                    },
                    boxShadow: "0px 0px 10px 0px rgba(255,255,255,1)",
                  }}
                  whileTap={{
                    scale: 0.9,
                    transition: {
                      duration: 0.2,
                    },
                  }}
                  href="#contact"
                  className="bg-transparent hover:bg-white hover:text-black hover:border-white border-white border-[1px] text-white px-5 py-2 "
                >
                  Have a question?
                </motion.a>
                <motion.a
                  // GLOW ON HOVER
                  whileHover={{
                    scale: 1.1,
                    transition: {
                      duration: 0.2,
                    },
                    boxShadow: "0px 0px 10px 0px rgba(255,255,255,1)",
                  }}
                  whileTap={{
                    scale: 0.9,
                    transition: {
                      duration: 0.2,
                    },
                  }}
                  href="#about"
                  className="bg-primary hover:bg-white hover:text-black hover:border-white border-primary border-[1px] text-white px-5 py-2 "
                >
                  Learn More
                </motion.a>
              </motion.div>
            </div>
          </div>
        </div>
        <div className="lg:absolute lg:left-[50%] flex flex-col px-8 md:px-16 p-10 overflow-y-auto">
          <div>
            <h1 className="text-3xl font-bold text-primary">Who are we?</h1>
            <p className="text-gray-600 mt-5">
              At Web and Threads, we're more than just developers and designers.
              We're a creative ensemble of professionals who are passionate
              about building robust, scalable, and elegant web and mobile
              applications. With a blend of innovation and expertise, we're
              committed to delivering solutions that not only meet your
              expectations but exceed them.
            </p>
          </div>
          <div className="mt-10">
            <h1 className="text-3xl font-bold text-primary">Services</h1>
            <motion.div className="grid lg:grid-cols-2 sm:grid-cols-1 gap-5 mt-5">
              <About
                title="Web Development"
                description="Web application development is an extension of standard software development with distinctive characteristics such as an increased need for an iterative development process. "
                image="/web.png"
              />
              <About
                title="Mobile App Development"
                description="Have a web app but no mobile presence? Mobile Applications, or apps, are specifically designed for use on mobile devices such as smartphones, tablets and digital assistants."
                image="/mobile.png"
              />
              <About
                title="Custom Software Development"
                description="Organisations frequently develop custom software to fill in the gaps of their existing commercial off-the-shelf solutions. "
                image="/custom.png"
              />
              <About
                title="Cloud Computing"
                description="Cloud computing is the availability of computing resources such as processing and data storage upon demand, without active management on the part of the user. The sharing of resources unlocks great economies of scale."
                image="/server.png"
              />
              <About
                title="DevOps Automation"
                description="DevOps involves combining software development tools with operations, which are typically separate functions in a traditional data centre."
                image="/devops.png"
              />
              <About
                title="Software Prototyping"
                description="Iteratively creating incomplete versions of an application, resulting in its progressive improvement and organic scaling. In a dynamic environment, prototyping is the only way to kill the cat."
                image="/prototyping.png"
              />
              <About
                title="System Integration"
                description="Systems integration brings a system’s components together, providing the system with its overarching functionality. Through systems integration product performance and quality are improved as well as reduced response times and operational costs."
                image="/system-integration.png"
              />
              <About
                title="Quality Assurance"
                description="An investigative process that informs stakeholders about an application’s quality and provides the customer with an independent review of the risks of implementing the software. Software testing techniques include verifying the software can perform required tasks and identifying tasks that it can’t perform, which may not be a user requirement."
                image="/medal.png"
              />
              <About
                title="Software Maintenance"
                description="Software maintenance is the process of changing, modifying, and updating software to keep up with customer needs. Software maintenance is done after the product has launched for several reasons including improving the software overall, correcting issues or bugs, to boost performance, and more."
                image="/maintanance.png"
              />
            </motion.div>
          </div>
          <div className="mt-10">
            <h1 className="text-3xl font-bold text-primary">Our Projects</h1>
            <motion.div className="grid lg:grid-cols-3 sm:grid-cols-1 gap-5 mt-5">
              <Project
                title="InstaCare"
                fullDescription="Instacare aims to offer round the clock access to healthcare and a practical way to monitor and live healthy with chronic illnesses. InstaCare is a Mobile App built with the patient in mind, using the latest technology to offer access to quick consultations with medical experts, medication intake and chronic illness monitoring."
                description="Round the clock access to healthcare & chronic illness monitoring"
                image="/instacare.png"
              />
              <Project
                title="Eazefabric"
                fullDescription="We set out to create an online store from the ground up. Our web application development team was really excited for this one. Eazefabric is an online store that offers African print fabric as well as clothing and accessories for all genders & kids. Making use of PHP & WordPress our team was able to design and develop the various store pages from the ground up. From the store, one may browse products easily and be able to make payments via Paypal, VISA and Mastercard gateways. Please feel free to visit Eazefabric.com for all your African print fabric, clothing and accessories."
                description="Minimal & featured store for your African print fabric & clothing"
                image="/eaze-fabric.png"
              />
              <Project
                title="Ubi"
                fullDescription="When Jeffersons hospital approached us with this project, we took it with open arms. Our mobile app development team handled this project with the most love and care. Ubi is a mobile application for Jeffersons hospital patients enabling them to manage their record as well as perform COVID-19 assessment from their mobile devices whenever they feel like it. Above all, patients can view and manage their medical record at any time and from anywhere on the globe, as well as interact with their doctors et cetera."
                description="Patients’ portal & management in a mobile app"
                image="/medic.png"
              />
            </motion.div>
          </div>

          <div className="mt-10">
            <h1 className="text-3xl font-bold text-primary">Contact Us </h1>
            <p>
              If you would like to establish contact or discuss a potential
              project, please do not hesitate to contact us. We are readily
              available and eager to provide assistance.
            </p>
            <div className="mt-5">
              <form onSubmit={handleSubmit}>
                <div className="flex flex-col w-full">
                  <label htmlFor="name">Name</label>
                  <input
                    type="text"
                    name="name"
                    id="name"
                    className={`border-[1px] border-gray-300 p-2 ${
                      formErrors.name ? "border-red-500" : ""
                    }`}
                    onChange={handleChange}
                    value={formData.name}
                  />
                  {formErrors.name && (
                    <p className="text-red-500">{formErrors.name}</p>
                  )}
                </div>
                <div className="flex flex-col w-full mt-5">
                  <label htmlFor="email">Email</label>
                  <input
                    type="email"
                    name="email"
                    id="email"
                    className={`border-[1px] border-gray-300 p-2 ${
                      formErrors.email ? "border-red-500" : ""
                    }`}
                    onChange={handleChange}
                    value={formData.email}
                  />
                  {formErrors.email && (
                    <p className="text-red-500">{formErrors.email}</p>
                  )}
                </div>
                <div className="flex flex-col w-full mt-5">
                  <label htmlFor="subject">Subject</label>
                  <input
                    type="text"
                    name="subject"
                    id="subject"
                    className={`border-[1px] border-gray-300 p-2 ${
                      formErrors.subject ? "border-red-500" : ""
                    }`}
                    onChange={handleChange}
                    value={formData.subject}
                  />
                  {formErrors.subject && (
                    <p className="text-red-500">{formErrors.subject}</p>
                  )}
                </div>
                <div className="flex flex-col mt-5">
                  <label htmlFor="message">Message</label>
                  <textarea
                    name="message"
                    id="message"
                    cols="30"
                    rows="10"
                    className={`border-[1px] border-gray-300 p-2 ${
                      formErrors.message ? "border-red-500" : ""
                    }`}
                    onChange={handleChange}
                    value={formData.message}
                  ></textarea>
                  {formErrors.message && (
                    <p className="text-red-500">{formErrors.message}</p>
                  )}
                </div>
                <div className="mt-5 flex flex-col">
                  <label className="mb-1" htmlFor="recaptcha">
                    Verify to continue{" "}
                  </label>
                  <ReCAPTCHA
                    sitekey={process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY}
                    onChange={handleVerification}
                  />
                </div>
                <div className="flex flex-col mt-5">
                  <button
                    type="submit"
                    className="bg-primary hover:bg-white hover:text-black hover:border-white border-primary border-[1px] text-white px-5 py-2 "
                    disabled={formStatus.submitting}
                  >
                    {formStatus.submitting ? "Submitting..." : "Send Message"}
                  </button>
                </div>
                {formStatus.submitted && (
                  <p className="text-green-500">Form submitted successfully!</p>
                )}
                {formStatus.error && (
                  <p className="text-red-500">
                    Form submission failed. Please try again later.
                  </p>
                )}
              </form>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
