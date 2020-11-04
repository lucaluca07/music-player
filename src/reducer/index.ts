import { combineReducers } from '@reduxjs/toolkit';
import song from './song';
import home from './home';

const rootReducer = combineReducers({ song, home });

export type RootState = ReturnType<typeof rootReducer>;

export default rootReducer;
