const employees = [
  { id: 1, name: "Carolynn McGinlay" },
  { id: 2, name: "Lodovico Filon" },
  { id: 3, name: "Jefferey Wahlberg" },
  { id: 4, name: "Kayley Tures" },
  { id: 5, name: "Rickard Carver" },
  { id: 6, name: "Michael Stryde" },
  { id: 7, name: "Averell Santino" },
  { id: 8, name: "Constantina Connue" },
  { id: 9, name: "Verile Bondesen" },
  { id: 10, name: "Gwen Grollmann" },
];

export default employees;

export const getEmployeeById = (id) => {
  // Since the id from a url is a string but our ids are numbers we need
  // to convert the sting to a number to have equality
  return employees.find((emp) => emp.id === parseInt(id));
};

export const addemployee = (emp) => {
  const lastEmployee = employees[employees.length - 1];
  const newEmployee = { id: lastEmployee.id + 1, ...emp };

  employees.push(newEmployee);

  return newEmployee;
};
