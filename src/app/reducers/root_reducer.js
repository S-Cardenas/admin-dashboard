//Import Dependencies
import { combineReducers } from 'redux';

//Import Reducers
import QuestionsReducer from './questions_reducer';

const RootReducer = combineReducers({
  questions: QuestionsReducer
});

export default RootReducer;
