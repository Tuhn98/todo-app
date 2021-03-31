import React, { Component } from 'react'
import { connect } from 'react-redux';

class NoteForm extends Component {
    constructor(props){
        super(props);
        this.state = {
            noteTitle: '',
            noteContent: '',
            id: ''
        }
    }

    componentDidMount(){
        this.setState({
            id: this.props.noteEdit.id,
            noteTitle: this.props.noteEdit.noteTitle,
            noteContent: this.props.noteEdit.noteContent
        })
    }

    isChange = (event) => {
        var name = event.target.name
        var value = event.target.value
        this.setState({
            [name] : value
        })
    }

    getData = (noteTitle, noteContent) => {
            var editItem = {}
            editItem.id= this.state.id
            editItem.noteTitle = this.state.noteTitle
            editItem.noteContent = this.state.noteContent
            this.props.editData(editItem)
            this.props.showEditForm()
    }

    render() {
        return (
            <div className="col-4">
                <h3>Sửa nội dung Note</h3>
                <form>
                    <div className="form-group">
                        <label htmlFor="noteTitle">Tiêu đề Note</label>
                        <input
                            defaultValue={this.props.noteEdit.noteTitle}
                            onChange = {(event) => this.isChange(event)}  
                            type="text" className="form-control" name="noteTitle" id="noteTitle" aria-describedby="helpIdNoteTitle" placeholder="Tiêu đề Note..." />
                            <small id="helpIdNoteTitle" className="form-text text-muted">Điền tiêu đề vào đây</small>
                    </div>
                    <div className="form-group">
                        <label htmlFor="noteContent">Nội dung Note</label>
                        <textarea 
                            defaultValue={this.props.noteEdit.noteContent}
                            onChange = {(event) => this.isChange(event)} 
                            type="text" className="form-control" name="noteContent" id="noteContent" aria-describedby="helpIdNoteContent" placeholder="Nội dung Note..." />
                        <small id="helpIdNoteContent" className="form-text text-muted">Điền nội dung vào đây</small>
                    </div>
                    <button 
                        onClick = {() => this.getData(this.state.noteTitle, this.state.noteContent)}
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
    }
}

const mapDispatchToProps = (dispatch, ownProps) => {
    return {
        editData: (dataEdit) => {
            dispatch({type:'EDIT_NOTE',dataEdit})
        },
        showEditForm: () => {
            dispatch({type:'CHANGE_EDIT_STATUS'})
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(NoteForm)
