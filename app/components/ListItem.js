import React from "react";
import { StyleSheet, Text, View, Image } from "react-native";

const styles = StyleSheet.create({
  itemcontainer: {
    height: 100,
    width: "100%",
    borderColor: "gray",
    borderWidth: 1,
    flexDirection: "row",
  },
  leftcontainer: {
    backgroundColor: "red",
    width: 100,
  },
  rightcontainer: {
    flexDirection: "column",
    flex: 1,
    padding: 10,
    justifyContent: "space-between",
  },
  text: {
    fontSize: 16,
  },
  subtext: {
    fontSize: 12,
    color: "gray",
  },
});

const ListItem = ({ imageUrl, title, author }) => {
  return (
    <View style={styles.itemcontainer}>
      <View style={styles.leftcontainer}>
        {!!imageUrl && (
          <Image
            style={{ height: 100, width: 100 }}
            source={{ uri: imageUrl }}
          />
        )}
      </View>
      <View style={styles.rightcontainer}>
        <Text numberOfLines={3} style={styles.text}>
          {title}
        </Text>
        <Text style={styles.subtext}>{author}</Text>
      </View>
    </View>
  );
};

export default ListItem;
