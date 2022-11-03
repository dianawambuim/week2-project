function submitFunction() {


let object_of_males = {
              "Sunday": "Kwasi",
              "Monday": "Kwadwo",
              "Tuesday": "Kwabena",
              "Wednesday": "Kwaku",
              "Thursday":  "Yaw",
              "Friday": "Kofi",
              "Saturday": "Kwame"
          };
let date_field = document.getElementById("dateOfBirth").value;
let day_of = new Date(date_field).toLocaleString('en-us', {weekday:'long'})


document.getElementById("outname").innerHTML = object_of_males[day_of];

document.getElementById("akanName").value = textName; //"Your Akan name is...!";
//document.getElementById("submit").innerHTML = style.color = "blue";
};

// //check on date selected
// dateOfBirthchecker(pageValues.dateOfBirthValue);
// //check on gender selected
// //get page elements
// const pageElements = getElements();
// const pageValues = getValuesFromElements(pageElements);
// };
//
// function getElementById() {
//   const dateOfBirthElement = document.getElementById('dateOfBirth')
// };
// const rmaleElement = document.getElementById('rmale');
// const rfemaleElement = document.getElementById('rfemale');
// return {
//   dateOfBirthElement,
//   rmaleElement,
//   rfemaleElement
// };
// };
//
// function getValuesFromElements(input) {
//   const dateOfBirthElement = input.dateOfBirthElement;
//   const rmaleElement = input.rmaleElement;
//   const rfemaleElement = input.rfemaleElement;
//
//   const dateOfBirthValue = dateOfBirthElement.value;
//   const rmaleValue = rmaleElement.value;
//   const rfemaleValue = rfemaleElement.value;
//   return {
//     dateOfBirthValue,
//     rmaleValue,
//     rfemaleValue
//   }
//
// };
//
// function dateOfBirthchecker(dateOfBirth) {
//   if (input.value == "") {
//     alert("Select date of birth")
//   }
//
//
//   const dayOfWeek = Result of the formula;
//
//   const maleNames[Kwasi, Kwadwo, Kwabena, Kwaku, Yaw, Kofi, Kwame]
//   const femaleNames[Akosua, Adwoa, Abenaa, Akua, Yaa, Afua, Ama]
//   //  const myName[dayOfWeek - 1]
