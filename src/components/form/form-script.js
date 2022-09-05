 const FormScript = () => {
    const listInput = document.querySelector('.list-input').value
    const block = document.querySelector('.block')
    const container = document.querySelector('.container')
    const carts = document.querySelector('.carts')
    const liList = document.createElement('li')

    liList.classList.add('li__List')

    container.style.display = 'flex'
    block.style.display = 'none'


    liList.append(listInput)
    carts.append(liList)
 }
 export default FormScript