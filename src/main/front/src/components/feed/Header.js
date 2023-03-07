import styled from "styled-components";

const Header = () => {
	return (
		<FeedHead>
			<h1>2023년 2월 22일</h1>
			<div className="day">수요일</div>
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