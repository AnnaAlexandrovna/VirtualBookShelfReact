export const rtkQueryErrorLogger = api => next => action => {
    if(action.error) {
        console.log(action);
    }
    return next(action);
};