import React from 'react';
import { connect } from 'react-redux'
import {Login} from './store/action'

function Test(props) {
    console.log(props)
    return (
        <div>
            {props.log?<div>Loading</div>:""}
            ddd
            <button onClick={()=>props.logAction({name:"sara"})} > הרשמה</button>
        </div>
    );

}

const mapStateToProps = state => {
    console.log(state)
    return {
        log: state.user.Loading
    }
}
const mapDispatchToPros = dispatch => {
    return {
        logAction: (x) => dispatch(Login(x))
    }
}
export default connect(mapStateToProps, mapDispatchToPros)(Test);