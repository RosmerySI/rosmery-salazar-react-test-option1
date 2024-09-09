
import { initializeApp } from "firebase/app";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyD86V327s-zCCspX57wmM30U1zt-gtxjYs",
  authDomain: "rosmery-react-test-option1.firebaseapp.com",
  projectId: "rosmery-react-test-option1",
  storageBucket: "rosmery-react-test-option1.appspot.com",
  messagingSenderId: "1997291240",
  appId: "1:1997291240:web:5cd94033d98cd2ea57535d"
};


const app = initializeApp(firebaseConfig);
const storage = getStorage(app);

export {app ,storage };

// firebase login
// firebase init
// firebase deploy