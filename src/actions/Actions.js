
export const INCREMENT = 'INCREMENT';
export  const DECREMENT = 'DECREMENT';
export const INCREMENTBYFIVE = 'INCREMENTBYFIVE';
export const DECREMENTBYFIVE = 'DECREMENTBYFIVE'
export const increment = () => ({
    type: INCREMENT,
})
export const decrement = () => ({
    type: DECREMENT,
})
export const incrementbyfive = () => ({
    type: INCREMENTBYFIVE,
})
export const decrementbyfive = () => ({
    type: DECREMENTBYFIVE
})