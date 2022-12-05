import React from "react";
import { Button, Form, notification, Select, DatePicker } from "antd";
import { Link, useParams } from "react-router-dom";
import "../user.css";
import Loading from "../../General/Loading";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";

import { timeData } from "../../DATA/general/generalData";
import { fetchAllDoctors } from "../../Services/Doctor/doctorService";
import {
  editASchedule,
  fetchScheduleById,
} from "../../Services/Schedule/scheduleService";
import moment from "moment";

const dateFormat = "YYYY/MM/DD";

export function EditScheduleInfo() {
  const { id } = useParams();
  const { data, isLoading, isFetching } = useQuery({
    queryKey: ["schedule", id],
    queryFn: () => fetchScheduleById(id),
  });

  const {
    data: doctors,
    isLoading: isDoctorsLoading,
    isFetching: isDoctorsFetching,
  } = useQuery({
    queryKey: ["doctors"],
    queryFn: () => fetchAllDoctors(),
  });

  const queryClient = useQueryClient();

  const mutation = useMutation({
    mutationFn: (data) => editASchedule(id, data),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["schedules"] });
    },
  });

  const onEdit = (values) => {
    const formatValues = {
      doctorId: values.doctorId,
      date: values.date.format("YYYY-MM-DD"),
      time: JSON.stringify(values.time),
    };
    mutation.mutate(formatValues, {
      onSuccess: () => {
        notification["success"]({
          message: `Success`,
          description: `Edit successfully!`,
        });
      },
      onError: (error) => {
        notification["error"]({
          message: `Edit failed!`,
          description: error.message,
        });
      },
    });
  };

  return (
    <>
      {isLoading || isDoctorsLoading || isFetching || isDoctorsFetching ? (
        <Loading />
      ) : (
        <div className="info-container">
          <h1 className="specialization-info-heading">Edit a schedule</h1>

          <div className="specialization-info-content">
            <Form
              labelCol={{ sm: 6, md: 4, lg: 4, xl: 3, xxl: 2 }}
              wrapperCol={{ sm: 18, md: 20, lg: 20, xl: 21, xxl: 22 }}
              className="info-content-form"
              onFinish={onEdit}
              initialValues={{
                doctorId: data.doctorId,
                date: moment(data.date),
                time: JSON.parse(data.time),
              }}
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
                <DatePicker format={dateFormat} />
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
                      <Select.Option value={item}>{item}</Select.Option>
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
      )}
    </>
  );
}

function EditSchedule({ scheduleId }) {
  return (
    <>
      <Link to={`/admin/schedule/${scheduleId}`}>
        <a>edit</a>
      </Link>
    </>
  );
}

export default EditSchedule;
