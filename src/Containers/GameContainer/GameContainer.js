import React, {Component} from 'react';
import style from './GameContainer.css';
import GameMenu from '../../Components/GameMenu/GameMenu';
import GameInfo from '../../Components/GameInfo/GameInfo';
import MatrixContainer from '../../Containers/MatrixContainer/MatrixContainer';
import ControlKeys from '../../Components/ControlKeys/ControlKeys';
import BlockerInfo from '../../Components/TilesInfo/BlockerInfo';
import {connect} from 'react-redux';
import {_setLocalStorageData_} from '../../store/actions/index';

class GameContainer extends Component{

  componentDidMount(){
      window.addEventListener('beforeunload', this.props.onSetLocalStorageData);  
  }

  componentWillUnmount() {
    window.removeEventListener('beforeunload', this.props.onSetLocalStorageData);  
  }

  render(){
    return (
      <div className={style.GameContainer}>
        <GameInfo showTopPlayersModal = {this.props.showTopPlayersModal}/>
        <GameMenu menuHeight = {433} />
        <MatrixContainer />
        <BlockerInfo />
        <ControlKeys />
      </div>
    );
   }
}

const mapDispatchToProps = dispatch =>{
  return {
    onSetLocalStorageData: () => dispatch(_setLocalStorageData_())
  };
};

export default connect(mapDispatchToProps)(GameContainer);
