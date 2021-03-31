import React, { Component } from 'react'
import { connect } from 'react-redux'

class NoteItem extends Component {
    constructor(props){
        super(props);
        this.state ={    
        }
    }

    buttonEdit = () => {
        this.props.showEditForm()
        this.props.getNoteEdit(this.props.note)
        this.props.changeTitle(false)
    }

    buttonDelete = () => {
        this.props.deleteNote(this.props.note.id)
    }
    render() {
        return (
            <div className="card">
                <div className="card-header" role="tab" id={this.props.id}>
                    <h5 className="mb-0">
                    <a data-toggle="collapse" data-parent="#noteList" href={"#note" + this.props.id} aria-expanded="true" aria-controls={"note" + this.props.id}>
                       {this.props.noteTitle}
                    </a>
                    <div className = 'btn-group float-right'>
                        <button 
                           className='btn btn-outline-info'
                           onClick ={() => this.buttonEdit()}
                           >Sửa</button>
                        <button className='btn btn-outline-secondary'
                        onClick = {() => this.buttonDelete()}
                        >Xóa</button>
                    </div>
                    </h5>
                </div>
                <div id={"note" + this.props.id} className="collapse in" role="tabpanel" aria-labelledby={this.props.id}>
                    <div className="card-body">
                        {this.props.noteContent}
                    </div>
                </div>
            </div>
        )
    }
}

const mapStateToProps = (state, ownProps) => {
    return {
        isEdit: state.isEdit
    }
}

const mapDispatchToProps = (dispatch, ownProps) => {
    return {
        showEditForm: () => {
            dispatch({
                type:'CHANGE_EDIT_STATUS'
            })
        },
        getNoteEdit: (dataNoteEdit) => {
            dispatch({
                type:'GET_NOTE_EDIT',
                dataNoteEdit
            })
        },
        deleteNote: (noteID) => {
            dispatch({
                type:"DELETE_NOTE",
                noteID
            })
        },
        changeTitle: (newTitle) => {
            dispatch({
                type:'CHANGE_IS_TITLE',
                newTitle
            })
        }
    }
}
export default connect(mapStateToProps,mapDispatchToProps)(NoteItem)
