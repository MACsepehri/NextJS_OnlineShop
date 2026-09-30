import { Link } from "react-router-dom";

export default function Product({productData}) {
    return (
        <div className="products">
            {productData.slice(0, 5).map((value, index) => {
                return (
                    <div className="product-box" key={index}>
                        <div><br />
                            <img className="product-image"
                                src={value.image}
                                alt={value.name}
                            />
                        </div>

                        <h3>{value.name}</h3>
                        <pre>{value.desc}</pre>
                        <div className="pb-flex-bottom">
                            <p>{value.price}$</p><p>ID: {value.id}</p>
                        </div>
                        <Link style={{color:'#0088ff'}} to={"/product/"+value.id}>View</Link><br />
                    </div>
                );
            })}
        </div>
    )
}