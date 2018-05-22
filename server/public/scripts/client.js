$(document).ready(readyNow);

function readyNow() {
    $('#submitEmployee').on('click', validateForm);


}

class Employees {
  constructor (firstName, lastName, id, title, annualSalary) {
    this.firstname = firstName;
    this.lastName = lastName;
    this.id = id;
    this.title = title;
    this.annualSalary = annualSalary;
  }
}

function handleSalary(num) {
    if (num === 0 || NaN) {
      return 0;
    }
    num = num.toString();
    num = num.split("").filter(x => !isNaN(x));
    num.splice(num.length - 2, 0, '.');
    let fixedNumber = num.slice(0,num.length - 3).join("");
    fixedNumber = parseInt(fixedNumber);
    let integerValue = fixedNumber;
    fixedNumber = '$' + fixedNumber.toLocaleString();

    fixedNumber += num.slice(num.length - 3, num.length).join("");
    return fixedNumber;
}

function extractSalaryValue(num) {
  if (num === 0 || NaN) {
    return 0;
  }
  num = num.split("").filter(x => !isNaN(x));
  num.splice(num.length - 2, 0, '.');
  let fixedNumber = num.slice(0,num.length - 3).join("");
  fixedNumber = parseInt(fixedNumber);
  return fixedNumber;
}

function calculateMonthlyTotal() {
  let sum = 0;
  $('td.salary').each(function() {
    sum += extractSalaryValue($(this).text());
  })
  if ((sum/12)>20000) {
    $('#totalMonthly').css('background-color', 'red');
  } else {
    $('#totalMonthly').css('background-color', 'white');
  }
  return (sum/12);
}



let tableEntry = -1;
function validateForm() {
  tableEntry++;
  let arrayOfInputValues = [];
  let newSalary = handleSalary($('#annualSalary').val());
  if (isNaN(extractSalaryValue($('#annualSalary').val()))) {
    alert('ERROR: PLEASE INPUT INTEGER IN ANNUAL SALARY INPUT');
  }
  arrayOfInputValues.push($('#firstName').val(), $('#lastName').val(), $('#id').val(), $('#title').val(), newSalary);
  arrayOfInputValues = arrayOfInputValues.filter(x => x.length > 0);
  if (arrayOfInputValues.length < 5) {
    alert('ERROR: ALL INPUTS MUST BE FILLED IN');
  } else {
    let newTableInput = new Employees(arrayOfInputValues[0], arrayOfInputValues[1], arrayOfInputValues[2], arrayOfInputValues[3], arrayOfInputValues[4]);
    $('.input').val('');
    let outputString = '<tr class="'+tableEntry+'">"';
    outputString += '<td>' + arrayOfInputValues[0] + '</td>';
    outputString += '<td>' + arrayOfInputValues[1] + '</td>';
    outputString += '<td>' + arrayOfInputValues[2] + '</td>';
    outputString += '<td>' + arrayOfInputValues[3] + '<td>';
    outputString += '<td class="salary">' + arrayOfInputValues[4] + '<td>';
    outputString += '<div><button class="editRow">Remove</button></div>'
    outputString += '</tr>';
    $('tbody').append(outputString);
    $('#totalMonthly').html('Monthly Total: ' + handleSalary(Math.round(calculateMonthlyTotal() * 100)));

    $('.editRow').click(function() {
      $(this).parents('tr').remove();
      $('#totalMonthly').html('Monthly Total: ' + handleSalary(Math.round(calculateMonthlyTotal() * 100)));
    })
};


  }
