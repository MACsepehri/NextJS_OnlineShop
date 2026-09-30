import Link from "next/link";

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
                <h1>NextJS OnlineShop</h1>
            </div>
        </header>
    ) 
}