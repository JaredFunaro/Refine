import { motion } from "framer-motion";

import { styles } from '../styles.js'
import { fadeIn, textVariant } from "../utils/motion";
import { SectionWrapper } from '../hoc';
import { ar7 } from '../assets';

const Snapshots = () => {

  return (
    <>
    <section className={` h-auto flex flex-col items-center mb-[40px] py-[40px]`}>

        <motion.div variants={textVariant()}>
          <h1 className={`${styles.sectionHeadText} w-[50vw] py-[20px] text-center font-normal pb-4 border-black border-b-2`}> RECENT PROJECT SNAPSHOTS</h1>
        </motion.div>

         <motion.section  variants={fadeIn("", "", 0.1, 1)}  className={` py-[20px] justify-evenly flex flex-row flex-wrap outline-4 border-solid w-11/12`}>
          <motion.div whileHover ={{scale:1.05, transition: {duration: .125}}} variants={fadeIn("right", "spring", 0.5, 1.75)} className=' shadow-2xl w-[375px] mt-[20px] flex flex-col '>
            <img src={ar7}></img>
          </motion.div>
          <motion.div whileHover ={{scale:1.05, transition: {duration: .125}}} variants={fadeIn("right", "spring", 0.75, 1.75)} className=' shadow-2xl w-[375px] mt-[20px] flex flex-col '>
            <img src={ar7}></img>
          </motion.div>
          <motion.div whileHover ={{scale:1.05, transition: {duration: .125}}} variants={fadeIn("right", "spring", 1, 1.75)} className=' shadow-2xl w-[375px] mt-[20px] flex flex-col '>
            <img src={ar7}></img>
          </motion.div>
          <motion.div whileHover ={{scale:1.05, transition: {duration: .125}}} variants={fadeIn("right", "spring", 1.25, 1.75)} className=' shadow-2xl w-[375px] mt-[12px] flex flex-col '>
            <img src={ar7}></img>
          </motion.div>
          <motion.div whileHover ={{scale:1.05, transition: {duration: .125}}} variants={fadeIn("right", "spring", 1.5, 1.75)} className=' shadow-2xl w-[375px] mt-[12px] flex flex-col '>
            <img src={ar7}></img>
          </motion.div>
          <motion.div whileHover ={{scale:1.05, transition: {duration: .125}}} variants={fadeIn("right", "spring", 1.75, 1.75)} className=' shadow-2xl w-[375px] mt-[12px] flex flex-col '>
            <img src={ar7}></img>
          </motion.div>



        </motion.section>
        <motion.div variants={fadeIn("", "", 1.7, 1)}>
            <button className='mx-10 mt-10 w-[150px] h-[60px] bg-black flex justify-center items-center'>
              <p className='text-center'> VIEW GALLERY </p>
            </button>
          </motion.div>
      </section>
    </>
  )
}

export default SectionWrapper(Snapshots, 'snapshots');