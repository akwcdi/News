import React,{ useState, useEffect } from 'react';
import {StyleSheet, View, FlatList} from 'react-native';
import ListItem from './components/ListItem';
import Constants from 'expo-constants';
import axios from "axios";

export default function App() {


  const [articles, setArticles] = useState([]);

  useEffect(() => {
    fetchArticles();
  }, []);

  const URL = `https://newsapi.org/v2/top-headlines?country=jp&category=business&apiKey=${Constants.manifest.extra.newsApiKey}`;


  const fetchArticles = async () => {
    try {
      const response = await axios.get(URL);
      setArticles(response.data.articles);
      console.log(response);
    } catch (error) {
      console.error(error);
    }
  };


  return (
    <View style={styles.container}>
      <FlatList
        data={articles}
        renderItem={({ item }) => (
            <ListItem
            imageUrl={item.urlToImage}
            title={item.title}
            author={item.author}
          />
          )
        }
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
