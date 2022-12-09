import React, { useState } from "react";
import "./login.css";
import ParticleBackground from "../../components/particles";
import {Button, Form, Input, notification} from "antd";
import { UserOutlined, LockOutlined } from "@ant-design/icons";
import backgroundLogin from "../../../src/assets/images/backgroundLogin.png";
import {useMutation} from "@tanstack/react-query";
import {login} from "../Services/userService/userService";
import {useNavigate} from "react-router-dom";
import { changeloggedIn } from "../../Action/userActionTypes";

const mapStoreToProps = (state) => {
  return {
    user: state.user,
  };
};
const mapDispatchToProps = (dispatch) => {
  return {
    setLoggedIn: (isLoggedIn, user) => {
      dispatch(changeloggedIn(isLoggedIn, user));
    },
  };
};

function Login() {
  const navigate = useNavigate();
  const mutation = useMutation(login);
  const [isLogged,setIsLogged] = useState(false)

  const onCreate = (values) => {
    mutation.mutate(values, {
      onSuccess: (res) => {
        localStorage.setItem("userDetails", JSON.stringify(res.data));
        setIsLogged(true)
        if (res.data.roleId === 1) {
          navigate("/admin")
        }
        if(res.data.roleId === 2) {
          navigate("/supporter")
        }
        if(res.data.roleId === 3) {
          navigate("/doctor")
        }
        notification["success"]({
          message: `Success`,
          description: `Login successfully!`,
        });
      },
      onError: (error) => {
        notification["error"]({
          message: `Login failed!`,
          description: "Invalid email or password",
        });
      },
    });
  };
  return (
    <>
      <ParticleBackground />
      <div className="login-page">
        <div className="login-box">
          <div className="illustration-wrapper">
            <img src={backgroundLogin} alt="Login" />
          </div>
          <Form className="login-form" onFinish={onCreate}>
            <p className="form-title">Welcome back</p>
            <p className="p-form">Login to the HomePage</p>
            <Form.Item
              name="email"
              rules={[
                {
                  required: true,
                  whitespace: true,
                  message: "Please input your email!",
                },
              ]}
            >
              <Input prefix={<UserOutlined />} placeholder="Email" />
            </Form.Item>

            <Form.Item
              name="password"
              rules={[
                {
                  required: true,
                  whitespace: true,
                  message: "Please input your password!",
                },
              ]}
            >
              <Input.Password
                prefix={<LockOutlined />}
                placeholder="Password"
              />
            </Form.Item>

            <Form.Item>
              <Button
                type="primary"
                htmlType="submit"
                className="login-form-button"
              >
                LOGIN
              </Button>
            </Form.Item>
          </Form>
        </div>
      </div>
    </>
  );
}

export default Login;
