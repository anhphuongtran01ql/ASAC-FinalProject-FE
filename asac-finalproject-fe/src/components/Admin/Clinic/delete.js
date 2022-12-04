import React from "react";
import { Button, Modal, notification } from "antd";
import { DeleteOutlined } from "@ant-design/icons";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { deleteAClinic } from "../../Services/Clinic/clinicService";

function DeleteAClinic({ clinicId }) {
  const { confirm } = Modal;

  const queryClient = useQueryClient();
  const mutation = useMutation({
    mutationFn: deleteAClinic,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["clinics"] });
    },
  });

  function showConfirm() {
    confirm({
      title: "Do you want to delete this clinic?",
      async onOk() {
        mutation.mutate(clinicId, {
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

export default DeleteAClinic;
