function timeConversion(s) {
  // Write your code here
  let time = s.split(":");
  if (s.includes("PM")) {
    if (time[0] != 12) {
      time[0] = parseInt(time[0]) + 12;
      return `${time[0]}:${time[1]}:${time[2].slice(0, 2)}`;
    } else return `${time[0]}:${time[1]}:${time[2].slice(0, 2)}`;
  } else if (time[0] != 12) {
    return `${time[0]}:${time[1]}:${time[2].slice(0, 2)}`;
  } else return `00:${time[1]}:${time[2].slice(0, 2)}`;
}
