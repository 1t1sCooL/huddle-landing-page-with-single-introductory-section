import styles from "./MainPage.module.css";
import {Left} from "../widgets/left/Left.tsx";
import {Right} from "../widgets/right/Right.tsx";
import {Icons} from "../widgets/icons/Icons.tsx";
import {Footer} from "../shared/ui/Footer.tsx";

export const MainPage = () => {
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