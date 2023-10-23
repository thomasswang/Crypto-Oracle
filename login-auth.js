// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.5.0/firebase-app.js";
import { getAuth, GoogleAuthProvider, signInWithRedirect, getRedirectResult, signInWithPopup } from "https://www.gstatic.com/firebasejs/10.5.0/firebase-auth.js";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
	apiKey: "AIzaSyATlBRkQx3-yX9WqOotLZp3gsEnoJUyypo",
	authDomain: "crypto-oracle-prediction.firebaseapp.com",
	databaseURL: "https://crypto-oracle-prediction-default-rtdb.firebaseio.com",
	projectId: "crypto-oracle-prediction",
	storageBucket: "crypto-oracle-prediction.appspot.com",
	messagingSenderId: "949623671940",
	appId: "1:949623671940:web:ecdbc829392a93bffe86d1",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth();
const provider = new GoogleAuthProvider(app);

login.addEventListener("click", (e) => {
	// signInWithRedirect(auth, provider);

	// getRedirectResult(auth)
	// 	.then((result) => {
	// 		// This gives you a Google Access Token. You can use it to access Google APIs.
	// 		const credential = GoogleAuthProvider.credentialFromResult(result);
	// 		const token = credential.accessToken;

	// 		// The signed-in user info.
	// 		const user = result.user;
	// 		// IdP data available using getAdditionalUserInfo(result)
	// 		// ...
	// 	})
	// 	.catch((error) => {
	// 		// Handle Errors here.
	// 		const errorCode = error.code;
	// 		const errorMessage = error.message;
	// 		// The email of the user's account used.
	// 		const email = error.customData.email;
	// 		// The AuthCredential type that was used.
	// 		const credential = GoogleAuthProvider.credentialFromError(error);
	// 		// ...
	// 	});

	signInWithPopup(auth, provider)
		.then((result) => {
			// This gives you a Google Access Token. You can use it to access the Google API.
			const credential = GoogleAuthProvider.credentialFromResult(result);
			const token = credential.accessToken;
			// The signed-in user info.
			const user = result.user;
			// IdP data available using getAdditionalUserInfo(result)
			// ...

			//user name = displayName
			//email = email
			//photo = photoURL
			//redirect =
			alert("Hi " + user.displayName + " welcome to Crypto Oracle");
			window.location.assign = "data-crypto.html";
		})
		.catch((error) => {
			// Handle Errors here.
			const errorCode = error.code;
			const errorMessage = error.message;
			// The email of the user's account used.
			const email = error.email;
			// The AuthCredential type that was used.
			const credential = GoogleAuthProvider.credentialFromError(error);
			// ...
			alert(errorMessage);
		});
});
