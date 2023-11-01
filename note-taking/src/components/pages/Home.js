import styles from './Home.module.css'
import logotipoHome from '../../img/logotipoHome.svg'

import LinkButton from '../layout/LinkButton'

function Home() {
  return (
    <section className={styles.home_container}>
      <h1>
        Bem-vindo ao <span>Note Talking</span>
      </h1>
      <p className="text-3xl font-bold underline" >Comece a gerenciar os suas anotações agora mesmo!</p>
      <LinkButton to="/newproject" text="Criar anotação" />
      <img src={logotipoHome} alt="Savings" />
    </section>
  )
}

export default Home
