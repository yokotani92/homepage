import { combineReducers } from 'redux';
import toggleTheme from './toggleTheme';

export const rootReducer = combineReducers({ toggleTheme: toggleTheme });
export type RootState = ReturnType<typeof rootReducer>
