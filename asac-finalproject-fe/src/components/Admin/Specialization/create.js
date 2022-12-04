import { Button, Input, Form, notification } from "antd";
import React, { useState } from "react";
import { Link } from "react-router-dom";
import { PlusOutlined } from "@ant-design/icons";
import MDEditor from "@uiw/react-md-editor";

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
    mutation.mutate(values, {
      onSuccess: () => {
        notification["success"]({
          message: `Success`,
          description: `Create successfully!`,
        });
        console.log(" success", values);
      },
      onError: (error) => {
        notification["error"]({
          message: `Create failed!`,
          description: error.message,
        });
        console.log("error", error);
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

            <Form.Item
              label="Description"
              name="descriptionMarkdown"
              rules={[
                { required: true, message: "Please input your description!" },
              ]}
            >
              <div data-color-mode="light">
                <MDEditor
                  height={300}
                  value={description}
                  onChange={setDescription}
                />
                <MDEditor.Markdown
                  source={description}
                  style={{ whiteSpace: "pre-wrap" }}
                />
              </div>
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
