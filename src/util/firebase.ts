import { initializeApp, FirebaseApp } from "firebase/app";
import { getFirestore, Firestore } from "firebase/firestore";

class DBConfig {
  private _app:FirebaseApp;
  public dbConnection:Firestore;

  constructor() {
    this._app = initializeApp({
      apiKey: "AIzaSyA58Is9XyL2mUGDqXMwbFrQs_X_V50O7LY",
      authDomain: "blog-coex.firebaseapp.com",
      projectId: "blog-coex",
      storageBucket: "blog-coex.appspot.com",
      messagingSenderId: "122934693022",
      appId: "1:122934693022:web:4de79e8f9fa78263133f8f"
    })

    this.dbConnection = getFirestore(this._app);
  }
}

export default DBConfig;