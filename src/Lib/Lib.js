import firebase from "./Firebase"

const db = firebase.firestore();

export async function createUser(collection, data, email) {
    const userData = await db.collection(collection)

    if (userData) {
        console.log("User is already recorded")
        userData.add(data)
    } else {


    }
}

//Login by google accounts
//Check the different documents and see the email field in them
//If it exists, then pull the last known data of the cart (can be empty or filled)
//If it doesn't create a new user with a new UID and then