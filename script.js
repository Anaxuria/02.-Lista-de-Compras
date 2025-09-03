const form = document.querySelector("form")
const list = document.querySelector("#list")
const input = document.querySelector("#input")
const btn = document.querySelector("#btn")

form.onsubmit = (event) => {
    event.preventDefault()

    adicionarItem(input.value)
}

function adicionarItem(itemName) {
    const li = document.createElement("li")
    li.classList.add("item")

    const div = document.createElement("div")
    div.classList.add("content")

    const checkbox = document.createElement("input")
    checkbox.type = "checkbox"
    checkbox.classList.add("checkbox")

    const span = document.createElement("span")
    span.textContent = (itemName)

    div.append(checkbox, span)

    const btn = document.createElement("button")
    btn.classList.add("delete")

    const img = document.createElement("img")
    img.src = "./assets/trash.svg"
    img.alt = "Excluir"

    btn.append(img)


    li.appendChild(div)
    li.appendChild(btn)

    list.appendChild(li)

    input.value = ""
}