import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import { connect } from 'react-redux';
import * as actionCreators from '../store/actionCreators';
import classes from './signIn.css';
import Input from '../input/input';

class x extends Component {

    state = {
        formElements : {
            email : {
                type : 'email', 
                placeholder : 'Your Email', 
                value : '',
                touched : false
            } ,
            password : {
                type : 'password', 
                placeholder : 'Your Password',
                value : '' ,
                touched : false
            }
        }
    }

    signInHandler = event => {
        event.preventDefault();
        const data = {
            email : this.state.formElements.email.value, 
            password : this.state.formElements.password.value, 
            returnSecureToken : true
        };
        this.props.signInDis(data, this.props.history.push);
    }

    changeHanlder = (event, id) => {
        const updatedForm = {...this.state.formElements};
        const updatedElemet = {...updatedForm[id]};
        updatedElemet.value = event.target.value;
        updatedElemet.touched = true;   
        updatedForm[id] = {...updatedElemet};
        this.setState({formElements : updatedForm});
    }

    checkValidity = () => {
        if(this.props.err)
            return <p style={{color : 'white'}}>Either Email Or Password Are Wrong!</p>;
    }

    render () {
        let n = 0;
        const formElements = [];
        for(let i in this.state.formElements) {
            formElements.push({config : this.state.formElements[i], id : i, keyNumber : n++});
        }
        return (
            <div className={classes.signUp}>
                <form onSubmit={this.signInHandler}>
                    <h1>Sign In</h1>
                    {
                        formElements.map(el => (
                            <Input 
                                key={el.keyNumber}
                                type={el.config.type}
                                placeholder={el.config.placeholder}
                                val={el.config.value}
                                change={(event) => this.changeHanlder(event, el.id)}
                            />
                        ))
                    }
                    <span>Don't have an account? </span>
                    <Link to='/signup'>Sign Up Here</Link> <br/>
                    <button>Log in</button>
                </form>
                 {this.checkValidity()}
            </div>
        );
    }
}

const mapDispatchToProps = dispatc => {
    return {
        signInDis : (data, route) => dispatc(actionCreators.sendSignInReq(data, route))
    };
}

const mapStateToProps = state => {
    return {
        tId : state.token,
        uId : state.userId,
        err : state.error
    };
}


export default connect(mapStateToProps, mapDispatchToProps)(x);