const addItem = document.getElementById("addItem")
const itemInput = document.getElementById("itemInput")
const itemList = document.getElementById("itemList")

function Adicionar(){
    const item = itemInput.value.trim()

    const novoItem = document.createElement('li')
    novoItem.textContent = item

    if(item === ''){
        alert('Insira os dados')
        return;
    }


    
    const removeButton = document.createElement('button')
    removeButton.textContent = '🗑'
    removeButton.className = 'remove'
    removeButton.onclick = function(){
        itemList.removeChild(novoItem)
    }


    itemList.appendChild(novoItem)
    itemInput.value = ''

    novoItem.appendChild(removeButton)

    itemList.appendChild(novoItem)

    itemInput.value = ''


}


addItem.addEventListener('click', Adicionar)