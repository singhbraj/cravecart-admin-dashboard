import { Card, Col, Form, Input, Row, Select } from "antd";

type UsersFilterProps = {
  children?: React.ReactNode;
};

const UsersFilter = ({ children }: UsersFilterProps) => {
  return (
    <Card style={{ marginTop: "20px" }}>
      <Row align="middle" gutter={20}>
        <Col span={16}>
          <Row gutter={20} align="middle">
            <Col span={8}>
              <Form.Item name="q" style={{ marginBottom: 0 }}>
                <Input.Search allowClear placeholder="Search" />
              </Form.Item>
            </Col>
            <Col span={8}>
              <Form.Item name="role" style={{ marginBottom: 0 }}>
                <Select
                  style={{ width: "100%" }}
                  allowClear
                  placeholder="Select role"
                >
                  <Select.Option value="admin">Admin</Select.Option>
                  <Select.Option value="manager">Manager</Select.Option>
                  <Select.Option value="customer">Customer</Select.Option>
                </Select>
              </Form.Item>
            </Col>
            {/* Uncomment and adjust if needed
            <Col span={8}>
              <Select
                style={{ width: '100%' }}
                placeholder="Status"
                allowClear
                onChange={(selectedItem) => onFilterChange('statusFilter', selectedItem)}
              >
                <Select.Option value="ban">Ban</Select.Option>
                <Select.Option value="active">Active</Select.Option>
              </Select>
            </Col>
            */}
          </Row>
        </Col>

        <Col
          span={8}
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "flex-end", // Changed to flex-end to align children to the end
          }}
        >
          {children}
        </Col>
      </Row>
    </Card>
  );
};

export default UsersFilter;
