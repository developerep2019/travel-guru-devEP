import React, { useContext, useState } from 'react';
import * as firebase from "firebase/app";
import './login.css'
import "firebase/auth";
import "firebase/firestore";
import firebaseConfig from '../../firebaseConfig';
import googleImg from '../../Image/Icon/google.png';
import fbImg from '../../Image/Icon/fb.png';
import { UserContext } from '../Home/Home';
import { useHistory, useLocation } from 'react-router-dom';

firebase.initializeApp(firebaseConfig)

const Login = () => {
    const handleGoogleSignIn = () => {
        const googleProvider = new firebase.auth.GoogleAuthProvider();
        firebase.auth().signInWithPopup(googleProvider).then(result => {
            const user = result.user;
        }).catch(error => {
            const errorMessage = error.message;
            setErrMsg(errorMessage)
        });
    }
    const handleFacebookSignIn = () => {
        const facebookProvider = new firebase.auth.FacebookAuthProvider();
        firebase.auth().signInWithPopup(facebookProvider)
            .then(info => {
                console.log(info.user)
            })
            .catch(err => {
                console.log(err.message)
            })
    }
    const [loggedInUser, setLoggedInUser] = useState({
        name: '',
        email: '',
        password: '',
    })
    const [user, setUser] = useContext(UserContext);
    const history = useHistory();
    const location = useLocation();
    let { from } = location.state || { from: { pathname: "/" } };
    const [errMsg, setErrMsg] = useState('');
    const [newUser, setNewUser] = useState(false);
    const handleBlur = (e) => {
        let isFormValid;
        if (e.target.name === 'email') {
            isFormValid = /\S+@\S+\.\S+/.test(e.target.value);
        }
        if (e.target.name === 'password') {
            isFormValid = /^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{6,512}$/.test(e.target.value);
        }
        if (isFormValid) {
            const newUserInfo = { ...loggedInUser };
            newUserInfo[e.target.name] = e.target.value;
            setLoggedInUser(newUserInfo)
            setUser(newUserInfo)
        }
    }
    const handleSubmit = (e) => {
        const { email, password } = loggedInUser;
        if (newUser && email && password) {
            firebase.auth().createUserWithEmailAndPassword(email, password)
                .then(userData => {
                    setErrMsg('user logged in successfully')
                })
                .catch(error => {
                    var errorMessage = error.message;
                    setErrMsg(errorMessage);
                });
        }
        if (!newUser && email && password) {
            firebase.auth().signInWithEmailAndPassword(email, password)
                .then(res => {
                    const newUserInfo = { ...loggedInUser };
                    newUserInfo[e.target.name] = e.target.value;
                    setLoggedInUser(newUserInfo)
                    setUser(newUserInfo)
                    history.replace(from)
                })
                .catch(error => {
                    var errorMessage = error.message;
                    setErrMsg(errorMessage);
                });
        }

        e.preventDefault();
    }

    return (
        <div>
            <div className="box">
                <form onSubmit={handleSubmit}>
                    <h3>{newUser ? 'SIGN UP' : 'LOG IN'}</h3>
                    {newUser && <input type="text" name="name" id="" placeholder="Your Name" onBlur={handleBlur} />}
                    <input type="text" placeholder="Email Address" onBlur={handleBlur} name="email" required />
                    <input type="password" name="password" id="" placeholder="Password" onBlur={handleBlur} required />
                    <input type="submit" value={newUser ? "Sign Up" : "Log In"} />
                    <p className="err">{errMsg}</p>
                    <input type="checkbox" name="signUp" id="" onChange={() => setNewUser(!newUser)} />
                    <label htmlFor="signUp">New User? Sign Up</label>
                </form>

                <div className="logInBtns">
                    <button onClick={handleGoogleSignIn}> <img src={googleImg} alt="" /> Continue With Google</button>
                </div>
                <br />
                <div className="logInBtns">
                    <button onClick={handleFacebookSignIn}> <img src={fbImg} alt="" /> Continue with Facebook</button>
                </div>
            </div>
        </div>
    );
};

export default Login;