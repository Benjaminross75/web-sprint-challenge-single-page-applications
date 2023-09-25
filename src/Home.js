import {useNavigate} from 'react-router-dom'
const style = {margin: '1rem', padding:'1rem', border: '2px solid black'}
export default function Home(){
    const navigate = useNavigate()
    const handleClick = () =>{
        navigate('/pizza')
    }
        return(
        <div style={style}>
            <h2>Order Pizza </h2>
            <button onClick={handleClick} id='order-pizza'>Order a Pizza</button>
        </div>
    )
}
