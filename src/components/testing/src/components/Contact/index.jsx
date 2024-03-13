import React, { useEffect, useRef, useState } from 'react';
import styles from './style.module.scss';
import Image from 'next/image';
import Rounded from '../../common/RoundedButton';
import { useScroll, motion, useTransform } from 'framer-motion';
import Magnetic from '../../common/Magnetic';

const ContactScreen = () => {
    const [username, setUsername] = useState("")
    const [email, setEmail] = useState("")
    const [phone, setPhone] = useState("+234 ")
    const [reason, setReason] = useState("")
    const [message, setMessage] = useState("")
    const container = useRef(null);
    const { scrollYProgress } = useScroll({
        target: container,
        offset: ["start end", "end end"]
    })
    const x = useTransform(scrollYProgress, [0, 1], [0, 100])
    const y = useTransform(scrollYProgress, [0, 1], [-500, 0])
    const rotate = useTransform(scrollYProgress, [0, 1], [120, 90])

    return (
        <motion.div style={{ y }} ref={container} className={`${styles.contact} mt-[5rem] px-[1rem] lg:mt-0`}>
            <div className={styles.body}>
                <div className='container mx-auto'>
                    <h1 className='major text-3xl lg:text-5xl'>Contact me for <span className='text-primary'>Project / Job</span>. <br /> Thank you.</h1>

                    <div className='grid grid-cols-1 md:grid-cols-2 major gap-16 mt-16'>
                        <input value={username} onChange={(e) => setUsername(e.target.value)} placeholder='Username' className='outline-b outline-none text-xl border-b-2 major border-orange-200 text-white h-[3rem] bg-transparent px-4'/>
                        <input value={email} onChange={(e) => setEmail(e.target.value)} placeholder='Email' className='outline-b outline-none text-xl border-b-2 major border-orange-200 text-white h-[3rem] bg-transparent px-4'/>
                        <input value={phone} onChange={(e) => setPhone(e.target.value)} placeholder='Phone No' className='outline-b outline-none text-xl border-b-2 major border-orange-200 text-white h-[3rem] bg-transparent px-4'/>
                        <input value={reason} onChange={(e) => setReason(e.target.value)} placeholder='Reason: Project / Work / Suggestion' className='outline-b outline-none text-xl border-b-2 major border-orange-200 text-white h-[3rem] bg-transparent px-4' />
                        <textarea value={message} onChange={(e) => setMessage(e.target.value)}  className='outline-b outline-none text-xl border-b-2 major border-orange-200 text-white h-[10rem] bg-transparent px-4' placeholder='Message'/>
                        <div className='flex justify-end items-end'>
                        
                        <button className='bg-orange-= w-[100%] py-3 text-xl rounded-md'>
                          
                        <Rounded>
                              <p>Send Message</p>
                              </Rounded>
                            </button>
                        
                        </div>
                    </div>
                </div>
                <div className={`${styles.title} mt-40 border`}>
                    
                    <motion.div style={{ x }} className={styles.buttonContainer}>
                        <Rounded backgroundColor={"#fd7e14"} className={styles.button}>
                            <p className='major'>Contact</p>
                        </Rounded>
                    </motion.div>
                    
                </div>
                <div className={`${styles.nav} flex flex-col lg:flex-row mt-[150px] lg:mt-[100px]`}>
                    <Rounded>
                    
                        <p>tobiloba.a.salau@gmail.com</p>
                    </Rounded>
                    <Rounded>
                        <p>+234 70 8455 7988</p>
                    </Rounded>
                </div>
                <div className={`${styles.info}`}>
                  
                    <div className='major grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-x-20 lg:gap-x-20 gap-y-10'>
                        <span>
                            <h3>socials</h3>
                            <Magnetic>
                                <p>Github</p>
                            </Magnetic>
                        </span>
                        <Magnetic>
                            <p>Linkedin</p>
                        </Magnetic>
                        <Magnetic>
                            <p>Twitter</p>
                        </Magnetic>
                        <Magnetic>
                            <p>Whatsapp</p>
                        </Magnetic>
                    </div>
                </div>
            </div>
        </motion.div>
    )
}

export default ContactScreen;
