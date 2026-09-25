"use client";
import { createContext, useState, useEffect } from "react";

export const WorkoutsContext = createContext();

export const WorkoutsProvider = ({ children }) => {
    const [isOpen, setIsOpen] = useState(false);
    const [planCount, setPlanCount] = useState(0);
    const [savedCount, setSavedCount] = useState(0);
    const [workouts, setWorkouts] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);



            
    useEffect(() => {
    const fetchWorkouts = async () => {
        try {
        const res = await fetch("https://api.abcz.workers.dev/api/fitlog");
        if (!res.ok) {
            throw new Error("Failed to fetch data");
        }
        const data = await res.json();
        setWorkouts(data);
        } catch (err) {
        setError(err.message);
        } finally {
        setLoading(false);
        }
    };
    fetchWorkouts();
    }, []);

    const info ={
        isOpen, 
        setIsOpen, 
        planCount, 
        setPlanCount, 
        savedCount,
        setSavedCount,
        workouts,
        setWorkouts,
        loading,
        setLoading,
        error,
        setError
    };
    return (
        <WorkoutsContext.Provider value={info}>
            {children}
        </WorkoutsContext.Provider>
    );
};