"use client";

import React, { useEffect } from "react";
import toast, { Toaster } from "react-hot-toast";

const MealPlan = () => {
    useEffect(() => {
        toast("Here is your toast.");
    }, []);
    return (
        <div>
            MealPlan
            <Toaster position='bottom-right' />
        </div>
    );
};

export default MealPlan;
