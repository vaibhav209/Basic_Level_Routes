import styles from './Header.module.css';
import { Link } from 'react-router-dom';


const Header = () => {

    return (
        <>
            <div className={styles.headingName}>
                <h1>Component Life Cycle</h1>
            </div>
            <div className={styles.pageNames}>
                
                <Link style={{textDecoration:'none', color:'white', fontSize: '24px', fontWeight: 100 }} to='/mounting'>Mounting</Link>
                <Link style={{textDecoration:'none', color:'white', fontSize: '24px', fontWeight: 100 }} to='/updating'>Updating</Link>
                <Link style={{textDecoration:'none', color:'white', fontSize: '24px', fontWeight: 100 }} to='/unmounting'>Unmounting</Link>
            </div>
            
        </>

    )
};
export default Header;