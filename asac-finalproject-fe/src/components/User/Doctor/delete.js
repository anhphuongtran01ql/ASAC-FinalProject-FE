import React, { useState } from "react";
import { Button, Modal } from "antd";
import { DeleteOutlined } from "@ant-design/icons";

function DeleteADoctor() {
  const { confirm } = Modal;

  function showConfirm() {
    confirm({
      title: "Do you want to delete this user?",
      async onOk() {
        console.log("Delete success!");
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
