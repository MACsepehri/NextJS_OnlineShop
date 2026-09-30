import { Link } from "react-router-dom";

export default function Header() {
    return (
        <header>
            <div className="hleft">
                <div className="h-left">
                    <nav>
                        <Link href={'/product'}>View all</Link>
                        <button className="auth-btn">Auth</button>
                    </nav>
                </div>
            </div>
            <div>
                <h1>React OnlineShop</h1>
            </div>
        </header>
    ) 
}