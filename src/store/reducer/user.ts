import {createSlice, PayloadAction} from '@reduxjs/toolkit';

const initialState = {
  user: {},
};

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    setUser: (state, action: PayloadAction<any>) => {
      state.user = action.payload;
    },
  },
});

// Action creators are generated for each case reducer function
export const {setUser} = userSlice.actions;

//write thunk

//

export default userSlice.reducer;
