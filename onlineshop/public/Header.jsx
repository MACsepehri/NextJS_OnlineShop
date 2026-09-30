export default function Header() {
    return (
        <header>
            <div className="hleft">
                <div className="h-left">
                    <nav>
                        <a href={'/product'}>View all</a>
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