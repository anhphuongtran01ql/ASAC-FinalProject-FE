import React, { useState } from "react";
import "./login.css";
import ParticleBackground from "../../components/particles";
import { Button, Form, Input } from "antd";
import { UserOutlined, LockOutlined } from "@ant-design/icons";
import backgroundLogin from "../../../src/assets/images/backgroundLogin.png";

function Login() {
  return (
    <>
      <ParticleBackground />
      <div className="login-page">
        <div className="login-box">
          <div className="illustration-wrapper">
            <img src={backgroundLogin} alt="Login" />
          </div>
          <Form className="login-form">
            <p className="form-title">Welcome back</p>
            <p className="p-form">Login to the HomePage</p>
            <Form.Item
              name="username"
              rules={[
                {
                  required: true,
                  whitespace: true,
                  message: "Please input your username!",
                },
              ]}
            >
              <Input prefix={<UserOutlined />} placeholder="Username" />
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
