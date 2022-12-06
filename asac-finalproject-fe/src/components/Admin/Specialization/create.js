import { Button, Input, Form, notification } from "antd";
import React, { useState } from "react";
import { Link } from "react-router-dom";
import { PlusOutlined } from "@ant-design/icons";
import { CKEditor } from "@ckeditor/ckeditor5-react";
import ClassicEditor from "@ckeditor/ckeditor5-build-classic";

import { useMutation, useQueryClient } from "@tanstack/react-query";
import { createASpecialization } from "../../Services/Specialization/specializationService";

export function CreateSpecializationInfo() {
  const [description, setDescription] = useState("**Enter...**");

  const queryClient = useQueryClient();

  const mutation = useMutation({
    mutationFn: createASpecialization,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["specializations"] });
    },
  });

  const onCreate = (values) => {
    const data = { ...values, descriptionHTML: description };
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
        <h1 className="specialization-info-heading">Create a specialization</h1>

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
                  required: true,
                  message: "Please input specialization's name!",
                },
              ]}
            >
              <Input />
            </Form.Item>

            <Form.Item label="Description" name="descriptionHTML">
              <div data-color-mode="light">
                <CKEditor
                  editor={ClassicEditor}
                  data=""
                  onChange={(event, editor) => {
                    const data = editor.getData();
                    setDescription(data);
                  }}
                />
              </div>
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

function CreateASpecialization() {
  return (
    <>
      <Link to={`/admin/specialization`}>
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

export default CreateASpecialization;
