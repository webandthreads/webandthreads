"use client";
import Project from "@/components/Project";
import Image from "next/image";
import { useCallback } from "react";
import Particles from "react-particles";
import { motion } from "framer-motion";

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
            <motion.div className="grid lg:grid-cols-3 sm:grid-cols-1 gap-5 mt-5">
              <Project
                title="Flippin tickets"
                description="An event amarketplace that is user friendly, customisable for multiple markets and ready to plug and play."
                image="/flip.png"
              />
              <Project
                title="Eaze fabric"
                description="A portfolio website for a company to showcase their work."
                image="/eaze.png"
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
              business@webandstacks.com
            </p>
            <p>
              +263 78 970 1984
            </p>
          </div>
        </div>
      </div>
    </main>
  );
}
