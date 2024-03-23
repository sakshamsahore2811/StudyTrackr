import React from 'react';
import styles from './style.module.css';
import Image from 'next/image';
import brain from '../../../../public/images/brain.png';
import brain2 from '../../../../public/images/brain2.png';
import arrowbrain from '../../../../public/images/arrowbrain.png';

export default function Brain() {
  return (
    <>
    <div className={styles.container}>
        <div className={styles.imgcontainer}>
        <div className={styles.image}>
        <Image src={brain2}height={400} width={400}/>
        </div>
        </div>
        <div className={styles.text}>
            Declutter your brain, Get Focused
            <div className={styles.arrow}>
        <Image src={arrowbrain} height={170} width={170}/>
        Hover !
    </div>
        </div>
        
    </div>
    
    </>
  )
}
