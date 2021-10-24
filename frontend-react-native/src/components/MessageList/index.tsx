import React, { useState, useEffect } from 'react';
import { ScrollView } from 'react-native';
import { api } from '../../services/api';

import { Message, MessageProps } from '../Message'

import { styles } from './styles';

export function MessageList(){
  const [currentMessages, setCurrentMessages] = useState<MessageProps[]>([]);

  useEffect(() => {
    async function fecthMessages() {
      const messagesResponse = await api.get<MessageProps[]>('/messages/last3')
      setCurrentMessages(messagesResponse.data);
    }

    fecthMessages();
  }, [])

  // const message = {
  //   id: '1',
  // text: 'mensagem de teste',
  // user: {
  //   name: 'duda',
  //   avatar_url: 'https://github.com/pinheiroduda.png',
  // }
  // }

  return (
    <ScrollView
      style={styles.container}
      contentContainerStyle={styles.content}
      keyboardShouldPersistTaps="never"
    >
      {currentMessages.map((message) => <Message key={message.id} data={message} />)}
    </ScrollView>
  );
}