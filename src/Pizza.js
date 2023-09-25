
export default function Pizza(){
    const onSubmit = () =>{
        console.log("subbmitted")
    }
    return(
        <div>
            <h1>Pizza Form</h1>
            <form onSubmit={onSubmit} id="order-pizza">
             <input id="name-input"
               name="name"
               type='text'
               placeholder="Your Name"
               
             />
            </form>
        </div>
    )
}
//Form has name text input with #name-input
