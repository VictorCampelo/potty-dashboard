import React, { useState } from 'react'
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

const Shopkeeper = () => {
  const [options, setOptions] = useState({})

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

  const formatter = new Intl.NumberFormat('pt-BR', {
    style: 'currency',
    currency: 'BRL',
    minimumFractionDigits: 2
  })

  const CustomTooltip = ({ active, payload }) => {
    if (active && payload && payload.length) {
      return (
        <div
          style={{
            background: 'rgba(216, 217, 221, 0.51)',
            padding: '0px 10px'
          }}
        >
          <p>{`${formatter.format(payload[0].value)}`}</p>
        </div>
      )
    }

    return null
  }

  return (
    <>
      <Head>
        <title>Dashboard | Boa de Venda</title>
      </Head>
      <Container>
        <DrawerLateral greenOption={0} />

        <div className="cards-area">
          <div className="top-area">
            <CardShop title="Produtos mais vendidos" dataSelector width="400">
              <CardProduct
                srcImg="/images/coffee.png"
                name="Café Preto"
                cod="cod: 6932"
                quant="10.569"
              />

              <CardProduct
                srcImg="/images/cheese-bread.png"
                name="Pão de queijo"
                cod="cod: 5686"
                quant="4.860"
              />

              <CardProduct
                srcImg="/images/coffee2.png"
                name="Cappuccino"
                cod="cod: 583"
                quant="2.956"
              />

              <CardProduct
                srcImg="/images/coffee1.png"
                name="Chá verde"
                cod="cod: 6972"
                quant="1.658"
              />

              <CardProduct
                srcImg="/images/cheese-bread.png"
                name="Pão de queijo"
                cod="cod: 5686"
                quant="4.860"
              />

              <CardProduct
                srcImg="/images/coffee2.png"
                name="Cappuccino"
                cod="cod: 583"
                quant="2.956"
              />

              <CardProduct
                srcImg="/images/coffee1.png"
                name="Chá verde"
                cod="cod: 6972"
                quant="1.658"
              />

              <CardProduct
                srcImg="/images/coffee1.png"
                name="Chá verde"
                cod="cod: 6972"
                quant="1.658"
              />
            </CardShop>

            <CardShop title="Rendimentos" dataSelector>
              <ResponsiveContainer width="90%" height="90%">
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
              </ResponsiveContainer>
            </CardShop>
          </div>

          <div className="bottom-area">
            <CardShop title="Últimos Feedbacks" width="400">
              <CardFeedback
                name="Henrique Soares"
                quantStar={5} //max stars is 5
                text="Entrega extremamente rápida, entregador educado e gentil, produto exatamente como o descrito. Parabéns! Com certeza voltarei a comprar!"
                time="Há 30 minutos"
                width={280}
              />
              <CardFeedback
                name="Sara Sousa"
                quantStar={2} //max stars is 5
                text="Infelizmente o produto veio errado, acabei me perjudicando por esse erro bobo."
                time="Há 2 horas"
                width={280}
              />
              <CardFeedback
                name="Francisco José"
                quantStar={5} //max stars is 5
                text="Produto perfeito!! Parabéns aos responsáveis"
                time="Há 3 horas"
                width={280}
              />
              <CardFeedback
                name="Francisco José"
                quantStar={5} //max stars is 5
                text="Produto perfeito!! Parabéns aos responsáveis"
                time="Há 3 horas"
                width={280}
              />
              <CardFeedback
                name="Francisco José"
                quantStar={5} //max stars is 5
                text="Produto perfeito!! Parabéns aos responsáveis"
                time="Há 3 horas"
                width={280}
              />
            </CardShop>

            <CardShop title="Últimos produtos vendidos" width="400">
              <CardProduct
                srcImg="/images/coffee.png"
                name="Café Preto"
                cod="cod: 6932"
                quant="10.569"
                tipo={2}
                preco="2,00"
              />
              <CardProduct
                srcImg="/images/cheese-bread.png"
                name="Pão de queijo"
                cod="cod: 6932"
                quant="10.569"
                tipo={2}
                preco="3,00"
              />
              <CardProduct
                srcImg="/images/coffee2.png"
                name="Cappuccino"
                cod="cod: 6932"
                quant="10.569"
                tipo={2}
                preco="10,00"
              />
              <CardProduct
                srcImg="/images/coffee1.png"
                name="Chá verde"
                cod="cod: 6932"
                quant="10.569"
                tipo={2}
                preco="2,00"
              />

              <CardProduct
                srcImg="/images/coffee.png"
                name="Café Preto"
                cod="cod: 6932"
                quant="10.569"
                tipo={2}
                preco="2,00"
              />
            </CardShop>

            <CardShop title="Quantidade de acessos a loja" dataSelector>
              <ResponsiveContainer width="90%" minWidth="400px" height="90%">
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
              </ResponsiveContainer>
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
