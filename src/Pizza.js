

 const style = {margin: '2px', padding:'2px', backgroundColor:'lightblue'}
 const style2 = {color:'red'}

 const initialValues = {
    choiceOfSize: '',
    choiceOfSauce:'',
    pepperoni: false,
    sausage: false,
    canadianBacon: false,
    onions:false,
    glutenFree: false,
    specialInstructions:''

  }
export default function Pizza(props){
    const{
        values,
        inputChange

    } = props

    const onSubmit = () =>{
        console.log("subbmitted")
    }

    const onChange = evt =>{
      const {name, value, checked, type} = evt.target
     const valueToUse = type === 'checkbox' ? checked : value
       inputChange(name,valueToUse)
    }
    return(
        <div >
            <h3>Build Your Own Pizza</h3>
            <form onSubmit={onSubmit} id="pizza-form">
                <input id="name-input"
                type='text'
                name='name'
                placeholder="Your Name"
                onChange={onChange}
                />
            <div style={style}>
                <h4 style={style}>Choice of size</h4>
                <h5 style={style2}>required</h5>
                </div>
                <select id="size-dropdown"
                    onChange={onChange}
                    value={values.choiceOfSize}
                    name='choiceOfSize'
                    >
                        <option value=''> --- Select an option</option>
                        <option value='small'>Small</option>
                        <option value='medium'>Medium</option>
                        <option value='large'>Large</option>
                </select>
                <div style={style}>
                    <h4>Choice of Sauce</h4>
                    <h5 style={style2}>Required</h5>

                </div>
                <div>
                <label>Original Red
           <input
           type='radio'
           name='choiceOfSauce'
           value='Original Red'
           checked={values.choiceOfSauce === 'Original Red'}
           onChange={onChange}
           />
        </label>

        </div>
        <div>
        <label>
        Garlic Ranch
        <input
        type='radio'
        name="choiceOfSauce"
        value='Garlic Ranch'
        checked={values.choiceOfSauce === 'Garlic Ranch'}
        onChange={onChange}
        />
         </label>
         </div>
         <div>
        <label>
        BBQ Sauce
        <input
        type='radio'
        name="choiceOfSauce"
        value='BBQ Sauce'
        checked={values.choiceOfSauce === 'BBQ Sauce'}
        onChange={onChange}
        />
         </label>
         </div>
         <div>
        <label>
        Spinach Alfredo
        <input
        type='radio'
        name="choiceOfSauce"
        value='Spinach Alfredo'
        checked={values.choiceOfSauce === 'Spinach Alfredo'}
        onChange={onChange}
        />
         </label>
         </div>
         <div style={style}>
                    <h4>Add Toppings</h4>
                    <p>Choose up to 10</p>

                </div>
            <div>
            <label>Pepperoni
           <input
           type='checkbox'
           name='pepperoni'
           checked={values.pepperoni}
           onChange={onChange}
           />
        </label>
            </div>
            <div>
            <label>sausage
           <input
           type='checkbox'
           name='sausage'
           checked={values.sausage}
           onChange={onChange}
           />
        </label>
            </div>
            <div>
            <label>Canadian Bacon
           <input
           type='checkbox'
           name='canadianBacon'
           checked={values.canadianBacon}
           onChange={onChange}
           />
        </label>
            </div>
            <div>
            <label>Onions
           <input
           type='checkbox'
           name='onions'
           checked={values.onions}
           onChange={onChange}
           />
        </label>
            </div>
            <div style={style}>
                    <h4>Choice of substitute</h4>
                    <p>Choose up to 1</p>

                </div>
                <div>
            <label>Glutten Free Crust(additional $1.00)
           <input
           type='checkbox'
           name='glutenFree'
           checked={values.glutenFree}
           onChange={onChange}
           />
        </label>
            </div>
            <div style={style}>
                    <h4>Special Instructions</h4>
                </div>
                <div>
                    <input id="special-text"
                     name='special-text'
                     type='text'
                     placeholder="Anything else you would like to add?"
                     value={values.specialInstructions}
                     onChange={onChange}

                    />
                </div>
            </form>
        </div>
    )
}
//Form has name text input with #name-input
