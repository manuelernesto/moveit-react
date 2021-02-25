import {createContext, ReactNode, useContext, useEffect, useState} from 'react';
import {ChallengeContext} from "./ChallengeContext";

interface CountdownProviderProps {
    children: ReactNode;
}


interface CountdownCtxData {
    minutes: number;
    seconds: number;
    hasFinished: boolean;
    isActive: boolean;
    startCountdown: () => void;
    resetCountdown: () => void;
}

let countdownTimeout: NodeJS.Timeout;

export const CountdownCtx = createContext({} as CountdownCtxData)

export function CountdownProvider({children}: CountdownProviderProps) {
    const {startNewChallenge} = useContext(ChallengeContext)

    const [time, setTime] = useState(0.1 * 60);
    const [isActive, setIsActive] = useState(false);
    const [hasFinished, setHasFinished] = useState(false);

    const minutes = Math.floor(time / 60);
    const seconds = time % 60;


    function startCountdown() {
        setIsActive(true);
    }

    function resetCountdown() {
        clearTimeout(countdownTimeout)
        setIsActive(false)
        setHasFinished(false);
        setTime(0.1 * 60)
    }

    useEffect(() => {
        if (isActive && time > 0) {
            countdownTimeout = setTimeout(() => {
                setTime(time - 1)
            }, 1000)
        } else if (isActive && time === 0) {
            setHasFinished(true);
            setIsActive(false);
            startNewChallenge()
        }

    }, [isActive, time])


    return (
        <CountdownCtx.Provider value={{
            minutes,
            seconds,
            hasFinished,
            isActive,
            startCountdown,
            resetCountdown
        }}>
            {children}
        </CountdownCtx.Provider>
    )
}