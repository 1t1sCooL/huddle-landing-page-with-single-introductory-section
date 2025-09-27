import styles from "./Right.module.css";

export const Right = () => {
    return (
        <div className={styles.right}>
            <h1>Build The Community</h1>
            <h2>Your Fans Will Love</h2>
            <p>
                Huddle re-imagines the way we build communities. You have a voice, but so does your audience.
                Create connections with your users as you engage in genuine discussion.
            </p>
            <button className={styles.btn}>
                Register
            </button>
        </div>
    )
}