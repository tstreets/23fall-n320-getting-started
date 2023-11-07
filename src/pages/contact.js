import React from 'react';
import styles from '@/styles/Contact.module.css';
import { useRouter } from 'next/router';

export default function Contact() {
  const [fullName, setFullName] = React.useState('Ty Streets');
  const [email, setEmail] = React.useState('tstreets@iu.edu');
  //   let fullName = 'Ty Streets';
  //   let email = 'tstreets@iu.edu';

  const router = useRouter();

  function contactFormSubmit(e) {
    e.preventDefault();
    if(fullName !== '' && email !== '') {
        router.push('/contact/success')
    }
  }

  function updateContactInfo(e) {
    if (e.currentTarget.name === 'fullName') {
      // fullName = e.currentTarget.value;
      setFullName(e.currentTarget.value);
    }
    if (e.currentTarget.name === 'email') {
      //   email = e.currentTarget.value;
      setEmail(e.currentTarget.value);
    }
  }

  return (
    <>
      <form className={styles.form} onSubmit={contactFormSubmit}>
        <h1>Contact</h1>

        <div className={styles.formField}>
          <label>Full Name:</label>
          <input name='fullName' type='text' placeholder='Ty Streets' onChange={updateContactInfo} value={fullName} />
        </div>

        <div className={styles.formField}>
          <label>Email:</label>
          <input name='email' type='email' placeholder='tstreets@iu.edu' onChange={updateContactInfo} value={email} />
        </div>

        <div className={styles.formField}>
          <input type='submit' value='Send Contact' />
        </div>
      </form>
    </>
  );
}
