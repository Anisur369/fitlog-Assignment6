"use client";
import { createContext, useState, useEffect } from "react";

export const WorkoutsContext = createContext();

export const WorkoutsProvider = ({ children }) => {
    const [activeTab, setActiveTab] = useState("Workouts");
    const [isOpen, setIsOpen] = useState(false);
    const [workouts, setWorkouts] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    const [planItems, setPlanItems] = useState([]);
    const [saveItems, setSaveItems] = useState([]);
            
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
    const saveStoreData = localStorage.getItem("savePlanData");
    setSaveItems(JSON.parse(saveStoreData))
    }, []);

    const info ={
        activeTab,
        setActiveTab,
        isOpen, 
        setIsOpen,
        workouts,
        setWorkouts,
        loading,
        setLoading,
        error,
        setError,
        planItems,
        setPlanItems,
        saveItems,
        setSaveItems
    };
    return (
        <WorkoutsContext.Provider value={info}>
            {children}
        </WorkoutsContext.Provider>
    );
};