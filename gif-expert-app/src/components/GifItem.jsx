

export const GifItem = ({title,url}) => {
   
  return (
    // <li key={id}>{title}</li>
    <div className="card">
       
       <h3>{title}</h3> 
       <img src={url} alt={title} />
    </div>
  )
}
