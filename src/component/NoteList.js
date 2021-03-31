import React, { Component } from 'react';
import {noteData} from './firebaseConnect'
import NoteItem from './NoteItem';

class NoteList extends Component {
    constructor(props){
        super(props);
        this.state = {
            dataFireBase: []
        }
    }

    componentDidMount(){
        noteData.on('value', (notes) => {
            var data =[]
            notes.forEach(element => {
                const id = element.key
                const noteTitle = element.val().noteTitle
                const noteContent = element.val().noteContent
                data.push({
                    id: id,
                    noteTitle: noteTitle,
                    noteContent: noteContent
                })
            });
            this.setState({
                dataFireBase: data
            })
        })
    }

    getData = () => {
        if(this.state.dataFireBase){
            return this.state.dataFireBase.map((value, key) => {
                return(
                    <NoteItem
                       key = {key}
                       id = {key}
                       noteTitle = {value.noteTitle}
                       noteContent = {value.noteContent}
                       note = {value}
                    />
                )
            })
        }
    }

    render() {
        return (
                    <div className="col">
                    <div id="noteList" role="tablist" aria-multiselectable="true">

                        {this.getData()}

                    </div>
                    </div>
            );
    }
}

export default NoteList;