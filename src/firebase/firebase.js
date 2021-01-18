import * as firebase from 'firebase';

const config = {
  apiKey: process.env.FIREBASE_API_KEY,
  authDomain: process.env.FIREBASE_AUTH_DOMAIN,
  databaseURL: process.env.FIREBASE_DATABASE_URL,
  projectId: process.env.FIREBASE_PROJECT_ID,
  storageBucket: process.env.FIREBASE_STORAGE_BUCKET,
  messagingSenderId: process.env.FIREBASE_MESSAGING_SENDER_ID
  
};

firebase.default.initializeApp(config);
const database = firebase.default.database();
export {firebase, database as default };

/* const createdAt = moment();


database.ref('expenses').on('child_removed', (snapshot) => {
  console.log(snapshot.key, snapshot.val())
})

database.ref('expenses').on('child_changed',(snapshot) => {
  console.log(snapshot.key, snapshot.val())
})

database.ref('expenses').on('child_added',(snapshot) => {
  console.log(snapshot.key, snapshot.val())
})
 */
/* database.ref('expenses').on('value', (snapshot) => {
  const expenses = [];
  snapshot.forEach((childSnapshot) => {
    expenses.push({
      id: childSnapshot.key,
      ...childSnapshot.val()
    })
  })
  console.log(expenses)
}) */
/* database.ref('expenses')
.once('value')
.then((snapshot) => {
  const expenses = [];
  snapshot.forEach((childSnapshot) => {
    expenses.push({
      id: childSnapshot.key,
      ...childSnapshot.val()
    })
  })
  console.log(expenses)
}) */

/* database.ref('expenses').push({
  description: 'buy food',
  note: 'food',
  amount:900,
  createdAt: 2323
}) */







/* database.ref('notes').push({
  title:'Course topics',
  body:'React-native, Angular'
}) */


/* const firebaseNotes = {
  notes:{
    ajdhajs:{
      title:'First Note',
      body:'This is my note'
    },
    ahdjshgd:{
      title:'First Note',
      body:'This is my note'
    }
  }
}

const notes = [{
  id:'12',
  title:'First Note',
  body:'This is my note'
},{
  id:'761ase',
  title:'First Note',
  body:'This is my note'
}]
database.ref('notes').set(notes); */
/* database.ref().on('value', (snapshot) => {
  const value = snapshot.val();
  console.log(value.name+ " is a "+value.job.title)
}, (e) => {
  console.log('Error occured')
})
 */

/* const onValueChange = database.ref().on('value', (snapshot) => {
  console.log(snapshot.val())
}, (e) => {
  console.log("error with data fetching", e)
})

setTimeout(() => {
  database.ref('age').set(28);
}, 3500);

setTimeout(() => {
  database.ref().off('value',onValueChange);
}, 7000);

setTimeout(() => {
  database.ref('age').set(90);
}, 10500); */


/* database.ref('location/city')
  .once('value')
  .then((snapshot) => {
    const val = snapshot.val();
    console.log(val);
  })
  .catch((e) => {
    console.log("error fetching the data", e)
  }) */
/* 
 database.ref().set({
  name:'Swathi Kokkiligadda',
  age:89,
  isSingle:false,
  job:{
    title: "software engg",
    company:"Google"
  },
  stressLevel:6,
  location:{
    city:"NYC",
    country:"US"
  }
}).then(() => {
  console.log('data is saved')
}).catch((error) => {
  console.log("error", "there is something wrong")
})  */
 
/* database
  .ref('isSingle')
  .remove()
  .then(() => {
    console.log("data was removed")
  })
  .catch(() => {
    console.log("something went wrong")
  } )*/

 /*  database.ref().update({
    stressLevel: 9,
    'job/company': "Amazon",
    'location/city':"Seattle"
  }) */

 

