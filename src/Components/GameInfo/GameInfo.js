import React, {Component} from 'react';
import style from './GameInfo.css'
import TopButton from './TopPlayers/TopButton/TopButton';
import { connect } from 'react-redux';
import {_fetchBestScore_} from '../../store/actions/index';
import loading from '../../Assets/loading.gif';
class gameInfo extends Component{
    // state = {
    //     matrixSize:null,
    // }

    componentDidMount(){
        this.props.onfetchBestScore();
    }
    // static getDerivedStatefromProps(newProps, prevState){
    //     if(newProps.matrixSize !== prevState.matrixSize){
    //         this.setState({
    //             loading: true,

    //         })
    //     }
    // }
    render(){
        let bestScore = 0;
        if (!this.props.bestScore && !this.props.fetchBestScoreFail){
            bestScore = <img style={{height:'15px',marginTop:'31px'}} src={loading} alt='loading'/>;
        }else if (this.props.fetchBestScoreFail){
            bestScore = this.props.score;
        }else{
            bestScore= this.props.bestScore
        }
        return (
            <div className = {style.Info_wrapper}>

                <div className = {style.Info_Score}> 
                    {this.props.score}
                </div>
                <div className = {style.Info_Best}> 
                    {bestScore}
                </div>  
                <TopButton showTopPlayersModal = {this.props.showTopPlayersModal}/>

            </div>   
        );
    }
}


const mapStateToprops = (state) => {
    return {
        score : state.score,
        bestScore : state.bestScore,
        matrixSize : state.matrixSize,
        fetchBestScoreFail : state.fetchBestScoreFail
    }
}
const mapDispatchToProps = dispatch => {
    return {
        onfetchBestScore : () => dispatch(_fetchBestScore_()),
    };
};
export default connect(mapStateToprops, mapDispatchToProps)(gameInfo);
