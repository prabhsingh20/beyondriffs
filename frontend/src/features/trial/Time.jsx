import { useState, useEffect } from "react";
import ButtonCustom from "../../ui/ButtonCustom";
import { evening, morning } from "../../data/trail";

function Time({ handleComponentClick }) {
  const [dates, setDates] = useState([]);
  const [selectedDate, setSelectedDate] = useState(null);
  const [session, setSession] = useState(morning);
  const [currentTime, setCurrentTime] = useState(morning[0]);
  const [activeSession, setActiveSession] = useState("morning");
  const [activeTime, setActiveTime] = useState(morning[0].id);

  useEffect(() => {
    updateDates();
    const intervalId = setInterval(updateDates, 24 * 60 * 60 * 1000); // Update every 24 hours
    return () => clearInterval(intervalId);
  }, []);

  const updateDates = () => {
    const today = new Date();
    const newDates = [];
    for (let i = 0; i < 7; i++) {
      const date = new Date(today);
      date.setDate(today.getDate() + i);
      newDates.push({
        day: date.toLocaleDateString("en-US", { weekday: "short" }),
        date: date.getDate(),
        fullDate: date,
        // disabled: i === 3, // For disabling a particular day
      });
    }
    setDates(newDates);
    setSelectedDate(newDates[0].fullDate); // Set initial selected date
  };

  const handleDateClick = (date, isDisabled) => {
    if (!isDisabled) {
      setSelectedDate(date);
    }
  };

  function handleSession(session) {
    if (session === "morning") {
      setSession(morning);
      setActiveSession("morning");
    }
    if (session === "evening") {
      setSession(evening);
      setActiveSession("evening");
    }
  }

  function handleTimeClick(time) {
    setCurrentTime(time);
    setActiveTime(time.id);
  }

  return (
    <section className="flex flex-col gap-10 px-28 py-12">
      <div className="space-y-5 text-center">
        <h1 className="text-center text-5xl font-semibold">
          Choose your time?
        </h1>
        <p className="tracking-widest">
          Pick a time and date that works for you?
        </p>
      </div>

      <div className="flex items-center justify-between gap-3">
        {dates.map((date, index) => (
          <div
            key={index}
            className={`flex w-[88px] flex-col items-center rounded-[10px] border-2 border-border-5 p-3 text-2xl ${date.disabled ? "cursor-not-allowed bg-gray-300 text-gray-500" : ""} ${selectedDate && date.fullDate.toDateString() === selectedDate.toDateString() ? "bg-theme text-white" : "bg-white text-black"}`}
            onClick={() => handleDateClick(date.fullDate, date.disabled)}
          >
            <div>{date.day}</div>
            <div>{date.date.toString().padStart(2, "0")}</div>
          </div>
        ))}
      </div>

      <div className="flex items-center justify-between">
        {selectedDate && (
          <p className="text-2xl">
            {selectedDate.toLocaleDateString("en-US", {
              weekday: "long",
            })}{" "}
            {selectedDate.getDate().toString().padStart(2, "0")}{" "}
            {selectedDate.toLocaleDateString("en-US", {
              month: "long",
            })}{" "}
            | {currentTime.time}
          </p>
        )}
        <div className="space-x-5">
          <ButtonCustom
            type={activeSession === "morning" ? "secondary" : "primary"}
            onClick={() => handleSession("morning")}
          >
            Morning
          </ButtonCustom>
          <ButtonCustom
            type={activeSession === "evening" ? "secondary" : "primary"}
            onClick={() => handleSession("evening")}
          >
            Evening
          </ButtonCustom>
        </div>
      </div>

      <ul className="grid grid-cols-4 gap-3">
        {session.map((time) => (
          <li key={time.id} className="flex justify-center">
            <ButtonCustom
              type={activeTime === time.id ? "timeActive" : "time"}
              onClick={() => handleTimeClick(time)}
            >
              {time.time}
            </ButtonCustom>
          </li>
        ))}
      </ul>

      <div className="flex justify-between">
        <ButtonCustom type="primary" onClick={() => handleComponentClick(1)}>
          Previous
        </ButtonCustom>
        <ButtonCustom type="secondary" onClick={() => handleComponentClick(3)}>
          Enter contact details
        </ButtonCustom>
      </div>
    </section>
  );
}

export default Time;
