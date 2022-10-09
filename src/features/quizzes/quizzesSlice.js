import { createSlice } from '@reduxjs/toolkit';

export const quizzesSlice = createSlice({
	name: 'quizzes',
	initialState: {
		quizzes:{}
	},
	reducers: {
    	addQuiz:(state, action)=> {
    		const { id, name, icon } = action.payload;
      		state.quizzes[id] = {
        		id: id,
        		name: name,
        		topicId: topicId,
        		cardIds: []
      		}
		}
	}
});
export const { addQuiz } = quizzesSlice.actions;
export const selectQuizzes = (state) => state.quizzes.quizzes;
export default quizzesSlice.reducer;

