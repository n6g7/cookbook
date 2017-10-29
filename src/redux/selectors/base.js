export const objectToArray = (obj, idKey = 'id') =>
  obj
    ? Object.keys(obj).map(id => ({
      [idKey]: id,
      ...obj[id]
    }))
    : []
