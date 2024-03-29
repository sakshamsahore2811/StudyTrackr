import React from 'react';
import styles from './style.module.css';
import Image from 'next/image';
import today from '../../../../public/images/today.png';
import todo from '../../../../public/images/todo.png';
import timer from '../../../../public/images/timer.png';

export default function Snapshots() {
  return (
    <div>
        <div className={styles.container}>
            <div className={styles.img}><Image src={today} height={400} width={850}/></div>
            <div className={styles.img}><Image src={todo} height={400} width={850}/></div>
            <div className={styles.img}><Image src={timer} height={400} width={850}/></div>
        </div>
      
    </div>
  )
}
