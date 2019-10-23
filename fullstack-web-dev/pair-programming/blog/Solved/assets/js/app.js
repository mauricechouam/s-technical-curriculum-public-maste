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
    $('#feed').empty();

    // render our todos to the page
    for (var i = 0; i < blogPosts.length; i++) {
        // create blog feed container
        var feedContainer = $('<div>');

        // add class to container
        feedContainer.attr('class', 'feed-container');

        // create h3 item for title
        var blogTitle = $('<h3>');

        // add header class to blog
        blogTitle.attr('class', 'header');

        // assign it a unique id, its array index in this case
        blogTitle.attr('data-blog-id', i);

        // assign the blog title to the h3 tag
        blogTitle.text(blogPosts[i].title);

        // Create a todo item <p> tag
        var blogContent = $('<p>');

        // add class to blogContent
        blogContent.attr('class', 'blog-content');

        // truncate the text here
        var content = truncateText(blogPosts[i].content, 300);

        // assign the todo item to this <p> tag variable
        blogContent.text(content);

        // create a button that will be used to delete the todo item
        var deletePost = $('<i>');

        // assign it a unique id, its array index in this case
        deletePost.attr('data-blog-id', i);

        // add some classes to style the button
        deletePost.addClass('delete-button material-icons');

        // add some text to make the button look like a delete button
        deletePost.text('delete_outline');

        // prepend the button to the to do item
        feedContainer = feedContainer.prepend(deletePost);

        // appppend title and content to div
        feedContainer.append(blogTitle);
        feedContainer.append(blogContent);

        // grab the button and the todo item text and append it to our div placeholder in the html
        $('#feed').append(feedContainer);
    }
}

// function runs to add a new to do item
$('#add-blog-post').on('click', function(e) {
    // prevent default of page refresh
    e.preventDefault();

    // grab the value from the text box, store it in a variable

    var title = $('#blog-title')
        .val()
        .trim();
    var content = $('#blog-content')
        .val()
        .trim()
        .replace(/\n/g, '<br \\>');

    // validate empty form
    // if the new item is not an empty string, then do some logic to add this item
    if (title != '' && content != '') {
        var newPost = {
            title,
            content
        };

        // add our new todo item to the array of todo items stored in memory (fetched from storage)
        blogPosts.push(newPost);

        // call the render function to update the list, pass the new list
        fetchBlogPosts(blogPosts);

        // save the new array of todos to local storage
        localStorage.setItem('blog', JSON.stringify(blogPosts));

        // clear the text box for better ux
        $('#blog-title').val('');
        $('#blog-content').val('');
    } else {
        // if the form is empty, notify the user
        alert('You need to add a title and content.');
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
        var postToDelete = $(this).attr('data-blog-id');

        // remove this item from the array using the .splice() method
        blogPosts.splice(postToDelete, 1);

        // call the render function to update the list, pass the new list
        fetchBlogPosts(blogPosts);

        // save the todos into localstorage
        localStorage.setItem('blog', JSON.stringify(blogPosts));
    }
});

// load an individual blog post

$(document).on('click', '.header', function() {
    var postId = $(this).attr('data-blog-id');

    for (var i = 0; i < blogPosts.length; i++) {
        if (i == postId) {
            // add modal header
            $('.modal-title').text(blogPosts[i].title);
            // add modal content
            $('.modal-body').html(blogPosts[i].content);
        }
    }
    // add modal content
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
