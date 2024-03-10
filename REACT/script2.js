// /**Method 3**/
// let globalId = 0
// function markasDone(todoid) {
//     const parent = document.getElementById(todoid)
//     parent.children[2].innerHTML = "done!"
// }
// function createChilds(title, description, id) {
//     const parent = document.createElement("div")
//     const child1 = document.createElement("div")
//     const child2 = document.createElement("div")
//     const button = document.createElement("button")
//     child1.innerHTML = title;
//     child2.innerHTML = description;
//     button.textContent = "mark as done"
//     parent.appendChild(child1)
//     parent.appendChild(child2)
//     parent.appendChild(button)
//     button.setAttribute("onclick", `markasDone(${id})`)
//     parent.setAttribute("id", id)
//     return parent
// }


// function addtodo() {
//     const title = document.getElementById("title").value;
//     const description = document.getElementById("description").value;
//     const parent = document.getElementById("container")
//     parent.appendChild(createChilds(title, description, globalId++))

//     /****Method 2*****/

    // const outerDiv = document.getElementById("container")
    // const child1 = document.createElement("div")
    // const child2 = document.createElement("div")
    // const button2 = document.createElement("button")
    // child1.innerHTML = title
    // child2.innerHTML = description
    // button2.textContent = "mark as done"
    // outerDiv.appendChild(child1)
    // outerDiv.appendChild(child2)
    // outerDiv.appendChild(button2)
    // button2.addEventListener('click', function () {
    //     button2.textContent = 'done'
    // })

// }
// function UpdateDomAccToState(state) {
//     const parent = document.getElementById("container")
//     parent.innerHTML = ''
//     for (let i = 0; i < state.length; i++) {
//         const child = createChilds(state[i].title, state[i].description, state[i].id)
//         parent.appendChild(child)

//     }
// }
// window.setInterval(async function () {
//     const res = await fetch("https://sum-server.100xdevs.com/todos")
//     const json = await res.json()
//     UpdateDomAccToState(json.todo)
// }, 2000)
// console.log(title, description);
// /****method 1****/
// // const child2 = document.createElement("div")
// // const button = document.createElement("button")
// // document.getElementById("container")
// //     .innerHTML += `
// //   <div>${title}</div>
// //   <div>${description}</div>
// //    <button> mark as done </button>
// //  
let globalId = 0;

function markasDone(todoid) {
    const parent = document.getElementById(todoid);
    parent.children[2].innerHTML = "done!";
}

function createChilds(title, description, id) {
    const parent = document.createElement("div");
    const child1 = document.createElement("div");
    const child2 = document.createElement("div");
    const button = document.createElement("button");
    child1.innerHTML = title;
    child2.innerHTML = description;
    button.textContent = "mark as done";
    parent.appendChild(child1);
    parent.appendChild(child2);
    parent.appendChild(button);
    button.setAttribute("onclick", `markasDone(${id})`);
    parent.setAttribute("id", id);
    return parent;
}

function addtodo() {
    const title = document.getElementById("title").value;
    const description = document.getElementById("description").value;
    const parent = document.getElementById("container");
    parent.appendChild(createChilds(title, description, globalId++));
    console.log(title, description);
}

function UpdateDomAccToState(state) {
    const parent = document.getElementById("container");
    parent.innerHTML = '';
    for (let i = 0; i < state.length; i++) {
        const child = createChilds(state[i].title, state[i].description, state[i].id);
        parent.appendChild(child);
    }
}

window.setInterval(async function () {
    const res = await fetch("https://sum-server.100xdevs.com/todos");
    const json = await res.json();
    UpdateDomAccToState(json.todos);

}, 2000)

