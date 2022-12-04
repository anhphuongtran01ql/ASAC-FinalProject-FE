import React, { useState } from "react";
import { Button, Form, Input, notification } from "antd";
import { Link, useParams } from "react-router-dom";
import { EditOutlined } from "@ant-design/icons";
import "../user.css";
import Loading from "../../General/Loading";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import MDEditor from "@uiw/react-md-editor";
import TextArea from "antd/lib/input/TextArea";
import {
  editAClinic,
  fetchClinicById,
} from "../../Services/Clinic/clinicService";

export function EditClinicInfo() {
  const { id } = useParams();

  const { data, isLoading, isFetching } = useQuery({
    queryKey: ["clinic", id],
    queryFn: () => fetchClinicById(id),
  });
  const [introduction, setIntroduction] = useState(data?.introductionMarkdown);
  const queryClient = useQueryClient();

  const mutation = useMutation({
    mutationFn: (data) => editAClinic(id, data),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["clinics"] });
    },
  });

  const onEdit = (values) => {
    let editData = { id, ...values };
    mutation.mutate(editData, {
      onSuccess: () => {
        notification["success"]({
          message: `Success`,
          description: `Edit successfully!`,
        });
        console.log("success", values);
      },
      onError: (error) => {
        notification["error"]({
          message: `Edit failed!`,
          description: error.message,
        });
        console.log("error", error);
      },
    });
  };

  return (
    <>
      {isLoading || isFetching ? (
        <Loading />
      ) : (
        <div className="info-container">
          <h1 className="specialization-info-heading">Edit a clinic</h1>

          <div className="specialization-info-content">
            <Form
              labelCol={{ sm: 6, md: 4, lg: 4, xl: 3, xxl: 2 }}
              wrapperCol={{ sm: 18, md: 20, lg: 20, xl: 21, xxl: 22 }}
              className="info-content-form"
              initialValues={data}
              onFinish={onEdit}
            >
              <Form.Item
                label="Name"
                name="name"
                rules={[
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
                    required: true,
                    message: "Please input clinic's description!",
                  },
                ]}
              >
                <TextArea />
              </Form.Item>

              <Form.Item
                label="Introduction"
                name="introductionMarkdown"
                rules={[
                  {
                    required: true,
                    message: "Please input your introduction!",
                  },
                ]}
              >
                <div data-color-mode="light">
                  <MDEditor
                    height={300}
                    value={introduction}
                    onChange={setIntroduction}
                  />
                  <MDEditor.Markdown
                    source={introduction}
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
      )}
    </>
  );
}

function EditClinic({ clinicId }) {
  return (
    <>
      <Link to={`/admin/clinic/${clinicId}`}>
        <Button className="button-edit" type="link" icon={<EditOutlined />}>
          Edit
        </Button>
      </Link>
    </>
  );
}

export default EditClinic;
