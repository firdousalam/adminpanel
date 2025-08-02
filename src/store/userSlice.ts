// store/userSlice.ts
import { createSlice, PayloadAction } from '@reduxjs/toolkit';

type UserState = {
  name: string;
};

const initialState: UserState = {
  name: 'Guest',
};

const userSlice = createSlice({
  name: 'userRedux',
  initialState,
  reducers: {
    setUser(state, action: PayloadAction<string>) {
      state.name = action.payload;
    },
  },
});

export const { setUser } = userSlice.actions;
export default userSlice.reducer;
