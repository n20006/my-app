import React from 'react'
import './App.css'
import { Button } from '@material-ui/core'
import FileInputComponent from 'react-file-input-previews-base64'
import DarkmodeSample from './components/DarkmodeTemplete'
import ViewChart from './components/ViewChart'

class VisionApp extends React.Component {
  constructor (props) {
    super(props)
    this.state = { content: [], data: [] }
    this.URI = 'https://vision.googleapis.com/v1/images:annotate?key='
    this.KEY = process.env.GOOGLE_CLOUD_VISION_APIKEY
    this.FQDN = this.URI + this.KEY
  }

  handleChange (value) {
    const base64 = value.replace('data:image/jpeg;base64,', '')
    this.setState({ content: base64 })
    this.SendRequest()
  }

  // リクエスト情報
  SendRequest () {
    const body = JSON.stringify({
      requests: [
        {
          features: [
            {
              type: 'LABEL_DETECTION',
              maxResults: 5
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

    // レスポンス
    window
      .fetch(this.FQDN, param)
      .then(res => res.json())
      .then(json => json.responses[0].labelAnnotations)
      .then(json =>
        json.map(v => ({ description: v.description, score: v.score * 100 }))
      )
      .then(v => this.setState({ data: v }))
      .then(v => console.log(v))
    console.log(this.state)
  }

  render () {
    return (
      <div>
        <DarkmodeSample />
        <h1>画像に含まれるオブジェクト</h1>
        <div id='fileselect'>
          <FileInputComponent
            labelText=''
            multiple={false}
            callbackFunction={file => this.handleChange(file.base64)}
            buttonComponent={
              <Button variant='outlined' color='secondary'>
                SelectFile
              </Button>
            }
            accept='image/*'
          />
        </div>
        <div id='chart'>
          <ViewChart data={this.state.data} />
        </div>
      </div>
    )
  }
}

export default VisionApp
