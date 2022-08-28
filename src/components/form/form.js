import './form.css'
import FormScript from './form-script'
const Form = () =>{
    return(
        <div className="block">
            <div className="wrapper">
                <form className =' form-list' action="#" method="post">
                    <span className="add-text">Write your list</span>
                    <br />
                    <input className = 'list-input' type="text" />
                    <br />
                    <span className="time-text">When be removed this list</span>
                    <br />
                    <button onClick = {FormScript} className = 'save-form' type = 'button'>Save</button>
                </form>
            </div>
        </div>
    )
}

export default Form