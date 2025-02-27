import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
class Login extends Component {
    isLogin = false;
    render() {
        return (
            <div>
                { 
                    !this.isLogin && <Redirect to="/"/>
                }
                로그인 되었습니다.
            </div>
        );
    }
}
export default Login;