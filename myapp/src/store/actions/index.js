export const FETCH_BREWERY = 'FETCH_BREWERY';

export const fetchBrewery = () => {
    return dispatch => {
        dispatch({ type: FETCH_BREWERY });
    };
};