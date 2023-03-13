import Feed from './feed/Feed';
import React, { useState } from 'react';
import Calendar from './calendar/Calendar';
import styled from "styled-components";

const HomeTemplate = () => {

	const [selectedDate, setSelectedDate] = useState(new Date());

  const handleDateChange = (value) => {
    setSelectedDate(value);
  };

	return (
		<Wrapper>
			<Main>
				<Calendar onChange={handleDateChange} />
				<Feed selectedDate={selectedDate} />
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
	display: flex;
	flex-wrap: wrap;
	// grid-template-columns: 346px auto;
	grid-gap: 60px;
	width: 100%;
`;