import React, { Component} from 'react';

import PageTemplate from './components/PageTemplate';
import TodoInput from './components/TodoInput';
import TodoList from './components/TodoList';


// const initialTodos = new Array(500).fill(0).map(
//   (foo,index) => ({id:index,text:`일정 ${index}`,done:false})
// )

class App extends Component {

  state={
    input:'',
    todos:[
      {id:0,text:'리액트 공부하기',done:true},
      {id:1,text:'컴포넌트 스타일링 해보기',done:false}
    ]
  }

  id=1
  getId = () =>{
    return ++this.id;
  }

  handleChange = (e) =>{
    const{value} = e.target;
    this.setState({
      input:value
    });
  }

  handleInsert = () =>{
    const {todos,input} = this.state;

    const newTodo = {
      text:input,
      done:false,
      id : this.getId()
    };
    this.setState({
      todos:[...todos,newTodo],
      input:''
    });

  }

  handelToggle = (id) =>{
    const {todos} = this.state;
    const index = todos.findIndex(todo => todo.id ===id);

    const toggled ={
      ...todos[index],
      done: !todos[index].done
    };
    this.setState({
      todos:[
        ...todos.slice(0,index),
        toggled,
        ...todos.slice(index+1,todos.length)
      ]
    });

  }
  handleRemove =(id) =>{
    const {todos} = this.state;
    const index = todos.findIndex(todo => todo.id ===id);

    this.setState({
      todos:[
        ...todos.slice(0,index),
        ...todos.slice(index+1,todos.length)
      ]
    });
  }

  handleOpenDetail = (id) =>{

  }

  render(){

    

    const{input,todos} = this.state;
    const{
      handleChange,
      handleInsert,
      handelToggle,
      handleRemove
    } = this;

    return(
      <PageTemplate>
        <TodoInput onChange={handleChange} onInsert={handleInsert} value={input}></TodoInput>
        <TodoList todos={todos} onToggle={handelToggle} onRemove={handleRemove}></TodoList>
      </PageTemplate>
    )
  }
}

export default App;
