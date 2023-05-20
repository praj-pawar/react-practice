 const Book=(props) => {
  const {img, title, author, children, getBook, id} = props;
  return <article className='book'>
      <img src={img} alt={title}/>
      {children}
      <h2>{title}</h2>
      <h4>{author}</h4>
      <button onClick={()=>getBook(id)}>Get Book</button>
    </article>;
  
};
export default Book;