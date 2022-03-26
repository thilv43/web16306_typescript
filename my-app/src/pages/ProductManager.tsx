import React from "react";
import { Link } from "react-router-dom";
import { ProductType } from "../types/product";
import {Table , Tag, Space } from 'antd';
import { Item } from "rc-menu";

type ProductManagerProps = {
  products: ProductType[],
  onRemove: (id: number) => void
}

const columns = [
  {
    title: "name",
    dataIndex: "name",
    key: "name"
  },
  {
    title: "price",
    dataIndex: "price",
    key: "price"
  },
]

const ProductManager = (props: ProductManagerProps) => {
  const dataSource = props.products.map((item, index) => {
    return {
      key: index + 1,
      name: item.name,
      price: item.price
    }
  })
  return (
    <Table columns={columns} dataSource={dataSource} />
  )
}
export default ProductManager;