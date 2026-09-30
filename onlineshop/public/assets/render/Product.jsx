import { Link } from "react-router-dom";

export default function Product({ productData, to_slices = 5 }) {
    return (
        <>
            <div className="products">
                {productData.slice(0, to_slices).map((value, index) => {
                    return (
                        <div className="product-box" key={index}>
                            
                            <div className="product-image-container">
                                <img 
                                    className="product-image"
                                    src={value.image}
                                    alt={value.name}
                                />
                            </div>

                            <div className="product-details">
                                <h3>{value.name}</h3>
                                <p className="product-desc">{value.desc}</p>
                            </div>

                            <div className="pb-flex-bottom">
                                <p className="product-price">{value.price}$</p>
                                <p className="product-id">id: {value.id}</p>
                            </div>

                            <div className="product-action">
                                <Link className="view-link" to={"/product/" + value.id}>
                                    View
                                </Link>
                            </div><br />
                            
                        </div>
                    );
                })}
            </div>
        </>
    );
}