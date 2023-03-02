const firstNumber = 1;
const lastNumber = 100;
const dividersAndSuffixes = [
  [3, "PING"],
  [5, "PONG"]
];
const targetTagId = "main";

function makeNumbersList() {
  let numbersList = [];
  for (let i = firstNumber; i < lastNumber + 1; i++)
    numbersList.push(i);
  return numbersList;
}

function getNumberWithSuffixes(number) {
  let suffixedNumber = number;
  for (let i = 0; i < dividersAndSuffixes.length; i++)
    if (number % dividersAndSuffixes[i][0] === 0)
      suffixedNumber += " " + dividersAndSuffixes[i][1];
  return suffixedNumber;
}

function appendApplicableSuffixesToEveryNumber(numbersList) {
  let suffixedNumbersList = []
  for (let i = 0; i < numbersList.length; i++)
    suffixedNumbersList.push(getNumberWithSuffixes(numbersList[i]));
  return suffixedNumbersList;
}

function makeSuffixedNumbersList() {
  let numbersList = makeNumbersList();
  let suffixedNumbersList = appendApplicableSuffixesToEveryNumber(numbersList);
  return suffixedNumbersList;
}

function prettify(suffixedNumbers) {
  return suffixedNumbers.toString().replaceAll(",", "<br>\n");
}

function print(suffixedNumbers) {
  let tag = document.getElementById(targetTagId);
  const prettySuffixedNumbers = prettify(suffixedNumbers);
  tag.innerHTML = prettySuffixedNumbers;
}

let suffixedNumbers = makeSuffixedNumbersList();
print(suffixedNumbers);