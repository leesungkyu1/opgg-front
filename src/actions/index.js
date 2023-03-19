import * as types from './ActionsTypes';


/*
    action 객체를 만드는 액션 생성자들을 선언합니다. (action creators)
    scope 이슝롸 관계없이 편의상 사용되었습니다.
 */

export const increment = () => ({
    type: types.INCREMENT
})

export const decrement = () => ({
    type: types.DECREMENT
})

// 다른 액션 생성자들과 달리, 파라미터를 가지고 있습니다.
export const setColor = (color) => ({
    type: types.SET_COLOR,
    color
})