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

      // create html element
      let li = document.createElement("li");

      // assigning class to the li element
      li.className = "list-group-item";

      // adding value to the created li tag
      li.appendChild(document.createTextNode(item));

      // creating the del button
      let del = document.createElement("button");
      del.appendChild(document.createTextNode("X"));

      // assigning a classname to the button
      del.className = "btn btn-danger btn-sm float-right delete";


      // appending the button to the li item
      li.appendChild(del)

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

          // making keys from data values
          let date = Date.now();
          localStorage.setItem(date, li.textContent);
          location.reload();


      }

      //document.getElementById("item").innerHTML = "";

  }

  //NOTE redering the todos onto the screen
  for (let i = 0; i < localStorage.length; i++) {
      let iterKey = localStorage.key(i); // key
      let iterValue = localStorage.getItem(iterKey); // value
      itemList.innerHTML += `<li class="list-group-item">${iterValue}</li>`;
  }


  // Item remover || Delete Item from list
  function delItem(e) {
      // check if the clicked item is the actual button
      if (e.target.classList.contains("delete")) {

          // grabbing unto the parent element of the button (i.e li)
          let li = e.target.parentElement;

          // ask for confirmation before deleting item
          let confirmation = confirm("Delete ToDo?")

          // delete if yes
          if (confirmation) {
              // remove the li from the List Group (i.e li)
              itemList.removeChild(li);
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