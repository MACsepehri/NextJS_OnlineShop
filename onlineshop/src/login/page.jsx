import '../../public/assets/css/auth.css'

function handle_auth() {
    try {
        let username = document.getElementById('username').value;
        let password = document.getElementById('password').value;

        if (username.trim()===''||password.trim()==='') {
            alert('Please enter a valid value.');
            return 0;
        }
        localStorage.setItem('info',JSON.stringify({login:true,info:[username,password]}));
        alert('You have successfuly logged in!');
        window.location.href = '/panel';
    } catch(err) {
        alert(err);
    }
}

export default function LoginPage() {
    try {
        if (JSON.parse(localStorage.getItem('info')).login) {
            window.location.href = '/panel'
        }
    } catch {}

    return (
        <div style={{margin:'auto',textAlign:'center'}}>
            <h2>Auth</h2>
            <div className="login-box">
                <input type="text" placeholder="Username" className="inputbox" id='username' required /><br /><br />
                <input type="password" placeholder="Password" className="inputbox" id='password' required /><br /><br />
                <button className='submit-btn' onClick={handle_auth}>Submit</button>
            </div>
        </div>
    )
}