import { data } from "../data/data";

function render_cats(render_categories) {
    if (render_categories) {
        return (
            <div className="all-products">
                <div className="category-box">
                    <h2>Phones</h2>

                    <div className="products">
                        {data.mobile.slice(0, 5).map((value, index) => {
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
                                </div>
                            );
                        })}
                    </div>
                </div>
                <br/>
                <div className="category-box">
                    <h2>PC | LapTop</h2>

                    <div className="products">
                        {data.computer.slice(0, 5).map((value, index) => {
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
                                </div>
                            );
                        })}
                    </div>
                </div>
                <br/>
                <div className="category-box">
                    <h2>Gaming Object</h2>

                    <div className="products">
                        {data.gaming.slice(0, 5).map((value, index) => {
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
                                </div>
                            );
                        })}
                    </div>
                </div>
                <br/>
                <div className="category-box">
                    <h2>Headphone and Airpods</h2>

                    <div className="products">
                        {data.headphone.slice(0, 5).map((value, index) => {
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
                                </div>
                            );
                        })}
                    </div>
                </div>
                <br/>
                <div className="category-box">
                    <h2>Hand Watch</h2>

                    <div className="products">
                        {data.watch.slice(0, 5).map((value, index) => {
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
                                </div>
                            );
                        })}
                    </div>
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