import React, { useEffect, useRef, useState } from 'react';
import styles from './style.module.scss';
import Image from 'next/image';
import Rounded from '../Rounded/Rounded';
import { useScroll, motion, useTransform } from 'framer-motion';
import Magnetic from '../stickyCursor/magnetic';
import { toast } from 'react-toastify';
import ResendMail from '@/utils/sendEmail';
const ContactScreen = () => {
    const [phone, setPhone] = useState("+234 ")
    const [loading, setLoading] = useState(false)
    const container = useRef(null);
    const { scrollYProgress } = useScroll({
        target: container,
        offset: ["start end", "end end"]
    })
    const x = useTransform(scrollYProgress, [0, 1], [0, 100])
    const y = useTransform(scrollYProgress, [0, 1], [-500, 0])
    const rotate = useTransform(scrollYProgress, [0, 1], [120, 90])

    const hasEmptyFields = (formData) => {
        for (const pair of formData.entries()) {
          
          if (String(pair[1]).trim() === "") {
            return true;
          }
        //   return false
        }
        return false;
      };

      const Submit = async (e) => {
        e.preventDefault();
        const formEle = e.target;
        const formDatab = new FormData(formEle);
        formDatab.append("phone_no", phone);

        if(hasEmptyFields(formDatab)) {
            toast.info("Please fill in all fields", {
                position: "top-right",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "light",
              });
              return;
        }
       
        
        setLoading(true);

        ResendMail({formDatab, setLoading})
       
        
      };
    return (
        <motion.div style={{ y }} ref={container} className={`${styles.contact} mt-[5rem] px-[1rem] lg:mt-0`}>
            <div className={styles.body}>
                <form className='container mx-auto' onSubmit={Submit}>
                    <h1 className='mont text-3xl lg:text-5xl'>Contact me for <span className='text-primary'>Project / Job</span>. <br /> Thank you.</h1>

                    <div className='md:grid flex flex-col grid-cols-1 md:grid-cols-2 mont gap-16 mt-16'>
                        <input name="username" placeholder='Username' className='outline-b outline-none text-[15px] lg:text-[17px]  border-b-2 mont border-orange-200 text-white h-[3rem] bg-transparent px-4'/>
                        <input name='email' placeholder='Email' className='outline-b outline-none text-[15px] lg:text-[17px]  border-b-2 mont border-orange-200 text-white h-[3rem] bg-transparent px-4'/>
                        <input name="phone" value={phone} onChange={(e) => setPhone(e.target.value)} placeholder='Phone No' className='outline-b outline-none text-[15px] lg:text-[17px]  border-b-2 mont border-orange-200 text-white h-[3rem] bg-transparent px-4'/>
                        <input name="reason" placeholder='Reason: Project / Work / Suggestion' className='outline-b outline-none text-[15px] lg:text-[17px]  border-b-2 mont border-orange-200 text-white h-[3rem] bg-transparent px-4' />
                        <textarea name="message"  className='outline-b outline-none text-[15px] lg:text-[17px]  col-span-2 border-b-2 mont border-orange-200 text-white h-[10rem] bg-transparent px-4' placeholder='Message'/>
                        <div className='flex justify-end items-end'>
                        
                        <button className='bg-orange-= w-[100%] py-3 text-[15px] lg:text-[17px] rounded-md' type='submit'>
                          
                        <Rounded>
                              <p>{
                                loading ? "Please wait..." : "Send message"
                              }</p>
                              </Rounded>
                            </button>
                        
                        </div>
                    </div>
                </form>
                <div className={`${styles.title} mt-40 border`}>
                    
                    <motion.div style={{ x }} className={styles.buttonContainer}>
                        <Rounded backgroundColor={"#fd7e14"} className={styles.button}>
                            <p className='mont'>Contact</p>
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
                  
                    <div className='mont grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-x-20 lg:gap-x-20 gap-y-10'>
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
