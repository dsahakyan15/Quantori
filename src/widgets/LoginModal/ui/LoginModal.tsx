import React, { useEffect, useState } from 'react'
import styles from './LoginModal.module.css'

const LoginModal = (props: any) => {
    const onLoginHide = props.hide
    const [email,setEmail] = useState('')
    const [pass,setPass] = useState('')

    const handleEmailChange = (e:any) => {
        setEmail(e.target.value)
    }
    const handlePassChange = (e:any) => {
        setPass(e.target.value)
    }

    const sendLog = async () => {
        try {
            fetch('https://dummyjson.com/auth/login', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({

                    username: email,
                    password: pass,
                    expiresInMins: 30, // optional, defaults to 60
                })
            })
                .then(res => res.json())
                .then(console.log);
        }
        catch (err) {
            console.error('err', err)
        }
    }

    useEffect(() => {
        sendLog()
    }, [])
    return (
        <div className={styles.modal}>
            <h3 className={styles.title}>Login</h3>
            <div className={styles.form}>
                <input 
                type="text" 
                className={styles.formEmail} 
                    placeholder='emilys' 
                onChange={handleEmailChange} 
                value={email}/>
                <input 
                className={styles.formPassword} 
                    placeholder='emilyspass' 
                onChange={handlePassChange} 
                value={pass} 
                type="password" />
            </div>
            <div className={styles.btns}>
                <button onClick={() => { 
                    setEmail('')
                    setPass('')
                    onLoginHide(false) 
                    }} className={styles.cancelBtn}>Cancel</button>
                <button onClick={() => { 
                    alert('Pss go to console')
                    sendLog()
                    }} className={styles.loginBtn}>Login</button>
            </div>
        </div>
    )
}

export default LoginModal