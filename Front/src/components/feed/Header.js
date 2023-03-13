import styled from "styled-components";
import moment from 'moment';

const Header = ({ selectedDate }) => {

	return (
		<FeedHead>
			<h1>{moment(selectedDate).format("YYYY년 MM월 DD일")} </h1>
		</FeedHead>
	);
};

export default Header;

const FeedHead = styled.div`
	// padding-top: 40px;
	// padding-left: 30px;
	// padding-right: 30px;
	padding-bottom: 20px;
	border-bottom: 2px solid #e9ecef;
	h1 {
		margin: 0;
		font-size: 36px;
		color: #343a40;
	}
	.day {
		margin-top: 4px;
		color: #868e96;
		font-size: 21px;
	}
`;