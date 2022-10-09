import { createSlice } from '@reduxjs/toolkit';

export const topicsSlice = createSlice({
	name: 'topics',
	initialState: {
		topics:{}
	},
	reducers: {
    	addTopic:(state, action)=> {
    		const { id, name, icon } = action.payload;
      		state.topics[id] = {
        		id: id,
        		name: name,
        		icon,
        		quizIds: []
      		}
		},
		addQuizIds: ( state, action) => {
			const { quizId, topicId } = action.payload;
			state.topics[quizIds].push(action.payload[quizId]);
		}
	}
});
export const { addTopic, addQuizIds } = topicsSlice.actions;
export const selectTopics = (state) => state.topics.topics;
export default topicsSlice.reducer;
