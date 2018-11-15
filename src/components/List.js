import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { handleDelete } from '../actions/todo';

const List = (props) => {
  const { arr, handleDelete } = props;
  return (
    <div>
      <ul>
        {arr.map((ele, i) => {
          return <li key={i}>
            {ele}
            <button onClick={() => handleDelete(i)}>Delete</button>
          </li>
        })}
      </ul>
    </div>
  )
}

// connecting our state and actions to component props
const mapStateToProps = (state) => {
  return {
    arr: state.todo.arr,
    currentText: state.todo.currentText,
  }
}

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({
    handleDelete
  }, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(List);
