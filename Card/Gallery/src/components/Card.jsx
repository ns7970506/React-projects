const Card = (props) => {
  return (
    <div>
         <a href={props.elem.url}>
        <div className='h-40 w-44 bg-white rounded-xl m-auto'>
        <img className='h-full w-45 object-cover rounded-2xl' src= {props.elem.download_url} alt="" />
      </div>
      <h2 className='font-bold'>{props.elem.author}</h2>
      </a>
    </div>
  )
}

export default Card