// export const clearState = {
//     calculate: {
//         stepData: [],
//         selectedPlatform: null,
//         selectedStateApp: null,
//         needDesign: "",
//         prototype: "",
//         typeAuthentication: "",
//     },

// };

// // clearState.js
import store from "../store/index"
export const clearState = () => {
    // Очищення Redux-зберігання
    // Поверніть початковий стан вашого Redux-зберігання
    // Наприклад, якщо ви використовуєте Redux Toolkit:


    store.dispatch({ type: "CLEAR_STATE" }); // Відправте дію для очищення стану

    // Очищення локального сховища (localStorage)
    localStorage.clear(); // Очистити всі дані з локального сховища
};