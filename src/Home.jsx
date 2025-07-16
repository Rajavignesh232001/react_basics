import { useState } from 'react';
import Cards from './Cards';
import Employee from './Employee';
import { useNavigate } from 'react-router-dom'
const Home = () => {
    const [count, setCount] = useState(0);
  const [color,setColor] = useState('');

  const [isVisible, setIsVisible] = useState(false);

  const [theme,setTheme] = useState(true);
  const changeTheme = () =>{
    setTheme(!theme);
  }
  const appStyle ={
    backgroundColor: theme? 'white':'black',
    color: theme ? 'black':'white'
  }
    const navigate = useNavigate();
  return (
    <div>
      <h1>Welcome to home page</h1>
      <button onClick={()=>navigate('/about')}>🗒️</button>
      <div className='web-page' style={appStyle}>
      <div className='title-bar'>
        <h1>Learning React</h1>
      </div>
      <div className='page-body'>
        <button onClick={changeTheme}>{theme?"Switch to Dark Theme":"switch to Light Theme"}</button>
        <h3>Counter App</h3>
        <p>{count}</p>
        <button onClick={()=>setCount(count+1)}>+</button>
        <button onClick={()=>setCount(count-1)}>-</button>
        <button onClick={()=>setCount(0)}>Clear</button>

        <h3>Colour change</h3>
        <div className='color-box' style={{backgroundColor:color}}></div>
        <input type='text' value={color} onChange={(e)=>setColor(e.target.value)} placeholder='Enter the colour'></input>

        <div>
          <button onClick={()=>setIsVisible(!isVisible)}>{isVisible?"Hide Element":"Show Element"}</button>
          {isVisible?<p>Hi Raja!</p>:null}
        </div>

      </div>
      <div>
        <h3>Props</h3>
        <Cards name="Raja"/>
        <Cards name="Vignesh"/>
      </div>
      <div>
        <Employee name="Rajavignesh" designation="Software Engineer"/>
        <Employee name="Sriganth" designation="Software Engineer"/>
        <Employee name="Goutham" designation="Software Engineer"/>
      </div>
      </div>
    </div>
  )
}

export default Home
