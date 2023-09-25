 const style = {margin: '2px', padding:'2px', backgroundColor:'lightblue'}
 const style2 = {color:'red'}
export default function Pizza(values){
    console.log(values)
    const onSubmit = () =>{
        console.log("subbmitted")
    }

    const onChange = evt =>{
        console.log(evt)
    }
    return(
        <div >
            <h3>Build Your Own Pizza</h3>
            <form onSubmit={onSubmit} id="order-pizza">
            <div style={style}>
                <h3 style={style}>Choice of size</h3>
                <h4 style={style2}>required</h4>
                </div>
                <select id="size-dropdown"
                    onChange={onChange}
                    value={values}
                    name='choiceOfSize'
                    >
                        <option value=''> --- Select an option</option>
                        <option value='small'>Small</option>
                        <option value='medium'>Medium</option>
                        <option value='large'>Large</option>
                </select>

            </form>
        </div>
    )
}
//Form has name text input with #name-input
