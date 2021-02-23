import styles from "../styles/components/Profile.module.css"

export function Profile() {
    return (
        <div className={styles.profileContainer}>
            <img src="https://github.com/manuelernesto.png" alt="Manuel Ernesto"/>
            <div>
                <strong>Manuel Ernesto</strong>
                <p>
                    <img src="icons/level.svg" alt="level icon"/>
                    Level 1
                </p>
            </div>
        </div>
    )
}
