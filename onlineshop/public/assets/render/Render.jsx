import { data } from "../data/data";
import Product from "./Product";

function render_cats(render_categories) {
    if (render_categories) {
        return (
            <div className="all-products">
                <div className="category-box">
                    <h2><a href="/category/phones">Phones</a></h2>
                    <p>for show all products in this category click on it</p>

                    <Product productData={data.mobile} />
                </div>
                <br/>
                <div className="category-box">
                    <h2><a href="/category/pc-and-laptop">PC and LapTop</a></h2>
                    <p>for show all products in this category click on it</p>

                    <Product productData={data.computer} />
                </div>
                <br/>
                <div className="category-box">
                    <h2><a href="/category/gaming-objects">Gaming Object</a></h2>
                    <p>for show all products in this category click on it</p>

                    <Product productData={data.gaming} />
                </div>
                <br/>
                <div className="category-box">
                    <h2><a href="/category/headphone-and-airpods">Headphone and Airpods</a></h2>
                    <p>for show all products in this category click on it</p>

                    <Product productData={data.headphone} />
                </div>
                <br/>
                <div className="category-box">
                    <h2><a href="/category/hand-watch">Hand Watch</a></h2>
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