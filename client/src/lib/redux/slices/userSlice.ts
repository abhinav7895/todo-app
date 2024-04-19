import { PayloadAction, createSlice } from "@reduxjs/toolkit";

export interface User {
  _id: string;
  fullName: string;
  email: string;
}

export interface UserState {
  user: User | null;
}

const UserInitialState: UserState = {
  user: null,
};

const userSlice = createSlice({
    name: "user",
    initialState: UserInitialState,
    reducers: {
        setUser: (state: UserState, action: PayloadAction<User>) => {
            if (!action.payload) {
                return state;
            }
            return {
                ...state,
                user: {
                    ...state.user,
                    ...action.payload
                }
            };
        },
    },
});

export const { setUser } = userSlice.actions;
export default userSlice.reducer;
