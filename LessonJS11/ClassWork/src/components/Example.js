import {useState} from "react";

function Example({description}) {
  const [count, setCount] = useState(0);

  function remove() {
    setCount(count -1);
  }
  function add() {
    setCount(count + 1);
  }

  return (
      <div className={count > 10 ? 'text-red' : ''} >
        <h4>{description}</h4>
        <button onClick={remove}>-</button>
        <button onClick={add}>+</button>
        <div>{count}</div>
      </div>
  );
}

export default Example;