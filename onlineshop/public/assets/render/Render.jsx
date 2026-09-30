import { data } from "../data/data";
import Product from "./Product";

function render_cats(render_categories) {
    if (render_categories) {
        return (
            <div className="all-products">
                <div className="category-box">
                    <h2>Phones</h2>

                    <Product productData={data.mobile} />
                </div>
                <br/>
                <div className="category-box">
                    <h2>PC | LapTop</h2>

                    <Product productData={data.computer} />
                </div>
                <br/>
                <div className="category-box">
                    <h2>Gaming Object</h2>

                    <Product productData={data.gaming} />
                </div>
                <br/>
                <div className="category-box">
                    <h2>Headphone and Airpods</h2>

                    <Product productData={data.headphone} />
                </div>
                <br/>
                <div className="category-box">
                    <h2>Hand Watch</h2>

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