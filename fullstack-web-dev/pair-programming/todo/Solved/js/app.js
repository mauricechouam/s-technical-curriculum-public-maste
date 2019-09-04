function fetchTodoItems(todoItems) {

    // clear the html
    $("#todo-list").empty();

    // render our todos to the page
    for (var i = 0; i < todoItems.length; i++) {

        // Create a todo item <p> tag
        var toDoItem = $("<p>");

        // assign the todo item to this <p> tag variable
        toDoItem.text(todoItems[i]);

        // create a button that will be used to delete the todo item
        var todoDelete = $("<button>");

        // assign it a unique id, its array index in this case
        todoDelete.attr("data-todo-id", i);

        // add some classes to style the button
        todoDelete.addClass("delete-button btn btn-danger mr-2");

        // add some text to make the button look like a delete button

        todoDelete.text("X");

        // prepend the button to the to do item
        toDoItem = toDoItem.prepend(todoDelete);

        // grab the button and the todo item text and append it to our div placeholder in the html
        $("#todo-list").append(toDoItem);
    }
}


// function runs to add a new to do item
$("#add-to-do").on("click", function (e) {
    // prevent default of page refresh
    e.preventDefault();

    // grab the value from the text box, store it in a variable
    var newTodoItem = $("#to-do").val().trim();

    // validate empty form
    // if the new item is not an empty string, then do some logic to add this item
    if (newTodoItem != "") {

        // add our new todo item to the array of todo items stored in memory (fetched from storage)
        todoItems.push(newTodoItem);

        // call the render function to update the list, pass the new list
        fetchTodoItems(todoItems);

        // save the new array of todos to local storage
        localStorage.setItem("todolist", JSON.stringify(todoItems));

        // clear the text box for better ux
        $("#to-do").val("");

        // if the string is empty, alert the user
    } else {

        // if the form is empty, notify the user
        alert("You need to add a todo item.")
    }
});

// delete functionality
// use (document).on("click"...) to enable this functionality for dynamically generated items
$(document).on("click", ".delete-button", function () {

    // we'll use the unique identify (array index) to select the correct item
    var completedTodo = $(this).attr("data-todo-id");

    // remove this item from the array using the .splice() method
    todoItems.splice(completedTodo, 1);

    // call the render function to update the list, pass the new list
    fetchTodoItems(todoItems);

    // save the todos into localstorage
    localStorage.setItem("todolist", JSON.stringify(todoItems));
});


// load the current todo list from localstorage
var todoItems = JSON.parse(localStorage.getItem("todolist"));

// Checks to see if the todolist exists in localStorage and is an array currently
// If not, set a local list variable to an empty array
// Otherwise list is our current list of todos
if (!Array.isArray(todoItems)) {
    todoItems = [];
}


// render our todos on page load
fetchTodoItems(todoItems);
