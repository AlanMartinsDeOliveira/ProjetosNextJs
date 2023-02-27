
import Tabuleiro from '../components/Tabuleiro'//importando o componente
import styles from '../styles/Subdivisao.module.css' //importando o css module



export default function Home() { //sempre exportar a função
  return ( //utilizando os componentes criados 
   <div className={styles.container}>
     <Tabuleiro/>
   </div>
  )
}
