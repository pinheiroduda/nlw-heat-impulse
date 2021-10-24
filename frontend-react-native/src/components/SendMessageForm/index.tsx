import React from 'react';

import {
  TextInput,
  View
} from 'react-native';
import { COLORS } from '../../theme';
import { Button } from '../Button';

import { styles } from './styles';

export function SendMessageForm(){
  return (
    <View style={styles.container}>
      <TextInput
        keyboardAppearance='dark'
        placeholder='Qual a sua expectativa para o evento DoWhile?'
        placeholderTextColor={COLORS.GRAY_PRIMARY}
        multiline
        maxLength={140}
        style={styles.input}
      />

      <Button 
      title='Enviar mensagem'
      backgroundColor={COLORS.PINK}
      color={COLORS.WHITE}
      />
    </View>
  );
}