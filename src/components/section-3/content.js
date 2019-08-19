import React, { Component } from 'react'

class Content extends Component {
    constructor(props){
        super(props);
        this.state = {
            founded : "Founded in August 2016 by fashion-forward, innovative women who are passionate about bringing an alternative way of shopping for clothes; some don't have the time, the budget, or are simply stuck in style ruts. On the order hand, tons of clothes from fashion brands are being thrown on landfills every year. What if there's a way to match clothing pieces with the right shopper so nothing goes to ways? Hence we release StyleGenie from the lamp.",
            mission : "Our mission is to grant style wishes and boost our customer's confidence through smart and sustainable fashion choices. StyleGenie offers personal styling services to match retail brands' inventory with each customer's profile using combined data and human stylist expertise."
        }
    }
    render() {
        return (
            <div>
                <h1 className='titleAboutUs'>ABOUT US</h1>
                <p className='contentParagraph'>{this.state.founded}</p>
                <p className='contentParagraph'>{this.state.mission}</p>
            </div>
        )
    }
}

export default Content
