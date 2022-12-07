import React from "react";
import { Button, Form, notification, Select, DatePicker } from "antd";
import { Link } from "react-router-dom";
import { PlusOutlined } from "@ant-design/icons";

import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { fetchAllDoctors } from "../../Services/Doctor/doctorService";
import { timeData } from "../../DATA/general/generalData";
import { createASchedule } from "../../Services/Schedule/scheduleService";

export function CreateScheduleInfo() {
  const {
    data: doctors,
    isLoading,
    isFetching,
  } = useQuery({
    queryKey: ["doctors"],
    queryFn: () => fetchAllDoctors(),
  });

  const queryClient = useQueryClient();

  const mutation = useMutation({
    mutationFn: createASchedule,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["specializations"] });
    },
  });

  const onCreate = (values) => {
    const formatValues = {
      doctorId: values.doctorId,
      date: values.date.format("YYYY-MM-DD"),
      time: JSON.stringify(
        values.time.map((time) => ({ time: time, status: 0 }))
      ),
    };

    mutation.mutate(formatValues, {
      onSuccess: () => {
        notification["success"]({
          message: `Success`,
          description: `Create successfully!`,
        });
      },
      onError: (error) => {
        notification["error"]({
          message: `Create failed!`,
          description: error.message,
        });
      },
    });
  };

  return (
    <>
      <div className="info-container">
        <h1 className="specialization-info-heading">Create a schedule</h1>

        <div className="specialization-info-content">
          <Form
            labelCol={{ sm: 6, md: 4, lg: 4, xl: 3, xxl: 2 }}
            wrapperCol={{ sm: 18, md: 20, lg: 20, xl: 21, xxl: 22 }}
            className="info-content-form"
            onFinish={onCreate}
          >
            <Form.Item
              label="Doctor"
              name="doctorId"
              rules={[
                {
                  required: true,
                  message: "Please select a doctor!",
                },
              ]}
            >
              <Select>
                {doctors &&
                  doctors.map((item) => (
                    <Select.Option key={item.id} value={item.id}>
                      {item.name}
                    </Select.Option>
                  ))}
              </Select>
            </Form.Item>

            <Form.Item
              label="Date"
              name="date"
              rules={[
                {
                  required: true,
                  message: "Please select date!",
                },
              ]}
            >
              <DatePicker />
            </Form.Item>

            <Form.Item
              label="Time"
              name="time"
              rules={[
                {
                  required: true,
                  message: "Please select times!",
                },
              ]}
            >
              <Select
                mode="multiple"
                placeholder="Please select time!"
                style={{ width: "100%" }}
              >
                {timeData &&
                  timeData.map((item) => (
                    <Select.Option value={item.time}>{item.time}</Select.Option>
                  ))}
              </Select>
            </Form.Item>

            <Form.Item>
              <Button type="primary" htmlType="submit">
                Submit
              </Button>
            </Form.Item>
          </Form>
        </div>
      </div>
    </>
  );
}

function CreateASchedule() {
  return (
    <>
      <Link to={`/admin/schedule`}>
        <Button
          className="button-create"
          type="primary"
          icon={<PlusOutlined />}
          bordered
        >
          Create
        </Button>
      </Link>
    </>
  );
}

export default CreateASchedule;
