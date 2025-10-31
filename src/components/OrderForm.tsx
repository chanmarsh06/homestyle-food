"use client";

import { useState } from "react";
import { Button, Form, Input, Select, message } from "antd";
import { dishes } from "@/data/dishes";

const phoneNumber = "919876543210";

type OrderFormFields = {
  customerName: string;
  phone: string;
  address: string;
  dish: string;
  quantity: number;
};

export default function OrderForm() {
  const [loading, setLoading] = useState(false);

  const onFinish = (values: OrderFormFields) => {
    setLoading(true);
    const selectedDish = dishes.find((dish) => dish.id === values.dish);
    const msg = encodeURIComponent(
      `Hi, I want to order ${selectedDish?.name ?? "a dish"} (${values.quantity}). Delivery address: ${values.address}.`
    );
    window.open(`https://wa.me/${phoneNumber}?text=${msg}`, "_blank");
    message.success("Redirecting to WhatsApp...");
    setLoading(false);
  };

  return (
    <Form layout="vertical" onFinish={onFinish} className="glass-card p-8">
      <Form.Item
        label="Name"
        name="customerName"
        rules={[{ required: true, message: "Please enter your name" }]}
      >
        <Input size="large" placeholder="Your full name" />
      </Form.Item>
      <Form.Item
        label="Phone"
        name="phone"
        rules={[{ required: true, message: "Please enter your phone number" }]}
      >
        <Input size="large" placeholder="Your phone number" />
      </Form.Item>
      <Form.Item
        label="Address"
        name="address"
        rules={[{ required: true, message: "Please enter your delivery address" }]}
      >
        <Input.TextArea rows={4} placeholder="Apartment, Street, Area" />
      </Form.Item>
      <Form.Item
        label="Dish"
        name="dish"
        rules={[{ required: true, message: "Please select a dish" }]}
      >
        <Select
          size="large"
          placeholder="Choose a dish"
          options={dishes.map((dish) => ({
            label: dish.name,
            value: dish.id,
          }))}
        />
      </Form.Item>
      <Form.Item
        label="Quantity"
        name="quantity"
        initialValue={1}
        rules={[{ required: true, message: "Please select quantity" }]}
      >
        <Select
          size="large"
          options={Array.from({ length: 10 }, (_, index) => ({
            label: `${index + 1} serving${index + 1 > 1 ? "s" : ""}`,
            value: index + 1,
          }))}
        />
      </Form.Item>
      <Button type="primary" htmlType="submit" size="large" shape="round" block loading={loading}>
        Order via WhatsApp
      </Button>
    </Form>
  );
}
