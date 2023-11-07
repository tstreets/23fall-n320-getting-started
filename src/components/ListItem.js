import React from 'react';
import styles from '@/styles/ListItem.module.css';

export default function ListItem(props) {
  return (
    <>
      <div className={styles.listItem}>
        <div className={styles.image}>
          <img src={props.image} height='200px' width='200px' />
        </div>
        <div className={styles.text}>
          <h3>{props.title}</h3>
          <p>{props.description}</p>
        </div>
      </div>
    </>
  );
}
