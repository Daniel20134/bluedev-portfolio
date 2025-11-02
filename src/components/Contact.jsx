import { CONTACT } from "../constants";
import { motion } from "motion/react";
import { BiLogoGmail } from "react-icons/bi";
import { IoLogoTiktok } from "react-icons/io5";
import { FaSquareXTwitter } from "react-icons/fa6";
import { IoLogoWhatsapp } from "react-icons/io";

const Contact = () => {
  return (
    <div className="border-b border-neutral-900 pb-20">
      <motion.h1
        whileInView={{ opacity: 1, y: 0 }}
        initial={{ opacity: 0, y: -100 }}
        transition={{ duration: 0.5 }}
        className="my-10 text-center text-4xl tracking-tight font-bold"
      >
        Connect with Me
      </motion.h1>
      <div className="text-center tracking-tighter ">
        <motion.p
          whileInView={{ opacity: 1, x: 0 }}
          initial={{ opacity: 0, x: 100 }}
          transition={{ duration: 1 }}
          className="my-4 flex items-center justify-center gap-2 hover:underline cursor-pointerk"
        >
          <IoLogoWhatsapp />
          {CONTACT.phoneNo}
        </motion.p>
        <div className="flex flex-col gap-3">
          <motion.a
            whileInView={{ opacity: 1, x: 0 }}
            initial={{ opacity: 0, x: -100 }}
            transition={{ duration: 1 }}
            href={`mailto:${CONTACT.email}?subject=Hello&body=I want to connect with you!`} target="_blank" className="my-3 flex justify-center items-center gap-2 hover:underline">
              <BiLogoGmail />
            {CONTACT.email}
          </motion.a>
          <motion.a
           whileInView={{ opacity: 1, x: 0 }}
           initial={{ opacity: 0, x: 100 }}
           transition={{ duration: 1 }}
            href={`https://x.com/AdelolaDa46806`}
            className="hover:underline flex items-center justify-center gap-2"
            target="_blank"

          >
            <FaSquareXTwitter />
            {CONTACT.twitter}
          </motion.a>
           <motion.a
            whileInView={{ opacity: 1, x: 0 }}
            initial={{ opacity: 0, x: -100 }}
            transition={{ duration: 1 }}
            href={"https://www.tiktok.com/@daniel_jayden2?_r=1&_t=ZS-913xrKfpUci"} target="_blank" className="my-3 flex justify-center items-center gap-2 hover:underline">
              <IoLogoTiktok />
            {CONTACT.tiktok}
          </motion.a>
        </div>
      </div>
    </div>
  );
};

export default Contact;
