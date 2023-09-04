import Image from "next/image";
import React, { useState } from "react";
import { motion } from "framer-motion";
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  useDisclosure,
  Button,
} from "@chakra-ui/react";

function Project(props) {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <motion.div
      onClick={onOpen}
      whileHover={{ scale: 1.05 }}
      className="flex bg-white hover:cursor-pointer shadow-sm border-[1px] flex-col"
    >
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        className="flex justify-center items-center md:h-[200px] w-full"
      >
        <Image
          className="object-contain object-center"
          alt="banner"
          src={props.image}
          sizes="100%"
          objectFit="contain"
          width={0}
          height={0}
          style={{ width: "100%", height: "100%" }}
        />
      </motion.div>
      <div className="px-5 py-2 bg-white text-black">
        <h1 className="text-sm font-bold">{props.title}</h1>
        <div className="w-[40px] h-1 mt-1 bg-primary"></div>
        <p className="text-xs mt-2">{props.description}</p>
      </div>
      <Modal
        isOpen={isOpen}
        onClose={onClose}
        isCentered
        size="full"
        motionPreset="slideInBottom"
        scrollBehavior="inside"
      >
        <ModalOverlay
          style={{
            backdropFilter: "blur(10px)",
            backgroundColor: "rgba(0,0,0,0.5)",
          }}
        />
        <ModalContent className="flex flex-col  text-white justify-center items-center">
          <ModalHeader className="text-white mt-5">{props.title}</ModalHeader>
          <ModalCloseButton className="text-white absolute right-5 top-5 " />
          <ModalBody>
            {props.image && (
              <Image
                className="object-contain rounded-md m-auto object-center"
                alt="banner"
                src={props.image}
                sizes="100%"
                objectFit="contain"
                width={0}
                height={0}
                style={{ width: "60vw", height: "70vh" }}
              />
            )}
            <p className="text-white mx-8 text-center">
              {props.fullDescription}
            </p>
          </ModalBody>
        </ModalContent>
      </Modal>
    </motion.div>
  );
}

export default Project;
