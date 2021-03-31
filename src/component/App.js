import React, { Component } from 'react'
import Header from './Header'
import NoteForm from './NoteForm'
import NoteList from './NoteList'
// import {noteData} from './firebaseConnect'
import { connect } from 'react-redux'
import EditForm from './EditForm'
// import Aler from './Aler'

 class App extends Component {

  // getData = (item) => {
  //   noteData.push(item)
  // }

  showEditForm = () => {
    if(this.props.isEdit&&this.props.isAdd===false){
      return <NoteForm/>
    }
    if(this.props.isAdd&&this.props.isEdit===false){
      return <EditForm/>
    }
  }

  render() {
  //  noteData.once('value').then(function(snapshot){
  //     console.log(snapshot.val())
  //   })

    return (
      <div>
        <Header/>
        {/* <Aler/> */}
        <div>
        <div className='container'>
          <div className="row">
            <NoteList/>
            {this.showEditForm()}
          </div>
        </div>
        </div>
      </div>
    )
  }
}

const mapStateToProps = (state, ownProps) => {
  return {
    isEdit: state.isEdit,
    isAdd: state.isAdd
  }
}

export default connect(mapStateToProps)(App)

