import React, { useState } from 'react';
import SignIn from './SignIn';
import { Main } from './Main';
import config from '../config.json';

export const App = () => {
  const [name, setName] = useState('');
  console.log(name);

  if (name === '') {
    return <SignIn setName={setName} />;
  } else {
    return <Main name={name} />;
  }
};
