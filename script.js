function todo(){
    //Aqui pegamos o valor digitado no input
    const value2 = document.getElementById('todo').value
    const lista = document.getElementById('todoList')
    
    /*Aqui colocamos o ID da div como o valor digitado
    no input, para remover através do ID*/
    const div = document.createElement('div')
    div.id = value2
    div.className = 'divList'
    
    const div2 = document.createElement('div')
    div2.className = 'divForCheck'
    
    const check = document.createElement('input')
    check.id = 'checkList'
    check.className = 'checkList'
    check.type = 'checkbox'
    
    const p = document.createElement('span')
    p.innerText = value2
    p.id = 'pDisplay'
    
    const newDiv = document.createElement('div')
    newDiv.className='newDiv'
    
    const deleteList = document.createElement('button')
    deleteList.id = 'spanImage'
    deleteList.innerHTML = "<img src='/image/icons8-excluir-30.png'>"
    
    //Aqui deixamos o campo vazio após enviar a tarefa
    document.getElementById('todo').value = ''

    if(value2 === ''){
        alert('Campo de tarefa vazio :(')
    }else{
        newDiv.appendChild(deleteList)
        div2.append(check, p)
        div.append(div2, newDiv)
        lista.append(div)
    }
    
    deleteList.addEventListener('click', function() {
        const label = document.getElementById('todo').value
        const divRemove = document.getElementById(value2)
    
        divRemove.remove()
    })
}