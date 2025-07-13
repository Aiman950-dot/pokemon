export default function Fetch({product}){

  return (
    <>
    <header>
      <h1>Product Store</h1>
    </header>
      <ul>
        {
          product.map((res)=>(
            <li  key={res.id}>
              <img src={res.image} alt='products'/>
              <p>rating: {res.rating.rate} - price: {res.price}</p>
            </li>
          ))
        }
      </ul>
    </>
  )

}