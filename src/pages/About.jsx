import { motion } from "framer-motion";
import AboutProfile from "../assets/AboutProfile.png";

import Cv from '../assets/CvApplication.pdf'
import { MdOutlineDownloading } from "react-icons/md";
import { FaGithub, FaLinkedinIn, FaFacebookF, FaInstagram } from "react-icons/fa";


const IconCard = ({ icon: Icon, link }) => {
  return (
    <div className="flex justify-center items-center text-[#D5D5D5] w-8 sm:w-10 h-8 p-2 sm:h-10 rounded-full bg-[#0E0E10] border border-[#868686] transition-all duration-300 hover:shadow-[0_0_10px_#ffffff50] hover:scale-105">
      <a
        href={link}
        target="_blank"
        rel="noopener noreferrer"
        className="flex justify-center items-center text-xs sm:text-md"
         style={{
                                filter: "drop-shadow(0 0 1px #ffffff) drop-shadow(0 0 6px rgba(255,255,255,0.2))",
                            }}
      >
        <Icon
          className="text-xl transition-all duration-300"
          style={{
            textShadow: "0 0 1px #ffffff, 0 0 8px rgba(255,255,255,0.4)",
          }}
        />
      </a>
    </div>
  );
};



export default function About() {
  return (
    <div className="flex flex-col sm:flex-row justify-center items-center gap-6 w-full h-auto p-2 sm:p-8 ">
      
      {/* Profile Image Section */}
      <div className="w-auto h-auto p-2 bg-[#0A0A0B] rounded-2xl shadow-md">
        <img
          src={AboutProfile}
          alt="Profile"
          className="hidden sm:flex w-120 rounded-xl object-cover"
        />
      </div>

      {/* Text Section */}
      <div className="flex flex-col w-full sm:w-[60%] gap-2 h-auto sm:h-full  p-1 sm:p-4 rounded-2xl shadow-md">
        <p className="text-[#11DAD1] font-bold tracking-widest flex justify-center sm:justify-start">ABOUT ME</p>
        <h1 className="text-3xl sm:text-4xl text-white font-extrabold flex justify-center sm:justify-start mb-2">
          WHO AM I?
        </h1>

        {[
          "I’m a Junior Software Developer, AI/ML enthusiast and UX/UI Designer with hands-on experience building web, mobile, and desktop applications using modern, scalable technologies. I work across the full development lifecycle — from user-centered design and frontend development to backend systems and deployment — creating solutions that are both intuitive and technically robust.",
          "Trained through the Power Learn Project (PLP) Academy and additional professional certifications, I have developed strong skills in frontend, backend, and applied AI/ML development. My experience includes working with React, React Native, Node.js, Express, Django, Python, and integrating intelligent features that enhance automation, data handling, and decision-making within applications.",
          "One of my proudest achievements is QueueCare, a smart queue and file management system built for healthcare facilities. It streamlines patient flow, digitizes records, and reduces waiting times — improving efficiency and overall user experience.",
          "Let’s build the future — one line of code at a time."
        ].map((text, i) => (
          <motion.p
            key={i}
            className="text-white text-sm sm:text-base text-center sm:text-left leading-relaxed "
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 + i * 0.15 }}
          >
            {text}
          </motion.p>
        ))}
        <div className="w-full h-0.5 bg-[#0E0E10] my-6"></div>

            <a
                href={Cv}
                download="Khutso_Resume.pdf"
                className="flex justify-center items-center w-full sm:w-40 p-3 gap-2 bg-[#000] text-sm text-[#D5D5D5] hover:text-[#11DAD1] border border-[#D5D5D5] hover:border-[#11DAD1] rounded-md duration-300"
                        >
                    Download Cv
                <MdOutlineDownloading size={18} />
                        
            </a>

            <div className="flex items-center justify-center sm:justify-start w-full h-12 gap-2  mt-2">
              <IconCard icon={FaGithub} link="https://github.com/khutso-student" />
               <IconCard icon={FaLinkedinIn } link="https://www.linkedin.com/in/khutso-makunyane-5353b1329" />
                <IconCard icon={FaFacebookF} link="https://www.facebook.com/khutso.makunyane.2025/" />
                 <IconCard icon={FaInstagram} link="https://www.instagram.com/mern_engineer" />
            </div>
      </div>
    </div>
  );
}
