import { configureStore } from "@reduxjs/toolkit"
import contactReducer from "./contact-helpers/contactSlice"

export const store = configureStore({
  reducer: {
    contact: contactReducer,
  }
}) 