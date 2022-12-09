import { Button, Input, Form, Modal, Select, notification } from "antd";
import React, { useState } from "react";
import { PlusOutlined } from "@ant-design/icons";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { createUser } from "../../Services/Doctor/doctorService";
import { genderData } from "../../DATA/general/generalData";
import { fetchAllSpecializations } from "../../Services/Specialization/specializationService";
import { fetchAllClinics } from "../../Services/Clinic/clinicService";
import Loading from "../../General/Loading";

import { CKEditor } from "@ckeditor/ckeditor5-react";
import ClassicEditor from "@ckeditor/ckeditor5-build-classic";

const CreateDoctorInfoForm = ({ visible, onCreate, onCancel }) => {
  const {
    data: specializations,
    isSpecializationsLoading,
    isSpecializationsFetching,
  } = useQuery({
    queryKey: ["specializations"],
    queryFn: () => fetchAllSpecializations(),
  });

  const {
    data: clinics,
    isClinicsLoading,
    isClinicsFetching,
  } = useQuery({
    queryKey: ["clinics"],
    queryFn: () => fetchAllClinics(),
  });

  const [form] = Form.useForm();
  const [generalInfo, setGeneralInfo] = useState("Enter generalInfo...");
  return (
    <>
      {isSpecializationsLoading ||
      isClinicsLoading ||
      isSpecializationsFetching ||
      isClinicsFetching ? (
        <Loading />
      ) : (
        <Modal
          bodyStyle={{ height: "50vh", overflowY: "scroll" }}
          open={visible}
          title="Create a new user"
          okText="Create"
          cancelText="Cancel"
          onCancel={onCancel}
          onOk={() => {
            form.validateFields().then((values) => {
              const data = { ...values, generalInfo: generalInfo };
              form.resetFields();
              onCreate(data);
            });
          }}
        >
          <Form
            initialValues={{}}
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
              <Input />
            </Form.Item>

            <Form.Item
              label="Password"
              name="password"
              rules={[
                {
                  required: true,
                  message: "Please input your password!",
                },
              ]}
            >
              <Input.Password />
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
              initialValue={0}
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
              name="roleId"
              label="Role"
              initialValue={3}
              rules={[
                {
                  required: true,
                  message: "Please choose your role!",
                },
              ]}
            >
              <Select>
                <Select.Option key={1} value={1} disabled>
                  Admin
                </Select.Option>
                <Select.Option key={2} value={2}>
                  Supporter
                </Select.Option>
                <Select.Option key={3} value={3}>
                  Doctor
                </Select.Option>
              </Select>
            </Form.Item>

            <Form.Item
              name="specializationId"
              label="Specialization"
              rules={[
                {
                  required: true,
                  message: "Please choose specialization!",
                },
              ]}
            >
              <Select>
                {specializations &&
                  specializations.map((item) => (
                    <Select.Option key={item.id} value={item.id}>
                      {item.name}
                    </Select.Option>
                  ))}
              </Select>
            </Form.Item>

            <Form.Item
              name="clinicId"
              label="Clinic"
              rules={[
                {
                  required: true,
                  message: "Please choose clinic!",
                },
              ]}
            >
              <Select>
                {clinics &&
                  clinics.map((item) => (
                    <Select.Option key={item.id} value={item.id}>
                      {item.name}
                    </Select.Option>
                  ))}
              </Select>
            </Form.Item>

            <Form.Item
              label="Avatar"
              name="avatar"
              rules={[
                {
                  required: true,
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
                data="Enter..."
                onChange={(event, editor) => {
                  const data = editor.getData();
                  setGeneralInfo(data);
                }}
              />
            </Form.Item>
          </Form>
        </Modal>
      )}
    </>
  );
};

function CreateADoctor() {
  const [openModal, setOpenModal] = useState(false);

  const queryClient = useQueryClient();

  const mutation = useMutation({
    mutationFn: createUser,
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: ["doctors"],
      });
      queryClient.invalidateQueries({
        queryKey: ["supporters"],
      });
    },
  });

  const onCreate = (values) => {
    mutation.mutate(values, {
      onSuccess: () => {
        notification["success"]({
          message: `Success`,
          description: `Create successfully!`,
        });
        setOpenModal(false);
      },
      onError: (error) => {
        notification["error"]({
          message: `Create failed!`,
          description: error.message,
        });
        setOpenModal(false);
      },
    });
  };

  return (
    <>
      <Button
        className="button-create"
        type="primary"
        icon={<PlusOutlined />}
        bordered
        onClick={() => {
          setOpenModal(true);
        }}
      >
        Create
      </Button>
      <CreateDoctorInfoForm
        visible={openModal}
        onCreate={onCreate}
        onCancel={() => {
          setOpenModal(false);
        }}
      />
    </>
  );
}

export default CreateADoctor;
