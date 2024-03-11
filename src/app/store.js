import { configureStore } from '@reduxjs/toolkit'; 
import { cryptoApi } from  '../services/cryptoApi';
import { setupListeners } from '@reduxjs/toolkit/query/react'; 

const store = configureStore({
    reducer: {
       [cryptoApi.reducerPath]: cryptoApi.reducer,
    },
    middleware: getDefaultMiddleware => 
    getDefaultMiddleware().concat(cryptoApi.middleware),
});

//Настройка подписок API ( это необходимо для правильной работы middleware)
setupListeners(store.dispatch);

export default store;

