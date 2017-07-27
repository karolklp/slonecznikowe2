import React, { Component } from 'react'
import image from './osiedle_slonecznikowe_5-1500x630.jpg'
import slonecznik from './sloneczniki.png'
import  img1  from './osiedle_slonecznikowe_1.jpg'
import  img2  from './osiedle_slonecznikowe_2-1.jpg'


class Main extends Component {
  constructor(props) {
    super(props);

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
export default Main;