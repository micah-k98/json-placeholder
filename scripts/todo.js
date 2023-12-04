"use strict"

document.addEventListener("DOMContentLoaded", () => {
    const searchButton = document.getElementById("searchButton");
    searchButton.addEventListener("click", searchButtonClicked);
})

function searchButtonClicked() {
    let id = document.getElementById("toDoIdInput").value;
    let url = `https://jsonplaceholder.typicode.com/todos/${id}`;

    let toDoInfo = document.getElementById("toDoInfo");
    toDoInfo.innerText = "";

    fetch(url).then(response => response.json())
                .then(user => {
                    let h5Id = document.createElement("h5");
                    h5Id.innerText = "ID: " + user.id;
                    toDoInfo.appendChild(h5Id);

                    let h5Title = document.createElement("h5");
                    h5Title.innerText = "Title: ";
                        let spanTitle = document.createElement("span");
                        spanTitle.innerText = user.title;
                        spanTitle.classList.add("fw-light")
                        h5Title.appendChild(spanTitle);
                    toDoInfo.appendChild(h5Title);
                    
                    let h5Completed = document.createElement("h5");
                    h5Completed.innerText = "Completed: ";
                        let spanCompleted = document.createElement("span");
                        spanCompleted.innerText = user.completed;
                        spanCompleted.classList.add("fw-light")
                    h5Completed.appendChild(spanCompleted);
                toDoInfo.appendChild(h5Completed);
                    
                        
                    
                })
}