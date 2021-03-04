import firebase from "./Firebase"

const db = firebase.firestore();

export async function createUser(collection, data, email) {
    const userData = await db.collection(collection)


    userData.where("email", "==", email).get()
        .then(qS => {
            qS.forEach(d => {
                //run again see the output
                console.log(d.data())
                if (!d.exists) {

                    userData.add(data)
                }
            })
        })

    //Us
}

//Login by google accounts
//Check the different documents and see the email field in them
//If it exists, then pull the last known data of the cart (can be empty or filled)
//If it doesn't create a new user with a new UID and then