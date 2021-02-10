import React, { Component } from 'react';
import appStyles from  '../../styles/notepad/app.module.css';
import ListItems from './noteComp/ListItems';


class App extends Component{

  constructor(props){
    super(props);
    this.state={
      items:[],
      currentItem:{
        text:'',
        key:''
      }
    }
    this.handleInput = this.handleInput.bind(this);
    this.addItem = this.addItem.bind(this);
    this.deleteItem = this.deleteItem.bind(this);
  }
  handleInput(e){
    this.setState({
      currentItem:{
        text: e.target.value,
        key:Date.now()
      }
    })
  }
  addItem(e){
    e.preventDefault();
    const newItem = this.state.currentItem;
    console.log(newItem);
    if(newItem.text!==""){
      const newItems=[...this.state.items, newItem];
      this.setState({
        items:newItems,
        currentItem:{
          text:'',
          key:''
        }
      })
    }
  }
  deleteItem(key){
    const filteredItems = this.state.items.filter(item =>
      item.key!==key);
      this.setState({
        items:filteredItems
      })
  }

  render(){
    return (
      <div>
        <header>
          <div className={appStyles.App}>
            <form id="todo-form" onSubmit={this.addItem} className="todo-form">
              <input className={appStyles.input} type="text" placeholder="Enter Text"
              value={this.state.currentItem.text}
              onChange={this.handleInput}/>
              <button className={appStyles.button} type="submit">Add</button>
            </form>
            <ListItems items = {this.state.items}
            deleteItem = {this.deleteItem}></ListItems>
          </div>
          
        </header>

      </div>
    );
  }
}

export default App;