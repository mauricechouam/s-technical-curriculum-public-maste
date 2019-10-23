// function to truncate text on feed
function truncateText(text, limit) {
    if (text.length > limit) {
        for (let i = limit; i > 0; i--) {
            if (
                text.charAt(i) === ' ' &&
                (text.charAt(i - 1) != ',' ||
                    text.charAt(i - 1) != '.' ||
                    text.charAt(i - 1) != ';')
            ) {
                return text.substring(0, i) + '...';
            }
        }
        return text.substring(0, limit) + '...';
    } else return text;
}

function fetchBlogPosts(todoItems) {
    // clear the html

    // render our todos to the page using a for loop
    for (var i = 0; i < blogPosts.length; i++) {
        // create blog feed container
        // add class to container
        // create h3 item for title
        // add header class to blog
        // assign it a unique id, its array index in this case
        // assign the blog title to the h3 tag
        // Create a todo item <p> tag
        // add class to blogContent
        // truncate the text here
        // assign the todo item to this <p> tag variable
        // create a button that will be used to delete the todo item
        // assign it a unique id, its array index in this case
        // add some classes to style the button
        // add some text to make the button look like a delete button
        // prepend the button to the to do item
        // appppend title and content to div
        // grab the button and the todo item text and append it to our div placeholder in the html
    }
}

// function runs to add a new to do item
$('#add-blog-post').on('click', function(e) {
    // prevent default of page refresh

    // grab the value from the text box, store it in a variable
    // .replace(/\n/g, '<br \\>'); <--- this will help truncate on the first page

    // validate empty form
    // if the new item is not an empty string, then do some logic to add this item
    if (title != '' && content != '') {
        var newPost = {
            title,
            content
        };

        // add our new todo item to the array of todo items stored in memory (fetched from storage)

        // call the render function to update the list, pass the new list

        // save the new array of todos to local storage

        // clear the text box for better ux
    } else {
        // if the form is empty, notify the user
    }
});

// delete functionality
// use (document).on("click"...) to enable this functionality for dynamically generated items
$(document).on('click', '.delete-button', function() {
    // check first
    var check = confirm(
        'Are you sure you want to delete this post? This action cannot be undone.'
    );

    if (check) {
        // we'll use the unique identify (array index) to select the correct item
        // remove this item from the array using the .splice() method
        // call the render function to update the list, pass the new list
        // save the todos into localstorage
    }
});

// load an individual blog post

$(document).on('click', '.header', function() {
    // grab the id of the blog post

    // add the title and header if the postId matches
    for (var i = 0; i < blogPosts.length; i++) {}

    // toggle the modal on
    $('#blog-modal').modal('toggle');
});

// load the current todo list from localstorage
var blogPosts = JSON.parse(localStorage.getItem('blog'));

// Checks to see if the todolist exists in localStorage and is an array currently
// If not, set a local list variable to an empty array
// Otherwise list is our current list of todos
if (!Array.isArray(blogPosts)) {
    blogPosts = [];
}

// render our todos on page load
fetchBlogPosts(blogPosts);
