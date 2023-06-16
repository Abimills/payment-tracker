import Image from "next/image";
import styles from "../styles/Home.module.css";
import { useEffect, useState } from "react";
import { useSession } from "next-auth/react";
import { useRouter } from "next/router";
import axios from "axios";

const DayData = () => {
  const { data: session } = useSession();
  const router = useRouter();
  const { id } = router.query;

  const [today, setToday] = useState(null);
  const [data, setData] = useState([]);
  const [correctedData, setCorrectedData] = useState([]);
  const [breakTime, setBreakTime] = useState(null);
  const [startTime, setStartTime] = useState(null);
  const [endTime, setEndTime] = useState(null);
  const [hourlyWage, setHourlyWage] = useState(null);
  const [totalWorked, setTotalWorked] = useState(null);

  const fetchSalary = async () => {
    try {
      const res = await fetch(`http://localhost:3000/api/salary/?id=${id}`);
      const data = await res.json();
      if (data) {
        setData(data);
      }
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    fetchSalary();
  }, [id]);

  // const handleSubmit = async (e) => {
  //   e.preventDefault();

  //   const dataToSend = {
  //     // ...(breakTime && { breakTime: breakTime }),
  //     ...(hourlyWage && { hourWage: hourlyWage }),
  //   };
  //   try {
  //     const url = `http://localhost:3000/api/salary/?id=${id}`;
  //     const requestOptions = {
  //       method: "PUT",
  //       headers: {
  //         "Content-Type": "application/json",
  //         // Add any other headers as needed
  //       },
  //       body: JSON.stringify(dataToSend),
  //     };
  //     const res = await fetch(url, requestOptions);
  //     const data = await res.json();
  //     setCorrectedData(data);
  //     console.log(data);
  //   } catch (error) {
  //     console.log(error);
  //   }
  // };
  console.log(correctedData);
  return (
    <div className={styles.weekInfo}>
      <h1 className={styles.header}>information </h1>
      <div className={styles.userInfo}>
        {/* <div className={styles.user}> */}
        <Image
          src={"/images/user.png"}
          width="200"
          height="200"
          alt="user"
          className={styles.userPic}
        />
        <div className={styles.writtenContainer}>
          <h1> {session?.user?.name}</h1>
          <p>date : {data?.data?.today}</p>
          <p>Earned Money: ${data?.data?.total?.toFixed(0)}</p>
        </div>
      </div>
      {/* </div>  */}
      <form className={styles.changeForm}>
        <h3 className={styles.dayOfWeek}>
          {new Date(data?.data?.today)?.toLocaleDateString("en-US", {
            weekday: "long",
          })}
        </h3>
        {/* <div className={styles.infoChangeContainer}>
          <label htmlFor="today">Break </label>
          <input
            type="text"
            placeholder="30 minutes"
            onChange={(e) => setBreakTime(e.target.value)}
            disabled
          />
        </div> */}
        <div className={styles.infoChangeContainers}>
          <label htmlFor="today"> Money / hour </label>
          <input
            type="text"
            placeholder={`${
              data ? data?.data?.hourWage?.toFixed(2) : ""
            } per minute`}
            disabled
            onChange={(e) => setHourlyWage(e.target.value)}
          />
        </div>
        <div className={styles.infoChangeContainers}>
          <label htmlFor="today">Started On </label>
          <input
            type="text"
            placeholder={data ? data?.data?.startTime : ""}
            disabled

            // onChange={(e) => setStartTime(e.target.value)}
          />
        </div>
        <div className={styles.infoChangeContainers}>
          <label htmlFor="today">Ended On </label>
          <input
            type="text"
            placeholder={data?.data?.endTime}
            disabled
            // onChange={(e) => setEndTime(e.target.value)}
          />
        </div>

        <div className={styles.infoChangeContainers}>
          <label htmlFor="today"> Worked Hours </label>
          <input
            type="text"
            placeholder={`${
              data ? (data?.data?.difference / 60)?.toFixed(0) : ""
            } hours`}
            disabled
            // onChange={(e) => setTotalWorked(e.target.value)}
          />
        </div>
        <div
          className={`${styles.infoChangeContainers} ${styles.moneyContain}`}
        >
          <label htmlFor="today"> Earned </label>
          <input
            type="text"
            placeholder={`$${data ? data?.data?.total?.toFixed(0) : ""} Euro`}
            disabled

            // onChange={(e) => setTotalWorked(e.target.value)}
          />
        </div>

        <button
          className={styles.submitBtn}
          onClick={(e) => {
            e.preventDefault();
            router.push("/");
          }}
        >
          check this week
        </button>
      </form>
    </div>
  );
};

export default DayData;
