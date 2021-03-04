import firebase, {auth} from "./Firebase"

const db = firebase.firestore();

export async function createUser(collection, data, user, setEvent) {
    const userData = await db.collection(collection)

    let uExist = await userData.where("id", "==" ,user.uid).get()
    if(uExist.size){
        uExist.forEach(doc => {
            // setEvent(doc.data().cart)
        })
    }else{
        userData.add(data)
    }

}

export async function saveUser(collection, data, user) {
    const userData = await db.collection(collection)
    userData.where("id", "==", user.uid).get()
            .then(docs => {
                console.log("user", docs.size)
                    docs.forEach(doc => {
                        console.log(doc.id)
                        db.collection(collection).doc(doc.id).update(data)
                    })

            }).
            catch(e =>{
                console.log(e)
            })

}
