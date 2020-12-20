import React, { useState } from 'react';
import SignIn from './SignIn';

export const App = () => {
  const [name, setName] = useState('');
  console.log(name);

  return <SignIn setName={setName} />;
};
