import React from 'react'
import  ReactDOM  from 'react-dom/client';
import './index.css';

const books=[
{
 author :'Piggyback' ,
 title:'The Legend of Zelda',
 img: 'https://images-na.ssl-images-amazon.com/images/I/91vwHMt+x7L._AC_UL600_SR600,400_.jpg',
 id:1
},

{
 author :'Glenn Boozan' ,
 title:'There Are Moms Way Worse Than You',
 img: 'https://images-na.ssl-images-amazon.com/images/I/81lJ9+mcvzL._AC_UL600_SR600,400_.jpg',
 id:2
},

{
 author :' James Clear' ,
 title:'Atomic Habits',
 img: 'https://images-na.ssl-images-amazon.com/images/I/81bGKUa1e0L._AC_UL600_SR600,400_.jpg',
 id:3
}

];




const Booklist=()=>
{
    return <section className='booklist'>
      <Event/>
      {books.map((item)=>{
        const {img, title, author, id}=item;
        return <Book title={title} img={img} author={author} key={id}/>
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
const Book=(props) => {
  const {img, title, author, children} = props
  return <article className='book'>
      <img src={img} alt={title}/>
      {children}
      <h2>{title}</h2>
      <h4>{author}</h4>
    </article>;
  
};



const root=ReactDOM.createRoot(document.getElementById('root'));
root.render(<Booklist/>);

