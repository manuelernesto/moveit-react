import {createContext, ReactNode, useState} from "react";
import challenges from '../../challenges.json';


interface ChallengesProviderProps {
    children: ReactNode;
}

interface Challenge {
    type: 'body' | 'eye';
    description: string;
    amount: number
}

interface challengesContextData {
    level: number,
    currentExperience: number,
    challengesCompleted: number,
    experienceToNextLevel: number,
    activeChallenge: Challenge,
    startNewChallenge: () => void,
    levelUp: () => void,
    resetChallenge: () => void,
}

export const ChallengeContext = createContext({} as challengesContextData);


export function ChallengesProvider({children}: ChallengesProviderProps) {
    const [level, setLevel] = useState(1);
    const [currentExperience, setCurrentExperience] = useState(20);
    const [challengesCompleted, setChallengesCompleted] = useState(0);

    const [activeChallenge, setActiveChallenge] = useState(null);

    const experienceToNextLevel = Math.pow((level + 1) * 4, 2);

    function levelUp() {
        setLevel(level + 1);
    }

    function startNewChallenge() {
        const randomChallengeIndex = Math.floor(Math.random() * challenges.length);
        const challenge = challenges[randomChallengeIndex];

        setActiveChallenge(challenge);
    }

    function resetChallenge() {
        setActiveChallenge(null);
    }

    return (
        <ChallengeContext.Provider value={{
            level,
            experienceToNextLevel,
            currentExperience,
            challengesCompleted,
            activeChallenge,
            startNewChallenge,
            resetChallenge,
            levelUp
        }}>
            {children}
        </ChallengeContext.Provider>
    )
}


