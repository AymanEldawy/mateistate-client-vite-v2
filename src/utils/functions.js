
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


