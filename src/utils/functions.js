
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


export const getUnitInfo = (assetType) => {
  switch (assetType) {
    case 1: // Apartment
      return {
        table: 'apartment',
        value: 'apartmentId',
        label: 'apartmentNo',
        unitType: 'apartment',
        unitTypeName: 'apartments',
        unitTypeId: 1,
      };
    case 2: // Parking
      return {
        table: 'parking',
        value: 'parkingId',
        label: 'parkingNo',
        unitType: 'parking',
        unitTypeName: 'parkings',
        unitTypeId: 2,
      };
    case 3: // Shop
      return {
        table: 'shop',
        value: 'shopId',
        label: 'shopNo',
        unitType: 'shop',
        unitTypeName: 'shops',
        unitTypeId: 3,
      };
    default:
      return {
        name: 'Unknown',
        unitType: 'unknown',
        unitTypeName: 'unknowns',
        unitTypeId: 0,
      };
  }
}

export function cleanObject(obj) {
  console.log(obj, 'obj')

  if (Array.isArray(obj)) {
    const cleanedArray = obj
      .map(item => cleanObject(item))
      .filter(item => item !== null && Object.keys(item).length > 0);
    return cleanedArray.length > 0 ? cleanedArray : null;
  }

  if (typeof obj === 'object' && obj !== null) {
    // Handle Date objects explicitly
    if (obj instanceof Date) {
      return obj;
    }

    const cleaned = {};
    for (const [key, value] of Object.entries(obj)) {
      // Skip null, undefined, or empty string
      if (value === null || value === undefined || value === '') continue;
      // Skip empty arrays
      if (Array.isArray(value) && value.length === 0) continue;

      const cleanedValue = cleanObject(value);
      if (cleanedValue !== null && !(Array.isArray(cleanedValue) && cleanedValue.length === 0)) {
        cleaned[key] = cleanedValue;
      }
    }
    return Object.keys(cleaned).length > 0 ? cleaned : null;
  }

  // Preserve string dates (ISO 8601 or other valid date strings)
  if (typeof obj === 'string') {
    // Check if the string can be parsed as a valid date
    const date = new Date(obj);
    if (!isNaN(date.getTime())) {
      return obj; // Return original string if it's a valid date
    }
  }

  return obj;
}


// Returns a color or className string based on the unit type
export function getUnitTypeColorOrClass(unitType) {
  switch (unitType?.toLowerCase()) {
    case "apartment":
      return "bg-blue-100 text-blue-700"; // or "#3b82f6"
    case "parking":
      return "bg-gray-200 text-gray-700"; // or "#6b7280"
    case "land":
      return "bg-green-100 text-green-700"; // or "#22c55e"
    case "villa":
      return "bg-purple-100 text-purple-700"; // or "#a21caf"
    case "shop":
      return "bg-yellow-100 text-yellow-700"; // or "#eab308"
    default:
      return "bg-gray-100 text-gray-500"; // or "#9ca3af"
  }
}