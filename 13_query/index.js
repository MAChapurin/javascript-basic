function createQueryParametrs(obj) {
  return Object.keys(obj)
    .reduce((acc, key) => {
      return acc.concat([`${key}=${obj[key]}`.replace(/\s/g, '%20')]); //replace на случай наличия пробелов в каком либо параметре
    }, [])
    .join('&');
}

const params1 = {
  search: 'something',
  take: 10,
  page: 1,
};

const params2 = {
  search: 'something else ...',
  offset: 12,
  page: 4,
};

console.log(createQueryParametrs(params1));
console.log(createQueryParametrs(params2));
//По знаку вопроса в начале строки в тз не указано.