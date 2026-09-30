import { Routes, Route } from 'react-router-dom';
import Render from "../public/assets/render/Render.jsx";
import CategoryPage from './category/[category_name]/page.jsx'; 
import '../public/assets/css/style.css';

export default function App() {
    return (
        <Routes>
            <Route 
                path="/" 
                element={
                    <div className="main">
                        <Render render_categories={true} />
                    </div>
                } 
            />

            <Route path="/category/:category" element={<div className='main'><CategoryPage /></div>} />
        </Routes>
    );
}