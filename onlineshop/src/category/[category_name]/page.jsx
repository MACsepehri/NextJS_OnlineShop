import { useParams } from 'react-router-dom';
import { data } from '../../../public/assets/data/data';
import Product from '../../../public/assets/render/Product';

export default function CategoryPage() {
    const { category } = useParams();
    let category_data;
    let id;

    if (category === 'phones') { id = 1; category_data = data.mobile; }
    else if (category === 'pc-and-laptop') { id = 2; category_data = data.computer; }
    else if (category === 'gaming-objects') { id = 3; category_data = data.gaming; }
    else if (category === 'headphone-and-airpods') { id = 4; category_data = data.headphone; }
    else if (category === 'hand-watch') { id = 5; category_data = data.watch; }

    return (
        <div className="all-products">
            <div>
                <h2>Category: {category}</h2>
                <Product productData={category_data} to_slices={20} />
            </div>
        </div>
    );
}