import { Button, Input, Form, Modal, Select, notification } from "antd";
import React, { useState } from "react";
import { EditOutlined } from "@ant-design/icons";
import {
  editUser,
  fetchAllDoctors,
  fetchDoctorById,
} from "../../Services/Doctor/doctorService";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { genderData } from "../../DATA/general/generalData";
import Loading from "../../General/Loading";

const EditDoctorInfoForm = ({ visible, onEdit, onCancel, data }) => {
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
        form.validateFields().then((values) => {
          onEdit(values);
        });
      }}
    >
      <Form
        initialValues={data}
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
          <Select value={data.gender === 0 ? "Male" : "Female"}>
            {genderData &&
              genderData.map((item, index) => (
                <Select.Option key={index} value={item.value}>
                  {item.name}
                </Select.Option>
              ))}
          </Select>
        </Form.Item>
        {/* <Form.Item
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
        </Form.Item> */}
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
        {/* <Form.Item name="descriptions" label="Descriptions">
          <Input />
        </Form.Item> */}
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

  const transformData = (data) => {
    // console.log("value", {
    //   ...data,
    //   gender: data.gender === 1 ? "Female" : "Male",
    // });
    // console.log("data", data);
    return { ...data, gender: data.gender === 1 ? "Female" : "Male" };
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
