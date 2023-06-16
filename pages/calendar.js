import styles from "../styles/Calendar.module.css";

import { Calendar, momentLocalizer } from "react-big-calendar";
import "react-big-calendar/lib/css/react-big-calendar.css";
import moment from "moment";
import { useState } from "react";
import { FcMoneyTransfer } from "react-icons/fc";
import { GiTakeMyMoney } from "react-icons/gi";
import { GiOpenBook } from "react-icons/gi";
import { BiTimer } from "react-icons/bi";
import Image from "next/image";

const CalendarContainer = () => {
  // Use the moment.js library for date handling
  // const localizer = momentLocalizer(moment);
  // const [selectedDays, setSelectedDays] = useState([]);
  // const [workType, setWorkType] = useState("work");
  // const [events, setEvents] = useState([]);

  // const handleSelect = (event) => {
  //   const { start } = event;

  //   // Create a new event object with the selected day
  //   const newEvent = {
  //     start,
  //     end: moment(start).add(1, "hour").toDate(), // Example: set the event duration to 1 hour
  //     title:
  //       workType === "work" ? (
  //         <GiTakeMyMoney />
  //       ) : workType === "study" ? (
  //         <GiOpenBook />
  //       ) : (
  //         <BiTimer />
  //       ),
  //   };
  //   // Add the new event to the events state
  //   setEvents([...events, newEvent]);
  // };
  // const eventStyleGetter = (event, start, end, isSelected) => {
  //   const style = {
  //     backgroundColor: "teal",
  //     textAlign: "center",
  //     border: "1px solid green",
  //     width: "max-content",
  //     margin: "0 auto",

  //     borderRadius: "50%",
  //     color: "white",
  //     fontSize: "2rem",
  //     display: "block",
  //     padding: "10px",
  //   };

  //   return {
  //     style,
  //   };
  // };

  // const dayStyleGetter = (date) => {
  //   if (selectedDays.some((day) => day.getDate() === date.getDate())) {
  //     return {
  //       style: {
  //         backgroundColor: "lightblue",
  //         border: "2px solid blue",
  //       },
  //     };
  //   }
  //   return {};
  // };

  return (
    <div className={styles.calendarContain}>
     
      <div>
        <h1>Coming soon ...</h1>
      </div>
    </div>
  );
};

export default CalendarContainer;
