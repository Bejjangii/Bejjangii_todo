import styled from "styled-components";
import Header from './Header';

const Feed = () => {

	const items = ['to do a','to do b','to do c','to do d'];
	// items.forEach(element => {
	// 	document.write(element + '<br>')
	// })

	return (
		<Feeds>
			<Header/>
			{items.map((value) => (
				<p> {value} </p>
			))}
		</Feeds>
	);
};

export default Feed;


const Feeds = styled.div`
	flex-direction: column;
	padding-top: 40px;
	padding-left: 30px;
	padding-right: 30px;
	padding-bottom: 20px;
	// border-bottom: 2px solid #e9ecef;
`;