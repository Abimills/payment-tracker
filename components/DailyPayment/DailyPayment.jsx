import styles from "../../styles/Daily.module.css";
import React, { useState } from "react";
import { useSession } from "next-auth/react";
import { AiFillEdit } from "react-icons/ai";

// import { IoIosReturnLeft } from "react-icons/io";
import { useRouter } from "next/router";
import { useEffect, CSSProperties } from "react";
import Image from "next/image";

import ClipLoader from "react-spinners/ClipLoader";

const DailyPayment = ({ title, spokes }) => {
  const baseUrl = "https://payment-tracker-one.vercel.app";
  // loading{ type, color }

  const [activeWeek, setActiveWeek] = useState(0);
  const [loading, setLoading] = useState(false);
  const [currentWeek, setCurrentWeek] = useState([]);
  const { data: session } = useSession();
  const router = useRouter();
  // console.log(thisWeek);
  const weekdays = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];

  const weeksInMonth = getWeeksInMonth();

  function getWeeksInMonth() {
    const currentDate = new Date();
    const firstDayOfMonth = new Date(
      currentDate.getFullYear(),
      currentDate.getMonth(),
      1
    );
    const lastDayOfMonth = new Date(
      currentDate.getFullYear(),
      currentDate.getMonth() + 1,
      0
    );

    const weeks = [];
    let currentWeek = [];

    for (
      let day = firstDayOfMonth;
      day <= lastDayOfMonth;
      day.setDate(day.getDate() + 1)
    ) {
      currentWeek.push(new Date(day));

      if (day.getDay() === 6 || day.getTime() === lastDayOfMonth.getTime()) {
        weeks.push([...currentWeek]);
        currentWeek = [];
      }
    }

    return weeks;
  }

  const handleWeekClick = async (index) => {
    setActiveWeek(index);
    try {
      setLoading(true);
      const myMonth = [];
      for (const day of weeksInMonth[index]) {
        const date = new Date(day).toISOString().split("T")[0];

        const resMonth = await fetch(
          `${baseUrl}/api/salary/?time=${date}&email=${session?.user?.email}`
        );
        const dataMonth = await resMonth.json();
        if (dataMonth?.data?.length > 0) {
          myMonth.push(...dataMonth?.data);
        }
      }
      setLoading(false);
      setCurrentWeek(myMonth);
    } catch (error) {
      console.log(error);
      setLoading(false);
    }
  };
  useEffect(() => {
    if (session) {
      handleWeekClick(0);
    }
  }, [session]);

  return (
    <div className={styles.container}>
      <h3 className={styles.title}>{title}</h3>
      <div className={styles.lineContainer}>
        <div className={styles.line}></div>
      </div>
      <div className={styles.weekSelect}>
        {weeksInMonth.map((week, index) => (
          <h4
            key={index}
            onClick={() => handleWeekClick(index)}
            className={
              activeWeek === index
                ? `${styles.weekBtn} ${styles.activeBtn}`
                : styles.weekBtn
            }
          >
            Week {index + 1}
          </h4>
        ))}
      </div>
      <div className={styles.content}>
        {loading ? (
          <div className={styles.loadingContainer}>
            <ClipLoader
              color={"teal"}
              loading={loading}
              cssOverride={{ margin: "1rem" }}
              // style={{margin: "1rem"}}
              size={50}
              aria-label="Loading Spinner"
              data-testid="loader"
            />
          </div>
        ) : currentWeek.length > 0 ? (
          currentWeek?.map((week) => {
            const hours = Math.floor(week.difference / 60); // Get the whole number of hours

            const remainingMinutes = week.difference % 60; // Get the remaining minutes

            const workedHours = `${hours} hours  ${
              remainingMinutes ? remainingMinutes + "minutes" : ""
            } `;

            return (
              <div className={styles.item} key={week._id}>
                <p className={styles.todayDate}>{week?.today}</p>
                <h5 className={styles.item__title}>
                  {weekdays[new Date(week?.today).getDay()]}
                </h5>
                <div className={styles.progressBar}></div>
                <p className={styles.numWork}>{workedHours}</p>
                <p className={styles.numWork}>${week?.total?.toFixed(0)}</p>
                <AiFillEdit
                  className={styles.editBtn}
                  onClick={() => router.push(`/${week._id}`)}
                />
              </div>
            );
          })
        ) : (
          <div className={styles.emptyContainer}>
            <Image
              width={"200"}
              height={"200"}
              src={"/images/no.png"}
              className={styles.imageNo}
              alt="no data"
            />
            <h1 className={styles.empty}>Empty No Data To Show </h1>
          </div>
        )}
      </div>
    </div>
  );
};

export default DailyPayment;
