import { Button, Form, Modal, notification } from "antd";
import React, { useState } from "react";
import { CommentOutlined } from "@ant-design/icons";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";

import { fetchPatientById } from "../Services/Supporter/patientService";
import Loading from "../General/Loading";
import TextArea from "antd/lib/input/TextArea";
import { createPatientFeedback } from "../Services/Doctor/doctorService";

const FeedbackPatientForm = ({ visible, onEdit, onCancel }) => {
  const [form] = Form.useForm();

  return (
    <Modal
      bodyStyle={{ height: "30vh" }}
      open={visible}
      title="Feedback"
      okText="Save"
      cancelText="Cancel"
      onCancel={onCancel}
      onOk={() => {
        form.validateFields().then((values) => {
          onEdit(values);
        });
      }}
    >
      <Form
        initialValues={""}
        form={form}
        layout="vertical"
        name="form_in_modal"
      >
        <Form.Item
          name="content"
          label="Content"
          rules={[
            {
              whitespace: true,
              required: true,
              message: "Please enter your feedback!",
            },
          ]}
        >
          <TextArea />
        </Form.Item>
      </Form>
    </Modal>
  );
};

function FeedbackPatient({ patientId }) {
  const [openModal, setOpenModal] = useState(false);

  const { data, isLoading, isFetching } = useQuery({
    queryKey: ["patient", patientId],
    queryFn: () => fetchPatientById(patientId),
  });

  const queryClient = useQueryClient();

  const mutation = useMutation({
    mutationFn: (data) => createPatientFeedback(data),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["patients"] });
    },
  });

  const onEdit = (values) => {
    const dataEdit = {
      ...values,
      doctorId: data.doctorId,
      patientId: patientId,
    };
    mutation.mutate(dataEdit, {
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
      {isLoading || isFetching ? (
        <Loading />
      ) : (
        <>
          <Button
            className="button-edit"
            type="link"
            icon={<CommentOutlined />}
            onClick={() => {
              setOpenModal(true);
            }}
          >
            Feedback
          </Button>
          <FeedbackPatientForm
            visible={openModal}
            onEdit={onEdit}
            onCancel={() => {
              setOpenModal(false);
            }}
          />
        </>
      )}
    </>
  );
}

export default FeedbackPatient;
