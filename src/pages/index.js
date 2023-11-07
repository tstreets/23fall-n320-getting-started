import React from 'react';
import styles from '@/styles/Home.module.css';
import Hero from '@/components/Hero';
import ListItem from '@/components/ListItem';

export default function Home() {
  return (
    <>
      <Hero heroImage='/hero-image.jpg' height='400px' />
      <div className={styles.list}>
        <ListItem
          image='/hero-image.jpg'
          title='Place 1'
          description='The best place that you could ever visit during May. It has like at least 2 flowers and they are kinda beautiful.'
        />

        <ListItem
          image='/blossom-place.jpg'
          title='Floral Haven'
          description='The ultimate destination to explore in July, boasting a vibrant display of at least 2 varieties of blossoms that are truly enchanting.'
        />

        <ListItem
          image='/spooky-place.jpg'
          title='The Haunting Enclave'
          description="It's the perfect spot to embrace the spine-tingling ambiance of Halloween and let your imagination run wild."
        />
      </div>
    </>
  );
}
