import { Button, Form, Modal, Select, notification } from "antd";
import React, { useState } from "react";
import { CheckSquareOutlined } from "@ant-design/icons";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";

import { fetchPatientById } from "../Services/Supporter/patientService";
import Loading from "../General/Loading";
import { updateStatusPatient } from "../Services/Supporter/supporterService";

const ChangeStatusForm = ({ visible, onEdit, onCancel, data }) => {
  const [form] = Form.useForm();

  return (
    <Modal
      bodyStyle={{ height: "20vh" }}
      open={visible}
      title="Change Status"
      okText="Change"
      cancelText="Cancel"
      onCancel={onCancel}
      onOk={() => {
        form.validateFields().then((values) => {
          console.log("OK", values);
          onEdit(values);
        });
      }}
    >
      <Form form={form} layout="vertical" name="form_in_modal">
        <Form.Item
          name="statusId"
          label="Status"
          rules={[
            {
              required: true,
              message: "Please choose status!",
            },
          ]}
        >
          <Select>
            <Select.Option key={2} value={2}>
              approved
            </Select.Option>
            <Select.Option key={3} value={3}>
              rejected
            </Select.Option>
          </Select>
        </Form.Item>
      </Form>
    </Modal>
  );
};

function ChangeStatusPatients({ patientId }) {
  let user = JSON.parse(localStorage.getItem("userDetails"));
  const [openModal, setOpenModal] = useState(false);

  const { data, isLoading, isFetching } = useQuery({
    queryKey: ["patient", patientId],
    queryFn: () => fetchPatientById(patientId),
  });

  const queryClient = useQueryClient();

  const mutation = useMutation({
    mutationFn: (data) => updateStatusPatient(data),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["patients"] });
    },
  });

  const onEdit = (values) => {
    const data = { ...values, userId: user.id, patientId: patientId };
    mutation.mutate(data, {
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
            icon={<CheckSquareOutlined />}
            onClick={() => {
              setOpenModal(true);
            }}
          >
            Change
          </Button>
          <ChangeStatusForm
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

export default ChangeStatusPatients;
