import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    selectedPlatform: null,
    selectedStateApp: null,
    needDesign: "",
    prototype: "",
    typeAuthentication: "",
    stepData: [],
};

const calculateSlice = createSlice({
    name: "calculate",
    initialState,
    reducers: {
        setSelectedPlatform: (state, action) => {
            state.selectedPlatform = action.payload;
        },

        setSelectedStateApp: (state, action) => {
            state.selectedStateApp = action.payload;
        },
        setNeedDesign: (state, action) => {
            state.needDesign = action.payload;
        },
        setPrototype: (state, action) => {
            state.prototype = action.payload;
        },

        toggleTypeAuthentication: (state, action) => {
            state.typeAuthentication = action.payload;
        },

        addStepData: (state, action) => {
            const { step, data } = action.payload;
            state.stepData[step] = data; // Зберігаємо обраний об'єкт для конкретного кроку
        },



        clearState: () => initialState,
    },
});

export const {
    setSelectedPlatform,
    setSelectedStateApp,
    setNeedDesign,
    setPrototype,
    toggleTypeAuthentication,
    clearState,
    addStepData,
    clearCalculate,
} = calculateSlice.actions;
export default calculateSlice.reducer;