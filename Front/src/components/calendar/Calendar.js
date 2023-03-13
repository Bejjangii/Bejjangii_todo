import styled from "styled-components";
import React, { useState } from 'react';
import ReactCalendar from 'react-calendar'
// import 'react-calendar/dist/Calendar.css';
import moment from 'moment';

const Calendar = ({ onChange }) => {
    const [value, setValue] = useState(new Date());

    const handleDateChange = (value) => {
        setValue(value);
        onChange(value);
      };

	return (
		<CalendarPadding>
            <MyCalendar 
                calendarType="US"
                formatDay={(locale, date) => moment(date).format("D")}
                onChange={handleDateChange} value={value} />
        </CalendarPadding>
	);
};

export default Calendar;

const CalendarPadding = styled.div`
    // flex-wrap: wrap;

    margin-top: 40px;
    margin-left: 30px;
    min-width: 400px;
    max-width: 500px;
    // background-color: #d4f7d4;
    padding: 10px;
    // border-radius: 3px;
`;

const MyCalendar = styled(ReactCalendar)`
    /* ~~~ navigation styles ~~~ */
    .react-calendar__navigation {
        display: flex;

        .react-calendar__navigation__label {
            // font-weight: bold;
        }

        .react-calendar__navigation__arrow {
            flex-grow: 0.333;
        }
    }

    /* ~~~ label styles ~~~ */
    .react-calendar__month-view__weekdays {
        text-align: center;
    }

    button {
        margin: 3px;
        background-color: #6f876f;
        border: 0;
        border-radius: 10px;
        color: white;
        padding: 5px 0;
    
        &:hover {
          background-color: #556b55;
        }
    
        &:active {
          background-color: #a5c1a5;
        }
      }
    
      /* ~~~ day grid styles ~~~ */
      .react-calendar__month-view__days {
        display: grid !important;
        grid-template-columns: 14.2% 14.2% 14.2% 14.2% 14.2% 14.2% 14.2%; 
    
        .react-calendar__tile {
          max-width: initial !important;
        }
      }
    
      /* ~~~ neighboring month & weekend styles ~~~ */
      .react-calendar__month-view__days__day--neighboringMonth {
        opacity: 0.7;
      }
      .react-calendar__month-view__days__day--weekend {
        // color: #dfdfdf;
      }
    
    

`