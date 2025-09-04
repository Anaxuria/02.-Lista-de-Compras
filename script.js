const form = document.querySelector("form")
const li = document.querySelector("li")
const list = document.querySelector("#list")
const input = document.querySelector("#input")
const btn = document.querySelector("#btn")

form.onsubmit = (event) => {
    event.preventDefault()

    adicionarItem(input.value)
}

list.onclick = (event) => {
    if (event.target.closest(".delete")) {
        const delLi = event.target.closest("li")
        delLi.remove()

        const errorMensage = document.querySelector(".error-mensage")
        errorMensage.classList.remove("none")

        setTimeout(() => {
            errorMensage.classList.add("none");
        }, 2000)
    }
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