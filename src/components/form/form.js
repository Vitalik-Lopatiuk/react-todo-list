// import 'form.css'

const Form = () =>{
    return(
        <div className="container">
            <div className="wrapper">
                <form action="#" method="post">
                    <span className="add-text">Write your list</span>
                    <input className = 'list-text' type="text" />
                    <span className="time-text">When be removed this list</span>
                    <button className = 'save-form' type = 'button'>Save</button>
                </form>
            </div>
        </div>
    )
}

export default Form