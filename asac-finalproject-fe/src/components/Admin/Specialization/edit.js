import React, { useState } from "react";
import { Button, Form, Input, notification } from "antd";
import { Link, useParams } from "react-router-dom";
import { EditOutlined } from "@ant-design/icons";
import "../user.css";
import Loading from "../../General/Loading";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import {
  editASpecialization,
  fetchSpecializationById,
} from "../../Services/Specialization/specializationService";
import {CKEditor} from "@ckeditor/ckeditor5-react";
import ClassicEditor from "@ckeditor/ckeditor5-build-classic";

export function EditSpecializationInfo() {
  const { id } = useParams();
  const { data, isLoading, isFetching } = useQuery({
    queryKey: ["specialization", id],
    queryFn: () => fetchSpecializationById(id),
  });

  const [description, setDescription] = useState("");

  const queryClient = useQueryClient();

  const mutation = useMutation({
    mutationFn: (data) => editASpecialization(id, data),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["specializations"] });
    },
  });

  const onEdit = (values) => {
    let editData = {...values,descriptionHTML: description };
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
          <h1 className="specialization-info-heading">Edit specialization</h1>
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
                    message: "Please input specialization's name!",
                  },
                ]}
              >
                <Input />
              </Form.Item>

              <Form.Item
                  label="Description"
                  name="descriptionHTML"
              >
                <div data-color-mode="light">
                  <CKEditor
                      editor={ ClassicEditor }
                      data={data.descriptionHTML}
                      onChange={ ( event, editor ) => {
                        const data = editor.getData();
                        setDescription(data);
                      } }
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

function EditSpecialization({ specializationId }) {
  return (
    <>
      <Link to={`/admin/specialization/${specializationId}`}>
        <Button className="button-edit" type="link" icon={<EditOutlined />}>
          Edit
        </Button>
      </Link>
    </>
  );
}

export default EditSpecialization;
