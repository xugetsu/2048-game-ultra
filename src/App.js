import React, {Component} from 'react';
import style from './CSS/App.css';
import GameContainer from './Containers/GameContainer/GameContainer';
import Header from './Components/Header/Header';
import Footer from './Components/Footer/Footer';
import Modal from './UI/Modal/Modal';
import TopPlayers from './Components/GameInfo/TopPlayers/TopPlayers';

class App extends Component{
  state = {
    showTopPlayersModal:false
  }
  hideTopPlayersModalHandler  = () => {
    this.setState({showTopPlayersModal:false});
  }
  showTopPlayersModalHandler = () => {
    this.setState({showTopPlayersModal:true});
  }
  render() {
    
    return (
        <div className = {style.BigWrapper}>
          <Header />

          <Modal show = {this.state.showTopPlayersModal} exit = {this.hideTopPlayersModalHandler}>
            <TopPlayers />
          </Modal>
          
          <GameContainer 
            showTopPlayersModal= {this.showTopPlayersModalHandler}/> 

          <Footer />
            
        </div>
        );
  }
}
export default App;