import React from 'react';
import { useCountdown } from './useCountdown.js';
import DateTimeDisplay from './DateTimeDisplay.js';

import "./Countdown.css";

const ExpiredNotice = (props) => {
    return (
      <div className="expired-notice">
        <span>{props.notice}</span>
      </div>
    );
};

const ShowCounter = ({days, hours, minutes, seconds}) => {
    return (
        <div className="show-counter">
        <DateTimeDisplay value={days} type={'Days'} isDanger={days <= 3} />
        <p>:</p>
        <DateTimeDisplay value={hours} type={'Hours'} isDanger={days <= 3} />
        <p>:</p>
        <DateTimeDisplay value={minutes} type={'Mins'} isDanger={days <= 3} />
        <p className='secs'>:</p>
        <DateTimeDisplay className='sec' value={seconds} type={'Secs'} isDanger={days <= 3} />
    </div>
    )
}


function Countdown(props){
    const [days, hours, minutes, seconds] = useCountdown(props.targetDate);
    if (days + hours + minutes + seconds <= 0){
        return <ExpiredNotice notice={props.ExpiredMessage}/>
    }
    else{
        return (
            <div className="countdown">
                <ShowCounter
                days={days}
                hours={hours}
                minutes={minutes}
                seconds={seconds}
                />
                {props.children}
            </div>
        )
    }
}

export default Countdown;