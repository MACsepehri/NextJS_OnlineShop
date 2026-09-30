import { data } from "../data/data";

function render_cats(render_categories) {
    if (render_categories) {
        console.log(true);
        return (
            <div className="all-products">
                <div className="category-box">
                    <h2>گوشی همراه</h2>
                    <div className="products">
                        {}
                    </div>
                </div>
            </div>
        )
    }
}

export default function Render({render_categories}) {
    return (
        <div>
            {render_cats(render_categories)}
        </div>
    )
}