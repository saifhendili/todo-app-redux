import React, { Component } from 'react'
import { connect } from "react-redux";
import { changeHandler, addToDo } from "../js/actions/createaction";
import '../App.css'
class addtodolist extends Component {
    render() {
        return (
            <div  className="header">
                 <h1 className="title-to-do-up">To-Do App!</h1> 
                 <p className="paragraphe-to-do-up">Add New To-Do</p>
                <input  class="input-task" type='text'placeholder='enter ur task here!!!' value={this.props.task}onChange={event=>this.props.changeHandler(event)}/>
                <button class="button-add"onClick={this.props.addToDo} >ADD
                </button>
                
                
            </div>
        )
    }
}

const mapStateToProps = state => 
     ({
      task: state.task,
      tasklist: state.tasklist,
     
    })
  
  const mapDispatchToProps = dispatch => {
    return {
      changeHandler: event => {
        dispatch(changeHandler(event));
      },
      addToDo: () => {
        dispatch(addToDo());
      }
    };
  };
  
  export default connect(mapStateToProps, mapDispatchToProps)(addtodolist);