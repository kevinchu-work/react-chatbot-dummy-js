import React from 'react';

import Header           from './Components/Header/Header';
import SubTitle         from './Components/SubTitle';
import DialogWrapper    from './Components/Main/DialogWrapper';
import AssistantBar     from './Components/AssistantBar';
import InputBar         from './Components/InputBar';


export default class App extends React.Component {

  render() {
    return 
      <>
        <Header id="header"></Header>
        <SubTitle id="subtitle"></SubTitle>
        <DialogWrapper id="root"></DialogWrapper>
        <AssistantBar id="assistantBar"></AssistantBar>
        <InputBar id="userTalk"></InputBar>
      </>;
  }

}