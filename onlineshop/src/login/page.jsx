import '../../public/assets/css/auth.css'

export default function LoginPage() {
    return (
        <div style={{margin:'auto',textAlign:'center'}}>
            <h2>Auth</h2>
            <div className="login-box">
                <form action="/api/auth" method="post">
                    <input type="text" placeholder="Username" className="inputbox" required /><br /><br />
                    <input type="password" placeholder="Password" className="inputbox" required /><br /><br />
                    <button className='submit-btn'>Submit</button>
                </form>
            </div>
        </div>
    )
}