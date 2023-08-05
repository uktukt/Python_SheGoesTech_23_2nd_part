// Select the database to use.

use('mongo_task');

// Data loaded by using MongoDB Compass

// Create unique index

db.task.createIndex({ EmployeeID : 1 }, { unique: true });

// Insert at least 3 entries to these collections

db.getCollection('task').insertMany([
  { 'EmployeeID': '6', 'FullName': 'A', 'Age': 22, 'Salary': 22222, 'Department': 'HR'},
  { 'EmployeeID': '7', 'FullName': 'B', 'Age': 33, 'Salary': 33333, 'Department': 'IT'},
  { 'EmployeeID': '8', 'FullName': 'C', 'Age': 44, 'Salary': 44444, 'Department': 'HR'},
]);

// Perform at least 3 selections based on different (MIXED - "one or another","one and another", etc.) filter

db.task.find({ $or: [ { Department: 'IT' }, { age: { $gt: 42} } ] });

db.task.find({ Department: 'HR', Age: { $gt: 28 } });

db.task.find({ Department: { $ne: 'HR' } });

// Perform at least 3 update operations

db.task.update({ FullName: 'A' }, { $set: { Age: 25 } });

db.task.update({ FullName: 'B' }, { $set: { Age: 55, Department: 'Sales' } });

db.task.update({ FullName: 'C'  }, { $set: { Years_of_experience: 12 } });

