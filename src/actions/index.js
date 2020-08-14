// {
//     type: 'ADD_MOVIES'
// }

// action types variables
export const ADD_MOVIES = 'ADD_MOVIES';
// action creators for returning actions
export function addMovies(movies){
    return {
            type: ADD_MOVIES,
            movies
        }
}