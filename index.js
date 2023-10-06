//Employee name and address 
const employee = {
    name: "Victor Mwangi",
    streetAddress: "Koinange st",
  };
  
  // update employee 
  function updateEmployeeWithKeyAndValue(employee, key, value){
    return {
      ...employee,
      [key]: value,
    };
}

    // update employee destructively
function destructivelyUpdateEmployeeWithKeyAndValue(employee, key, value) {
    employee[key] = value;
    return employee;
  }


  //  delete property 
  function deleteFromEmployeeByKey(employee, key) {
    const newEmployee = { ...employee };
    delete newEmployee[key];
    return newEmployee;
  }
  
  // delete property destructively
  function destructivelyDeleteFromEmployeeByKey(employee, key) {
    delete employee[key];
    return employee;
  }
  
  