import { createSlice, PayloadAction } from '@reduxjs/toolkit'

interface ExerciseMenuState {
  name: string
}

interface ExerciseMenuInitialState {
  data: Array<ExerciseMenuState>
}

// Define the initial state using that type
const initialState: ExerciseMenuInitialState = {
  data: []
}

export const counterSlice = createSlice({
  name: 'exerciseMenu',
  initialState,
  reducers: {
    setExerciseMenu: (state, action: PayloadAction<Array<ExerciseMenuState>>) => {
      state.data = action.payload;
    },
  },
})

export const { setExerciseMenu } = counterSlice.actions

export default counterSlice.reducer