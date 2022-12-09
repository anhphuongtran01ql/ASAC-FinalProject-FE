import React, { useState } from "react";
import { Button, Form, Input, notification } from "antd";
import { Link, useParams } from "react-router-dom";
import { EditOutlined } from "@ant-design/icons";
import "../user.css";
import Loading from "../../General/Loading";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import TextArea from "antd/lib/input/TextArea";
import {
  editAClinic,
  fetchClinicById,
} from "../../Services/Clinic/clinicService";
import { CKEditor } from "@ckeditor/ckeditor5-react";
import ClassicEditor from "@ckeditor/ckeditor5-build-classic";

export function EditClinicInfo() {
  const { id } = useParams();

  const { data, isLoading, isFetching } = useQuery({
    queryKey: ["clinic", id],
    queryFn: () => fetchClinicById(id),
  });
  const [introduction, setIntroduction] = useState(data?.introductionHTML);
  const [equipment, setEquipment] = useState(data?.equipmentHTML);
  const [location, setLocation] = useState(data?.locationHTML);

  const queryClient = useQueryClient();

  const mutation = useMutation({
    mutationFn: (data) => editAClinic(id, data),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["clinics"] });
    },
  });

  const onEdit = (values) => {
    let editData = {
      ...values,
      introductionHTML: introduction,
      equipmentHTML: equipment,
      locationHTML: location,
    };
    mutation.mutate(editData, {
      onSuccess: () => {
        notification["success"]({
          message: `Success`,
          description: `Edit successfully!`,
        });
      },
      onError: (error) => {
        notification["error"]({
          message: `Edit failed!`,
          description: error.message,
        });
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

              <Form.Item label="Introduction" name="introductionHTML">
                <div data-color-mode="light">
                  <CKEditor
                    editor={ClassicEditor}
                    data={data.introductionHTML}
                    onChange={(event, editor) => {
                      const data = editor.getData();
                      setIntroduction(data);
                    }}
                  />
                </div>
              </Form.Item>

              <Form.Item label="Equipment" name="equipmentHTML">
                <CKEditor
                  editor={ClassicEditor}
                  data={data.equipmentHTML}
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
                  data={data.locationHTML}
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
