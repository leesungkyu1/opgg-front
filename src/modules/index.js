import { createAction, handleActions} from "redux-actions";
import { Map, List} from 'immutable';

//액션 타입
const CREATE = 'counter/CREATE';
const REMOVE = 'counter/REMOVE';
const INCREMENT = 'counter/INCREMET';
const DECREMENT = 'counter/DECREMENT';
const SET_COLOR = 'counter/SET_COLOR';

//액션 생성자
export const create = createAction(CREATE);
export const remove = createAction(REMOVE);
export const increment = createAction(INCREMENT);
export const decrement = createAction(DECREMENT);
export const setColor = createAction(SET_COLOR);

const initialState = Map({
    counters: List([
        Map({
            color: 'black',
            number: 0
        })
    ])
})

export default handleActions({
    [CREATE] : (state, action) => state,
    [REMOVE] : (state, action) => state,
    [INCREMENT] : (state, action) => state,
    [DECREMENT] : (state, action) => state,
    [SET_COLOR] : (state, action) => state,
}, initialState);
