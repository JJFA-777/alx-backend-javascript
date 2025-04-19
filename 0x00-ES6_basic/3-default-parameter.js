export default function getSumOfHoods(initialNumber, expansion1989, expansion2019) {
  return initialNumber
   + (expansion1989 === void 0 ? 89 : expansion1989)
   + (expansion2019 === void 0 ? 19 : expansion2019);
}
