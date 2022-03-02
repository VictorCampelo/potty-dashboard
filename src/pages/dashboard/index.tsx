import React, { useEffect, useState } from 'react'
import DrawerLateral from '../../components/molecules/DrawerLateral'
import DrawerBottom from '../../components/molecules/DrawerBottom'
import CardShop from '../../components/molecules/CardShop'
import { Container } from '../../styles/pages/shopkeeper'
import CardProduct from '../../components/molecules/CardProduct'
import CardFeedback from '../../components/molecules/CardFeedback'
import Head from 'next/head'

import { withSSRAuth } from 'services/withSSRAuth'
import { setupApiClient } from 'services/api'

import {
  BarChart,
  Bar,
  Cell,
  XAxis,
  Tooltip,
  LineChart,
  Line,
  YAxis,
  ReferenceLine,
  ResponsiveContainer
} from 'recharts'

import { AuthContext } from 'contexts/AuthContext'
import formatToBrl from 'utils/formatToBrl'
import { api } from 'services/apiClient'
import NoneItems from 'components/atoms/NoneItems'

const Shopkeeper = () => {
  const [lastSolds, setLastSolds] = useState([])
  const [mostSolds, setMostSolds] = useState([])
  const [lastFeedback, setLastFeedback] = useState([])
  const [amountSold, setAmountSolds] = useState([])
  const [income, setIncome] = useState([])

  const dataChart = [
    {
      name: 'Seg',
      num: 422,
      id: 1,
      color: '#01AC8A'
    },
    {
      name: 'Ter',
      num: 778,
      id: 2,
      color: '#6598D9'
    },
    {
      name: 'Qua',
      num: 995,
      id: 3,
      color: '#01AC8A'
    },
    {
      name: 'Qui',
      num: 440,
      id: 4,
      color: '#6598D9'
    },
    {
      name: 'Sex',
      num: 1200,
      id: 5,
      color: '#01AC8A'
    },
    {
      name: 'Sáb',
      num: 796,
      id: 6,
      color: '#6598D9'
    },
    {
      name: 'Dom',
      num: 1300,
      id: 7,
      color: '#01AC8A'
    },
    {
      name: 'Hoje',
      num: 582,
      id: 8,
      color: '#3C8EFC'
    }
  ]

  const dataChartMonths = [
    {
      name: 'Fev',
      num: 10360,
      id: 1
    },
    {
      name: 'Mar',
      num: 13405,
      id: 2
    },
    {
      name: 'Abr',
      num: 12580,
      id: 3
    },
    {
      name: 'Mai',
      num: 12900,
      id: 4
    },
    {
      name: 'Jun',
      num: 14562,
      id: 5
    },
    {
      name: 'Jul',
      num: 16892,
      id: 6
    }
  ]

  const getMostSolds = async () => {
    try {
      const { data } = await api.get('dashboard/mostSolds')
      setMostSolds(data)
    } catch (e) {
      console.log(e)
    }
  }

  const getLastSolds = async () => {
    try {
      const { data } = await api.get('dashboard/lastSolds')
      setLastSolds(data)
    } catch (e) {
      console.log(e)
    }
  }

  const getLastFeedbacks = async () => {
    try {
      const { data } = await api.get('dashboard/lastFeedbacks')
      setLastFeedback(data)
    } catch (e) {
      console.log(e)
    }
  }

  const getAmountSoldProducts = async () => {
    try {
      const { data } = await api.get('dashboard/amountSoldProducts')
      setAmountSolds(data)
    } catch (e) {
      console.log(e)
    }
  }

  const getIncome = async () => {
    try {
      const { data } = await api.get('dashboard/income')
      setIncome(data)
    } catch (e) {
      console.log(e)
    }
  }

  const CustomTooltip = ({ active, payload }) => {
    if (active && payload && payload.length) {
      return (
        <div
          style={{
            background: 'rgba(216, 217, 221, 0.51)',
            padding: '0px 10px'
          }}
        >
          <p>{`${formatToBrl(payload[0].value)}`}</p>
        </div>
      )
    }

    return null
  }

  useEffect(() => {
    getMostSolds()
    getLastSolds()
    getLastFeedbacks()
    getAmountSoldProducts()
    getIncome()
  }, [])

  return (
    <>
      <Head>
        <title>Dashboard | Boa de Venda</title>
      </Head>
      <Container>
        <DrawerLateral greenOption={0} />

        <div className="cards-area">
          <div className="top-area">
            <CardShop title="Produtos mais vendidos" width="400">
              {mostSolds.map((product) => (
                <CardProduct
                  key={product.id}
                  srcImg="/images/coffee.png"
                  name="Café Preto"
                  cod="cod: 6932"
                  quant="10.569"
                />
              ))}
              {mostSolds.length === 0 && <NoneItems />}
            </CardShop>

            <CardShop title="Rendimentos">
              {/* <ResponsiveContainer width="90%" height="90%">
                <LineChart width={900} height={250} data={dataChartMonths}>
                  <XAxis dataKey="name" />
                  <YAxis width={10} style={{ display: 'none' }} />
                  {dataChartMonths.map((data) => {
                    return (
                      <ReferenceLine
                        key={data.id + '--'}
                        x={data.name}
                        strokeDasharray="10"
                        stroke="#D8D9DD"
                      />
                    )
                  })}

                  <Tooltip content={<CustomTooltip active payload />} />
                  <Line
                    dataKey="num"
                    type="linear"
                    stroke="#01AC8A"
                    strokeWidth={2}
                    dot={{
                      r: 5,
                      fill: '#6598D9',
                      stroke: 'transparent',
                      strokeWidth: 0
                    }}
                    activeDot={{
                      r: 7,
                      fill: '#6598D9',
                      stroke: '#fff',
                      strokeWidth: 2
                    }}
                  ></Line>
                </LineChart>
              </ResponsiveContainer> */}
              <NoneItems />
            </CardShop>
          </div>

          <div className="bottom-area">
            <CardShop title="Últimos Feedbacks" width="400">
              {lastFeedback.map((feedback) => (
                <CardFeedback
                  key={feedback.id}
                  name="Sara Sousa"
                  quantStar={2}
                  text="Infelizmente o produto veio errado, acabei me perjudicando por esse erro bobo."
                  time="Há 2 horas"
                  width={280}
                />
              ))}
              {lastFeedback.length === 0 && <NoneItems />}
            </CardShop>

            <CardShop title="Últimos produtos vendidos" width="400">
              {lastSolds.map((product) => (
                <CardProduct
                  key={product.id}
                  srcImg="/images/coffee.png"
                  name="Café Preto"
                  cod="cod: 6932"
                  quant="10.569"
                  tipo={2}
                  preco="2,00"
                />
              ))}
              {lastSolds.length === 0 && <NoneItems />}
            </CardShop>

            <CardShop title="Quantidade de acessos a loja">
              {/* <ResponsiveContainer width="90%" minWidth="400px" height="90%">
                <BarChart
                  width={400}
                  height={360}
                  data={dataChart}
                  barSize={60}
                  barGap="10px"
                >
                  <XAxis
                    dataKey="name"
                    tickLine={false}
                    axisLine={false}
                    tickMargin={10}
                  />
                  <Bar
                    dataKey="num"
                    radius={5}
                    label={{ position: 'top', fill: '#363F4E' }}
                  >
                    {dataChart.map((data) => (
                      <Cell fill={data.color} key={data.id + '--'} />
                    ))}
                  </Bar>
                </BarChart>
              </ResponsiveContainer> */}
              <NoneItems />
            </CardShop>
          </div>
        </div>

        <DrawerBottom greenOption={0} />
      </Container>
    </>
  )
}

export default Shopkeeper

export const getServerSideProps = withSSRAuth(async (ctx) => {
  const apiClient = setupApiClient(ctx)

  const { data } = await apiClient.get('/stores/me')

  return {
    props: {
      storeId: data.store.id,
      id: data.store.formatedName
    }
  }
})
