import firebase from 'firebase';

const firebaseConfig = {
  apiKey: "AIzaSyBCx44YHGPe0f4hX1C0ui1h5PltBa3CZx8",
  authDomain: "whatsapp-clone-test-87aca.firebaseapp.com",
  databaseURL: "https://whatsapp-clone-test-87aca-default-rtdb.firebaseio.com",
  projectId: "whatsapp-clone-test-87aca",
  storageBucket: "whatsapp-clone-test-87aca.appspot.com",
  messagingSenderId: "321724811002",
  appId: "1:321724811002:web:fa210e5c43fc357af22b43"
};

  const firebaseApp = firebase.initializeApp(firebaseConfig);
  const db = firebaseApp.firestore();
  const auth = firebaseApp.auth();
  const provider = new firebase.auth.GoogleAuthProvider();

  export { auth, provider };
  export default db;

  