
export function getNameFromList(list, value) {
  return list?.find(
    (c) => c.id === value
  )?.name || 'unknown';
}

export const getCreatedFromUrl = () => {

}


function underscoreToCamelCase(str) {
  return str.replace(/_([a-z])/g, (_, letter) => letter.toUpperCase());
}

function convertKeysToCamelCase(obj) {
  if (typeof obj !== 'object' || obj === null) {
    return obj;
  }

  if (Array.isArray(obj)) {
    return obj.map(item => convertKeysToCamelCase(item));
  }

  const newObj = {};
  for (const [key, value] of Object.entries(obj)) {
    const camelKey = underscoreToCamelCase(key);
    newObj[camelKey] = convertKeysToCamelCase(value);
  }

  return newObj;
}


function isDateValid(dateStr) {
  return !isNaN(new Date(dateStr));
}

function getNewDate(newDate, number, start, end) {
  const date = new Date(newDate);
  date.setDate(date.getDate() + number);
  let startDate = new Date(date);
  let endDate = new Date(date);
  startDate.setHours(start, 0, 0, 0);
  endDate.setHours(end, 0, 0, 0);
  startDate.setDate(startDate.getDate());
  endDate.setDate(endDate.getDate());

  return {
    startDate,
    endDate,
    date: startDate,
  };
}

export const generateUserTiming = (setting) => {
  const {
    account_id,
    period,
    long,
    start_day,
    time_light_start: light_start,
    time_light_end: light_end,
    time_night_start: night_start,
    time_night_end: night_end,
  } = setting;

  const lightDate = new Date(start_day);
  const nightDate = new Date(start_day);
  const timings = [];
  const views = [];
  for (let i = 0; i < long; i++) {
    const lightTimingDate = getNewDate(lightDate, i, light_start, light_end);
    const nightTimingDate = getNewDate(nightDate, i, night_start, night_end);

    const time_light_start =
      isDateValid(lightTimingDate.startDate) &&
      new Date(lightTimingDate.startDate)?.toISOString();
    const time_light_end =
      isDateValid(lightTimingDate.endDate) &&
      new Date(lightTimingDate.endDate)?.toISOString();
    const time_night_start =
      isDateValid(nightTimingDate.startDate) &&
      new Date(nightTimingDate.startDate)?.toISOString();
    const time_night_end =
      isDateValid(nightTimingDate.endDate) &&
      new Date(nightTimingDate.endDate)?.toISOString();

    views.push({
      time_light_start,
      time_light_end,
      time_night_start,
      time_night_end,
      date: lightTimingDate?.date || nightTimingDate?.date,
    });

    if (time_light_start && time_light_end) {
      timings.push({
        user_id: account_id,
        work_time_start: time_light_start,
        work_time_end: time_light_end,
      });
    }
    if (time_night_start && time_night_end) {
      timings.push({
        user_id: account_id,
        work_time_start: time_night_start,
        work_time_end: time_night_end,
      });
    }
  }

  return { timings, views };
};
