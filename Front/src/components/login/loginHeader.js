import React from 'react';
import styled from 'styled-components';

function LoginHeader() {
    return (
        <Wrapper>
            <h1> LOG IN </h1>
        </Wrapper>
    );
}

export default LoginHeader;

const Wrapper = styled.div`
    border-bottom: 2px solid #e9ecef; 
    @font-face {
        font-family: 'Tenada';
        src: url('https://cdn.jsdelivr.net/gh/projectnoonnu/noonfonts_2210-2@1.0/Tenada.woff2') format('woff2');
        font-weight: normal;
        font-style: normal;
    }
    font-family: font-face;
`;