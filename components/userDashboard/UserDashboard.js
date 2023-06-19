import { useEffect, useState, useContext } from "react";
import styles from "../../styles/UserDashboard.module.css";
import { BsSkipStart } from "react-icons/bs";
import { IoMdDoneAll } from "react-icons/io";
import { useSession } from "next-auth/react";
import Image from "next/image";
import axios from "axios";
import ClipLoader from "react-spinners/ClipLoader";
import { useRouter } from "next/router";

const UserDashboard = () => {
  // all use states and sessions ----------------
  const { data: session } = useSession();
  const router = useRouter();
  const [hourlyWage, setHourlyWage] = useState(10 / 60);
  const [data, setData] = useState(null);
  const [startTime, setStartTime] = useState(null);
  const [endTime, setEndTime] = useState(null);
  const [daily, setDaily] = useState(null);
  const [weeklyData, setWeeklyData] = useState([]);
  const [monthlyData, setMonthlyData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [loadingDaily, setLoadingDaily] = useState(false);
  const [loadingWeek, setLoadingWeek] = useState(false);
  const [quote, setQuote] = useState(null);
  const [quoteOfToday, setQuoteOfToday] = useState(null);
  const baseUrl =
    process.env.NODE_ENV === "production"
      ? "https://abimills.vercel.app/"
      : "http://localhost:3000";
  const totalWeek = weeklyData
    ?.reduce((total, day) => {
      return total + day.total;
    }, 0)
    .toFixed(0);

  const getQuote = async () => {
    try {
      const response = await fetch(`${baseUrl}/api/quotes`);
      const data = await response.json();
      setQuote(data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getQuote();
  }, []);
  useEffect(() => {
    if (quote) {
      const random = Math.floor(Math.random() * quote?.length);
      setQuoteOfToday(quote[random]);
    }
  }, [quote]);

  // fetch all data function
  const fetchDailyData = async () => {
    try {
      setLoadingDaily(true);
      const res = await fetch(
        `${baseUrl}/api/salary/?time=${
          new Date().toISOString().split("T")[0]
        }&email=${session?.user?.email}
    `
      );
      const resDaily = await res.json();
      setLoadingDaily(false);
      if (resDaily) {
        setDaily(resDaily?.data);
      }
    } catch (error) {
      console.log(error);
      setLoadingDaily(false);
    }
  };
  const fetchWeeklyData = async () => {
    // weeklyPayment checker
    const currentDate = new Date();
    const dayOfWeek = currentDate.getDay();

    const startDate = new Date(currentDate);
    startDate.setDate(currentDate.getDate() - dayOfWeek);

    const endDate = new Date(currentDate);
    endDate.setDate(currentDate.getDate() + (6 - dayOfWeek));

    const daysOfWeek = [];

    for (let i = 0; i <= 6; i++) {
      const day = new Date(startDate);
      day.setDate(startDate.getDate() + i);

      const formattedDay = `${day.getFullYear()}-${(day.getMonth() + 1)
        .toString()
        .padStart(2, "0")}-${day.getDate().toString().padStart(2, "0")}`;
      daysOfWeek.push(formattedDay);
    }
    const myWeek = [];
    if (session?.user?.email) {
      try {
        setLoadingWeek(true);
        for (const day of daysOfWeek) {
          const resWeek = await fetch(
            `${baseUrl}/api/salary/?time=${day}&email=${session?.user?.email}`
          );
          const dataWeek = await resWeek.json();

          if (dataWeek?.data?.length > 0) {
            myWeek.push(...dataWeek?.data);
          }
        }
        setLoadingWeek(false);
        setWeeklyData(myWeek);
      } catch (error) {
        console.log(error);
        setLoadingWeek(false);
      }
    }
  };
  const fetchMonthlyData = async () => {
    // end weekly payment checker ----------------------------
    const currentDate = new Date();
    const currentMonth = currentDate.getMonth();
    const currentYear = currentDate.getFullYear();
    const daysInMonth = new Date(currentYear, currentMonth + 1, 0).getDate();

    const daysOfMonth = [];

    for (let i = 1; i <= daysInMonth; i++) {
      const formattedDay = `${currentYear}-${(currentMonth + 1)
        .toString()
        .padStart(2, "0")}-${i.toString().padStart(2, "0")}`;
      daysOfMonth.push(formattedDay);
    }

    try {
      const myMonth = [];
      setLoading(true);
      for (const day of daysOfMonth) {
        const resMonth = await fetch(
          `${baseUrl}/api/salary/?time=${day}&email=${session?.user?.email}`
        );
        const dataMonth = await resMonth.json();
        if (dataMonth?.data?.length > 0) {
          myMonth.push(...dataMonth?.data);
        }
      }
      setLoading(false);
      setMonthlyData(myMonth);
    } catch (error) {
      console.log(error);
      setLoading(false);
    }
  };
  useEffect(() => {
    if (session) {
      fetchMonthlyData();
      fetchDailyData();
      fetchWeeklyData();
    } else {
      localStorage.setItem("startTime", null);
    }
  }, [session, data]);

  const totalMonth = monthlyData
    ?.reduce((total, day) => {
      return total + day.total;
    }, 0)
    .toFixed(0);
  const dayPayment =
    daily
      ?.reduce((total, item) => {
        return total + item.total;
      }, 0)
      ?.toFixed(0) || 0;

  useEffect(() => {
    if (typeof window !== "undefined") {
      const storedValue = localStorage.getItem("startTime");

      if (storedValue) {
        const parsedValue = JSON.parse(storedValue);
        setStartTime(parsedValue);
      }
    }
  }, []);

  // check in btn function
  const handleCheckIn = async () => {
    const currentDate = new Date();

    const currentYear = currentDate.getFullYear();
    const currentMonth = currentDate.getMonth();
    const currentDay = new Date().toISOString().split("T")[0];
    const currentHours = currentDate.getHours();
    const currentMinutes = currentDate.getMinutes();
    const currentSeconds = currentDate.getSeconds();

    // Create the timestamp in the desired format
    const formatedMyEndTime = {
      year: currentYear,
      month: currentMonth,
      day: currentDay,
      hours: currentHours,
      minutes: currentMinutes,
      seconds: currentSeconds,
    };
    if (session) {
      if (!startTime) {
        localStorage.setItem("startTime", JSON.stringify(formatedMyEndTime));
        setStartTime({
          ...formatedMyEndTime,
        });
      }
    } else {
      router.push("/login");
    }
  };
  // =========== check in function end
  // check out btn function

  const handleCheckOut = () => {
    // Get the current date and time
    const currentDate = new Date();
    const currentYear = currentDate.getFullYear();
    const currentMonth = currentDate.getMonth();
    const currentDay = currentDate.getDate();
    const currentHours = currentDate.getHours();
    const currentMinutes = currentDate.getMinutes();
    const currentSeconds = currentDate.getSeconds();
    const dateString = currentDay;
    const dateObject = new Date(dateString);
    const isoString = dateObject.toISOString();
    // Create the timestamp in the desired format
    const formatedMyEndTime = {
      year: currentYear,
      month: currentMonth,
      day: isoString,
      hours: currentHours,
      minutes: currentMinutes,
      seconds: currentSeconds,
    };
    setEndTime({
      ...formatedMyEndTime,
    });
    if (session) {
      const email = session?.user?.email;
      handleCalculateSalary(formatedMyEndTime, email);

      setTimeout(() => {
        localStorage.setItem("startTime", null);
        setStartTime(null);
        setData(null);
        setEndTime(null);
      }, 10000);
    } else {
      router.push("/login");
    }
  };

  // end of checkout button function

  const handleCalculateSalary = async (checkout, email) => {
    const time1 = `${startTime?.hours}:${startTime?.minutes}:${startTime?.seconds}`;
    const time2 = `${checkout?.hours}:${checkout?.minutes}:${checkout?.seconds}`;

    // Get the time components of the first time
    const [hours1, minutes1, seconds1] = time1.split(":").map(Number);

    // Get the time components of the second time
    const [hours2, minutes2, seconds2] = time2.split(":").map(Number);

    // Calculate the time difference in minutes
    const diffInMinutes = hours2 * 60 + minutes2 - (hours1 * 60 + minutes1);

    const todayWork = {
      today: startTime?.day,
      startTime: time1,
      endTime: time2,
      difference: diffInMinutes,
      hourWage: hourlyWage,
      total: diffInMinutes * hourlyWage,
      email,
    };
    const res = await axios.post(`${baseUrl}/api/salary`, todayWork);

    setData(res?.data?.data);
  };
  const formatMyCurrentTime = `${startTime?.day}`;
  const newFormat = formatMyCurrentTime.split(" ");
  console.log();
  const firstName = session?.user?.name?.split(" ")[0];
  return (
    <div className={styles.container}>
      <div className={styles.userWork}>
        <h2 className={styles.name}>Good Morning {firstName}</h2>
        <div className={styles.love}>
          {data ? (
            <Image
              width="200"
              height={"200"}
              src="/images/finish.png"
              className={styles.workingImage}
              alt="work image"
            />
          ) : (
            <div className={styles.leafyImgContainer}>
              <Image
                width="200"
                height={"200"}
                src="/images/office.jpg"
                className={styles.workingImage}
                alt="work image"
              />
              <Image
                width="200"
                height={"200"}
                src="/images/leafy.jpg"
                className={styles.leafyImage}
                alt="work image"
              />
            </div>
          )}
          {!data ? (
            <div className={styles.checkInInfoContainer}>
              {startTime && <p>You are checked In </p>}

              {startTime ? (
                <>
                  <div className={styles.startTimeImage}>
                    <Image
                      src={"/images/clock-anime.avif"}
                      height={"200"}
                      width={"200"}
                      alt="clock"
                      className={styles.clock}
                    />
                    <span className={styles.startTime}>
                      Start :
                      {`${startTime.hours} :${startTime?.minutes}: ${startTime?.seconds}`}
                    </span>
                  </div>
                  {/* <br /> */}
                  {endTime && (
                    <div className={styles.startTimeImage}>
                      <Image
                        src={"/images/finished-work.png"}
                        height={"200"}
                        width={"200"}
                        alt="clock"
                        className={styles.clock}
                      />
                      <span className={styles.startTime}>
                        Stop :
                        {`${endTime.hours} :${endTime?.minutes}: ${endTime?.seconds}`}
                      </span>
                    </div>
                  )}
                  <br />
                </>
              ) : (
                <span className={styles.dueDate}>{quoteOfToday?.quote}</span>
              )}
            </div>
          ) : (
            <div className={styles.checkInInfoContainer}>
              <p>
                <span style={{ color: "green" }}>Completed !!!</span>
              </p>
              <p>
                <span className={styles.hoursWorked}>{`${(
                  data?.difference / 60
                ).toFixed(0)} hours ${
                  data?.difference % 60 > 0
                    ? (data?.difference % 60).toFixed(0) + "minutes"
                    : ""
                } `}</span>
              </p>
              <p>
                <span className={styles.earnedMoney}>{`£${data?.total?.toFixed(
                  0
                )} Euros`}</span>
              </p>
            </div>
          )}
        </div>

        <div className={styles.earingHeader}>
          <h2>Earnings</h2>
        </div>
        <div className={styles.work}>
          <div className={styles.earning}>
            <h3 className={styles.earningInfo}>
              Daily{" "}
              <span>
                {`${
                  loadingDaily
                    ? "loading"
                    : daily
                    ? "$" + dayPayment + ".00"
                    : "$0.00"
                }`}
              </span>
            </h3>
            <div className={styles.dashed}></div>
            <h3 className={styles.earningInfo}>
              Weekly
              <span>
                {`${
                  loadingWeek
                    ? "loading"
                    : "$" + totalWeek
                    ? totalWeek + ".00"
                    : "0.00"
                }`}
              </span>
            </h3>
            <div className={styles.dashed}></div>
            <h3 className={styles.earningInfo}>
              Monthly{" "}
              <span>
                {loading ? (
                  <ClipLoader
                    color={"teal"}
                    loading={loading}
                    size={20}
                    aria-label="Loading Spinner"
                    data-testid="loader"
                  />
                ) : (
                  ` $${totalMonth + ".00"}`
                )}
              </span>
            </h3>
          </div>

          <div className={styles.checkInContainer}>
            <button className={styles.checkIn} onClick={handleCheckIn}>
              <BsSkipStart className={styles.startIcon} />
              Check <span>In</span>
            </button>
            <button className={styles.checkOut} onClick={handleCheckOut}>
              <IoMdDoneAll />
              Check <span>out</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserDashboard;
