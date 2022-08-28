 const FormScript = () => {
    const listInput = document.querySelector('.list-input').value
    const block = document.querySelector('.block')
    const container = document.querySelector('.container')
    const carts = document.querySelector('.carts')
    const liList = document.createElement('li')
    const liCheckbox = document.createElement('input')

    container.style.display = 'flex'
    block.style.display = 'none'

    liList.innerHTML = listInput
    liCheckbox.type = 'checkbox'
    carts.append(liList, liCheckbox)





    //  fetch('http://localhost:3000/posts', {
    //     method: "POST",
    //     headers: {
    //        "Content-type": "application/json"
    //     },
    //     body: listInput
    //  })

 }

 export default FormScript