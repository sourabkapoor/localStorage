  import React from "react"
  import ProductCard from "../components/productCard/productCard"

  const Home = () => {  
    var [list, setList] = React.useState(null)

    React.useEffect(() => {
      setList(JSON.parse(localStorage.getItem("data")))
    }, [])
    
    return (
      <div className="Bodylayout">
      {list !== null && list.map((items, index) => {
        return <ProductCard name={items.name} desc={items.desc} price={items.price} pic={items.pic} key={index + "products"} />
      })}
      </div>
    );
  }

  export default Home;