import 'bootstrap';
import '../styles/main.scss';
import firebase from 'firebase/app';
import apiKeys from './helpers/apiKeys.json';

import auth from './components/auth/auth';
import authData from './helpers/data/authData';

import myNavbar from './components/myNavbar/myNavbar';

const init = () => {
  firebase.initializeApp(apiKeys.firebaseConfig);
  authData.checkLoginStatus();
  auth.logInButton();
  myNavbar.logoutEvent();

  $('body').on('mouseenter', '.myco-card', (e) => {
    e.target.closest('.card').classList.add('bg-dark');
  });
  $('body').on('mouseleave', '.myco-card', (e) => {
    e.target.closest('.card').classList.remove('bg-dark');
  });
};

init();
