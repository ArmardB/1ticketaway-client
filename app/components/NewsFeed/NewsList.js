import React, { Component } from "react";
import { ScrollView } from "react-native";
import axios from "axios";
import NewsItem from "./NewsItem.js";

class NewsList extends Component {
  // constructor(props) {
  //   super(props);
  //   this.state = { albums: []}
  // }
  state = {
    articles: [
      {
        header: "Lottery News for June, 2017",
        date: "Monday, June 19, 2017",
        title_link: "https://www.lotterypost.com/news/313301",
        title: "FBI missed rigged jackpot in 2006 before lottery scheme grew",
        snippet: "FBI missed rigged jackpot in 2006 before lottery scheme grew.  8:51 am - A 2006 inquiry by the FBI into a lottery won by Tiption, a Texas judge, failed to uncover a jackpot rigging conspiracy. A decade later, the inquiry stands out as a missed chance to stop a jackpot rigging scandal that would corrupt the $70 billion lottery industry for years while enriching a tiny group of insiders. The FBI didn't uncover one fact that its informant knew but didn't see as significant: that Tipton's brother, Eddie Tipton, was a lottery industry employee.6 commentsLast comment by KingofearthPost a comment"
      },
      {
        header: "Lottery News for June, 2017",
        date: "Monday, June 19, 2017",
        title_link: "https://www.lotterypost.com/news/313301",
        title: "FBI missed rigged jackpot in 2006 before lottery scheme grew",
        snippet: "FBI missed rigged jackpot in 2006 before lottery scheme grew.  8:51 am - A 2006 inquiry by the FBI into a lottery won by Tiption, a Texas judge, failed to uncover a jackpot rigging conspiracy. A decade later, the inquiry stands out as a missed chance to stop a jackpot rigging scandal that would corrupt the $70 billion lottery industry for years while enriching a tiny group of insiders. The FBI didn't uncover one fact that its informant knew but didn't see as significant: that Tipton's brother, Eddie Tipton, was a lottery industry employee.6 commentsLast comment by KingofearthPost a comment"
      }
    ]
  };

  // componentWillMount() {
  //   axios
  //     .get("https://rallycoding.herokuapp.com/api/music_albums")
  //     .then(response => this.setState({ albums: response.data }));
  // }

  renderAlbums() {
    return this.state.articles.map(article => (
      <NewsItem key={article.title} article={article} />
    ));
  }

  render() {
    return (
      <ScrollView>
        {this.renderAlbums()}
      </ScrollView>
    );
  }
}

export default NewsList;
