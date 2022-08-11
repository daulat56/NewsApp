import React, { Component } from 'react'
import NewsItems from './NewsItems'
export class News extends Component {

// The constructor is a method used to initialize an object's state in a class. It automatically called during the creation of an object in a class.
// The constructor in a React component is called before the component is mounted. When you implement the constructor for a React component, you need to call super(props) method before any other statement. If you do not call super(props) method, this.props will be undefined in the constructor and can lead to bugs.
  constructor(){
    super();
    console.log("hello I am a constructor from news app");
    this.state=
    {
      articles:[], 
      loading:false,
      page:1
    }
    
  }
  // componentDidMount() is a hook that gets invoked right after a React component has been mounted aka after the first render() lifecycle.
  // it makes app better than using rander
  // constructor->rander->cdm
  // An async function is a function declared with the async keyword, and the await keyword is permitted within it. The async and await keywords enable asynchronous, promise-based behavior to be written in a cleaner style, avoiding the need to explicitly configure promise chains.
  async componentDidMount(){
    console.log("hello cdm");
    let url="https://newsapi.org/v2/top-headlines?country=in&category=business&apiKey=fe397d5c48db447fa0fec4296eceff31&page=1pageSize=20";
    let data = await fetch(url);
    // Data parsing is a method where one string of data gets converted into a different type of data. So let’s say you receive your data in raw HTML, a parser will take the said HTML and transform it into a more readable data format that can be easily read and understood.

    let parsedData= await data.json()
    console.log(parsedData);
    this.setState({articles: parsedData.articles,totalResults:parsedData.totalResults});

    
  }
  handleNextClick=async()=>{

    console.log("next");
    if (this.state.page + 1 > Math.ceil(this.state.totalResults/20))
    {

    }
    else
    {
    let url=`https://newsapi.org/v2/top-headlines?country=in&category=business&apiKey=fe397d5c48db447fa0fec4296eceff31&page=${this.state.page+1}&pageSize=20`;
    let data = await fetch(url);
    let parsedData= await data.json()
    console.log(parsedData);

    
    this.setState({

      page:this.setState.page+1,
      articles: parsedData.articles

    })

  }
}

  handlePrevClick=async()=>{
    console.log("prev");
    let url=`https://newsapi.org/v2/top-headlines?country=in&category=business&apiKey=fe397d5c48db447fa0fec4296eceff31&page=${this.state.page-1}&pageSize=20`;
    let data = await fetch(url);
    let parsedData= await data.json()
    console.log(parsedData);

    
    this.setState({

      page:this.setState.page-1,
      articles: parsedData.articles

    })
  }

  
  
  render() {
    console.log("hello rander");
    return (
      
      <div className="container my-3"> 
      <h1 className="text-center">NewsApp-Top Headlines</h1>
        
        <div className="row">
        {this.state.articles.map((element)=>{
// length will depend on the length of objects in the article
          return <div className='col-md-4' key={element.url}>
          <NewsItems  title={element.title?element.title.slice(0,45):""}  description={element.description?element.description.slice(0,88):""} NewsUrl={element.url} imageUrl={element.urlToImage  }/>
          </div>

        })} 
          
        </div>

        <div className="container d-flex justify-content-between">
        <button disabled={this.state.page<=1} type="button" className="btn btn-dark" onClick={this.handlePrevClick}>&larr;Prev</button>
        <button disabled={this.state.page+1 > Math.ceil(this.state.totalResults/20)} type="button" className="btn btn-dark" onClick={this.handleNextClick}>Next&rarr;</button>
        </div>
      </div>
      
    )
  }
}

export default News
