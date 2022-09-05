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
    const dump = document.createElement('img')
    dump.src = './dump.jpeg'
    carts.append(liList, liCheckbox , dump)

    fetch('http://localhost:3000/posts', {
       method: "POST",
       headers: {
         'Content-type': 'text/plain'
       },
       body: listInput
    })

 }

 export default FormScript