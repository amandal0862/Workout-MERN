import React from 'react';

const Login = () => {
    const Submit = (e) => {
        e.preventDefault();
    }

    return (
        <div className="container shadow w-50 p-5 mt-5">
            <div className="text-center">
                <h2>Login</h2>
            </div>
            <form>
                <div className="mb-3">
                    <label for="exampleInputEmail1" class="form-label">Email address</label>
                    <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
                </div>
                <div className="mb-5">
                    <label for="exampleInputPassword1" class="form-label">Password</label>
                    <input type="password" class="form-control" id="exampleInputPassword1" />
                </div>
                <div className="text-center m-2">
                    <button type="submit" className="btn btn-primary" onClick={Submit} >Submit</button>
                </div>
            </form>

        </div>
    );
};
export default Login;