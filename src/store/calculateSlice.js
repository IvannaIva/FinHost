import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    selectedPlatform: "",
    selectedStateApp: "",
    needDesign: "",
    prototype: "",
    typeAuthentication: [],
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

        clearState: () => initialState,
        // toggleTypeAuthentication: (state, action) => {
        //     const label = action.payload;
        //     if (state.typeAuthentication[label]) {
        //         delete state.typeAuthentication[label];
        //     } else {
        //         state.typeAuthentication[label] = true;
        //     }
        // },
    },
});

export const {
    setSelectedPlatform,
    setSelectedStateApp,
    setNeedDesign,
    setPrototype,
    toggleTypeAuthentication,
    clearState,
} = calculateSlice.actions;
export default calculateSlice.reducer;