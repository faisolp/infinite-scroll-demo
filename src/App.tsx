import React from "react";
//import { render } from "react-dom";
import InfiniteScroll from "react-infinite-scroll-component";
import { Loading } from "./components/Loading"
import { CardJob } from "./components/Card"



class App extends React.Component {
  state = {
    items: Array.from({ length: 20 }),
    hasMore: true,
    status:""
  };

  fetchMoreData = () => {
    if (this.state.items.length >= 100) {
      this.setState({ hasMore: false });
      return;
    }
    // a fake async api call like which sends
    // 20 more records in .5 secs
    this.setState({status:"loading"})
    setTimeout(() => {
      console.log("Loading.." +this.state.items.length)
      this.setState({
        items: this.state.items.concat(Array.from({ length: 20 }))
      });
      this.setState({status:""})
      
    }, 1000);
  };

  render() {
    const { status } = this.state
    //if (status === 'loading') return <Loading />
    return (
      <div>
        <h1>demo: react-infinite-scroll-component</h1>
        <hr />
        <InfiniteScroll
          dataLength={this.state.items.length}
          next={this.fetchMoreData}
          hasMore={this.state.hasMore}
          loader={<Loading />}
          endMessage={
            <p style={{ textAlign: "center" }}>
              <b>Yay! You have seen it all</b>
            </p>
          }
        >
          <div className="grid-container">
            {this.state.items.map((i, index) => (
              <CardJob key={index} character={{id:index,name: "#"+index+" ตำแหน่งงานที่ประกาศรับสมัคร XXXXXXXXXX",image:"https://picsum.photos/100/50"}} />
              
            ))}
          </div>
        </InfiniteScroll>
      </div>
    );
  }
}

export default App
