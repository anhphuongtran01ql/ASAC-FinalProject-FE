import { Button, Input, Form, Modal, Select } from "antd";
import React, { useState } from "react";
import { EditOutlined } from "@ant-design/icons";

const EditDoctorInfoForm = ({ visible, onCancel }) => {
  const [form] = Form.useForm();
  return (
    <Modal
      bodyStyle={{ height: "50vh", overflowY: "scroll" }}
      visible={visible}
      title="Edit doctor information"
      okText="Edit"
      cancelText="Cancel"
      onCancel={onCancel}
      onOk={() => {
        form.validateFields().then(() => {
          console.log("Edit doctor information");
        });
      }}
    >
      <Form initialValues="" form={form} layout="vertical" name="form_in_modal">
        <Form.Item
          name="name"
          label="Name"
          rules={[
            {
              required: true,
              whitespace: true,
              message: "Please input name!",
            },
          ]}
        >
          <Input />
        </Form.Item>
        <Form.Item
          name="email"
          label="Email"
          rules={[
            {
              required: true,
              type: "email",
              message: "Invalid Email!",
            },
          ]}
        >
          <Input />
        </Form.Item>
        <Form.Item
          name="phone"
          label="Phone Number"
          rules={[
            {
              required: true,
              whitespace: true,
              message: "Please input phone number!",
            },
          ]}
        >
          <Input />
        </Form.Item>

        <Form.Item
          name="gender"
          label="Gender"
          rules={[
            {
              required: true,
              message: "Please choose gender!",
            },
          ]}
        >
          <Select>
            <Select.Option key="male" value="male">
              Male
            </Select.Option>
            <Select.Option key="female" value="female">
              Female
            </Select.Option>
          </Select>
        </Form.Item>
        <Form.Item
          name="specialization"
          label="Specialization"
          rules={[
            {
              required: true,
              message: "Please choose specialization!",
            },
          ]}
        >
          <Select>
            <Select.Option key="1" value="1">
              1
            </Select.Option>
            <Select.Option key="2" value="2">
              2
            </Select.Option>
          </Select>
        </Form.Item>
        <Form.Item
          name="address"
          label="Address"
          rules={[
            {
              required: true,
              whitespace: true,
              message: "Please input address!",
            },
          ]}
        >
          <Input />
        </Form.Item>
        <Form.Item name="descriptions" label="Descriptions">
          <Input />
        </Form.Item>
      </Form>
    </Modal>
  );
};

function EditDoctorInfo() {
  const [openModal, setOpenModal] = useState(false);
  return (
    <>
      <Button
        className="button-edit"
        type="link"
        icon={<EditOutlined />}
        onClick={() => {
          setOpenModal(true);
        }}
      >
        Edit
      </Button>
      <EditDoctorInfoForm
        visible={openModal}
        onCancel={() => {
          setOpenModal(false);
        }}
      />
    </>
  );
}

export default EditDoctorInfo;
