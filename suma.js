import React, { useState } from 'react';
import { View, Button, Text } from 'react-native';
import Input1 from './input1';
import Input2 from './input2';

const Sum = () => {
  const [input1, setInput1] = useState('');
  const [input2, setInput2] = useState('');
  const [result, setResult] = useState('');

  const handleSum = () => {
    const sum = parseInt(input1) + parseInt(input2);
    setResult(sum.toString());
  };

  return (
    <View>
      <Input1 value={input1} onChangeText={setInput1} />
      <Input2 value={input2} onChangeText={setInput2} />
      <Button title="Sum" onPress={handleSum} />
      {result ? <Text style={{ fontSize: 20, color: "white" }}>Resultado : {result}</Text> : null}
    </View>
  );
};

export default Sum;
