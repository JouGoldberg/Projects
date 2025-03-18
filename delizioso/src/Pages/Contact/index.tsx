import React, { useEffect,  useState } from 'react'
import styles from './contact.module.css'
import { IContactForm } from '../../Interfaces'

const Contact = () => {
  useEffect(() => {
    document.title = 'Delizioso | Contact'
  }, [])

  const [firstName, setFirstName] = useState<string>('')
  const [lastName, setLastName] = useState<string>('')
  const [email, setEmail] = useState<string>('')
  const [subject, setSubject] = useState<string>('')
  const [message, setMessage] = useState<string>('')

  const handleSubmit = () : void => {
    const formObj: IContactForm = {
      firstName: firstName,
      lastName: lastName,
      email: email,
      subject: subject,
      message: message,
    }

    setFirstName('')
    setLastName('')
    setEmail('')
    setSubject('')
    setMessage('')

    console.log(formObj);
  }

  return (
    <div>
      <div className="container">
        <h1 className={styles.title}>Contact us</h1>
        <p className={styles.info}>We love hearing from our customers. Feel free to share your experience or ask any <br /> questions you may have.</p>
        <form className={styles.contactForm}>
          <input value={firstName} onChange={(e) => setFirstName(e.target.value)} className={styles.formInput} type="text" placeholder='First name' />
          <input value={lastName} onChange={(e) => setLastName(e.target.value)} className={styles.formInput} type="text" placeholder='Last name' />
          <input value={email} onChange={(e) => setEmail(e.target.value)} className={styles.formInput} type="text" placeholder='Email address' />
          <input value={subject} onChange={(e) => setSubject(e.target.value)} className={styles.formInput} type="text" placeholder='Subject' />
          <textarea value={message} onChange={(e) => setMessage(e.target.value)} className={styles.formInput} placeholder='Message'></textarea>
        </form>
        <div className={styles.formSubmitDiv}>
          <button onClick={handleSubmit} className={styles.formBtn}>Submit</button>
        </div>
      </div>
      <div className={styles.contactFoot}>
        <img className={styles.mapImg} src="/map.png" alt="Map" />
        <img className={styles.mapLocation} src="/mapLocation.svg" alt="Location" />
      </div>
    </div>
  )
}

export default Contact