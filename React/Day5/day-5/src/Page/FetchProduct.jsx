
import { useEffect, useState } from 'react'

const FetchProducts = () => {

    const [items, setItems] = useState([])

    useEffect(() => {
        fetch('https://dummyjson.com/products')
            .then(res => res.json())
            .then(products => {
                setItems(products.products)
            })
            .catch(err => {
                console.log(err)
            })
    }, [])

    return (
        <div>
            <h1>Product Page</h1>

            {items.map((item) => (
                <div key={item.id}>
                    <h2>{item.title}</h2>
                    <p>Price: ${item.price}</p>
                    <img src={item.thumbnail} alt={item.title} width="100" />
                </div>
            ))}
        </div>
    )
}

export default FetchProducts
