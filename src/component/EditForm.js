import React, { Component } from 'react'
import { connect } from 'react-redux';

class EditForm extends Component {
    constructor(props){
        super(props);
        this.state = {
            noteTitle: '',
            noteContent: '',
            id: ''
        }
    }

    isChange = (event) => {
        var name = event.target.name
        var value = event.target.value
        this.setState({
            [name] : value
        })
    }

    addNoteData = (noteTitle, noteContent) => {
        var editItem = {}
        editItem.id= this.state.id
        editItem.noteTitle = this.state.noteTitle
        editItem.noteContent = this.state.noteContent
        this.props.addData(editItem)
        this.props.showEditForm()
   }
    render() {
        return (
            <div className="col-4">
                <h3>Thêm Note Mới</h3>
                <form>
                    <div className="form-group">
                        <label htmlFor="noteTitle">Tiêu đề Note</label>
                        <input
                        
                            onChange = {(event) => this.isChange(event)}  
                            type="text" className="form-control" name="noteTitle" id="noteTitle" aria-describedby="helpIdNoteTitle" placeholder="Tiêu đề Note..." />
                            <small id="helpIdNoteTitle" className="form-text text-muted">Điền tiêu đề vào đây</small>
                    </div>
                    <div className="form-group">
                        <label htmlFor="noteContent">Nội dung Note</label>
                        <textarea 
                            
                            onChange = {(event) => this.isChange(event)} 
                            type="text" className="form-control" name="noteContent" id="noteContent" aria-describedby="helpIdNoteContent" placeholder="Nội dung Note..." />
                        <small id="helpIdNoteContent" className="form-text text-muted">Điền nội dung vào đây</small>
                    </div>
                    <button 
                        onClick = {() => this.addNoteData(this.state.noteTitle, this.state.noteContent)}
                        type="reset" className="btn btn-primary btn-block">Lưu
                    </button>
                </form>
            </div>
        )
    }
}

const mapStateToProps = (state, ownProps) => {
    return {
        noteEdit: state.noteEdit,
        isTitle: state.isTitle
    }
}

const mapDispatchToProps = (dispatch, ownProps) => {
    return {
        addData: (newItem) => {
            dispatch({type:'ADD_DATA',newItem})
        },
        showEditForm: () => {
            dispatch({type:'CHANGE_ADD_STATUS'})
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(EditForm)