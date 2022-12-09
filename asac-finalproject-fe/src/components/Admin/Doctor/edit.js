import { Button, Input, Form, Modal, Select, notification } from "antd";
import React, { useState } from "react";
import { EditOutlined } from "@ant-design/icons";
import { editUser, fetchDoctorById } from "../../Services/Doctor/doctorService";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { genderData } from "../../DATA/general/generalData";
import Loading from "../../General/Loading";

import { CKEditor } from "@ckeditor/ckeditor5-react";
import ClassicEditor from "@ckeditor/ckeditor5-build-classic";

const EditDoctorInfoForm = ({ visible, onEdit, onCancel, data }) => {
  const [form] = Form.useForm();
  const [generalInfo, setGeneralInfo] = useState(data?.generalInfo);

  return (
    <Modal
      bodyStyle={{ height: "50vh", overflowY: "scroll" }}
      open={visible}
      title="Edit user information"
      okText="Edit"
      cancelText="Cancel"
      onCancel={onCancel}
      onOk={() => {
        form.validateFields().then((values) => {
          const data = { ...values, generalInfo: generalInfo };
          onEdit(data);
        });
      }}
    >
      <Form
        initialValues={{
          email: data.email,
          name: data.name,
          phone: data.phone,
          gender: data.gender === 1 ? "Female" : "Male",
          address: data.address,
          avatar: data.avatar,
        }}
        form={form}
        layout="vertical"
        name="form_in_modal"
      >
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
          <Input disabled />
        </Form.Item>

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
            {genderData &&
              genderData.map((item, index) => (
                <Select.Option key={index} value={item.value}>
                  {item.name}
                </Select.Option>
              ))}
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

        <Form.Item label="General Information" name="generalInfo">
          <CKEditor
            editor={ClassicEditor}
            data={data?.generalInfo}
            onChange={(event, editor) => {
              const data = editor.getData();
              setGeneralInfo(data);
            }}
          />
        </Form.Item>
      </Form>
    </Modal>
  );
};

function EditDoctorInfo({ doctorId }) {
  const [openModal, setOpenModal] = useState(false);

  const { data, isLoading, isFetching } = useQuery({
    queryKey: ["doctor", doctorId],
    queryFn: () => fetchDoctorById(doctorId),
  });

  const queryClient = useQueryClient();

  const mutation = useMutation({
    mutationFn: (data) => editUser(doctorId, data),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["doctors"] });
    },
  });

  const onEdit = (values) => {
    let editData = { doctorId, ...values };
    mutation.mutate(editData, {
      onSuccess: () => {
        notification["success"]({
          message: `Success`,
          description: `Edit successfully!`,
        });
        setOpenModal(false);
      },
      onError: (error) => {
        notification["error"]({
          message: `Edit failed!`,
          description: error.message,
        });
        setOpenModal(false);
      },
    });
  };

  return (
    <>
      {isLoading || isFetching ? (
        <Loading />
      ) : (
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
            onEdit={onEdit}
            data={data}
            onCancel={() => {
              setOpenModal(false);
            }}
          />
        </>
      )}
    </>
  );
}

export default EditDoctorInfo;
