import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    name: "",
    selectedColorPhone: "light_red",
    phoneLayoutUrl: "/assets/images/phones/light_red.svg",
    selectedCheckboxes: {},
    qrCodeGenerated: false,
    email: "",
    selectedFile: null,

};

const configSlice = createSlice({
    name: "config",
    initialState,
    reducers: {
        setName: (state, action) => {
            state.name = action.payload;
        },
        setSelectedFile: (state, action) => {
            state.selectedFile = action.payload;
        },
        // setSelectedFile: (state, action) => {
        //     const { file } = action.payload;
        //     if (file) {
        //         state.selectedFile = {
        //             file,
        //             objectURL: URL.createObjectURL(file)
        //         };
        //     } else {
        //         state.selectedFile = null;
        //     }
        // },

        setColorPhone: (state, action) => {
            state.selectedColorPhone = action.payload;
            state.phoneLayoutUrl = `/assets/images/phones/${action.payload}.svg`;
        },
        setPhoneLayout: (state, action) => {
            state.phoneLayoutUrl = action.payload;
        },

        toggleCheckbox: (state, action) => {
            const label = action.payload;
            if (state.selectedCheckboxes[label]) {
                delete state.selectedCheckboxes[label];
            } else {
                state.selectedCheckboxes[label] = true;
            }
        },

        setQRCodeGenerated: (state, action) => {
            state.qrCodeGenerated = action.payload;
        },
        setEmail: (state, action) => {
            state.email = action.payload;
        },

        clearState: () => initialState,


    },
});

export const {
    setName,
    setColorPhone,
    setPhoneLayout,
    toggleCheckbox,
    setQRCodeGenerated,
    clearState,
    setEmail,
    setSelectedFile

} = configSlice.actions;
export default configSlice.reducer;