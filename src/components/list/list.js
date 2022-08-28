import './list.css'
import AddList from '../add-list/add-list'
const ShowList = () =>{
    return(
        <div className="container">
            <div className="wrapper">
                <ul className="carts">
                
                </ul>
                <button type = 'button' onClick ={AddList} className="new-list">Add new List</button>
            </div>
        </div>
    )
}


export default ShowList