import { motion } from "framer-motion";

import { styles } from '../styles.js'
import { fadeIn, textVariant } from "../utils/motion";
import { SectionWrapper } from '../hoc';

const Services = () => {


  return (
    <section className={` h-auto flex flex-col items-center py-[40px]`}>
      {/* <div className='h-[15vh] flex flex-col items-center content-center'> */}
      {/* <div className={' opacity-100 w-screen h-[40px]'}>

      </div> */}
        <motion.div variants={textVariant()}>
          <h1 className={`${styles.sectionHeadText} w-[50vw] py-[20px] text-center font-normal pb-4 border-black border-b-2`}>OUR SERVICES</h1>
        </motion.div>


        <motion.section  variants={fadeIn("", "", 0.1, 1)}  className={` py-[20px] justify-evenly flex flex-row flex-wrap outline-4 border-solid w-11/12`}>
          {/* mr-10 */}
          <motion.div whileHover ={{scale:1.05, transition: {duration: .125}}} variants={fadeIn("right", "spring", 0.5, 1.75)} className=' shadow-2xl w-[300px] my-[20px] flex flex-col  '>
            <h2 className={`${styles.sectionHeadSubText} mx-auto text-[35px] w-[200px] text-center border-gray-200 border-b-2 pt-[20px] pb-[10px] text-black `}> BUILDING </h2>
            {/* border border-solid border-gray-300 */}
            <p className={`${styles.sectionSubTextSmall} text-black pt-5 p-3 text-center`}>
            Refine is a licensed General Contractor offering deverse construction services from home building to additions, remodels, commerical amenities and tenant improvements
            </p>
            <ul className={`${styles.sectionSubTextSmall} text-black list-disc py-2 px-8`}>
              <li>
                Custom Homes
              </li>
              <li>
                Garage Conversions (Gyms, “Man Caves, Theaters)
              </li>
              <li>
                Remodels/Additions
              </li>
              <li>
                Whole Home Generators *Licensed Generac Dealer
              </li>
              <li>
                Specialty/Commercial
              </li>
            </ul>

          </motion.div>
          <motion.div whileHover ={{scale:1.05, transition: {duration: .125}}} variants={fadeIn("right", "spring", 1, 1.75)} className='shadow-2xl w-[300px] my-[20px] flex flex-col '>
            <h2 className={`${styles.sectionHeadSubText} mx-auto text-[35px] w-[200px] text-center border-gray-200 border-b-2 pt-[20px] pb-[10px] text-black `}> CONSULTING </h2>
            <p className={`${styles.sectionSubTextSmall} text-black  p-3 text-center`}>
            We offer multiple tiers of consulting services from due diligence to cost feasibility reports and construction management for everyone from the first-time homebuyer to the veteran real estate investor/developer.            </p>

          </motion.div>
          {/* ml-10 */}
          <motion.div whileHover ={{scale:1.05, transition: {duration: .125}}} variants={fadeIn("right", "spring", 1.5, 1.75)} className='hover:scale-110 shadow-2xl w-[300px] my-[20px] flex flex-col '>
            <h2 className={`${styles.sectionHeadSubText} mx-auto text-[35px] w-[275px] text-center border-gray-200 border-b-2 pt-[20px] pb-[10px] text-black `}> PROPERTY CARE </h2>
            <p className={`${styles.sectionSubTextSmall} text-black  p-3 text-center`}>
            We understand the operational strain that maintenance (preventative and reactive) and refurbishment construction efforts can have on Rental and Resort Managers. We can offer services that range from
            HOA/Association compliance to custom improvements and remodeling.
            </p>
            <ul className={`${styles.sectionSubTextSmall} text-black list-disc py-2 px-8`}>
              <li>
                Residential and Commercial Services
              </li>
              <li>
                Exterior Paint, Stucco, Siding
              </li>
              <li>
                Amenities and Custom Improvements (Play Grounds, Summer Kitchens, Pools, Water-Parks, Theme
                Rooms, Theaters).
              </li>
              <li>
                Flatwork, Sidewalk, Curb, and Fence Installation/Repair
              </li>
              <li>
                Balcony/Terrace Refurbishment
              </li>
            </ul>


          </motion.div>

        </motion.section>
    </section>



  )
}
export default SectionWrapper(Services, "services")