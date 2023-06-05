import { motion } from 'framer-motion';
import { fadeIn, textVariant} from '../utils/motion';
import { mansion } from '../assets';
import { SectionWrapper } from '../hoc';
import { styles } from '../styles';

const HomeAbout = () => {


  return (
    <>
      <motion.section  variants={fadeIn("", "", 0.1, 1)} className=' h-auto flex flex-row'>
        <motion.div variants={fadeIn(.3, 1)} className='w-[55%] hidden-mobile'>
          <img src={mansion}></img>
        </motion.div>
        <motion.section className='w-[45%] flex flex-col '>
          <motion.div variants={textVariant(.5)} >
            <h2 className={`${styles.sectionHeadSubText} mx-auto text-[35px] w-[200px] text-center border-black border-b-2 pt-[40px] pb-[10px] text-black `}> ABOUT US </h2>
          </motion.div>
          <motion.div variants={textVariant(1)}>
            <p className={`${styles.sectionSubTextSmall} text-black pt-5 px-10`}>
                The vision and practices implemented at the founding of our company remain, at their core, the same today as they did over a decade ago. From the top down, we focus on being of service at every step of
                the way throughout your project and maintain routine personal visits with both our clients and project sites to ensure satisfaction and quality of work through completion.

            </p>
            <p className={`${styles.sectionSubTextSmall} text-black pt-5 px-10`}>
                Commitments made at the preconstruction phases are maintained throughout the course of the project and into the future. At every opportunity, we further Refine not only our practices as construction
                professionals but also our client relationships that have allowed us a future in the industry that we have
                a passion for.
            </p>
          </motion.div>
          <motion.div variants={fadeIn("", "", 1.5, 1)} className='pb-[40px]'>
            <button className='mx-10 mt-10 w-[130px] h-[60px] bg-black flex justify-center items-center'>
              <p className='text-center'> SEE MORE </p>
            </button>
          </motion.div>


        </motion.section>
      </motion.section>
    </>
  )
}

export default SectionWrapper(HomeAbout, "homeabout");
