import React, { useState } from 'react';
import styled from 'styled-components';

function Join() {
  return (
    <JoinStyle>
      <div>
        <header className="join">
          <h1>JOIN to Bejjangii's Todo App</h1> <br></br>
          <p>Username <input type="text" name="username"></input></p>
          <p>ID <input type="text" name="id"></input></p> 
          <p>Password <input type="password" name="password"></input> </p>
        </header>
      </div>
    </JoinStyle>
  );
}

export default Join;

const JoinStyle = styled.div`
  background-color: #53a5c1;
  font-size: 16px;
  min-height: 60vh;
  text-align: center;
  color: white;
`;

