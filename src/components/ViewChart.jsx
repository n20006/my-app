import {
  ComposedChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip
} from 'recharts'

const ViewChart = props => {
  console.log(props)
  return (
    <ComposedChart
      layout='vertical'
      width={500}
      height={400}
      data={props.data}
      margin={{
        top: 20,
        right: 20,
        bottom: 20,
        left: 20
      }}
    >
      <CartesianGrid stroke='#f5f5f5' />
      <XAxis type='number' />
      <YAxis datakey='description' type='category' />
      <Tooltip />
      <Bar dataKey='score' barSize={15} fill='#413ea0' />
    </ComposedChart>
  )
}

export default ViewChart
