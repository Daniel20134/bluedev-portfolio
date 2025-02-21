import { CONTACT } from "../constants";
import { motion } from "motion/react";

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
      <div className="text-center tracking-tighter">
        <motion.p
          whileInView={{ opacity: 1, x: 0 }}
          initial={{ opacity: 0, x: 100 }}
          transition={{ duration: 1 }}
          className="my-4"
        >
          {CONTACT.phoneNo}
        </motion.p>
        <div className="flex flex-col">
          <motion.a
            whileInView={{ opacity: 1, x: 0 }}
            initial={{ opacity: 0, x: -100 }}
            transition={{ duration: 1 }}
            href={`mailto:${CONTACT.email}?subject=Hello&body=I want to connect with you!`} target="_blank" className="my-3">
            {CONTACT.email}
          </motion.a>
          <motion.a
           whileInView={{ opacity: 1, x: 0 }}
           initial={{ opacity: 0, x: 100 }}
           transition={{ duration: 1 }}
            href={`https://x.com/blue_devdan`}
            className="mt-3 hover:underline"
            target="_blank"

          >
            {CONTACT.twitter}
          </motion.a>
        </div>
      </div>
    </div>
  );
};

export default Contact;
