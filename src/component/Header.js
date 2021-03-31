import React, { Component } from 'react'
import { connect } from 'react-redux'

 class Header extends Component {
     
    buttonAddNew = () => {
        this.props.showAddForm()
        this.props.changeTitle(true)
    }
    render() {
        return (
            <nav className="navbar navbar-expand-sm navbar-dark mb-4" style={{backgroundColor: 'black'}}>
                <a className="navbar-brand" href="https://www.facebook.com/ha.banga.1/">TodoApp</a>
                <button className="navbar-toggler d-lg-none" type="button" data-toggle="collapse" data-target="#collapsibleNavId" aria-controls="collapsibleNavId" aria-expanded="false" aria-label="Toggle navigation" />    
                <div className="collapse navbar-collapse" id="collapsibleNavId">
                    <ul className="navbar-nav mr-auto mt-2 mt-lg-0">
                    <li className="nav-item active">
                        <a className="nav-link" href="https://www.facebook.com/ha.banga.1/">Home <span className="sr-only">(current)</span></a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" onClick= {this.buttonAddNew}>Add New Note</a>
                    </li>
                    </ul>
                </div>
            </nav>
        )
    }
}

const mapStateToProps = (state, ownProps) => {
    return {
        isAdd: state.isAdd
    }
}

const mapDispatchToProps = (dispatch, ownProps) => {
    return {
        showAddForm: () => {
            dispatch({
                type: 'CHANGE_ADD_STATUS'
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

export default connect(mapStateToProps, mapDispatchToProps)(Header)
