console.log('JS');
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




function validateForm() {
  let arrayOfInputValues = [];
  arrayOfInputValues.push($('#firstName').val(), $('#lastName').val(), $('#id').val(), $('#title').val(), $('#annualSalary').val());
  arrayOfInputValues = arrayOfInputValues.filter(x => x.length > 0);
  if (arrayOfInputValues.length < 5) {
    alert('ERROR: ALL INPUTS MUST BE FILLED IN');
  } else {
    let newTableInput = new Employees(arrayOfInputValues[0], arrayOfInputValues[1], arrayOfInputValues[2], arrayOfInputValues[3], arrayOfInputValues[4]);
    console.log(newTableInput);
    $('.input').val('');
  }


}
