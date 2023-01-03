import { SelectedPage } from '@/shared/types';
import {
  HomeModernIcon,
  UserGroupIcon,
  AcademicCapIcon,
} from '@heroicons/react/24/solid';
import { motion } from 'framer-motion';
import HText from '@/shared/HText';
import { BenefitType } from '@/shared/types';
import Benefit from './Benefit';
import ActionButton from '@/shared/ActionButton';
import BenefitsPageGraphic from '@/assets/BenefitsPageGraphic.png'

const benefits:Array<BenefitType> = [
  {
    icon:<HomeModernIcon className='h-6 w-6'/>,
    title:"State Of The Art Facilities",
    description:"Culpa occaecat laboris id anim minim enim ullamco pariatur Lorem tempor deserunt consequat."
  },
  {
    icon:<UserGroupIcon className='h-6 w-6'/>,
    title:"100's of Diverse Classes",
    description:"Labore sit irure deserunt nulla esse ea ipsum quis adipisicing cupidatat aute nostrud."
  },
  {
    icon:<AcademicCapIcon className='h-6 w-6'/>,
    title:"Expert and Pro Trainers",
    description:"Cillum consequat sunt voluptate ut nisi velit reprehenderit irure amet pariatur amet anim deserunt in."
  },
];

const container = {
  hidden:{},
  visible:{
    transition:{staggerChildren:0.2}
  }
}


type Props = {
  setSelectedPage:(value:SelectedPage) => void
}

const Benefits = ({setSelectedPage}: Props) => {
  return (
    <section 
      id='benefits'
      className='mx-auto min-h-full w-5/6 py-20'
    >
      <motion.div onViewportEnter={() => setSelectedPage(SelectedPage.Benefits)}>
        <motion.div 
          className='md:my-5 md:w-3/5'
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.5 }}
          variants={{
            hidden: { opacity: 0, x: -50 },
            visible: { opacity: 1, x: 0 },
          }}>
          <HText>MORE THAN JUST A GYM.</HText>
          <p className='my-5 text-sm'>
            We provide world class fitness equipment, trainers and classes to
            get you to your ultimate fitness goals with ease. We provide true
            care into each and every member.
          </p>
        </motion.div>

        {/* benefits */}
        <motion.div 
          className="md:flex items-center justify-between gap-8 mt-5"
          initial="hidden"
          whileInView="visible"
          viewport={{once:true,amount:0.5}}
          variants={container}
        >
          {benefits.map((benefit:BenefitType) =>(
            <Benefit 
              key={benefit.title} 
              icon={benefit.icon}
              title={benefit.title}
              description={benefit.description}
              setSelectedPage={setSelectedPage}
            />
          ))}
        </motion.div>
        
        {/* Graphics and description */}
        <div className='mt-16 items-center justify-between gap-20 md:mt-28 md:flex'>
          {/* graphic */}
          <img
            className='mx-auto'
            alt='benefits-page-graphic'
            src={BenefitsPageGraphic}/>

          {/* description */}
          <div>
            {/* title */}
            <div className='relative'>
              <div 
                className='before:absolute before:-top-20 before:-left-20 before:z-[1] before:content-abstractWaves'>
                  <motion.div
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.5 }}
                    transition={{ duration: 0.5 }}
                    variants={{
                      hidden: { opacity: 0, x: 50 },
                      visible: { opacity: 1, x: 0 },
                    }}
                    >
                    <HText>MILLIONS OF HAPPY MEMBERS GETTING{" "}
                    <span className='text-primary-500'>FIT</span>
                    </HText>
                  </motion.div>
                </div>
            </div>
            {/* description */}
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.5 }}
              transition={{ delay:0.2,duration: 0.5 }}
              variants={{
                hidden: { opacity: 0, x: 50 },
                visible: { opacity: 1, x: 0 },
              }}>
            <p className='my-5'>
              Ea et do laborum ad occaecat laboris. Aliqua elit qui 
              proident enim minim. Minim amet sunt in eu pariatur veniam. 
              Consectetur quis nisi nisi elit dolor quis non dolor. 
              Et excepteur elit labore in reprehenderit sunt consectetur nostrud sunt nostrud minim.
            </p>
            <p className='mb-5'>
              Et consequat occaecat officia amet consequat elit in pariatur 
              Lorem irure consequat amet ipsum do. 
              Eiusmod pariatur commodo non culpa ea adipisicing occaecat. 
              Elit in eu quis minim sit minim. 
              Deserunt incididunt aute reprehenderit dolor esse qui 
              laboris incididunt labore magna exercitation irure occaecat.
            </p>
            </motion.div>

            {/* button */}
            <div className='relative mt-16'>
              <div className='before:absolute before:-bottom-20 before:right-40 before:z-[-1] before:content-sparkles'>
                <ActionButton setSelectedPage={setSelectedPage}>
                  Join Now
                </ActionButton>
              </div>

            </div>
          </div>
        </div>

      </motion.div>
    </section>
  )
}

export default Benefits