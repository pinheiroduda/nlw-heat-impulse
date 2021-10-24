import React, { useState } from 'react';

import {
  Alert,
  TextInput,
  View,
  Keyboard
} from 'react-native';
import { api } from '../../services/api';
import { COLORS } from '../../theme';
import { Button } from '../Button';

import { styles } from './styles';

export function SendMessageForm(){
  const [message, setMessage] = useState('');
  const [sendingMessage, setSendingMessage] = useState(false)

  async function handleMessageSubmit() {
    const messageFormatted = message.trim();
    await api.post('/messages', { message: messageFormatted });

    setMessage('');
    Keyboard.dismiss();
    setSendingMessage(false);
    Alert.alert('Mensagem enviada com sucesso!')

    if (messageFormatted.length > 0) {
      setSendingMessage(true);
    } else {
      Alert.alert ('Escreva a mensagem para enviar.');
    }
    
  }

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
      isLoading={sendingMessage}
      onPress={handleMessageSubmit}
      />
    </View>
  );
}