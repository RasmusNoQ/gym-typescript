import { SelectedPage,ClassType } from '@/shared/types'
import image1 from '@/assets/image1.png';
import image2 from '@/assets/image2.png';
import image3 from '@/assets/image3.png'
import image4 from '@/assets/image4.png'
import image5 from '@/assets/image5.png'
import image6 from '@/assets/image6.png'
import { motion } from 'framer-motion';
import HText from '@/shared/HText';
import Class from './ Class';


const classes:Array<ClassType> = [
    {
        name:"Weight Training Classes",
        description:"Lorem laborum velit sit commodo labore. Mollit nostrud quis labore voluptate dolor pariatur esse ex minim. Aliquip et aute aliqua nulla. Laborum non do do occaecat duis elit sunt aute ullamco consequat ipsum occaecat dolor.",
        image:image1,
    },
    {
        name:"Fitness Classes",
        image:image2,
    },
    {
        name:"Ab Core Classes",
        description:"Lorem laborum velit sit commodo labore. Mollit nostrud quis labore voluptate dolor pariatur esse ex minim. Aliquip et aute aliqua nulla. Laborum non do do occaecat duis elit sunt aute ullamco consequat ipsum occaecat dolor.",
        image:image3,
    },
    {
        name:"Adventure Classes",
        description:"Lorem laborum velit sit commodo labore. Mollit nostrud quis labore voluptate dolor pariatur esse ex minim. Aliquip et aute aliqua nulla. Laborum non do do occaecat duis elit sunt aute ullamco consequat ipsum occaecat dolor.",
        image:image4,
    },
    {
        name:"Yoga Classes",
        image:image5,
    },
    {
        name:"Testicles Strengthening Classes",
        description:"Lorem laborum velit sit commodo labore. Mollit nostrud quis labore voluptate dolor pariatur esse ex minim. Aliquip et aute aliqua nulla. Laborum non do do occaecat duis elit sunt aute ullamco consequat ipsum occaecat dolor.",
        image:image6,
    },

]


type Props = {
    setSelectedPage:(value:SelectedPage) => void
}

const OurClasses = ({setSelectedPage}: Props) => {
  return (
    <section id='ourclasses' className='w-full bg-primary-100 py-40'>
        <motion.div
            onViewportEnter={() => setSelectedPage(SelectedPage.OurClasses)}>
                <motion.div
                    className='mx-auto w-5/6'
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.5 }}
                    transition={{ duration: 0.5 }}
                    variants={{
                      hidden: { opacity: 0, x: -50 },
                      visible: { opacity: 1, x: 0 },
                    }}
                >
                    <div className='md:w-3/5'>
                        <HText>OUR CLASSES</HText>
                        <p className='py-5'>Proident laboris excepteur officia consequat ex nisi. Fugiat minim et est commodo sit eiusmod Lorem ex cupidatat qui pariatur dolor ullamco excepteur. Minim dolore occaecat enim aliqua cupidatat duis adipisicing aliquip.</p>
                    </div>

                </motion.div>
                <div
                    className='mt-10 h-[353px] w-full overflow-x-auto overflow-y-hidden'
                >
                    <ul className='w-[2800px] whitespace-nowrap'>
                        {classes.map((item:ClassType,index) =>(
                            <Class 
                                key={index}
                                name={item.name}
                                description={item.description}
                                image={item.image}
                            />
                        ))}
                    </ul>

                </div>
            </motion.div>
        

    </section>
  )
}

export default OurClasses