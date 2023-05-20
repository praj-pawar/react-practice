import React from 'react'
import  ReactDOM  from 'react-dom/client';
import './index.css';
import {books} from './books'
import  Book  from './Book';


const Booklist=()=>
{
  const getBook=(id)=>{
    console.log(books.find((book)=>book.id === id))
  }
    return <section className='booklist'>
      <Event/>
      {books.map((item)=>{
        //const {img, title, author, id}=item;
        return <Book {...item} getBook={getBook}/>
        // Can also use the spread operator to assign props. Ex - return < Book {...item} key={id}/>
        // Here, item is passed as an entire object to the Book component below
      })}
      
        </section>
};
const formsubmit=(e)=>{
        e.preventDefault();
        console.log("Form done");
}

const btnclick=(e)=>{
  console.log(e.target.value);
}
const Event=()=>{
  return <section>
    <h1>Details</h1>
    <form>
      <input type='text' 
      onChange={btnclick}
       name='example' placeholder='Name'>
      </input>
      <button onClick={formsubmit} type='submit'>Submit!</button>
    </form>
    <button onClick={()=>{alert('Button clicked')}}
    >Click me</button>
  </section>
}




const root=ReactDOM.createRoot(document.getElementById('root'));
root.render(<Booklist/>);

