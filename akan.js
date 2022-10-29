function submitFunction()
{
  //check on date selected
  dateOfBirthchecker(pageValues.dateOfBirthValue);
  //check on gender selected
  //get page elements
  const pageElements = getElements();
  const pageValues = getValuesFromElements(pageElements);
};
function getElementById()
{
  const dateOfBirthElement = document.getElementById('dateOfBirth');
  const rmaleElement = document.getElementById('rmale');
  const rfemaleElement = document.getElementById('rfemale');
  return {dateOfBirthElement,rmaleElement,rfemaleElement};
};
function getValuesFromElements(input) {
  const dateOfBirthElement = input.dateOfBirthElement;
  const rmaleElement = input.rmaleElement;
  const rfemaleElement = input.rfemaleElement;

  const dateOfBirthValue = dateOfBirthElement.value;
  const rmaleValue = rmaleElement.value;
  const rfemaleValue = rfemaleElement.value;
  return {dateOfBirthValue, rmaleValue,rfemaleValue}

};
function dateOfBirthchecker(dateOfBirth)
{
  if (input.value == "")
  {alert("Select date of birth")}

};
