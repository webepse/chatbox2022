import { initializeApp } from "firebase/app";
import { getDatabase } from "firebase/database";


const firebaseApp = initializeApp({
    apiKey: "AIzaSyAEI0eXrLy9Tf9KpkF9UPEqdyYzko3bMG8",
    authDomain: "chat2022-1fd21.firebaseapp.com",
    databaseURL: "https://chat2022-1fd21-default-rtdb.europe-west1.firebasedatabase.app", 
    projectId: "chat2022-1fd21",
    storageBucket: "chat2022-1fd21.appspot.com"
})

const database = getDatabase(firebaseApp)

export default database