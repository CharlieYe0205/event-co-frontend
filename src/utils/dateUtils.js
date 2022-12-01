import moment from "moment";

export const printDateFromTimestamp = (gqlTimestampStr) => {
  return moment.unix(parseInt(gqlTimestampStr) / 1000).format("MM/DD/YYYY")
};

export const calDaysDiffFromNow = (gqlTimestampStr) => {
  const start = moment.unix(parseInt(gqlTimestampStr) / 1000);
  const end = moment(new Date());

  return moment.duration(start.diff(end)).asDays();
};