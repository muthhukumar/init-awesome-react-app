module.exports = `import { SAY_HI } from '../type/index';

const initialState = {
    message: 'Hello',
};

export const reducer = (state = initialState, action) => {
    switch (action.type) {
        case SAY_HI:
            return {
                message: 'Hi',
            };
        default:
            return state;
    }
};`;
