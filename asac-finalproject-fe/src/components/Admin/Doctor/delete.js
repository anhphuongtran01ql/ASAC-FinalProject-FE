import React from "react";
import { Button, Modal, notification } from "antd";
import { DeleteOutlined } from "@ant-design/icons";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { deleteUser } from "../../Services/Doctor/doctorService";

function DeleteADoctor({ doctorId }) {
  const { confirm } = Modal;

  const queryClient = useQueryClient();
  const mutation = useMutation({
    mutationFn: deleteUser,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["doctors"] });
      queryClient.invalidateQueries({ queryKey: ["supporters"] });
    },
  });

  function showConfirm() {
    confirm({
      title: "Do you want to delete this user?",
      async onOk() {
        mutation.mutate(doctorId, {
          onSuccess: () => {
            notification["success"]({
              message: `Success`,
              description: `Delete successfully!`,
            });
          },
          onError: (error) => {
            notification["error"]({
              message: `Delete failed!`,
              description: error.message,
            });
          },
        });
      },
    });
  }

  return (
    <>
      <Button
        className="button-delete"
        onClick={showConfirm}
        type="text"
        danger
        icon={<DeleteOutlined />}
      >
        Delete
      </Button>
    </>
  );
}

export default DeleteADoctor;
