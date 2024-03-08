'use client';
import React from 'react'
import styles from './style.module.scss';
import Image from 'next/image';
export default function index({index, title, manageModal, company, duration}) {

    return (
        <div onMouseEnter={(e) => {manageModal(true, index, e.clientX, e.clientY)}} onMouseLeave={(e) => {manageModal(false, index, e.clientX, e.clientY)}} className={styles.project}>
           {/* <p className='absolute left-4 text-xl top-[50px]'>0{index + 1}<span className='ml-2 text-primary'>/</span></p> */}
           <div className='flex items- gap-6'>
            <p>{duration}</p>
 <div>
 <h2 className='text-4xl'>{title}</h2>
 <p className='mt-4'>{company}</p>
 </div>
           </div>
           
            {/* <p>Design & Development</p> */}
            {/* <Image src="/right-arrow.png" alt='' width={50} height={30} className='-rotate-45'/> */}

        </div>
    )
}
