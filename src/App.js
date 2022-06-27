import React from 'react';
import { StreamChat } from 'stream-chat';
import { Chat, Channel, ChannelHeader, MessageInput, MessageList, Thread, Window } from 'stream-chat-react';

import 'stream-chat-react/dist/css/index.css';

const chatClient = StreamChat.getInstance('dz5f4d5kzrue');
const userToken = 'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ1c2VyX2lkIjoibHVja3ktcmVjaXBlLTgiLCJleHAiOjE2NTYzODM5MTN9.LEASxaR2hA09vY2K4CKx6AjwMZ3Z-rOwfwGVjtT3obs';

chatClient.connectUser(
  {
    id: 'lucky-recipe-8',
    name: 'lucky',
    image: 'https://getstream.io/random_png/?id=lucky-recipe-8&name=lucky',
  },
  userToken,
);

const channel = chatClient.channel('messaging', 'custom_channel_id', {
  // add as many custom fields as you'd like
  image: 'https://www.drupal.org/files/project-images/react.png',
  name: 'React Discussion',
  members: ['lucky-recipe-8'],
});

const App = () => (
  <Chat client={chatClient} theme='messaging light'>
    <Channel channel={channel}>
      <Window>
        <ChannelHeader />
        <MessageList />
        <MessageInput />
      </Window>
      <Thread />
    </Channel>
  </Chat>
);

export default App;
