import React, { Component } from 'react';
import styles from './Home.module.css';
import { Link } from "react-router-dom";
import Spinner from '../../components/Spinner/Spinner';
import { connect } from 'react-redux';
import axios from 'axios';

class Home extends Component {

    state = {
        firstName: null,
        points: null
    }

    async componentDidMount() {
       
    }

   

    render() {

        return (
            <div className={styles.Home}>

            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        userId: state.auth_reducer.userId,
        token: state.auth_reducer.token
    }
}

export default connect(mapStateToProps, null)(Home);