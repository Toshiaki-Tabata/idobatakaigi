import React, { useState } from 'react';
import SignIn from './SignIn';
import config from '../config.json';

export const App = () => {
  const [name, setName] = useState('');
  console.log(name);

  return <SignIn setName={setName} />;
};
