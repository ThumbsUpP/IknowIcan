//import { Link } from "react-router-dom";
//import Spinner from '../../components/Spinner/Spinner';


import React, { Component } from 'react';
import { connect } from 'react-redux';
import axios from 'axios';
import BottomNav from '../../components/UI/bottomNav/BottomNav';
import styled from 'styled-components';
import Cards from '../Cards/Cards'
import Favorite from '../Favorite/Favorite';
import Profil from '../Profil/Profil';


const HomeLayout = styled.div`
width : 100%;
justify-content: center;
display: flex;
align-content: center;
overflow-x: hidden;
`
class Home extends Component {
    state = {
        firstName: null,
        homeView: 0
    }

    onButtomNavClick = (val) => {
        return this.setState({ homeView: val })
    }

    async componentDidMount() {

        // Get user info
        if (this.props.token) {
            try {
                const res = await axios.get(`https://iknow-i-can.firebaseio.com/testData/metiers.json`);
                const data = res.data;
                this.setState({
                    ...this.state,
                    jobData: data,
                })
            } catch (err) {
                console.log('header', err);
            }
        }
    }


    render() {
        let view = <Cards data={this.state.jobData} />;

        switch (this.state.homeView) {
            case 1:
                view = <Favorite />;
                break
            case 2:
                view = <Profil />;
                break
            default:


        }
        return (
            <HomeLayout>
                {view}
                <BottomNav onNavChange={this.onButtomNavClick} history={this.props.history} />
            </HomeLayout>
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