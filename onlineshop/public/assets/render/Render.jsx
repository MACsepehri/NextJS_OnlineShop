import { Link } from "react-router-dom";
import { data } from "../data/data";
import Product from "./Product";

function render_cats(render_categories) {
    if (render_categories) {
        return (
            <div className="all-products">
                <div className="category-box">
                    <h2><Link to="/category/phones">Phones</Link></h2>
                    <p>for show all products in this category click on it</p>

                    <Product productData={data.mobile} />
                </div>
                <br/>
                <div className="category-box">
                    <h2><Link to="/category/pc-and-laptop">PC and LapTop</Link></h2>
                    <p>for show all products in this category click on it</p>

                    <Product productData={data.computer} />
                </div>
                <br/>
                <div className="category-box">
                    <h2><Link to="/category/gaming-objects">Gaming Object</Link></h2>
                    <p>for show all products in this category click on it</p>

                    <Product productData={data.gaming} />
                </div>
                <br/>
                <div className="category-box">
                    <h2><Link to="/category/headphone-and-airpods">Headphone and Airpods</Link></h2>
                    <p>for show all products in this category click on it</p>

                    <Product productData={data.headphone} />
                </div>
                <br/>
                <div className="category-box">
                    <h2><Link to="/category/hand-watch">Hand Watch</Link></h2>
                    <p>for show all products in this category click on it</p>

                    <Product productData={data.watch} />
                </div>
            </div>
        );
    }

    return null;
}

export default function Render({render_categories}) {
    return (
        <div>
            {render_cats(render_categories)}
        </div>
    )
}