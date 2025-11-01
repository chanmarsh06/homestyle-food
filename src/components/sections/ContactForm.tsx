'use client';

import { useState } from 'react';
import { Form, Input, Button, Select, message, Card } from 'antd';
import { FiSend } from 'react-icons/fi';
import MotionWrapper from '@/components/MotionWrapper';

const { TextArea } = Input;
const { Option } = Select;

interface ContactFormData {
  name: string;
  email: string;
  phone: string;
  subject: string;
  message: string;
}

export default function ContactForm() {
  const [form] = Form.useForm();
  const [loading, setLoading] = useState(false);

  const onFinish = async (values: ContactFormData) => {
    setLoading(true);
    
    // Simulate form submission
    setTimeout(() => {
      message.success('Message sent successfully! We will get back to you soon.');
      form.resetFields();
      setLoading(false);
    }, 1000);
  };

  return (
    <MotionWrapper className="mt-12">
      <Card className="glass-card max-w-2xl mx-auto">
        <h3 className="text-2xl font-semibold text-orange-600 mb-6 text-center">Send us a Message</h3>
        
        <Form
          form={form}
          layout="vertical"
          onFinish={onFinish}
          className="space-y-4"
        >
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <Form.Item
              name="name"
              label="Full Name"
              rules={[{ required: true, message: 'Please enter your name' }]}
            >
              <Input placeholder="Your full name" size="large" />
            </Form.Item>

            <Form.Item
              name="phone"
              label="Phone Number"
              rules={[{ required: true, message: 'Please enter your phone number' }]}
            >
              <Input placeholder="+91 98765 43210" size="large" />
            </Form.Item>
          </div>

          <Form.Item
            name="email"
            label="Email Address"
            rules={[
              { required: true, message: 'Please enter your email' },
              { type: 'email', message: 'Please enter a valid email' }
            ]}
          >
            <Input placeholder="your.email@example.com" size="large" />
          </Form.Item>

          <Form.Item
            name="subject"
            label="Subject"
            rules={[{ required: true, message: 'Please select a subject' }]}
          >
            <Select placeholder="What can we help you with?" size="large">
              <Option value="order">Order Inquiry</Option>
              <Option value="catering">Catering Services</Option>
              <Option value="feedback">Feedback</Option>
              <Option value="partnership">Partnership</Option>
              <Option value="other">Other</Option>
            </Select>
          </Form.Item>

          <Form.Item
            name="message"
            label="Message"
            rules={[{ required: true, message: 'Please enter your message' }]}
          >
            <TextArea 
              rows={4} 
              placeholder="Tell us more about your inquiry..."
              size="large"
            />
          </Form.Item>

          <Form.Item>
            <Button
              type="primary"
              htmlType="submit"
              loading={loading}
              icon={<FiSend />}
              size="large"
              className="w-full"
            >
              Send Message
            </Button>
          </Form.Item>
        </Form>
      </Card>
    </MotionWrapper>
  );
}