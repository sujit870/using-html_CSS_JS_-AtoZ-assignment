# WEB - Employee Management System

## Submission Instructions [Please note]

## Maximum Marks - 11

- The Submission should not contain spaces, for example,/js-101 folder/eval will not work
- Do not push node_modules and package_lock.json to GitHub

```
 ✅ able to submit the app - 1 mark ( minimum score )
 ✅ Submit the Form and check if form data getting appended - 2 marks.
 ✅ Submit the Form multiple times and check the table  - 2 marks.
 ✅ Check the Role type part - 2 marks
 ✅ Check the Count Part - 1 mark.
 ✅ Delete one row- 2 marks.
 ✅ Check the count section after Deleting- 1 mark.

```

## Installation

- you can use any node version that works for you ( 14+ )
- please make sure you do not push package-lock.json
- Download and unzip the boilerplate
- Navigate to the correct path

## Folder structure

- index.html
- script
     - index.js
- cypress
  - e2e (ignore the test files related to cypress)

### You haven't taught cypress to run the test cases locally, you can see the passed/ failed test cases and test errors on CP itself.

## Description

#### Use the template provided to write your code (Mandatory)

### Some Rules to follow:-
- Before writing a single line of code please read the problem statement very carefully.
- Don't change the already given ids or classes.
- Only use the localStorage keys given in the problem statement.
- If you don't follow these rules you might not get any marks even if you do everything correctly.
- Strictly follow the template. Cross-check HTML Ids.

### Problem Statement:-
- In this evaluation, you have to build an employee management system.
- For better understanding, we have divided our problem statement into 3 parts:-
- Form Section
- Table Section
- Count Section
- Form Section

#### The Form Section looks something like this:-

![alt text](https://masai-course.s3.ap-south-1.amazonaws.com/editor/uploads/2022-08-12/Screenshot%202022-08-12%20at%2010.51.23%20AM_695336.png)

## The input fields are given below:-
- Name(Input-text)
- Job Role(Select)
- Department(Select)
- Salary(Input-number)
- Contact Email(Input-email)
- Work Experience(Input-Number)
If any of the above fields are empty the form should not submit.

## Table Section:-
- The table section has columns as the form but it also has two extra columns
- Role Type
- Fire Employee
- If experience > 5 the text in Role Type should be Senior else it should be Junior. These texts are case-sensitive so please be careful.
- In the Fire Employee employee section the text should be Delete. When we click on it that row should be deleted.
- When we submit the form the data should be appended in the table as rows (tr).
- I have submitted the form a couple of times and this is how the table should look like after this:-

![alt text](https://masai-course.s3.ap-south-1.amazonaws.com/editor/uploads/2022-08-12/Screenshot%202022-08-12%20at%2011.05.58%20AM_383135.png)

Count Section:-
- In the count section you have to show the total no of active employees and their total salary of them.
-When we add a new employee or delete any employee these two data should be updated.
- This is what the count section looks like:-

![alttext](https://masai-course.s3.ap-south-1.amazonaws.com/editor/uploads/2022-08-12/Screenshot%202022-08-12%20at%2011.16.38%20AM_903563.png)


#### General guidelines

- The system on cp.masaischool.com may take between 1-20 minutes for responding,
- so we request you to read the problem carefully and debug it before itself.
- we also request you not just submit it last minute.
- try to keep one submission at a time.