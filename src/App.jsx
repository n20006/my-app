import React from 'react'
import './App.css'
import DarkmodeSample from './DarkmodeTemplete'
import FileInputComponent from 'react-file-input-previews-base64'
import {
  ComposedChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip
} from 'recharts'

class App extends React.Component {
  constructor (props) {
    super(props)
    this.state = { content: [], description: [], score: [] }
    this.data = []
    this.URI = 'https://vision.googleapis.com/v1/images:annotate?key='
    this.KEY = 'xxxxxxxxxxxxxxxxxxxxxxx'
    this.FQDN = this.URI + this.KEY
  }

  onChange (value) {
    const base64 = value.replace('data:image/jpeg;base64,', '')
    this.setState({ content: base64 })
    this.SendRequest()
  }

  SendRequest () {
    const body = JSON.stringify({
      requests: [
        {
          features: [
            {
              type: 'LABEL_DETECTION',
              maxResults: 1
            }
          ],
          image: {
            content: this.state.content
          }
        }
      ]
    })

    const param = {
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json'
      },
      method: 'POST',
      body: body
    }

    window
      .fetch(this.FQDN, param)
      .then(res => res.json())
      .then(json => {
        this.setState({
          description: json.responses[0].labelAnnotations[0].description,
          score: json.responses[0].labelAnnotations[0].score
        })
        this.data.push({
          name: this.state.description,
          value: this.state.score
        })
      })
  }

  render () {
    return (
      <>
        <DarkmodeSample />
        <FileInputComponent
          labelText='画像を選択'
          labelStyle={{ fontSize: 14 }}
          multiple={false}
          callbackFunction={file => this.onChange(file.base64)}
          accept='image/*'
        />
        {this.state.description}
        <ViewChart data={this.data} />
      </>
    )
  }
}

const ViewChart = props => {
  return (
    <ComposedChart
      layout='vertical'
      width={500}
      height={400}
      data={props.data}
      margin={{
        top: 20,
        right: 20,
        bottom: 150,
        left: 20
      }}
    >
      <CartesianGrid stroke='#f5f5f5' />
      <XAxis type='number' />
      <YAxis datakey='name' type='category' />
      <Tooltip />
      <Bar dataKey='value' barSize={15} fill='#413ea0' />
    </ComposedChart>
  )
}

export default App
