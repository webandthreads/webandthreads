"use client";
import Project from "@/components/Project";
import Head from "next/head";
import Image from "next/image";
import { useCallback } from "react";
import Particles from "react-particles";
import { motion } from "framer-motion";

import { loadSlim } from "tsparticles-slim";

export default function Home() {
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
                width={100}
                height={100}
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
            <h1 className="text-3xl font-bold text-primary">What we do?</h1>
            <p className="text-gray-600 mt-5">
              We offer a wide range of services to help you achieve your
              business goals. From web and mobile app development to UI/UX
              design, we've got you covered. Our team of experts will work with
              you to understand your requirements and deliver solutions that are
              tailored to your needs.
            </p>
          </div>
          <div className="mt-10">
            <h1 className="text-3xl font-bold text-primary">Our Projects</h1>
            <motion.div className="grid lg:grid-cols-3 sm:grid-cols-1 gap-5 mt-5">
              <Project
                title="Dashboard"
                description="A dashboard for a company to manage their employees and their tasks."
                image="/dash.jpeg"
              />
              <Project
                title="Ecommerce"
                description="An ecommerce website for a company to sell their products."
                image="/bills.jpeg"
              />
              <Project
                title="Portfolio"
                description="A portfolio website for a company to showcase their work."
                image="/bghd.jpeg"
              />
              <Project
                title="Ecommerce"
                description="An ecommerce website for a company to sell their products."
                image="/bills.jpeg"
              />
              <Project
                title="Portfolio"
                description="A portfolio website for a company to showcase their work."
                image="/bghd.jpeg"
              />
              <Project
                title="Dashboard"
                description="A dashboard for a company to manage their employees and their tasks."
                image="/dash.jpeg"
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
              <form action="#">
                <div className="flex flex-col lg:flex-row lg:gap-x-4">
                  <div className="flex flex-col w-full">
                    <label htmlFor="name">Name</label>
                    <input
                      type="text"
                      name="name"
                      id="name"
                      className="border-[1px] border-gray-300 p-2"
                    />
                  </div>
                  <div className="flex flex-col w-full">
                    <label htmlFor="email">Email</label>
                    <input
                      type="email"
                      name="email"
                      id="email"
                      className="border-[1px] border-gray-300 p-2"
                    />
                  </div>
                </div>
                <div className="mt-5 flex flex-col">
                  <label htmlFor="subject">Subject</label>
                  <input
                    type="text"
                    name="subject"
                    id="subject"
                    className="border-[1px] border-gray-300 p-2"
                  />
                </div>
                <div className="flex flex-col mt-5">
                  <label htmlFor="message">Message</label>
                  <textarea
                    name="message"
                    id="message"
                    cols="30"
                    rows="10"
                    className="border-[1px] border-gray-300 p-2"
                  ></textarea>
                </div>
                <div className="flex flex-col mt-5">
                  <button
                    type="submit"
                    className="bg-primary hover:bg-white hover:text-black hover:border-white border-primary border-[1px] text-white px-5 py-2 "
                  >
                    Send Message
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
