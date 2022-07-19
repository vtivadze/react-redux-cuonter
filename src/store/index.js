import { configureStore } from '@reduxjs/toolkit';
import cunterReducer from './counter';
import authReducer from './auth';

const store = configureStore({
  reducer: {
    counter: cunterReducer,
    auth: authReducer,
  },
});

export default store;
