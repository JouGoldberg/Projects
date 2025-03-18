import React, { useState } from 'react'
import styles from './checkout.module.css'

interface IProps {
  setActiveOrder: any
}

const Checkout = ({ setActiveOrder }: IProps) => {

  const [firstName, setFirstName] = useState<string>('')
  const [lastName, setLastName] = useState<string>('')
  const [number, setNumber] = useState<string>('')
  const [address, setAddress] = useState<string>('')
  const [note, setNote] = useState<string>('')

  const [orderMethod, setOrderMethod] = useState<string>('delivery')
  const [orderTime, setOrderTime] = useState<string>('now')
  const [paymentMethod, setPaymentMethod] = useState<string>('cash')

  const [shippingLocation, setShippingLocation] = useState<string>('')
  const [shippingAddress, setShippingAddress] = useState<string>('')

  const handleOrder = () => {
    const obj = {
      firstName,
      lastName,
      number,
      address,
      note,
      orderMethod,
      orderTime,
      paymentMethod,
      shippingLocation,
      shippingAddress,
    }

    setFirstName('')
    setLastName('')
    setNumber('')
    setAddress('')
    setNote('')
    setOrderMethod('')
    setOrderTime('')
    setPaymentMethod('')
    setShippingLocation('')
    setShippingAddress('')

    console.log(obj);
  }

  return (
    <div className={styles.checkout}>
      <div className='container'>
        <div className={styles.checkoutHead}>
          <p onClick={() => setActiveOrder('order')} className={styles.exitBtn}>
            <svg width="11" height="18" viewBox="0 0 11 18" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M10 17L2 9L10 0.999999" stroke="white" strokeWidth="1.5" strokeLinecap="round" />
            </svg>
          </p>
          <h2 className={styles.title}>Checkout</h2>
        </div>

        <p className={styles.orderData}>Order data</p>
        <form className={styles.contactForm}>
          <input onChange={(e) => setFirstName(e.target.value)} value={firstName} className={styles.formInput} type="text" placeholder='First name' />
          <input onChange={(e) => setLastName(e.target.value)} value={lastName} className={styles.formInput} type="text" placeholder='Last name' />
          <input onChange={(e) => setNumber(e.target.value)} value={number} className={styles.formInput} type="text" placeholder='Phone number' />
          <input onChange={(e) => setAddress(e.target.value)} value={address} className={styles.formInput} type="text" placeholder='Email address' />
          <textarea onChange={(e) => setNote(e.target.value)} value={note} placeholder='Note'></textarea>
        </form>

        <p className={styles.orderData}>Order time</p>
        <form className={styles.formD}>
          <div onClick={() => setOrderTime('now')} className={styles.radioD}>
            <input onChange={() => setOrderTime('now')} checked={orderTime == 'now'} type='radio' name='orderTime' />
            <p>Order now</p>
          </div>
          <div onClick={() => setOrderTime('later')} className={styles.radioD}>
            <input onChange={() => setOrderTime('later')} checked={orderTime == 'later'} type='radio' name='orderTime' />
            <p>Order later</p>
          </div>
        </form>

        <p className={styles.orderData}>Order method</p>
        <form className={styles.formD}>
          <div onClick={() => setOrderMethod('delivery')} className={styles.radioD}>
            <input onChange={() => setOrderMethod('delivery')} checked={orderMethod == 'delivery'} type='radio' name='orderMethod' />
            <p>Delivery</p>
          </div>
          <div onClick={() => setOrderMethod('take')} className={styles.radioD}>
            <input onChange={() => setOrderMethod('take')} checked={orderMethod == 'take'} type='radio' name='orderMethod' />
            <p>Take a way</p>
          </div>
        </form>

        <p className={styles.orderData}>Payment method</p>
        <div onClick={() => setPaymentMethod('cash')} className={`${styles.radioD} ${styles.paymentRadio}`}>
          <input onChange={() => setPaymentMethod('cash')} checked={paymentMethod == 'cash'} type='radio' />
          <p>Cash On Delivery</p>
        </div>
        <div onClick={() => setPaymentMethod('bca')} className={`${styles.radioD} ${styles.paymentRadio}`}>
          <input onChange={() => setPaymentMethod('bca')} checked={paymentMethod == 'bca'} type='radio' />
          <p>BCA Virtual Account</p>
        </div>
        <div onClick={() => setPaymentMethod('credit')} className={`${styles.radioD} ${styles.paymentRadio}`}>
          <input onChange={() => setPaymentMethod('credit')} checked={paymentMethod == 'credit'} type='radio' />
          <p>Credit Card</p>
        </div>

        <p className={styles.orderData}>Shipping address</p>
        <div className={styles.shipping}>
          <input onChange={(e) => setShippingLocation(e.target.value)} value={shippingLocation} className={styles.shippingInp} type="text" placeholder='Please type your address' />
          <button className={styles.shippingBtn}>Search</button>
        </div>
        <input onChange={(e) => setShippingAddress(e.target.value)} value={shippingAddress} className={`${styles.shippingInp} ${styles.redInp}`} type="text" placeholder='Use your current location' />

        <div className={styles.mapD}>
          <img className={styles.mapImg} src="/map.png" alt="Map" />
          <img className={styles.mapLocation} src="/mapLocation.svg" alt="Map Location" />
        </div>

        <div className={styles.orderFoot}>
          <button onClick={handleOrder} className={styles.orderNowBtn}>Order Now</button>
        </div>
      </div>
    </div>
  )
}

export default Checkout