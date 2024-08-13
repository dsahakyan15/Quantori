import React,{useState} from 'react'
import { CiMenuKebab } from "react-icons/ci";
import { FaUserCircle } from "react-icons/fa";
import styles from './Header.module.css'

const Header = (props:any) => {
    const onLoginHide = props.hide
    const [burgerHide,onBurgerHide] = useState(false)

    return (
        <div className={styles.Header}>
            <div className={styles.leftSide}>
                <div className={styles.logo}><FaUserCircle size={'50px'} /></div>
                <div className={styles.menu}>
                    <div className={styles.menuItemActive}>
                        <span>Home</span>
                    </div>
                    <div className={styles.menuItem}>
                        <span>Contact</span>
                    </div>
                    <div className={styles.menuItem}>
                        <span>About</span>
                    </div>
                </div>
            </div>
            <div className={styles.rightSide}>
                <div className={styles.login} onClick={()=>{onLoginHide(true)}}>Login</div>
                <div className={styles.menuBurger}>
                    <>{burgerHide ? <div className={styles.menuBurgerItems}>
                        <div className={styles.menuBurgerItem}>Home</div>
                        <div className={styles.menuBurgerItem}>
                            Contact
                        </div>
                        <div className={styles.menuBurgerItem}>
                            About
                        </div>
                        <div onClick={() => { onLoginHide(true) }} className={styles.menuBurgerItem}>Login</div>
                    </div> : null}</>
                    
                    <div onClick={() => {onBurgerHide(!burgerHide)}} className={styles.burgerIcon}>
                        <CiMenuKebab size={'30px'} />
                    </div>

                </div>
            </div>
        </div>
    )
}

export default Header