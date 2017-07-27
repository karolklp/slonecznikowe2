import React from 'react'
import { config } from 'config'
import image from './osiedle_slonecznikowe_5-1500x630.jpg'
import slonecznik from './sloneczniki.png'
import { img1 } from './osiedle_slonecznikowe_1.jpg'
import { img2 } from './osiedle_slonecznikowe_2-1.jpg'


export default class MainPage extends React.Component {
  constructor () {
    super()
    this.state = { count: 0 }
  }

  render () {
    return (
      <div>
        <img src={image} />
            <h6>SZUKASZ DOMU DLA RODZINY?</h6>


Rozumiemy, że dom powinien być praktycznie pomyślany.
Dedykowane dużej rodzinie mieszkania wykonujemy wyłącznie z materiałów o wysokiej odporności na zniszczenia.

    <img src={slonecznik} />
    <img src={img1} />
    <img src={img2} />
    

      </div>
    )
  }
}
