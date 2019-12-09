import React from 'react';

import Header           from './Components/Header/Header';
import SubTitle         from './Components/SubTitle';
import DialogWrapper    from './Components/Main/DialogWrapper';
import AssistantBar     from './Components/AssistantBar';
import InputBar         from './Components/InputBar';


export default class App extends React.Component {

  state = {
    // Modules Control
    is_mobileMenuOpened: false,
    is_userLogined: false,
    is_assistantBarShowing: false,

    // User status
    is_typing: false,
    is_recording: false,  // Voice Record
  }

  constructor(props) {
    super(props);

    this.userLoginToggle = this.userLoginToggle.bind(this);
  }

  userLoginToggle = (loginedFlag) => {
    this.setState({
      is_userLogined: loginedFlag
    });
  }

  render() {

    let is_userLogined_var = this.state.is_userLogined;

    return (
      <>
        <header>
          <Header id="header"></Header>
          <SubTitle id="subtitle" is_userLogined={is_userLogined_var}></SubTitle>
        </header>
        <main>
          <DialogWrapper id="root"></DialogWrapper>
          <AssistantBar id="assistantBar"></AssistantBar>
          <InputBar id="userTalk"></InputBar>
        </main>
      </>
    );
  }

}