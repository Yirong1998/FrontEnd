/*

Question 1

Given the following array and implement the table dynamically

*/

const tableInfo = {
  tableHeader: ["Student Name", "Age", "Phone", "Address"],
  tableContent: [
    {
      "Student Name": "John",
      Age: 19,
      Phone: "455 - 983 - 0903",
      Address: "123 Ave, San Francisco, CA, 94011",
    },
    {
      "Student Name": "Alex",
      Age: 21,
      Phone: "455 - 983 - 0912",
      Address: "456 Rd, San Francisco, CA, 94012",
    },
    {
      "Student Name": "Josh",
      Age: 22,
      Phone: "455 - 345 - 0912",
      Address: "789 Dr, Newark, CA, 94016",
    },
    {
      "Student Name": "Matt",
      Age: 23,
      Phone: "321 - 345 - 0912",
      Address: "223 Dr, Sunnyvale, CA, 94016",
    },
  ],
};

// Create a table based on given array.
const createTable = (table) => {
  let header = table.tableHeader;
  let content = table.tableContent;

  // 1. create a table object.
  let myTable = document.createElement("table");

  // 2. create a table row object for header.
  let tr = document.createElement("tr");

  // 3. map header name to table head.
  let heads = header.map((head) => {
    let th = document.createElement("th");
    th.textContent = head;
    tr.append(th);
    myTable.append(tr);
    return th;
  });

  // 4. map content value to table data.
  let contents = content.map((info) => {
    let info1 = Object.values(info);
    let tr1 = document.createElement("tr");
    let content1 = info1.map((value) => {
      let td = document.createElement("td");
      td.textContent = value;
      tr1.append(td);
      return tr1;
    });
    myTable.append(tr1);
  });
  document.body.append(myTable);
};

createTable(tableInfo);
/*
    
    Question 2
    Given the array and generate order list and unordered list dynamically as following:
    
    */

const list = ["HTML", "JavaScript", "CSS", "React", "Redux", "Java"];

// Create an order list and a unordered list based on given list.
const createLists = (list) => {
  // 1. create an order list object.
  let ol = document.createElement("ol");

  // 2. create a unordered list object.
  let ul = document.createElement("ul");

  let li1 = list.map((ele) => {
    let li = document.createElement("li");
    li.textContent = ele;
    ol.append(li);
    return li;
  });
  let li2 = list.map((ele) => {
    let li = document.createElement("li");
    li.textContent = ele;
    ul.append(li);
    return li;
  });
  document.body.append(ol);
  document.body.append(ul);
};

createLists(list);
/*
    
    Question 3
    Given a array and implement a dropdown list with the following options dynamically 
    FYI: use 'value' in the object as the value attribute in the option tag when you create the dropdown list
    
    */

const dropDownList = [
  { value: "newark", content: "Newark" },
  { value: "santaClara", content: "Santa Clara" },
  { value: "unionCity", content: "Union City" },
  { value: "albany", content: "Albany" },
  { value: "dalyCity", content: "Daly City" },
  { value: "sanJose", content: "San Jose" },
];

// Create a dropdown list from given array.
const createDropDownList = (dropDownList) => {
  let select = document.createElement("select");
  let options = dropDownList.map(({ value, content }) => {
    let option = document.createElement("option");
    option.value = value;
    option.textContent = content;
    select.append(option);
    return option;
  });
  document.body.append(select);
};

createDropDownList(dropDownList);
