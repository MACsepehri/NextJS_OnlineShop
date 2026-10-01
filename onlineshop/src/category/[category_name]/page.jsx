import { useParams } from 'react-router-dom';
import { data } from '../../../public/assets/data/data';
import Product from '../../../public/assets/render/Product';

export default function CategoryPage() {
    const { category } = useParams();
    let category_data;

    if (category === 'phones') { category_data = data.mobile; }
    else if (category === 'pc-and-laptop') { category_data = data.computer; }
    else if (category === 'gaming-objects') { category_data = data.gaming; }
    else if (category === 'headphone-and-airpods') { category_data = data.headphone; }
    else if (category === 'hand-watch') { category_data = data.watch; }

    return (
        <div className="all-products">
            <div>
                <h2>Category: {category}</h2>
                <Product productData={category_data} to_slices={20} />
            </div>
        </div>
    );
}