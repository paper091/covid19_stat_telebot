
import { initializeApp } from 'firebase/app';
import { getDatabase } from "firebase/database";

// Set the configuration for your app
// TODO: Replace with your project's config object
const firebaseConfig = {
  apiKey: "AIzaSyCPxaqCSBAoU4go5OJk1Fhqb0HjnK475FE",
  authDomain: "telebot-covid19-stat.firebaseapp.com",
  // For databases not in the us-central1 location, databaseURL will be of the
  // form https://[databaseName].[region].firebasedatabase.app.
  // For example, https://your-database-123.europe-west1.firebasedatabase.app
  databaseURL: "https://telebot-covid19-stat-default-rtdb.asia-southeast1.firebasedatabase.app/",
  storageBucket: "bucket.appspot.com"
};

const app = initializeApp(firebaseConfig);

// Get a reference to the database service
const database = getDatabase(app);
