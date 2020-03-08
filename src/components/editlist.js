import React, { Component } from 'react'
import { connect } from 'react-redux'
import {complete,deletetodos} from '../js/actions/createaction'

class editlist extends Component {
    render() {
        return (
            <div>
                <ul>
                     {
                        this.props.tasklist.map((el,i)=><li className='listes' key={i}>
                        <button onClick={()=>this.props.complete(i)}className='butt' >{!this.props.isComplete[i]?'complete':'undo'}</button>
                        <button className='butt'onClick={()=>this.props.deletetodos(i)}>delete</button>
                        <p className={`${!this.props.isComplete[i] ?'aadi':'star'}`}>{el}</p>
                        </li>)
                    } 
                     </ul>
                     <footer class="last-section">
    <img src="" alt="logo"width="50px"/>
    <p>Proudly Powered By Cosmic JS</p>
</footer>
            </div>
        )
    }
}
const mapStateToProps = state => {
    return {
      task: state.task,
      tasklist: state.tasklist,
      isComplete: state.isComplete,
    
    };}
    const mapDispatchToProps = dispatch => {
        return {
          complete: i => {
            dispatch(complete(i));
          },
        deletetodos:i=>{
            dispatch(deletetodos(i))
        }}
  
}
  export default connect(mapStateToProps, mapDispatchToProps)(editlist);
