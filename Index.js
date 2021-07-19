  // importing the removeX function from the debugger.js file
  import {
      removeX
  } from "./debugger.js";

  // grabbing elements into a variables
  let form = document.getElementById("addForm");
  let itemList = document.getElementById("items");
  let filter = document.getElementById("filter");

  // add event listener
  form.addEventListener("submit", addItem);

  // add event listener to the filter (search bar)
  filter.addEventListener("keyup", filterItems);

  // add event listener to the button element
  itemList.addEventListener("click", delItem);

  //
  //TODO: Try re-setting the string inside the textbox to empty after adding to list
  // TODO: add day/night mode to the page. It should be on the same row with the H2 (Add ToDo) element
  //


  // event handler | event function () | AddItems function
  function addItem(e) {
      //overide the default submit function
      e.preventDefault();

      // grab the value from the input box
      let item = document.getElementById("item").value;

      // check if textbox is not empty
      if (item != "") {
          // create html element
          let li = document.createElement("li");

          // assigning class to the li element
          li.className = "list-group-item";

          // adding value to the created li tag
          li.appendChild(document.createTextNode(item));

          //NOTE: THE DELETE BUTTON IS CREATED IN THE LOCALSTORAGE SECTION
          // creating the del button
          //let del = document.createElement("button");
          //del.appendChild(document.createTextNode("X"));

          // assigning a classname to the button
          //del.className = "btn btn-danger btn-sm float-right delete";


          // appending the button to the li item
          //li.appendChild(del)

          // debugging the li
          //console.log(li);

          // confirm the addition of item
          let confirmation = confirm("Add ToDo?");

          // adding local storage to mimic the presence of database
          //localStorage.setItem("todoList", li.textContent);

          if (confirmation) {
              // appending the newly created li to the list groups
              //itemList.appendChild(li);   //TODO UNCOMMENT THIS LATER IF THINGS DON'T WORKOUT

              //Append item to the UL
              //itemList.innerHTML = localStorage.getItem("todoList");

              // making keys from data values || Using dates for unique keys
              let date = Date.now();
              localStorage.setItem(date, li.textContent);
              location.reload();
          }
      }
  }


  //NOTE redering the todos onto the screen
  for (let i = 0; i < localStorage.length; i++) {
      // extracting the key, value values from the localStorage
      let iterKey = localStorage.key(i); // key
      let iterValue = localStorage.getItem(iterKey); // value

      // create the del button
      let delBtn = "<button class=\"btn btn-danger btn-small float-right delete\">X</button>";

      //insert the list item and the button into the UL tag 
      itemList.innerHTML += `<li class="list-group-item">${iterValue}${delBtn}</li>`;
  }


  // Item remover || Delete Item from list
  function delItem(e) {
      // check if the clicked item is the actual button
      if (e.target.classList.contains("delete")) {

          // grabbing unto the parent element of the button (i.e li)
          let li = e.target.parentElement;

          // grabbing the value of the li || To be used to find the index of the li
          let liValue = removeX(li.textContent); // removes the redundant X from the end of the string

          //to store the index of the deleted element
          var index;

          // converting the local storage to a 2d array
          var todos = Object.entries(localStorage);

          for (let i = 0; i < todos.length; i++) {
              // grabbing the current item
              let currentItem = todos[i];

              // checking if deleted value is the currentitem
              if (currentItem[1] === liValue) {
                  index = currentItem[0];
              }

          }

          // ask for confirmation before deleting item
          let confirmation = confirm("Delete ToDo?")

          // delete if yes
          if (confirmation) {
              // remove the li from the List Group (i.e li)
              itemList.removeChild(li);

              console.log(index, localStorage.getItem(index), liValue);
              // removing from the localStorage || Removing completely
              //TODO: localStorage.rem
              localStorage.removeItem(index);
              //location.reload();

          }
      };
  }


  // Filter items in the list || search items
  function filterItems(e) {
      // grab text to filter/search
      let filterText = e.target.value.toLowerCase();

      // grab all the list items available
      let liAvailable = itemList.getElementsByTagName("li");

      // convert the lis available to array
      Array.from(liAvailable).forEach(function (item) {
          // grabs the text content in the selected li
          let liText = item.firstChild.textContent;

          // checks if there is a match
          if (liText.toLowerCase().indexOf(filterText) != -1) {
              item.style.display = "block";
          } else {
              item.style.display = "none";
          }
      })

  }