"use client";
import { createContext, useState } from "react";

export const WorkoutsContext = createContext();

export const WorkoutsProvider = ({ children }) => {
      const [isOpen, setIsOpen] = useState(false);
    const [workouts, setWorkouts] = useState([]);
    const [planCount, setPlanCount] = useState(0);
    const [savedCount, setSavedCount] = useState(0);

    const info ={
        isOpen, 
        workouts, 
        planCount, 
        savedCount,
        setIsOpen, 
        setWorkouts, 
        setPlanCount, 
        setSavedCount
    };
    return (
        <WorkoutsContext.Provider value={info}>
            {children}
        </WorkoutsContext.Provider>
    );
};