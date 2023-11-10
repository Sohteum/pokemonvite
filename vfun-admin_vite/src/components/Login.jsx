import React, {useCallback, useState} from 'react';
import {Button, Form, Input} from "antd";
import {Link} from "react-router-dom";

const Login = () => {

    const [id, setId] = useState('');
    const [password, setPassword] = useState('')

    const onChangeId = useCallback((e) => {
        setId(e.target.value)
    }, [])

    const onChangePassword = useCallback((e) => {
        setPassword(e.target.value)
    }, [])

    return (
        <Form style={{
            display: 'flex',
            justifyContent:'center',
            alignItems:'center',
         height: '100vh',
        }}>
            <div>
                <div>
                    <label htmlFor="user-id">Email</label>
                    <br/>
                    <Input name="user-id" value={id} onChange={onChangeId} required/>
                </div>
                <div>
                    <label htmlFor="user-password">password</label>
                    <br/>
                    <Input
                        name="user-password"
                        type="password"
                        value={password}
                        onChange={onChangePassword}
                        required
                    />
                </div>
                <div>
                    <Button type="primary" htmlType="submit" loading={false}>로그인</Button>
                </div>
            </div>
        </Form>
    );
};

export default Login;

