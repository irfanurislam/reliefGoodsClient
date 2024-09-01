import React from "react";
import { Table, Card, Row, Col } from "antd";

import type { ColumnsType } from "antd/es/table";
import { useGetReliefGoodsQuery } from "../../redux/api/reliefGoodsApi";

interface ReliefGood {
  _id: string;
  title: string;
  category: string;
  amount: number;
  description: string;
}

const Dashboard: React.FC = () => {
  const { data: reliefGoods, isLoading, isError } = useGetReliefGoodsQuery();

  const columns: ColumnsType<ReliefGood> = [
    {
      title: "Title",
      dataIndex: "title",
      key: "title",
    },
    {
      title: "Category",
      dataIndex: "category",
      key: "category",
    },
    {
      title: "Amount",
      dataIndex: "amount",
      key: "amount",
    },
    {
      title: "Description",
      dataIndex: "description",
      key: "description",
    },
  ];

  if (isLoading) return <div>Loading...</div>;
  if (isError) return <div>Error loading relief goods.</div>;

  return (
    <Row justify="center" style={{ marginTop: 50 }}>
      <Col xs={24} sm={20} md={16} lg={12}>
        <Card>
          <Table
            dataSource={reliefGoods}
            columns={columns}
            pagination={false}
            bordered
          />
        </Card>
      </Col>
    </Row>
  );
};

export default Dashboard;
