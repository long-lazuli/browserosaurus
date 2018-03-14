import { ipcRenderer, remote } from 'electron'
import { Component } from 'react'
import opn from 'opn'

const dblClickTimeout = 300

class UrlListener extends Component {
  constructor() {
    super()

    this.state = {
      url: null,
      lastClickDate: 0
    }

    /**
     * Event: Receive browsers array from main
     *
     * @param {array} event
     * @param {array} url
     */
    ipcRenderer.on('incomingURL', (event, url) => this._onReceiveURL(url))
  }

  _onReceiveURL(url){

    this.setState(
      (prevState, props) => {
        const isDblClick = ( prevState.url === url && ( new Date() - prevState.lastClickDate < dblClickTimeout ) )

        if( isDblClick ){

          opn(url, { app: this.props.defaultBrowser.name, wait: false })

        }else{

          setTimeout(()=>{
            const window = remote.getCurrentWindow()
            window.center()
            window.show()
          }, dblClickTimeout  )

        }

        return {
          url: isDblClick ? null : url,
          lastClickDate: isDblClick ? 0 : new Date()
        }
      }
    )

  }

  render() {
    return this.props.children(this.state.url)
  }
}

export default UrlListener
