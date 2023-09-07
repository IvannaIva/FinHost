// import React from "react";
import { useSelector } from "react-redux";

// Створіть функцію для розрахунку годин та ціни на основі обраних платформ
export const calculateHoursAndPrice = () => {
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const stepData = useSelector((state) => state.calculate.stepData);

    // Змінні для зберігання загальних годин та ціни
    let totalHourMin = 0;
    let totalHourMax = 0;
    let totalPriceMin = 0;
    let totalPriceMax = 0;

    // Пройдіться по кожному кроці і додайте години та ціну
    stepData.forEach((step) => {
        totalHourMin += step.hourMin;
        totalHourMax += step.hourMax;
        totalPriceMin += step.priceMin;
        totalPriceMax += step.priceMax;
    });

    return { totalHourMin, totalHourMax, totalPriceMin, totalPriceMax };
};