import React, { Component } from "react";
import { View, Text, Image, Linking } from "react-native";
import Card from "../Card";
import CardSection from "../CardSection";

const NewsItem = ({ article }) => {
  const { header, link, title_link, title, snippet } = article;
  console.log(article);
  const {
    thumbnailStyle,
    headerContentStyle,
    thumbnailContainerStyle,
    headerTextStyle,
    imageStyle
  } = styles;

  return (
    <Card>
      <CardSection>
        <View style={thumbnailContainerStyle} />
        <View style={headerContentStyle}>
          <Text style={{ fontSize: 24 }}>{article.title}</Text>
          <Text style={{ fontSize: 24 }}>{article.snippet}</Text>
        </View>
      </CardSection>
    </Card>
  );
};

const styles = {
  headerContentStyle: {
    flexDirection: "column",
    justifyContent: "space-around"
  },
  headerTextStyle: {
    fontSize: 18
  },
  thumbnailStyle: {
    height: 50,
    width: 50
  },
  thumbnailContainerStyle: {
    justifyContent: "center",
    alignItems: "center",
    marginLeft: 10,
    marginRight: 10
  },
  imageStyle: {
    height: 300,
    flex: 1,
    width: null
  }
};

export default NewsItem;
