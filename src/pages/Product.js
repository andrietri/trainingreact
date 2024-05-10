import { Button, Card, Col, Row, Typography } from 'antd'
import axios from 'axios'
import React, { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'

function Product() {
  const [data,setData] = useState([])
  const [skip,setSkip] = useState(0)

  useEffect(() => {
    axios
      .get(`https://dummyjson.com/products?limit=6&skip=${skip}`)
      .then(({ data }) => {
        setData(prevState => {
          if (skip === 0) {
            return data?.products
          }

          return [...prevState, ...data?.products]
        })
      })
      .catch((err) => {
        setData([])
      })
      
    console.log(data)
  }, [skip])

  const handleFetchMore = () => {
    setSkip((prev) => prev + 6)
  }

  const navigate = useNavigate()

  return (
    <>
    <Row gutter={[8,8]}>
      {data?.map((item, index) => {
        return (
          <Col span={8}>
            <Card onClick = { () => {
              navigate(`/product/${item.id}`)
            }}>
              <Typography.Title>{item.title}</Typography.Title>
              <br/>
              <Typography.Text>{item.description}</Typography.Text>
              <br/>
              <Typography.Text>{item.price}</Typography.Text>
              <br/>
              <Typography.Text>{item.discountPercentage}</Typography.Text>
            </Card>
          </Col>
        )
      })}
    </Row>

    <div>
      <Button
        onClick = {() => {
          handleFetchMore()
        }}
        type="primary"
      >
        View More
      </Button>
    </div>
    </>
  )
}

export default Product
