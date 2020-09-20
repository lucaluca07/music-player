import { combineReducers } from '@reduxjs/toolkit';
import song from './song';

const rootReducer = combineReducers({ song });

export type RootState = ReturnType<typeof rootReducer>;

export default rootReducer;
