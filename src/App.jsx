import "./App.css";
import products from "./data/products";
import ProductCard from "./components/ProductCard";

function App() {
  return (
    <div className="container">
      
      <div className="store-header">
        <h1 className="title"> pui88888888 Gadget & Sport Superstore</h1>
        <p className="subtitle">สินค้าคุณภาพเยี่ยม อัปเดตคลังสินค้าแบบเรียลไทม์</p>
      </div>

     
      <div className="product-list">
        {products.map((product) => (
          <ProductCard
            key={product.id}
            title={product.title}
            image={product.image}
            price={product.price}
            stock={product.stock}
            status={product.status}
            tag={product.tag}
          />
        ))}
      </div>
    </div>
  );
}

export default App;