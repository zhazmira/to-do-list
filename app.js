const inputBox = document.querySelector(".inputField input");
const addBtn = document.querySelector(".inputField button");
const todoList = document.querySelector(".todoList");
const deleteAllBtn = document.querySelector(".footer button");

inputBox.onkeyup = () => {
    let userData = inputBox.value;
    if (userData.trim() != 0) {
        addBtn.classList.add("active")
    } else {
        addBtn.classList.remove("active")
    }
}
showTasks();
// if user click on the add button

addBtn.onclick = () => {
        let userData = inputBox.value;
        let getLocalStorage = localStorage.getItem("New Todo");
        if (getLocalStorage == null) {
            listArr = [];
        } else {
            listArr = JSON.parse(getLocalStorage);
        }
        listArr.push(userData);
        localStorage.setItem("New Todo", JSON.stringify(listArr));
        showTasks();
    }
    // add task function

function showTasks() {
    let getLocalStorage = localStorage.getItem("New Todo");
    if (getLocalStorage == null) {
        listArr = [];
    } else {
        listArr = JSON.parse(getLocalStorage);
    }
    const pendingNumb = document.querySelector(".pendingNumb");
    pendingNumb.textContent = listArr.length;
    let newLiTag = '';
    listArr.forEach((element, index) => {
        newLiTag += `<li>${element}<span onclick ="deleteTask(${index})";><i class="fas fa-trash"></i></span></li>`;
    });
    todoList.innerHTML = newLiTag;
    inputBox.value = "";
}

// delete task function

function deleteTask(index) {
    let getLocalStorage = localStorage.getItem("New Todo");
    listArr = JSON.parse(getLocalStorage);
    listArr.splice(index, 1);
    // after removing
    localStorage.setItem("New Todo", JSON.stringify(listArr));
    showTasks();
}


// delete All btn
deleteAllBtn.onclick = () => {
    listArr = [];
    // after delete the li again update the local storage
    localStorage.setItem("New Todo", JSON.stringify(listArr));
    showTasks();
}