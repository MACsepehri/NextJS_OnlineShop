import Render from "../public/assets/render/Render.jsx";
import '../public/assets/css/style.css'

export default function Home() {
    return (
        <div className="main">
            <Render render_categories={true}  />
        </div>
    )
}