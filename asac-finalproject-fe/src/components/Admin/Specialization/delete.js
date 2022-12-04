import React from "react";
import { Button, Modal, notification } from "antd";
import { DeleteOutlined } from "@ant-design/icons";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { deleteASpecialization } from "../../Services/Specialization/specializationService";

function DeleteASpecialization({ specializationId }) {
  const { confirm } = Modal;

  const queryClient = useQueryClient();
  const mutation = useMutation({
    mutationFn: deleteASpecialization,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["specializations"] });
    },
  });

  function showConfirm() {
    confirm({
      title: "Do you want to delete this specialization?",
      async onOk() {
        mutation.mutate(specializationId, {
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

export default DeleteASpecialization;
