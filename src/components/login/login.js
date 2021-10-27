
import '@coreui/coreui/dist/css/coreui.min.css'


const Login = () => {
    return (
        <div class="col-sm-6" > 
        <div class="card">
        <div class="card-body">
            <h3>Login</h3>
            <div>Sign into your account</div>
            <div className='div'></div>
            <select class="form-select" aria-label="Default select example" >
                <option selected>Select User</option>
                <option value="1">One</option>
                <option value="2">Two</option>
                <option value="3">Three</option>
            </select>
            <div className='div'></div>
            <button class="btn btn-secondary" type="button">Login</button>
        </div>
        </div>
        </div>
    );
}


export default Login;