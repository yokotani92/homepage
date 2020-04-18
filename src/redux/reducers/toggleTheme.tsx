import { TOGGLE_THEME, ToggleThemeTypes } from './../actionTypes';

const initialState = {
    isDarktheme: window.matchMedia('(prefers-color-scheme: dark)').matches ? true : false,
}

export default function (state = initialState, action: ToggleThemeTypes) {
    switch (action.type) {
        case TOGGLE_THEME: {
            return {
                isDarktheme: !state.isDarktheme,
            };
        }
        default:
            return state;
    }
}