"use client";
import Project from "@/components/Project";
import Image from "next/image";
import { useCallback } from "react";
import Particles from "react-particles";
import { motion } from "framer-motion";
import { FaEnvelope, FaWhatsapp } from "react-icons/fa6";
import moment from 'moment';

import { loadSlim } from "tsparticles-slim";

export default function Home() {
  const particlesInit = useCallback(async (engine) => {
    // you can initiate the tsParticles instance (engine) here, adding custom shapes or presets
    // this loads the tsparticles package bundle, it's the easiest method for getting everything ready
    // starting from v2 you can add only the features you need reducing the bundle size
    //await loadFull(engine);
    await loadSlim(engine);
  }, []);

  const particlesLoaded = useCallback(async (container) => {}, []);
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
                width={318}
                height={108}
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
                Web and stacks
              </motion.h1>
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
                At Web and stacks, we specialize in weaving cutting-edge
                technology into exceptional web and mobile app solutions. Our
                team of skilled developers, designers, and strategists
                collaborate to craft digital experiences that stand out. Whether
                you are a startup looking to establish your online presence or an
                established business aiming to evolve, we are here to turn your
                ideas into reality.
              </motion.p>
            </div>
          </div>
        </div>
        <div className="lg:absolute lg:left-[50%] flex flex-col px-8 md:px-16 p-10 overflow-y-auto">
          <div>
            <h2 className="text-xl font-bold text-primary">Who are we?</h2>
            <p className="text-gray-600 mt-5">
              At Web and stacks, we are more than just developers and designers.
              We are a creative ensemble of professionals who are passionate
              about building robust, scalable, and elegant web and mobile
              applications. With a blend of innovation and expertise, we are
              committed to delivering solutions that not only meet your
              expectations but exceed them.
            </p>
          </div>
          <div className="mt-10">
            <h2 className="text-xl font-bold text-primary">What we do?</h2>
            <p className="text-gray-600 mt-5">
              We offer a wide range of services to help you achieve your
              business goals. From web and mobile app development to UI/UX
              design, we have got you covered. Our team of experts will work with
              you to understand your requirements and deliver solutions that are
              tailored to your needs.
            </p>
          </div>
          <div className="mt-10">
            <motion.div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-5 mt-5">
               <a
    href="https://flippintickets.com"
    target="_blank"
    rel="noopener noreferrer"
    className="block w-full h-full">
              <Project
                title="Flippin tickets"
                description="FlippinTickets is a simple to use, fully integrated event marketplace for diverse markets. Sell tickets conveniently, manage vendors, lease venues, sell merchandise, manage sponsorships, support charity collections, and expand outreach via affiliate marketing all in one powerful platform.."
                image="/flipm.png"
              /></a>
              <Project
                title="FlipMarket"
                description="FlipMarket is a one-stop shop where buyers and sellers can easily connect on everything from electronics and fashion to local art and unique finds. FlipMarket makes it easy to list, find, and trade nearly anything, whether you're looking for special deals, starting a home business, or organizing your closet."
                image="/mkt.png"
              />
            </motion.div>
          </div>

          <div className="mt-10">
            <h2 className="text-xl font-bold text-primary">Contacts </h2>
            <p>
              If you would like to establish contact or discuss a potential
              project, please do not hesitate to contact us. We are readily
              available and eager to provide assistance.
            </p>
            <p>&nbsp;</p>
            <p>
              <FaEnvelope style={{ display: 'inline', fontSize: 12 }} />&nbsp;&nbsp;business@webandstacks.com
            </p>
            <p>
              <FaWhatsapp style={{ display: 'inline', fontSize: 12 }} />&nbsp;&nbsp;+263 78 970 1984
            </p>
            <p>&nbsp;</p>
            <p>
              © {moment().format('YYYY')} Web and Stacks
            </p>
          </div>
        </div> 
      </div>
    </main>
  );
}
