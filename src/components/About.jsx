import aboutImg from "../assets/about.jpg"
import { ABOUT_TEXT } from "../constants"
import { motion } from "framer-motion";
import cvFile from "../assets/cv.pdf"

const About = () => {
    return (
        <div className="border-b border-neutral-900 pb-4 ">
            <h2 className="my-20 text-center text-4xl">
                About
                <span className="text-neutral-500"> Me</span>
            </h2>
            <div className="flex flex-wrap">
                <motion.div
                    whileInView={{ opacity: 1, x: 0 }}
                    initial={{ opacity: 0, x: -100 }}
                    transition={{ duration: 0.5 }}
                    className="w-full lg:w-1/2 lg:p-8">
                    <div className="flex items-center justify-center">
                        <img className="rounded-2xl" src={aboutImg} alt="about" />
                    </div>
                </motion.div>
                <motion.div
                    whileInView={{ opacity: 1, x: 0 }}
                    initial={{ opacity: 0, x: 100 }}
                    transition={{ duration: 0.5 }}
                    className="w-full lg:w-1/2 mb-[45px]">
                    <div className="flex justify-center lg:justify-start">
                        <p className="my-2 mb-[60px] maxw-xl py-6">{ABOUT_TEXT}</p>
                    </div>
                    <a
                        href={cvFile}
                        download="Arnav_Sinha_CV.pdf"
                        className="mt-4 px-6 py-3 bg-gray-500 text-white rounded-lg hover:bg-gray-700 lg:mb-16"
                    >
                        Download CV
                    </a>
                </motion.div>
            </div>
        </div>
    )
}

export default About
