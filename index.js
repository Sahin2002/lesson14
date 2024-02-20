const text ="The rain in Spain stays mainly in the plain. In Spain, in April, the rain is a pain.";
//task1:match
const matchMethods = (text) => {
  const updateMatch = text.match("Spain");
  return updateMatch;
};
console.log("task1:",matchMethods(text));
// task2:matchall
const matchallMethods = (text) => {
  const updateMatchall = text.matchAll("rain");
  return [...updateMatchall];
};
console.log("task2:",matchallMethods(text));
// task:3:repalce
const replaceMethods = (text) => {
  const updateReplace = text.replace("Spain", "France");
  return updateReplace;
};
console.log("task3:",replaceMethods(text));
// task4:replaceall
const replaceallMethods = (text) => {
  const updateReplacall = text.replace("rain", "sun");
  return updateReplacall;
};

console.log("task4:",replaceallMethods(text))
// task5:search
const searchMethods = (text) => {
  const updateSearch = text.search("plain");
  return updateSearch;
};

console.log("task5:",searchMethods(text))