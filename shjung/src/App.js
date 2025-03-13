import Button from "react-bootstrap/Button";
import React, { useState } from 'react'; 

const user = {
  name: 'Hedy Lamarr',
  imageUrl: 'https://i.imgur.com/yXOvdOSs.jpg',
  imageSize: 90,
};

const products = [
  { title : 'Cabbage', isFruit : false, id : 1},
  { title : 'Garlic', isFruit : false, id : 2},
  { title : 'Apple', isFruit : true, id : 3}
];

export function ShoppingList() {
  const listItems = products.map(product =>
    <li
      key={product.id}
      style={{
        color : product.isFruit ? 'magenta' : 'darkgreen'
      }}
    >
      {product.title}
    </li>
  ); 
  
  return (
    <ul>{listItems}</ul>
  );  
}

export function MyButton() {
  const [count, setCount] = useState(0);
  const handleClick = () => {
    setCount(count + 1);
  };
  return (
    <div>
      <h1>Count: {count}</h1>
      <Button variant="contained" color="primary" onClick={handleClick}>
        Click Me
      </Button>
    </div>
  );
}

function Square({value}) {
  
  function handleClick() {
    console.log('clicked!!!');
  }

  return (
    <button 
      className="square"
      onClick={handleClick}
    >
    {value}
    </button>
  );
}



export default function Profile() {
  
  const [toDo, setToDo] = useState('');
  const [toDos, setToDos] = useState([]);
  const onChange = (e) => setToDo(e.target.value);
  const onSubmit = (e) => {

    e.preventDefault();    
    if (toDo === '') {
      return;
    }
    setToDos((toDos) => [toDo, ...toDos]);
    setToDo('');
    console.log(toDo);
  }

  return (
    <>
      <h1>{user.name}</h1>
      <img
        className="avatar"
        src={user.imageUrl}
        alt={'Photo of ' + user.name}
        style={{
          width: user.imageSize,
          height: user.imageSize
        }}
      />
      <ShoppingList />
      <MyButton />
      <MyButton />

      <div className="board-row">
        <Square value="1"/>
        <Square value="2"/>
        <Square value="3"/>
      </div>
      <div className="board-row">
        <Square value="4"/>
        <Square value="5"/>
        <Square value="6"/>
      </div>
      <div className="board-row">
        <Square value="7"/>
        <Square value="8"/>
        <Square value="9"/>
      </div>

      <div>
        <h1>My To Do ({toDos.length})</h1>
        <form onSubmit={onSubmit}>
          <input 
            type="text" 
            placeholder="Write your to do..."
            value={toDo}
            onChange={onChange}
          />
          <button>Add To Do</button>
        </form>        
      </div>
    </>
  );
}
