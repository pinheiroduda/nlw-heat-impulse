import React, { useState } from 'react';

import {
  TextInput,
  View
} from 'react-native';
import { COLORS } from '../../theme';
import { Button } from '../Button';

import { styles } from './styles';

export function SendMessageForm(){
  const [message, setMessage] = useState('');
  const [sendingMessage, setSendingMessage] = useState(false)

  return (
    <View style={styles.container}>
      <TextInput
        keyboardAppearance='dark'
        placeholder='Qual a sua expectativa para o evento DoWhile?'
        placeholderTextColor={COLORS.GRAY_PRIMARY}
        multiline
        maxLength={140}
        onChangeText={setMessage}
        value={message}
        style={styles.input}
        editable={!sendingMessage}
      />

      <Button 
      title='Enviar mensagem'
      backgroundColor={COLORS.PINK}
      color={COLORS.WHITE}
      />
    </View>
  );
}