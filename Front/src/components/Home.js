import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

function Home(props) {
    return (
        <HomeStyle>
            <h1>Welcome to Bejjangii's World</h1>
            <ul>
                <Link to ="/login"> <li>Login</li> </Link>
                <Link to ="/join"> <li>Join</li> </Link> 
            </ul>
        </HomeStyle>
    );
}

export default Home;

const HomeStyle = styled.div`
    h1{
        text-align:center;
        font-size:45px;
        color : #256;
    } 
    
    ul{
        font-size:25px;
    }
`;