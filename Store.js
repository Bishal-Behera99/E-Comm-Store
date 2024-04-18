import { configureStore } from "@reduxjs/toolkit";
import Productslice from "./slices/Productslice";
import Cartslice from "./slices/Cartslice";
import Dishslice from "./Spponacular_Proj/Slices/Dishslice";
export default configureStore({
  reducer: {
    Productreducer: Productslice,
    Cartreducer: Cartslice,
    Dishreducer: Dishslice,
  },
});
