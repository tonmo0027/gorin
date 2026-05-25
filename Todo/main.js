"use strict"
const $inputTask = document.querySelector("#task")
const $btn = document.querySelector("#btn")
const $delBtnAll = document.querySelector(".delBtnAll")
const $list = document.querySelector("#list")
let id_task = 0

$btn.addEventListener("click", () => {
    id_task += 1
    let task =  $inputTask.value
    const tag_li = document.createElement("li")
    const tag_input = document.createElement("input")
    const tag_label = document.createElement("label")
    const tag_btnDiv = document.createElement("div")
    const tag_delBtn = document.createElement("button")
    const tag_dummyBtn = document.createElement("button")
    const tag_p = document.createElement("p")
    tag_input.type = "checkbox"
    tag_input.classList.add("id" + id_task)
    tag_delBtn.textContent = "×"
    tag_btnDiv.className = "btnWraper"
    tag_delBtn.className = "delBtn"
    tag_dummyBtn.className = "dummyBtn"
    tag_p.textContent = task
    tag_li.classList.add("id" + id_task, "task")

    tag_label.appendChild(tag_input)
    tag_label.appendChild(tag_p)
    tag_li.appendChild(tag_label)
    tag_btnDiv.appendChild(tag_dummyBtn)
    tag_btnDiv.appendChild(tag_delBtn)
    tag_li.appendChild(tag_btnDiv)
    $list.appendChild(tag_li)

    $inputTask.value = ""

    tag_delBtn.addEventListener("click", () => {
        $list.removeChild(tag_li)
    })

    tag_input.addEventListener("click", () => {
        console.log(tag_delBtn.style.display)
        if (tag_delBtn.style.display == "none" || tag_delBtn.style.display == "") {
            tag_dummyBtn.style.display = "none"
            tag_delBtn.style.display = "block"
        } else {
            tag_dummyBtn.style.display = "block"
            tag_delBtn.style.display = "none"
        }
    })

})
console.log($delBtnAll)
    $delBtnAll.addEventListener("click", () => {
        const tasks_inputs = document.querySelectorAll("input[type='checkbox']")
        const tasks_lis = document.querySelectorAll(".task")
        let checkedTasks = []
        tasks_inputs.forEach(tasks_input => {
            if(tasks_input.checked == true) {
                checkedTasks.push(tasks_input.className)
            }

        });
        tasks_lis.forEach(tasks_li => {
            if (checkedTasks.includes(tasks_li.classList[0])) {
                $list.removeChild(tasks_li)
            }
        })

    })

