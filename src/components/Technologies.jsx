import { RiReactjsLine } from "react-icons/ri"
import { SiJavascript } from "react-icons/si";
import { TbBrandNextjs } from "react-icons/tb"
import { SiMongodb } from "react-icons/si"
import { FaHtml5 } from "react-icons/fa"
import { DiRedis } from "react-icons/di"
import { FaNodeJs } from "react-icons/fa"
import { FaCss3Alt } from "react-icons/fa"
import { animate, motion, transform } from "framer-motion"

const iconVarients = (duration) => ({
  initial: { y: -10 },
  animate: {
    y: [10, -10],
    transition: {
      duration: duration,
      ease: "linear",
      repeat: Infinity,
      repeatType: "reverse",
    },
  },
});

const Technologies = () => {
  return (
    <div className="border-b border-neutral-800 pb-24">
      <motion.h2
        whileInView={{ opacity: 1, y: 0 }}
        initial={{ opacity: 0, y: -100 }}
        transition={{ duration: 1.5 }}
        className="my-20 text-center text-4xl">Technologies</motion.h2>
      <motion.div
        whileInView={{ opacity: 1, x: 0 }}
        initial={{ opacity: 0, x: -100 }}
        transition={{ duration: 1.5 }}
        className="flex flex-wrap items-center justify-center gap-4">
        <motion.div
          variants={iconVarients(2.5)}
          initial="initial"
          animate="animate"
          className="rounded-2xl border-4 border-neutral-800 p-4">
          <a href="https://react.dev/" target="_blank" rel="noopener noreferrer">
            <RiReactjsLine className="text-7xl text-cyan-400" />
          </a>
        </motion.div>
        <motion.div
          variants={iconVarients(3)}
          initial="initial"
          animate="animate"
          className="rounded-2xl border-4 border-neutral-800 p-4">
          <a href="https://en.wikipedia.org/wiki/JavaScript" target="_blank" rel="noopener noreferrer">
            <SiJavascript className="text-7xl text-yellow-300" />
          </a>
        </motion.div>
        <motion.div
          variants={iconVarients(5)}
          initial="initial"
          animate="animate"
          className="rounded-2xl border-4 border-neutral-800 p-4">
          <a href="https://www.mongodb.com/" target="_blank" rel="noopener noreferrer">
            <SiMongodb className="text-7xl text-green-500" />
          </a>
        </motion.div>
        <motion.div
          variants={iconVarients(2)}
          initial="initial"
          animate="animate"
          className="rounded-2xl border-4 border-neutral-800 p-4">
          <a href="https://en.wikipedia.org/wiki/HTML" target="_blank" rel="noopener noreferrer">
            <FaHtml5 className="text-7xl text-orange-500" />
          </a>
        </motion.div>
        <motion.div
          variants={iconVarients(6)}
          initial="initial"
          animate="animate"
          className="rounded-2xl border-4 border-neutral-800 p-4">
          <a href="https://nodejs.org/en" target="_blank" rel="noopener noreferrer">
            <FaNodeJs className="text-7xl text-green-500" />
          </a>
        </motion.div>
        <motion.div
          variants={iconVarients(4)}
          initial="initial"
          animate="animate"
          className="rounded-2xl border-4 border-neutral-800 p-4">
          <a href="https://en.wikipedia.org/wiki/CSS" target="_blank" rel="noopener noreferrer">
            <FaCss3Alt className="text-7xl text-sky-500" />
          </a>
        </motion.div>
      </motion.div>
    </div>
  )
}

export default Technologies
