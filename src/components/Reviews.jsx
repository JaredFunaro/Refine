import { motion } from "framer-motion";
import { useState } from 'react';
import { styles } from '../styles.js'
import { fadeIn, textVariant } from "../utils/motion";
import { SectionWrapper } from '../hoc';

const reviewArray = [
  {
    Name: 'Big Tuna',
    Body: 'they were awesome'
  },
  {
    Name: 'Michael. S',
    Body: 'they were awesome'
  },
  {
    Name: 'Dwoite Shroot',
    Body: 'they were awesome'
  },
  {
    Name: 'Pamalaaaaa',
    Body: 'they were awesome'
  },
  {
    Name: 'Kevin Alone',
    Body: 'they were awesome'
  },
  {
    Name: 'Ryan',
    Body: 'they were awesome'
  }
]

// const Reviews = () => {

// const [isFlipped, setIsFlipped] = useState(false)

// const handleClick = () => {
//   setIsFlipped(!isFlipped);
// }

//   return (
//     <>
//     <section className={` h-auto flex flex-col items-center mb-[40px]`}>

//         <motion.div variants={textVariant()}>
//           <h1 className={`${styles.sectionHeadText} w-[50vw] py-[20px] text-center font-normal pb-4 border-black border-b-2`}> HEAR FROM OUR CLIENTS </h1>
//         </motion.div>

//          <motion.section  variants={fadeIn("", "", 0.1, 1)}  className={` py-[20px] justify-evenly flex flex-row flex-wrap outline-4 border-solid w-11/12`}>

//           <motion.div  onClick={handleClick} animate={{rotateY: isFlipped? 360 : 0, transition: {duration: .5}}} whileHover ={{scale:1.05, transition: {duration: .125}}} variants={fadeIn("down", "spring", 0.5, 1.75)} className=' shadow-xl w-[325px] h-[200px] mt-[50px] flex flex-col bg-gray-200'>
//             <div className={`${isFlipped ? "hidden" : ""} h-[200px]  front-card bg-gray-200 shadow-xl flex flex-col justify-center items-center`}>
//               <h1 className={`${styles.sectionHeadSubText} mx-auto py-[20px]`}>Andy S.</h1>
//               <p className='mx-auto text-black'>★★★★★</p>
//             </div>

//             <div className={`${isFlipped ? "" : "hidden"} h-[200px] front-card bg-gray-200 shadow-xl flex flex-col justify-center items-center`}>
//               <h1 className={`${styles.sectionHeadSubText} mx-auto py-[20px]`}>Andy B.</h1>
//               <p className='mx-auto text-black'>★★★★★</p>
//             </div>

//           </motion.div>

//           <motion.div  onClick={handleClick} animate={{rotateY: isFlipped? 360 : 0, transition: {duration: .5}}} whileHover ={{scale:1.05, transition: {duration: .125}}} variants={fadeIn("down", "spring", 0.5, 1.75)} className=' shadow-xl w-[325px] h-[200px] mt-[50px] flex flex-col bg-gray-200'>
//             <div className={`${isFlipped ? "hidden" : ""} h-[200px] front-card bg-gray-200 shadow-xl flex flex-col justify-center items-center`}>
//               <h1 className={`${styles.sectionHeadSubText} mx-auto py-[20px]`}>Andy S.</h1>
//               <p className='mx-auto text-black'>★★★★★</p>
//             </div>

//             <div className={`${isFlipped ? "" : "hidden"} h-[200px] front-card bg-gray-200 shadow-xl flex flex-col justify-center items-center`}>
//               <h1 className={`${styles.sectionHeadSubText} mx-auto py-[20px]`}>Andy B.</h1>
//               <p className='mx-auto text-black'>★★★★★</p>
//             </div>

//           </motion.div>

//           <motion.div whileHover ={{scale:1.05, transition: {duration: .125}}} variants={fadeIn("down", "spring", 1, 1.75)} className=' shadow-xl w-[325px] h-[200px] mt-[50px] flex flex-col bg-gray-200'>
//             <h1 className={`${styles.sectionHeadSubText} mx-auto py-[20px]`}> Andy S.</h1>
//             <p className='mx-auto text-black'>★★★★★</p>
//           </motion.div>

//           <motion.div whileHover ={{scale:1.05, transition: {duration: .125}}} variants={fadeIn("down", "spring", 1.25, 1.75)} className=' shadow-xl w-[325px] h-[200px] mt-[50px] flex flex-col bg-gray-200'>
//             <h1 className={`${styles.sectionHeadSubText} mx-auto py-[20px]`}> Andy S.</h1>
//             <p className='mx-auto text-black'>★★★★★</p>
//           </motion.div>

//           <motion.div whileHover ={{scale:1.05, transition: {duration: .125}}} variants={fadeIn("down", "spring", 1.5, 1.75)} className=' shadow-xl w-[325px] h-[200px] mt-[50px] flex flex-col bg-gray-200'>
//             <h1 className={`${styles.sectionHeadSubText} mx-auto py-[20px]`}> Andy S.</h1>
//             <p className='mx-auto text-black'>★★★★★</p>
//           </motion.div>

//           <motion.div whileHover ={{scale:1.05, transition: {duration: .125}}} variants={fadeIn("down", "spring", 1.75, 1.75)} className=' shadow-xl w-[325px] h-[200px] mt-[50px] flex flex-col bg-gray-200'>
//             <h1 className={`${styles.sectionHeadSubText} mx-auto py-[20px]`}> Andy S.</h1>
//             <p className='mx-auto text-black'>★★★★★</p>
//           </motion.div>

//         </motion.section>
//       </section>
//     </>
//   )
// }

const ReviewItem = ({ name, body, index }) => {
  const [isFlipped, setIsFlipped] = useState(false);

  const handleClick = () => {
    setIsFlipped(!isFlipped);
  };

  return (
    <motion.div
      className={`cursor-pointer items-center justify-center shadow-xl w-[325px] h-[200px] mt-[50px] flex flex-col bg-gray-200`}
      onClick={handleClick}
      whileHover={{ scale: 1.05, transition: { duration: 0.125 } }}
      variants={fadeIn("down", "spring", index * 0.5, 1.75)}
      // animate={{rotateY: isFlipped? 360 : 0, transition: {duration: .5}}}
      whileTap={{scale: 0.9}}
    >
      <motion.div className="flip-card-inner">
        <div className={`flip-card-front ${isFlipped ? "hidden" : ""} text-center`}>
          <h1 className={`${styles.sectionHeadSubText} mx-auto pb-[20px]`}>{name}</h1>
          <p className="mx-auto text-black">★★★★★</p>
          <p className="mx-auto text-black py-[10px]">click to read more</p>
        </div>
        <div className={`flip-card-back ${isFlipped ? "" : "hidden"} text-center`}>
          <h1 className={`${styles.sectionSubText} mx-auto py-[20px]`}>{`"${body}"`}</h1>
          <p className="mx-auto text-black">★★★★★</p>
        </div>
      </motion.div>
    </motion.div>
  );
};

const Reviews = () => {
  return (
    <>
      <section className={`h-[90vh] flex flex-col items-center`}>
        <motion.div variants={textVariant()}>
          <h1 className={`${styles.sectionHeadText} w-[50vw] py-[20px] text-center font-normal pb-4 border-black border-b-2`}> HEAR FROM OUR CLIENTS </h1>
        </motion.div>

        <motion.section variants={fadeIn("", "", 0.1, 1)} className={`py-[20px] justify-evenly flex flex-row flex-wrap outline-4 border-solid w-11/12`}>
          {reviewArray.map((review, index) => (
            <ReviewItem key={index} index={index} name={review.Name} body={review.Body} />
          ))}
        </motion.section>
      </section>
    </>
  );
};


export default SectionWrapper(Reviews, 'reviews');
