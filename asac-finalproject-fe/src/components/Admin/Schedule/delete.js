import React from "react";
import { Button, Modal, notification } from "antd";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { deleteASchedule } from "../../Services/Schedule/scheduleService";

function DeleteASchedule({ scheduleId }) {
  const { confirm } = Modal;

  const queryClient = useQueryClient();
  const mutation = useMutation({
    mutationFn: deleteASchedule,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["schedules"] });
    },
  });

  function showConfirm() {
    confirm({
      title: "Do you want to delete this schedule?",
      async onOk() {
        mutation.mutate(scheduleId, {
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
      >
        delete
      </Button>
    </>
  );
}

export default DeleteASchedule;
