 const Book=(props) => {
  const {img, title, author, children, getBook, id, number} = props;
  return <article className='book'>
      <img src={img} alt={title}/>
      {children}
      <h2>{title}</h2>
      <h4>{author}</h4>
      <span className="number">#{number+1}</span>

      <button onClick={()=>getBook(id)}>Get Book</button>
    </article>;
  
};
export default Book;