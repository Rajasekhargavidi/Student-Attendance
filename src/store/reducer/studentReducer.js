
const initState = {}

const studentReducer = (state = initState, action)=>{
    switch(action.type) {
        case 'ADD_STUDENT':
            console.log('add student',action.student)
    }
    return state
}  

export default studentReducer;