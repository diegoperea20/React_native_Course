import React, { useState } from 'react';
import { TextInput } from 'react-native';

const Input2 = ({ value, onChangeText }) => {
  const handleTextChange = (newText) => {
    // Validamos que el valor ingresado sea un número
    if (/^\d+$/.test(newText) || newText === '') {
      onChangeText(newText);
    }
  };

  return (
    <TextInput
      value={value}
      onChangeText={handleTextChange}
      placeholder="Digit here input2"
      style={{  width:200, height: 40, borderColor: 'gray', borderWidth: 1, backgroundColor: 'white' }}
      keyboardType="numeric" // Teclado numérico
    />
  );
};

export default Input2;
