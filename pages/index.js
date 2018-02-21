import React, {Fragment} from 'react';
import Head from 'next/head'
import dynamic from 'next/dynamic'

const DynamicPlot = dynamic(import('../components/plot'), {
  ssr: false
})

export default () => (
  <Fragment>
    <Head>
      <title>next.js react-plotly.js example</title>
    </Head>
    <DynamicPlot />
  </Fragment>
)
