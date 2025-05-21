import { initializeApp } from 'firebase/app';
import { getAuth, GoogleAuthProvider, onAuthStateChanged, signInWithPopup, signOut } from 'firebase/auth';
import { addDoc, collection, getDocs, getFirestore, serverTimestamp } from 'firebase/firestore';
import { createContext, useContext, useEffect, useState } from 'react';

const firebaseConfig = {
    apiKey: "AIzaSyCAQveV836mYQZA_rLMb4tssLWnekP0NOo",
    authDomain: "portfolio-2d07f.firebaseapp.com",
    projectId: "portfolio-2d07f",
    storageBucket: "portfolio-2d07f.firebasestorage.app",
    messagingSenderId: "297672584660",
    appId: "1:297672584660:web:e4562b326b73eaac467a41",
};

const firebaseApp = initializeApp(firebaseConfig);
const firebaseAuth = getAuth(firebaseApp);
// Google Authentication :
const Google = new GoogleAuthProvider();
// Firestore Database :
const firestore = getFirestore(firebaseApp);
// Context Created :
const FirebaseContext = createContext(null);
// Now we can use This FirebaseContext where ever we want but but but..., we always need to use FirebaseContext.consumer wrapper every single time..., instead we can use useContext() Hook and using this hook make a coustom hook which can capable to go any where and use anything The Provider has...

export const useFirebase = () => useContext(FirebaseContext);

// Create a Function Which is taking whole app in it :
export const FirebaseProvider = (props) => {
    // This is the function which is sending their data to whole application, Want to know How ?
    // This FirebaseProvider Function is wrapped on Whole App.jsx Component. which is coming here is prop and we were sending data to the props.children.
    const [ isUserActive, setIsUserActive ] = useState(null);
    useEffect(()=>{
        onAuthStateChanged(firebaseAuth,(user)=>{
            if(user) setIsUserActive(user);
        })
    }, []);

    const loginWithGoogle = async () => {
        await signInWithPopup(firebaseAuth , Google);
    }

    const setUpData = async (comment, userDisplayName, userEmail) => {
        await addDoc(collection(firestore, 'comments'), {
            comments: comment,
            userDisplayName: userDisplayName,
            userEmail: userEmail,
            commentCreatedAt: serverTimestamp(),
        });
    }

    const getComments = async () => {
        const snapshot = await getDocs(collection(firestore, 'comments'))
        return snapshot;
    }

    const setMessage = async ( messagerName, email, message, userDisplayName ) => {
        await addDoc(collection(firestore, 'message'), {
            name: messagerName,
            email: email,
            message: message,
            userName: userDisplayName
        })
    }

    const userSignOut = () => {
        signOut(firebaseAuth);
    }

    return <FirebaseContext.Provider value={{ loginWithGoogle, isUserActive, setUpData, getComments, userSignOut, setMessage }} > {props.children} </FirebaseContext.Provider>
}