import './list.css'
import AddList from '../add-list/add-list'
const ShowList = () =>{
    return(
        <div className="container">
            <div className="wrapper">
                <ul className="carts">
                    <li >buy one bread and some butter </li>
                    <input type="checkbox" />
                    <li >buy one bread and some butter </li>
                    <input type="checkbox" />
                    <li >buy one bread and some butter </li>
                    <input type="checkbox" />
                    <li >buy one bread and some butter </li>
                    <input type="checkbox" />
                    <li >buy one bread and some butter </li>
                    <input type="checkbox" />

                </ul>
                <button type = 'button' onClick ={AddList} className="new-list">Add new List</button>
            </div>
        </div>
    )
}


export default ShowList