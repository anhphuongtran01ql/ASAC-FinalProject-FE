import { Button, Input, Form, notification } from "antd";
import React, { useState } from "react";
import { Link } from "react-router-dom";
import { PlusOutlined } from "@ant-design/icons";
import { CKEditor } from "@ckeditor/ckeditor5-react";
import ClassicEditor from "@ckeditor/ckeditor5-build-classic";

import { useMutation, useQueryClient } from "@tanstack/react-query";
import TextArea from "antd/lib/input/TextArea";
import { createAClinic } from "../../Services/Clinic/clinicService";

export function CreateClinicInfo() {
  const [introduction, setIntroduction] = useState("Enter introduction...");
  const [equipment, setEquipment] = useState("Enter equipment...");
  const [location, setLocation] = useState("Enter location...");
  const queryClient = useQueryClient();

  const mutation = useMutation({
    mutationFn: createAClinic,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["clinics"] });
    },
  });

  const onCreate = (values) => {
    const data = {
      ...values,
      introductionHTML: introduction,
      equipmentHTML: equipment,
      locationHTML: location,
    };
    mutation.mutate(data, {
      onSuccess: () => {
        notification["success"]({
          message: `Success`,
          description: `Create successfully!`,
        });
      },
      onError: (error) => {
        notification["error"]({
          message: `Create failed!`,
          description: error.message,
        });
      },
    });
  };
  return (
    <>
      <div className="info-container">
        <h1 className="specialization-info-heading">Create a clinic</h1>

        <div className="specialization-info-content">
          <Form
            labelCol={{ sm: 6, md: 4, lg: 4, xl: 3, xxl: 2 }}
            wrapperCol={{ sm: 18, md: 20, lg: 20, xl: 21, xxl: 22 }}
            className="info-content-form"
            onFinish={onCreate}
          >
            <Form.Item
              label="Name"
              name="name"
              rules={[
                {
                  whitespace: true,
                  message: "The field must be required.",
                },
                {
                  required: true,
                  message: "Please input clinic's name!",
                },
              ]}
            >
              <Input />
            </Form.Item>
            <Form.Item
              label="Phone"
              name="phone"
              rules={[
                {
                  whitespace: true,
                  message: "The field must be required.",
                },
                {
                  required: true,
                  message: "Please input clinic's phone number!",
                },
              ]}
            >
              <Input />
            </Form.Item>
            <Form.Item
              label="Address"
              name="address"
              rules={[
                {
                  whitespace: true,
                  message: "The field must be required.",
                },
                {
                  required: true,
                  message: "Please input clinic's address!",
                },
              ]}
            >
              <Input />
            </Form.Item>

            <Form.Item
              label="Description"
              name="description"
              rules={[
                {
                  whitespace: true,
                  message: "The field must be required.",
                },
                {
                  required: true,
                  message: "Please input clinic's description!",
                },
              ]}
            >
              <TextArea />
            </Form.Item>

            <Form.Item label="Introduction" name="introductionHTML">
              <CKEditor
                editor={ClassicEditor}
                data="Enter introduction..."
                onChange={(event, editor) => {
                  const data = editor.getData();
                  setIntroduction(data);
                }}
              />
            </Form.Item>

            <Form.Item label="Equipment" name="equipmentHTML">
              <CKEditor
                editor={ClassicEditor}
                data="Enter equipment..."
                onChange={(event, editor) => {
                  const data = editor.getData();
                  setEquipment(data);
                }}
              />
            </Form.Item>

            <Form.Item
              label="Equipment Image"
              name="equipmentImg"
              rules={[
                {
                  whitespace: true,
                  message: "The field must be required.",
                },
                {
                  type: "url",
                  message: "This field must be a valid url.",
                },
              ]}
            >
              <Input placeholder="Please input equipment image url..." />
            </Form.Item>

            <Form.Item label="Location" name="locationHTML">
              <CKEditor
                editor={ClassicEditor}
                data="Enter location..."
                onChange={(event, editor) => {
                  const data = editor.getData();
                  setLocation(data);
                }}
              />
            </Form.Item>

            <Form.Item
              label="Location Image"
              name="locationImg"
              rules={[
                {
                  whitespace: true,
                  message: "The field must be required.",
                },
                {
                  type: "url",
                  message: "This field must be a valid url.",
                },
              ]}
            >
              <Input placeholder="Please input location image url..." />
            </Form.Item>

            <Form.Item
              label="Image"
              name="image"
              rules={[
                {
                  whitespace: true,
                  message: "The field must be required.",
                },
                {
                  type: "url",
                  message: "This field must be a valid url.",
                },
              ]}
            >
              <Input placeholder="Please input image url..." />
            </Form.Item>

            <Form.Item
              label="Avatar"
              name="avatar"
              rules={[
                {
                  whitespace: true,
                  message: "The field must be required.",
                },
                {
                  type: "url",
                  message: "This field must be a valid url.",
                },
              ]}
            >
              <Input placeholder="Please input avatar url..." />
            </Form.Item>

            <Form.Item>
              <Button type="primary" htmlType="submit">
                Submit
              </Button>
            </Form.Item>
          </Form>
        </div>
      </div>
    </>
  );
}

function CreateAClinic() {
  return (
    <>
      <Link to={`/admin/clinic`}>
        <Button
          className="button-create"
          type="primary"
          icon={<PlusOutlined />}
          bordered
        >
          Create
        </Button>
      </Link>
    </>
  );
}

export default CreateAClinic;
