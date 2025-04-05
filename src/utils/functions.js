
export function getNameFromList(list, value) {
  return list?.find(
    (c) => c.id === value
  )?.name || 'unknown';
}

export const getCreatedFromUrl = () => {

}