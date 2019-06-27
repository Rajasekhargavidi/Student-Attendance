export const addStudent = (student) => {
    return (dispatch,getState) => {
        dispatch({
            type : 'CREATE_PROJECT',student
        });
    }
}