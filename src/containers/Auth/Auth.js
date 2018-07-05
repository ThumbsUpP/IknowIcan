import React, { Component } from 'react';
import { connect } from 'react-redux';
import Spinner from '../../components/Spinner/Spinner';
import styles from './Auth.module.css';
import * as actionTypes from "../../store/actions/auth.js";
import { withRouter, Redirect } from 'react-router-dom';
import InputField from '../../components/UI/Input/inputField';

class Auth extends Component {

    state = {
        name : 'yolo',
        email: '',
        password: '',
        isSignedUp: false
    }

    onChangeHandler = (event, input) => {
        switch (input) {
            case 'email':
                this.setState({
                    ...this.state,
                    email: event.target.value
                });
                break;
            case 'password':
                this.setState({
                    ...this.state,
                    password: event.target.value
                });
                break;
            case 'text':
                this.setState({
                    ...this.state,
                    name: event.target.value
                });
                break;
            default:
                return '';
        }
    }

    onSubmitHandler = (event) => {
        event.preventDefault();
        this.props.onAuth(this.state.name, this.state.email, this.state.password, this.state.isSignedUp);
    }

    switchAuthModeHandler = () => {
        this.setState({
            isSignedUp: !this.state.isSignedUp
        })
    }

    onClickLogingHandler = (clicked) => {
        switch (clicked) {
            case 'signin':
                this.setState({
                    wantSignInform: true,
                    wantLoginform: false
                });
                if (!this.state.isSignedUp) {
                    this.switchAuthModeHandler()
                }
                break
            case 'login':
                this.setState({
                    wantLoginform: true,
                    wantSignInform: false
                })
                if (this.state.isSignedUp) {
                    this.switchAuthModeHandler()
                }
                break
            default:
                return '';
        }
    }

    createAuthform = (authType) => {

        switch (authType) {
            case 'signin':
                return <form onSubmit={this.onSubmitHandler}>
                    <InputField type="email" placeholder="Email" onChangeHandler={this.onChangeHandler} />
                    <InputField type="password" placeholder="Mot de passe" onChangeHandler={this.onChangeHandler} />
                    {this.props.error ? <p style={{color: 'Tomato'}} >Identifiants incorrects</p> : <p>6 caractères minimum</p>}
                    <button className={styles.Button} >Se connecter</button>
                </form>
            case 'login':
                return (
                    <form onSubmit={this.onSubmitHandler} >
                        <InputField type="text" placeholder="Prénom" onChangeHandler={this.onChangeHandler} />
                        <InputField type="email" placeholder="Email" onChangeHandler={this.onChangeHandler} />
                        <InputField type="password" placeholder="Mot de passe" onChangeHandler={this.onChangeHandler} />
                        {this.props.error ? <p style={{color: 'Tomato'}} >Identifiants incorrects</p> : <p>6 caractères minimum</p>}
                        <button className={styles.Button} >Créer un compte</button>
                    </form>)

            default:
                return '';
        }
    }
    createAuthButton = (authType) => {
        let buttonName
        authType === 'signin' ? buttonName = 'Se connecter' : buttonName = 'Créer un compte';
        return (
            <button
                className={styles.Button}
                onClick={() => this.onClickLogingHandler(authType)}
            >{buttonName}
            </button>
        )
    }

    render() {
        
        let loginChoice = (<div className={styles.LoginChoice} >
            <div>
                {this.state.wantSignInform ? this.createAuthform('signin') : this.createAuthButton('signin')}

                <div className={styles.OrDiv}>
                    <div className={styles.BreakLine}></div>
                    <div className={styles.Or}>ou</div>
                    <div className={styles.BreakLine}></div>
                </div>

                {this.state.wantLoginform ? this.createAuthform('login') : this.createAuthButton('login')}
            </div>
        </div>)

        if (this.props.loading) {
            loginChoice = <Spinner />;
        }

        return (
            <div className={styles.Auth}>
                <h1 className={styles.Logo}>Futurama</h1>

                <h3 className={styles.H3} >Inscris-toi pour découvrir les métiers que tu pourrais faire demain.</h3>

                {loginChoice}
                {this.props.token &&
                    <Redirect to='/home' />
                }
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        loading: state.auth_reducer.loading,
        token: state.auth_reducer.token,
        error: state.auth_reducer.error
    }
}

const mapDispatchToProps = dispatch => {
    return {
        onAuth: (name, email, password, isSignedUp) => dispatch(actionTypes.auth(name, email, password, isSignedUp))
    }
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Auth));