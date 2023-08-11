import React, {useState} from 'react';

export default function Todos() {

    const [inputDegeri, setInputDegeri] = useState("");
    const [toDo, setToDo] = useState([]);

    const inputuDegistir = evt => {
        // When the input changes, its whole value can be found inside the event object.
        // Log out the synthetic event object 'evt' and see for yourself.
        const { value } = evt.target;
        setInputDegeri(value);
    };

    const ekleTodo = () => {
        if (inputDegeri.trim() !== '') {
          const yeniTodo = {
            id: Date.now(),
            text: inputDegeri,
            completed: false,
          };
        setToDo([...toDo, yeniTodo]);
        setInputDegeri("");
        }
    };

    const toggleTodo = () => {
        const guncelToDo = toDo.map((todo) =>
      todo.id === id ? { ...todo, completed: !todo.completed } : todo
    );

    setToDo(guncelToDo);
    };

    const silTodo = (id) => {
        const guncelToDo = toDo.filter((todo) => todo.id !== id);
    
        setToDo(guncelToDo);
    };

    return (
        <div className='todos container'>
          <h2>To-Do List</h2>
          <div>
            <input
              type="text"
              value={inputDegeri}
              onChange={inputuDegistir}
              placeholder="Yeni To-Do Ekle"
            />
            <button onClick={ekleTodo}>Ekle</button>
          </div>
          <ul>
            {toDo.map((todo) => (
              <li key={todo.id}>
                <input
                  type="checkbox"
                  checked={todo.completed}
                  onChange={() => toggleTodo(todo.id)}
                />
                <span style={{ textDecoration: todo.completed ? 'line-through' : 'none' }}>
                  {todo.text}
                </span>
                <button onClick={() => silTodo(todo.id)}>Sil</button>
              </li>
            ))}
          </ul>
        </div>
    );
};