import Header from '@/public/Header';
import './base.css'

export default function RootLayout({ children }) {
    return (
        <html lang="fa" dir="rtl">
            <body>
                <Header/>
                {children}
            </body>
        </html>
    );
}
