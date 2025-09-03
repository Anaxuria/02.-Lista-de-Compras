const form = document.querySelector("form")
const li = document.querySelector("li")
const list = document.querySelector("#list")
const input = document.querySelector("#input")
const btn = document.querySelector("#btn")
const del =document.querySelector(".delete")

form.onsubmit = (event) => {
    event.preventDefault()

    adicionarItem(input.value)
}

del.onclick = () => {
    list.removeChild(li)
    console.log("oi")
}

function adicionarItem(itemName) {
    const newLi = document.createElement("li")
    newLi.classList.add("item")

    const div = document.createElement("div")
    div.classList.add("content")

    const checkbox = document.createElement("input")
    checkbox.type = "checkbox"
    checkbox.classList.add("checkbox")

    const span = document.createElement("span")
    span.textContent = (itemName)

    div.append(checkbox, span)

    const newBtn = document.createElement("button")
    newBtn.classList.add("delete")

    const img = document.createElement("img")
    img.src = "./assets/trash.svg"
    img.alt = "Excluir"

    newBtn.append(img)


    newLi.appendChild(div)
    newLi.appendChild(newBtn)

    list.appendChild(newLi)

    input.value = ""
}