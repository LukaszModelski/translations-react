import React from 'react';
import { firebaseSingOut } from '../firebase.js';

const SignOut = () => {

  return (
    <button onClick={firebaseSingOut}>
      Sign out
    </button>
  );
}

export default SignOut;