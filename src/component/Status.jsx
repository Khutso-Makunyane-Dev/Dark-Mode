import { MdOutlineDesignServices } from "react-icons/md";
import { GoCodeSquare } from "react-icons/go";
import { BsJournalCode } from "react-icons/bs";
import { VscRobot } from "react-icons/vsc";
import { motion } from "framer-motion";

// ✅ Reusable Card Component

function StatusCard({ Icon, color, title, description }) {
  return (
    <motion.div
      className="flex justify-center items-center w-full h-full p-2 sm:p-4"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      viewport={{ once: true }}
    >
      <motion.div
        className="flex flex-col justify-center gap-2 w-full rounded-2xl text-white bg-[#0E0E10] border border-[#6E6E6E] p-4 hover:scale-105 transition-transform duration-300"
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.98 }}
        initial={{ opacity: 0, scale: 0.95 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5, ease: "easeOut" }}
      >
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1, duration: 0.4 }}
        >
          <Icon className="text-5xl" style={{ color }} />
        </motion.div>

        <motion.h1
          className="font-bold text-lg"
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.4 }}
        >
          {title}
        </motion.h1>

        <motion.p
          className="text-sm text-gray-300 leading-relaxed"
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.4 }}
        >
          {description}
        </motion.p>
      </motion.div>
    </motion.div>
  );
}

// ✅ Main Section that uses the Card
export default function Status() {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-3  w-full ">
      <StatusCard
        Icon={MdOutlineDesignServices}
        color="#DA0E9D"
        title="UX UI Designer"
        description="Creative and detail-oriented designer focused on crafting intuitive, user-centered digital experiences. Skilled in wireframing, prototyping, responsive design, and usability testing to deliver interfaces that delight users."
      />

      <StatusCard
        Icon={GoCodeSquare}
        color="#11DAD1"
        title="Software Developer"
        description="Junior developer experienced in building web, mobile, and desktop applications. Works across the full development lifecycle, creating scalable, maintainable, and efficient solutions using modern technologies."
      />

      <StatusCard
        Icon={VscRobot}
        color="#FFD700"
        title="AI/ML Developer"
        description="Developer with hands-on experience applying AI and machine learning to real-world problems. Skilled in Python, data analysis, and model implementation to enhance automation, insights, and intelligent features in applications"
      />
    </div>
  );
}
