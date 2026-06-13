const inp = document.querySelector('input');
const addButton = document.querySelector(".add")
const todoBox = document.querySelector(".todo-list");

addButton.addEventListener('click', () => {
    const value = inp.value;
    console.log(value);
    
   

    todoBox.innerHTML += `<li>
                <ul>
                    <span>${value}</span>
                    <div>
                        <button class="edit">edit</button>
                        <button class="delete">Delete</button>
                    </div>
                </ul>
            </li>`

        inp.value="";
})