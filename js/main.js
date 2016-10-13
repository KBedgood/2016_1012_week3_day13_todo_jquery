$(document).ready(function() {

    function Todo(description, isCompleted, id) {
        this.isCompleted = isCompleted;
        this.description = description;
        this.id = id;
    }


    // Our HTML Elements
    var text = document.getElementById('todo');
    var go = document.getElementById('go');
    var placeholder = document.getElementById('placeholder');

    // Our Empty Array that will hold all of our todos
    var todos = [];


    // Updates our html with what is currently in our Todo Array
    function updateTodos() {
        $(".items").html("");
        todos.forEach(function(task) {
            if (task.isCompleted === false) {
                $(".items").append(`
				<li>
				<article>
				    <button data-id="${task.id}" class='check'></button>
				    <p>${task.description}</p>
				    <input type='text' class='edit-todo' value='learn html'>
				    <button data-id="${task.id}" class='delete'>X</button>
				</article>
				</li>
  			`);
            } else {
                $(".items").append(`
				<li>
					<article class='completed'>
						<button data-id="${task.id}" class='check'></button>
						<p class='complete'>${task.description}l</p>
						<input type='text' class='edit-todo' value='learn css'>
						<button data-id="${task.id}" class='delete'>X</button>
					</article>
				</li>
			`);
            }
        })
    };


    $(".items").on("click", '.delete', function(event) {
        var index = null;

        var id = $(this).data('id');

        todos.forEach(function(todo, taco) {
            if (todo.id == id) {
                index = taco;
            }
        });
        todos.splice(index, 1);
        updateTodos();
    })

    $(".items").on("click", '.check', function(event) {
        var id = $(this).data('id');
        // alert(id);
        todos.forEach(function(todo, taco) {
            if (todo.id == id) {

                if (todo.isCompleted === false) {

                    todo.isCompleted = true;

                } else {

                    todo.isCompleted = false;

                }
            }
        });

        updateTodos();
        
    });



    $("form").on("submit", function(event) {
        event.preventDefault();
        var inputText = $(".new-todo").val();
        var id = Date.now();
        var newTodo = new Todo(inputText, false, id);
        todos.push(newTodo);
        updateTodos();
        $("input").val("");
    });

});
