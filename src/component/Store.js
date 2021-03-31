import {noteData} from './firebaseConnect'

 var redux = require('redux')
 
 const noteInitialState = {
     isEdit: false,
     noteEdit: {},
     isTitle: true,
     isAdd: false
 }

const allReducer = (state = noteInitialState, action) => {
     switch (action.type) {
         case 'ADD_DATA':
            // console.log('Ket noi thanh cong' + 'bien nhan vao: ' + JSON.stringify(action.newItem))
            noteData.push(action.newItem)
             return state
         case 'CHANGE_EDIT_STATUS':
              return {...state, isEdit: !state.isEdit}
         case 'CHANGE_ADD_STATUS':
              return {...state, isAdd: !state.isAdd}
         case 'CHANGE_IS_TITLE':
              return {...state, isTitle: action.newTitle}
         case 'GET_NOTE_EDIT':
              return {...state, noteEdit: action.dataNoteEdit}
         case 'EDIT_NOTE':
             noteData.child(action.dataEdit.id).update({
                 noteTitle: action.dataEdit.noteTitle,
                 noteContent: action.dataEdit.noteContent
             })
            //  console.log('du lieu lay duoc sau khi sua ' + JSON.stringify(action.dataEdit))
              return {...state, noteEdit:{}}
         case 'DELETE_NOTE':
             noteData.child(action.noteID).remove()
                 return state
         default:
             return state
     }
 }
 var store = redux.createStore(allReducer)
//  store.subscribe(function(){
//      console.log(JSON.stringify(store.getState()))
//  })
 export default store