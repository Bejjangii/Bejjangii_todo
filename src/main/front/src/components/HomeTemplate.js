import Feed from './feed/Feed';
import styled from "styled-components";

const HomeTemplate = () => {
	return (
		<Wrapper>
			<Main>
				<Feed />
			</Main>
		</Wrapper>
	);
};

export default HomeTemplate;

const Wrapper = styled.div`
	width: 100%;
	min-width: 800px;
	height: 100vh;
//   color: ${(props) => props.color || "gray"};
`;

const Main = styled.div`
	display: grid;
	grid-template-columns: 346px auto;
	grid-gap: 60px;
	width: 100%;
	padding: 0 48px;
`;