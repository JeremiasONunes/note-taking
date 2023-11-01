import { FaFacebook, FaInstagram, FaLinkedin } from 'react-icons/fa'
import styles from './Footer.module.css'

function Footer() {

  const handleFacebookClick = () => {
    window.location.href = 'https://www.facebook.com/jeremias.oliveiranunes'; 
  };

  const handleInstagramClick = () => {
    window.location.href = 'https://www.instagram.com/jereh.nunes/'; 
  };

  const handleLinkedinClick = () => {
    window.location.href = 'https://www.linkedin.com/in/jeremiasoliveiranunes/'; 
  };


  return (
    <footer className={styles.footer}>
      <ul className={styles.social_list}>
      <li onClick={handleFacebookClick}>
          <FaFacebook />
        </li>
        <li onClick={handleInstagramClick}>
          <FaInstagram />
        </li>
        <li onClick={handleLinkedinClick}>
          <FaLinkedin />
        </li>
      </ul>
      <p className={styles.copy_right}>
        <span>Gerenciador de Anotações made by Jeremias de Oliveira Nunes - estudo sobre react</span> &copy; 2023
      </p>
    </footer>
  )
}

export default Footer
