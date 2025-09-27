import styles from './App.module.css'
import {Footer} from "./Footer.tsx";
import {Icons} from "./Icons.tsx";
import {Left} from "./Left.tsx";
import {Right} from "./Right.tsx";

function App() {

  return (
    <>  <section className={styles.container}>
        <Left/>
        <Right/>
    </section>
        <Icons/>
        <Footer/>
    </>
  )
}

export default App
