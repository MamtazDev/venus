export const formatTime = (time) => {
  const minutes = Math.floor(time / 60);
  const seconds = time % 60;
  return `${String(minutes).padStart(2, "0")}:${String(seconds).padStart(
    2,
    "0",
  )}`;
};

export const formateToClockTime = (time) => {
  const date = new Date(time);

  const options = {
    hour: "numeric",
    minute: "numeric",
    hour12: true,
  };

  const formattedTime = new Intl.DateTimeFormat("en-US", options).format(date);
  return formattedTime;
};

export const formatDate = (inputDate) => {

  const date = new Date(inputDate);

  const months = [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec",
  ];


  const day = date.getDate();
  const month = months[date.getMonth()];
  const year = date.getFullYear();
  const hours = date.getHours();
  const minutes = date.getMinutes();

  const ampm = hours >= 12 ? "PM" : "AM";
  let formattedHours = hours % 12;
  formattedHours = formattedHours ? formattedHours : 12; 


  const gmtOffset = 6;
  const offsetHours = hours + gmtOffset;
  const offsetHoursFormatted =
    offsetHours >= 24 ? offsetHours - 24 : offsetHours;


  const formattedDate = `${day} ${month} at ${
    formattedHours < 10 ? "0" : ""
  }${formattedHours}:${
    minutes < 10 ? "0" : ""
  }${minutes} ${ampm} GMT+${gmtOffset}`;

  return formattedDate;
};
