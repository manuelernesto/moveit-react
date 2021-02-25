import styles from '../styles/components/ChallengeBox.module.css';
import {useContext} from "react";
import {ChallengeContext} from "../contexts/ChallengeContext";
import {CountdownCtx} from "../contexts/CountdownCtx";

export function ChallengeBox() {

    const {activeChallenge, resetChallenge, completeChallenge} = useContext(ChallengeContext);
    const {resetCountdown} = useContext(CountdownCtx);

    function handleChallengeSucceeded() {
        completeChallenge();
        resetCountdown();
    }

    function handleChallengeFailed() {
        resetChallenge();
        resetCountdown();
    }

    return (
        <div className={styles.challengeBoxContainer}>

            {activeChallenge ? (
                <div className={styles.challengeActive}>
                    <header>
                        Ganhe {activeChallenge.amount} xp
                    </header>

                    <main>
                        <img src={`icons/${activeChallenge.type}.svg`} alt="Challenge"/>
                        <strong>Novo desafio</strong>
                        <p>{activeChallenge.description}</p>
                    </main>

                    <footer>
                        <button type="button"
                                onClick={handleChallengeFailed}
                                className={styles.challengeFailButton}>
                            Falhei
                        </button>
                        <button type="button"
                                onClick={handleChallengeSucceeded}
                                className={styles.challengeSucceededButton}>
                            Completei
                        </button>
                    </footer>
                </div>
            ) : (
                <div className={styles.challengeNotActive}>
                    <strong>
                        Finalize um ciclo para receber um desafio.
                    </strong>
                    <p>
                        <img src="icons/level-up.svg" alt="Avance de nível"/>
                        Avance de nível completando desafios.
                    </p>
                </div>
            )}

        </div>
    )
}