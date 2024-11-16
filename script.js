// Form Validation and Submission
document.getElementById("contactForm").addEventListener("submit", function(event) {
    event.preventDefault(); // Prevent form submission for validation

    // Get the values
    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const phone = document.getElementById("phone").value;
    const checkin = document.getElementById("checkin").value;
    const checkout = document.getElementById("checkout").value;

    // Simple validation
    if (name && email && phone && checkin && checkout) {
        // Show confirmation message
        document.getElementById("formMessage").style.display = "block";
    } else {
        alert("Please fill in all required fields.");
    }
});

// Function to add a new image to the gallery
function addImage() {
    const gallery = document.querySelector(".gallery");

    // Create a new image element
    const newImage = document.createElement("img");
    newImage.src = "https://images.picxy.com/cache/2021/2/6/049530c11f1a96f9c4f1c198c5954a9b.webp"; // Replace with new image URL
    newImage.alt = "New Room";
    newImage.classList.add("gallery-item");

    // Create a remove button for the image
    const removeButton = document.createElement("button");
    removeButton.innerHTML = "Remove";
    removeButton.classList.add("remove-btn");

    // Add event listener to remove the image when clicked
    removeButton.addEventListener("click", function() {
        gallery.removeChild(newImage);
        gallery.removeChild(removeButton); // Remove the button as well
    });

    // Append the new image and remove button to the gallery
    gallery.appendChild(newImage);
    gallery.appendChild(removeButton);
}
// Function to add a new task to the list
function addTask() {
    const taskInput = document.getElementById('todoInput');
    const taskText = taskInput.value.trim();
    
    // If the input is empty, alert the user
    if (!taskText) {
        alert("Please enter a task.");
        return;
    }

    // Create a new list item (li) for the task
    const taskList = document.getElementById('taskList');
    const newTask = document.createElement('li');
    
    newTask.innerHTML = `${taskText} <button class="delete-btn" onclick="deleteTask(this)">Delete</button>`;
    
    // Append the new task to the task list
    taskList.appendChild(newTask);
    
    // Clear the input field after adding the task
    taskInput.value = '';
}

// Function to delete a task
function deleteTask(button) {
    // Find the task (li) and remove it from the list
    const taskItem = button.parentElement;
    taskItem.remove();
}

