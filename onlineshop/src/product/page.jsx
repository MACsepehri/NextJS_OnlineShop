import { Link } from "react-router-dom"
import { data } from "../../public/assets/data/data"
import Product from "../../public/assets/render/Product"

export default function AllProducts() {
    return (
        <div className="all-products">
            <div className="category-box">
                <h2>Phones</h2>
                { 
                <Product productData={data.mobile} to_slices={20} />
                }
            </div>
            <div className="category-box">
                <h2>PC and LapTop</h2>
                { 
                <Product productData={data.computer} to_slices={20} />
                }
            </div>
            <div className="category-box">
                <h2>Gaming Object</h2>
                { 
                <Product productData={data.gaming} to_slices={20} />
                }
            </div>
            <div className="category-box">
                <h2>Headphone and Airpods</h2>
                { 
                <Product productData={data.headphone} to_slices={20} />
                }
            </div>
            <div className="category-box">
                <h2>Hand Watch</h2>
                { 
                <Product productData={data.watch} to_slices={20} />
                }
            </div>
        </div>
    )
}