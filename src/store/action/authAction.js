export const signIn = (credentials) => {
    return (dispatch,getState,{getFirebase}) => {
        const firebase = getFirebase();

        firebase.auth().signInWithEmailAndPassword(
            credentials.email,
            credentials.password
        ).then(()=>{
            dispatch({type:'LOGIN_SUCCESS'});
        }).then((err)=>{
            dispatch({type:'LOGIN_ERROR'});
        })
    }
}

export const signUp =(newUser) => {
    return(dispatch,getState,{ getFirebase,getFirestore }) => {
        const firebase = getFirebase();
        const firestore = getFirestore();

        firebase.auth().createUserWithEmailAndPassword(
            newUser.email,
            newUser.password
        ).then((resp) => {
            return firestore.collections('users').doc(resp.user.uid).set({
                firstName : newUser.firstName,
                lastName : newUser.lastName,
                initials:newUser.firstName[0] + newUser.lastName[0]
            })
        }).then(()=>{
            dispatch({ 
                type: 'SIGNUP_SUCCESS'
            })
        }).catch(err => {
            dispatch({
                type:'SIGNUP_ERROR',err
            })
        })
    }
}