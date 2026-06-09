function ProductCard(props) {
  return (
    
    <div className="product-card">
      
      
      {props.tag && <span className="product-badge">{props.tag}</span>}

      <div className="product-image-box">
        <img src={props.image} alt={props.title} />
      </div>

      <div className="product-content">
        <h2>{props.title}</h2>
        <p className="product-price">ราคา {props.price} บาท</p>
        
        
        <p className="product-stock">📦 คงเหลือในคลัง: {props.stock} ชิ้น</p>
        
       
        <div className={`product-status-btn ${props.stock > 0 ? "available" : "out-of-stock"}`}>
          {props.status}
        </div>
      </div>
    </div>
  );
}

export default ProductCard;