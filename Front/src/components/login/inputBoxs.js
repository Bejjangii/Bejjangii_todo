import styled from 'styled-components';

function inputBoxs() {
    return (
        <Wrapper>
            <MiniBox>
                <pre>    ID    </pre>
                <input type="text" name="id" />
            </MiniBox>
            <MiniBox>
                <pre> Password </pre>
                <input type="password" name="password" />
            </MiniBox> 
        </Wrapper>
    );
  }

  export default inputBoxs;

const Wrapper = styled.div`
    padding-top : 20px;
`;

const MiniBox = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
`;