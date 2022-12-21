import { configureStore } from "@reduxjs/toolkit"
import { createWrapper, HYDRATE} from 'next-redux-wrapper'
import { pokemonApi } from "../services/freePostAPI";
import { setupListeners } from '@reduxjs/toolkit/query'
import users from "./slices/userSlice";

const makeStore = () => configureStore({
  reducer: {user:users,
  
    [pokemonApi.reducerPath]: pokemonApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
  getDefaultMiddleware().concat(pokemonApi.middleware),
  devTools: true
});
export const wrapper = createWrapper(makeStore,{debug: true});
type Store = ReturnType<typeof makeStore>;
export type AppDispatch = Store['dispatch'];
export type RootState = ReturnType<Store['getState']>;
// setupListeners(makeStore.dispatch)




