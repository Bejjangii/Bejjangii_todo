import React from 'react';
import styled from 'styled-components';
import LoginHeader from './loginHeader';
import InputBoxs from './inputBoxs';
import {Link} from 'react-router-dom';

function Login() {
    return (
      <LoginStyle>
        <LoginBox>
          <LoginHeader />
          <InputBoxs />
          <p> Don't you have an account? <Link to ="/join"> Join</Link> </p> 
        </LoginBox>
      </LoginStyle>
    );
  }

  export default Login;

const LoginStyle = styled.div`
    height: 100vh;
    weight: 100vh;
    position:relative;
    p{
      text-align: center;
    }
`;

const LoginBox = styled.div`
  position: absolute;
  width: 350px;
  height: 400px;
  background-color: #697;
  left: 0;
  top: 0;
  bottom: 0;
  right: 0;
  margin: auto;
  background-color: #8693bd; 
    h1{
      text-align: center;
      // padding-bottom : 50px;
    }
`;