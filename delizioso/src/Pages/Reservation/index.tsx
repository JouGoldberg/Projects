import React, { useEffect, useState } from 'react'
import styles from './reservation.module.css'
import { IReservation } from '../../Interfaces'

const Reservation = () => {
  useEffect(() => {
    document.title = 'Delizioso | Reservation'
  }, [])

  const [name, setName] = useState<string>('')
  const [surname, setSurname] = useState<string>('')
  const [number, setNumber] = useState<string>('')
  const [date, setDate] = useState<string>('')
  const [time, setTime] = useState<string>('')
  const [peopleNumber, setPeopleNumber] = useState<string>('')
  const [note, setNote] = useState<string>('')

  const handleSubmit = () => {
    const obj: IReservation = {
      name,
      surname,
      number,
      date,
      time,
      peopleNumber,
      note,
    }

    setName('')
    setSurname('')
    setNumber('')
    setDate('')
    setTime('')
    setPeopleNumber('')
    setNote('')

    console.log(obj);
  }

  return (
    <div className={styles.reservation}>
      <div className="container">
        <h2 className={styles.title}>Reservation</h2>
        <p className={styles.info}>We love hearing from our customers. Feel free to share your experience or ask any <br /> questions you may have.</p>

        <form className={styles.contactForm}>
          <input onChange={(e) => setName(e.target.value)} value={name} className={styles.formInput} type="text" placeholder='Name' />
          <input onChange={(e) => setSurname(e.target.value)} value={surname} className={styles.formInput} type="text" placeholder='Surname' />
          <input onChange={(e) => setNumber(e.target.value)} value={number} className={`${styles.formInput} ${styles.formNumber}`} type="text" placeholder='Phone number' />
          <input onChange={(e) => setDate(e.target.value)} value={date} className={styles.formInput} type="date" max="2025-04-25" />
          <input onChange={(e) => setTime(e.target.value)} value={time} className={styles.formInput} type="time" />
          <input onChange={(e) => setPeopleNumber(e.target.value)} value={peopleNumber} className={`${styles.formInput} ${styles.formNumber}`} type="number" placeholder='Number of people' />
          <textarea onChange={(e) => setNote(e.target.value)} value={note} className={styles.formInput} placeholder='Note'></textarea>
        </form>
        <div className={styles.formSubmitDiv}>
          <button onClick={handleSubmit} className={styles.formBtn}>Submit</button>
        </div>
      </div>
    </div>
  )
}

export default Reservation 