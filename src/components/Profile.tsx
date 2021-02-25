import styles from "../styles/components/Profile.module.css"
import {useContext} from "react";
import {ChallengeContext} from "../contexts/ChallengeContext";

export function Profile() {

    const {level} = useContext(ChallengeContext);

    return (
        <div className={styles.profileContainer}>
            <img src="https://github.com/manuelernesto.png" alt="Manuel Ernesto"/>
            <div>
                <strong>Manuel Ernesto</strong>
                <p>
                    <img src="icons/level.svg" alt="level icon"/>
                    Level {level}
                </p>
            </div>
        </div>
    )
}
