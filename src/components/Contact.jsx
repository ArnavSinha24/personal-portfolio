import { CONTACT } from "../constants"
import { motion } from "framer-motion"
import { useState } from "react"

const Contact = () => {

  const [isCopied, setIsCopied] = useState(false);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(CONTACT.email).then(() => {
      setIsCopied(true);
      setTimeout(() => setIsCopied(false), 2000); // Reset the copied state after 2 seconds
    });
  };

  return (
    <div className="border-b border-neutral-900 pb-20">
      <motion.h2
        whileInView={{ opacity: 1, y: 0 }}
        initial={{ opacity: 0, y: -100 }}
        transition={{ duration: 0.5 }}
        className="my-10 text-center text-4xl">Get in Touch</motion.h2>
      <div className="text-center tracking-tighter">
        <motion.p
          whileInView={{ opacity: 1, x: 0 }}
          initial={{ opacity: 0, x: -100 }}
          transition={{ duration: 1 }}
          className="my-4">
          {CONTACT.address}
        </motion.p>
        <motion.p
          whileInView={{ opacity: 1, x: 0 }}
          initial={{ opacity: 0, x: 100 }}
          transition={{ duration: 1 }}
          className="my-4">
          {CONTACT.phoneNo}
        </motion.p>
        <div className="inline-flex items-center">
          <button
            onClick={handleCopyEmail}
            className="border-b text-gray-300 hover:text-gray-400"
            aria-label="Copy email address"
          >
            {CONTACT.email}
          </button>
          {isCopied && (
            <span className="ml-2 text-green-500">Copied!</span>
          )}
        </div>
      </div>
    </div>
  )
}

export default Contact
