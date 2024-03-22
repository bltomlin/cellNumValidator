function checkBtn() {
  let value = document.getElementById("user-input").value;
  if (value === "") {
    alert("Please provide a phone number");
  } else {
    validNumber(value);
  }
}

function clearBtn() {
  document.getElementById("user-input").value = "";
  document.getElementById("results-div").innerHTML = "";
}

function validNumber(value) {
  const countryCode = '^(1\\s?)?';
  const areaCode = '(\\([0-9]{3}\\)|[0-9]{3})';
  const spacesDashes = '[\\s\\-]?';
  const phoneNumber = '[0-9]{3}[\\s\\-]?[0-9]{4}$';
  const phoneRegex = new RegExp(
    `${countryCode}${areaCode}${spacesDashes}${phoneNumber}`
  );
  if (phoneRegex.test(value)) {
    document.getElementById("results-div").innerHTML = "Valid US number: " + value;
  } else {
    document.getElementById("results-div").innerHTML = "Invalid US number: " + value;
  }
}
