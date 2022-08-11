import React, { Component } from 'react'

export class newsItems extends Component {
   
  render() {
    let {title, description, imageUrl,NewsUrl}= this.props;
    return (
      
      <div className='my-3'>
       <div className="card" style={{width: "18rem"}}>
          <img src={!imageUrl?"https://images.moneycontrol.com/static-mcnews/2021/06/Sensex-1-770x433.jpg":imageUrl} className="card-img-top" alt="..."/>
          <div className="card-body">
            {/* three dots at the end will end the title or all other props with three dots   */}
            <h5 className="card-title">{title}...</h5>
            <p className="card-text">{description}...</p>
            <a rel = "noreferrer" href={NewsUrl} target="_blank"  className="btn btn-sm btn-primary">Read More</a>
          </div>
        </div>
      </div>
    )
  }
}

export default newsItems
 