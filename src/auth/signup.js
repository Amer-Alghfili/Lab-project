import React, { Component } from 'react';
import Input from '../input/input';
import * as actionCreators from '../store/actionCreators';
import { connect } from 'react-redux';
import classes from './signUp.css';    

class signUp extends Component {

    state = {
        formElements : {
            email : {
                type : 'email', 
                placeholder : 'Your Email', 
                value : ''
            } ,
            password : {
                type : 'password', 
                placeholder : 'Your Password',
                value : '' 
            }, 
            repeatedPassword : {
                type : 'password', 
                placeholder : 'Your Password Again',
                value : '' 
            }
        }, 
        passwordNotMatched : false,
        passwordLengthValidity : true
    }

    signUpHandler = event => {
        event.preventDefault(); //prevent reloading the page
        if(this.state.formElements.password.value !== this.state.formElements.repeatedPassword.value) {
            this.setState({passwordNotMatched : true, passwordLengthValidity : true});
            return;
        }
        if(this.state.formElements.password.value.length < 6) {
            this.setState({passwordLengthValidity : false, passwordNotMatched : false});
            return;
        }
        else
            this.setState({passwordLengthValidity : true});
        const singnUpData = { //user data
            email : this.state.formElements.email.value ,
            password : this.state.formElements.password.value ,
            returnSecureToken : true 
        };
        this.props.signUpDis(singnUpData, this.props.history.push); //send request to server
    }

    changeHanlder = (event, id) => {
        const updatedForm = {...this.state.formElements};
        const updatedElemet = {...updatedForm[id]};
        updatedElemet.value = event.target.value;  
        updatedForm[id] = {...updatedElemet};
        this.setState({formElements : updatedForm});
    }  

    checkValidity = ()  => {
        if (this.state.passwordNotMatched)
            return <p style={{color : 'white'}}>The Passords Are Not Matched!</p>;
        if(!this.state.passwordLengthValidity)
            return <p style={{color : 'white'}}>Password Should Be More Than 5 Charachters!</p>;
        if(this.props.err)
            return <p style={{color : 'white'}}>This Email Is Already Exist!</p>;
    }

    render(){
        let n = 0;
        const formElements = [];
        for(let i in this.state.formElements) {
            formElements.push({config : this.state.formElements[i], id : i, keyNumber : n++});
        }
        return (
            <div className={classes.signUp}>
                <form onSubmit={(event) => this.signUpHandler(event)}>
                    <h1>Sign Up</h1>
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
                    <button>Sign Up</button>
                </form>
                {this.checkValidity()}
            </div>
        );
    }
}

const mapStateToProps = state => {
    return {
        err : state.error
    };
}

const mapDispatchToProps = dispatch => {
    return {
        signUpDis : (signUpData, route) => dispatch(actionCreators.sendSignUpReq(signUpData, route))
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(signUp);