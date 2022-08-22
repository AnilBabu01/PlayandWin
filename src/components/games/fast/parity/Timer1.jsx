import React, { useState ,useEffect} from "react";

const Timer1 = ({ startingtime, currenttime, onTimeOut }) => {
  const [time, setTime] = useState(null);

  useEffect(() => {
    if (time === 0) {
      onTimeOut?.();
    }
  }, [time]);

  useEffect(() => {
    if (!startingtime || !currenttime) return;

    const start = parseInt(startingtime);
    const curr = parseInt(currenttime);
    const Time = 180 - (curr - start);
    setTime(Time);
    const interval = setInterval(() => {
      setTime((time) => (time > 0 ? time - 1 : time));
    }, 1000);
    return () => {
      clearInterval(interval);
    };
  }, [startingtime, currenttime]);

  const min = Math.floor((time ?? 0) / 60);
  const sec = (time ?? 0) - min * 60;
  return (
    <>
      <p className="countset">
        <span className="coutdown">{Math.floor(min / 10)}</span>
        <span className="coutdown">{min}</span>:
        <span className="coutdown">{Math.floor(sec / 10)}</span>
        <span className="coutdown">{sec % 10}</span>
      </p>
    </>
  );
};

export default Timer1;
