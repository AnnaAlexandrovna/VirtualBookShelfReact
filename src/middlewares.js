export const configureThunk = basePath => {
    return {
        thunk: {
            extraArgument: basePath
        }
    };
};