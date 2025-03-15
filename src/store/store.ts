import { configureStore } from "@reduxjs/toolkit";

const store = configureStore({
  reducer: {
    theme: function () {},
    auth: function () {},
  },
});

export default store