[![Deploy to now](https://deploy.now.sh/static/button.svg)](https://deploy.now.sh/?repo=https://github.com/aulneau/next.js-with-react-plotly.js)

# [`react-plotly.js`](https://github.com/plotly/react-plotly.js) Example

## How to use

### Clone the repo

```bash
$ git clone git@github.com:aulneau/next.js-with-react-plotly.js.git
$ cd next.js-with-react-plotly.js
```

### Install it and run:

```bash
yarn install
yarn run dev
```

Deploy it to the cloud with [now](https://zeit.co/now) ([download](https://zeit.co/download))

```bash
now
```

## The idea behind the example

Next.js is a framework for universal react applications. [`react-plotly.js`](https://github.com/plotly/react-plotly.js) can be used with `next.js` by [dynamically importing](https://github.com/zeit/next.js/#3-with-no-ssr) it and deferring render until the client receives it. 

```javascript
import dynamic from 'next/dynamic'

const DynamicPlot = dynamic(import('../components/plot'), {
  ssr: false
})
```


