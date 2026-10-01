import { Link, useParams } from "react-router-dom";
import { data } from "../../../public/assets/data/data";
import '../../../public/assets/css/product-page.css'

function getProductById(id) {
    const all = [
        ...data.computer, ...data.gaming, ...data.headphone,
        ...data.mobile, ...data.watch
    ];
    for (let i = 0; i < all.length; i++) {
        if (all[i].id === id) return all[i];
    }
}

function TwentyPercentOffCalc(val) {
    return val * 0.8
}

export default function ProductPage() {
    const { product_id } = useParams();
    const value = getProductById(product_id);
    return (
        <div className="p-box">
            <div>
                <img
                    className="p-img" 
                    src={value.image}
                    alt={value.name}
                />
            </div>

            <div className="product-details">
                <h3>{value.name}</h3>
                <p className="product-desc">{value.desc}</p>
            </div>
            <div style={{display:'flex',gap:'20px',justifyContent:'center',textAlign:'center'}}>
                <span style={{display:'flex',gap:'20px',justifyContent:'center',textAlign:'center'}}>
                    <span className="without-off" title="price without off">{value.price} $</span>
                    <span className="real-price" title="20% off price">{TwentyPercentOffCalc(value.price)} $</span>
                    <span className="off-box" title="20% off">20% Off</span>
                </span>
            </div><br />
            <Link className="add-to-cart-link" to={'/add-to-cart/'+value.id}>Add to cart</Link>
        </div>
    )
}