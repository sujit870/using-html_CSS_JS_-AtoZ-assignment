import "cypress-localstorage-commands";
import submission_data from "../../submissionData.json"; // do not create this file
//let submission_data = [{ submission_link: "http://localhost:8080/", id: 67890 }];

// import { start, submitData } from "../../../data";
const data = [
  {
    name: "s",
    job: "SDE-2",
    department: "Engineering",
    sallary: 10,
    work: 8,
    email: "s@gmail.com",
  },
  {
    name: "n",
    job: "SDE-1",
    department: "Engineering",
    sallary: 5,
    work: 3,
    email: "n@gmail.com",
  },
  {
    name: "v",
    job: "HR Manager",
    department: "HR",
    sallary: 8,
    work: 7,
    email: "v@gmail.com",
  },
];
describe("Web-101 C3 Evaluations", function () {
  let acc_score = 0;

  submission_data.map(({ submission_link: url, id }) => {
    if (url.charAt(url.length - 1) != "/") {
      url = url + "/";
    }

    function submitForm(data) {
      cy.get("#name").clear().type(data.name);
      cy.get("#job").select(data.job);
      cy.get("#department").select(data.department);
      cy.get("#salary").clear().type(data.sallary);
      cy.get("#experience").clear().type(data.work);
      cy.get("#email").clear().type(data.email);
      cy.get("form").submit();
    }
  
    function CheckTable(data, score, index) {
      cy.get("tbody>tr").eq(index).contains("td", data.name);
      cy.get("tbody>tr").eq(index).contains("td", data.job);
      cy.get("tbody>tr").eq(index).contains("td", data.department);
      cy.get("tbody>tr").eq(index).contains("td", data.sallary);
      cy.get("tbody>tr").eq(index).contains("td", data.work);
      cy.get("tbody>tr")
        .eq(index)
        .contains("td", data.email)
        .then(() => {
          acc_score += score;
        });
    }
    
    if (url && url.length) {
      // url = modifyUrl(url);
      acc_score += 1;

    it(`Submit Form and check if form data getting appended`, () => {
      cy.visit(url);
      submitForm(data[0]);
      CheckTable(data[0], 2, 0);
    }); // Score:-2

    it(`Submit Form multiple times and check table`, () => {
      submitForm(data[1]);
      submitForm(data[2]);
      CheckTable(data[1], 1, 1);
      CheckTable(data[2], 1, 2);
    }); // Score:-2
    it(`Check the Role type part`, () => {
      cy.get("tbody>tr")
        .eq(0)
        .contains("td", "Senior")
        .then(() => {
          acc_score += 0.5;
        });
      cy.get("tbody>tr")
        .eq(1)
        .contains("td", "Junior")
        .then(() => {
          acc_score += 0.5;
        });
      cy.get("tbody>tr")
        .eq(2)
        .contains("td", "Senior")
        .then(() => {
          acc_score += 1;
        });
    }); // Score:- 1.5

    it(`Check the Count Part`, () =>{
        cy.get("#total-employee").should("have.text",3).then(() =>{
            acc_score+=0.5
        })
        cy.get("#total-salary").should("have.text",23).then(() =>{
            acc_score+=0.5
        })
    })// Score:- 1

    it(`Delete one row`,() =>{
        cy.get("tbody>tr").eq(1).children("td").eq(7).click();
        CheckTable(data[2], 2, 1);
    })// Score:- 2

    it(`Check the count section after Deleting`,() =>{
        cy.get("#total-employee").should("have.text",2).then(() =>{
            acc_score+=0.5
        })
        cy.get("#total-salary").should("have.text",18).then(() =>{
            acc_score+=0.5
        })
    })// Score:- 1
    }

    it(`generate score`, () => {
      //////////////
      let result = {
        id,
        marks: Math.floor(acc_score),
      };
      result = JSON.stringify(result);
      cy.writeFile("results.json", `\n${result},`, { flag: "a+" }, (err) => {
        if (err) {
          console.error(err);
        }
      });
      //////////////////
    });
  });
});