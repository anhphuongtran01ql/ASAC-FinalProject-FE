import { Button, Form, Modal, notification } from "antd";
import React, { useState } from "react";
import { CommentOutlined } from "@ant-design/icons";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";

import Loading from "../General/Loading";
import TextArea from "antd/lib/input/TextArea";
import {
  editComment,
  fetchCommentById,
} from "../Services/Doctor/doctorService";

const FeedbackPatientForm = ({ visible, onEdit, onCancel, comment }) => {
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
      <Form form={form} layout="vertical" name="form_in_modal">
        <Form.Item
          name="content"
          label="Content"
          initialValue={comment?.content}
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

function FeedbackPatient({ commentId }) {
  const [openModal, setOpenModal] = useState(false);

  const {
    data: comment,
    isLoading,
    isFetching,
  } = useQuery({
    queryKey: ["comment", commentId],
    queryFn: () => fetchCommentById(commentId),
  });

  const queryClient = useQueryClient();

  const mutation = useMutation({
    mutationFn: (data) => editComment(commentId, data),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["patients"] });
    },
  });

  const onEdit = (values) => {
    let editData = { commentId, ...values };
    mutation.mutate(editData, {
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
            comment={comment}
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
