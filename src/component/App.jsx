import React, { useState } from 'react';
import { SignIn } from './SignIn';
import { Main } from './Main';
import config from '../config.json';
import "./App.css";

export const App = () => {
  const [name, setName] = useState('');
  console.log(name);

  if (config.signInEnabled && name === '') {
    return <SignIn setName={setName} />;
  } else {
    return <Main name={name} />;
  }
};
