import React, { Component } from "react";
import { StyleSheet, View, ScrollView, Text } from "react-native";
import MaterialCardWithImageAndTitle from "../components/MaterialCardWithImageAndTitle";
import MaterialCardWithImageAndTitle1 from "../components/MaterialCardWithImageAndTitle1";
import MaterialCardWithImageAndTitle2 from "../components/MaterialCardWithImageAndTitle2";
import EntypoIcon from "react-native-vector-icons/Entypo";
import MaterialCommunityIconsIcon from "react-native-vector-icons/MaterialCommunityIcons";
import MaterialHeader1 from "../components/MaterialHeader1";

function Untitled(props) {
  return (
    <View style={styles.container}>
      <View style={styles.scrollAreaStack}>
        <View style={styles.scrollArea}>
          <ScrollView
            horizontal={false}
            contentContainerStyle={styles.scrollArea_contentContainerStyle}
          >
            <View style={styles.rectStackStack}>
              <View style={styles.rectStack}>
                <View style={styles.rect}></View>
                <View style={styles.rect3}>
                  <MaterialCardWithImageAndTitle
                    style={styles.materialCardWithImageAndTitle}
                  ></MaterialCardWithImageAndTitle>
                  <MaterialCardWithImageAndTitle1
                    style={styles.materialCardWithImageAndTitle1}
                  ></MaterialCardWithImageAndTitle1>
                  <View style={styles.materialCardWithImageAndTitle2Stack}>
                    <MaterialCardWithImageAndTitle2
                      style={styles.materialCardWithImageAndTitle2}
                    ></MaterialCardWithImageAndTitle2>
                    <EntypoIcon
                      name="chevron-right"
                      style={styles.icon2}
                    ></EntypoIcon>
                    <EntypoIcon
                      name="chevron-left"
                      style={styles.icon3}
                    ></EntypoIcon>
                  </View>
                </View>
              </View>
              <View style={styles.rect2}>
                <View style={styles.loremIpsumStack}>
                  <Text style={styles.loremIpsum}>Lorem Ipsum</Text>
                  <Text style={styles.loremIpsum3}>Lorem Ipsum</Text>
                </View>
              </View>
            </View>
          </ScrollView>
        </View>
        <MaterialCommunityIconsIcon
          name="home-circle"
          style={styles.icon4}
        ></MaterialCommunityIconsIcon>
      </View>
      <MaterialHeader1 style={styles.materialHeader1}></MaterialHeader1>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  scrollArea: {
    top: 0,
    left: 0,
    width: 375,
    height: 584,
    position: "absolute",
    backgroundColor: "#E6E6E6"
  },
  scrollArea_contentContainerStyle: {
    height: 846,
    width: 375
  },
  rect: {
    flex: 1,
    backgroundColor: "rgba(212, 212, 212,1)",
    position: "absolute",
    top: 0,
    left: 0,
    borderWidth: 3,
    borderColor: "rgba(238,3,3,1)",
    height: 0,
    width: 0,
    opacity: 0
  },
  rect3: {
    top: 0,
    left: 0,
    width: 375,
    height: 584,
    position: "absolute",
    backgroundColor: "#E6E6E6"
  },
  materialCardWithImageAndTitle: {
    height: 166,
    width: 359,
    marginTop: 17,
    marginLeft: 8
  },
  materialCardWithImageAndTitle1: {
    height: 166,
    width: 359,
    marginTop: 12,
    marginLeft: 8
  },
  materialCardWithImageAndTitle2: {
    height: 166,
    width: 359,
    position: "absolute",
    left: 0,
    top: 0
  },
  icon2: {
    top: 164,
    left: 319,
    position: "absolute",
    color: "#4051b6",
    fontSize: 40,
    height: 46,
    width: 40
  },
  icon3: {
    top: 164,
    left: 0,
    position: "absolute",
    color: "#4051b6",
    fontSize: 40,
    height: 46,
    width: 40
  },
  materialCardWithImageAndTitle2Stack: {
    width: 359,
    height: 210,
    marginTop: 13,
    marginLeft: 8
  },
  rectStack: {
    top: 0,
    left: 0,
    width: 375,
    height: 846,
    position: "absolute"
  },
  rect2: {
    flex: 1,
    backgroundColor: "rgba(144,223,171,1)",
    position: "absolute",
    top: 0,
    left: 158,
    height: 846,
    width: 158,
    borderWidth: 3,
    borderColor: "rgba(21,88,104,1)",
    borderRadius: 12,
    borderBottomRightRadius: 55,
    borderTopRightRadius: 43,
    borderTopLeftRadius: 43
  },
  loremIpsum: {
    top: 0,
    left: 14,
    position: "absolute",
    fontFamily: "roboto-regular",
    color: "#121212",
    height: 0,
    width: 0,
    opacity: 0
  },
  loremIpsum3: {
    top: 0,
    position: "absolute",
    fontFamily: "roboto-regular",
    color: "#121212",
    left: 0,
    height: 0,
    width: 0,
    opacity: 0
  },
  loremIpsumStack: {
    width: 134,
    height: 107,
    marginTop: 170,
    marginLeft: 9
  },
  rectStackStack: {
    width: 375,
    height: 846
  },
  icon4: {
    top: 541,
    left: 168,
    position: "absolute",
    color: "#4051b6",
    fontSize: 40
  },
  scrollAreaStack: {
    width: 375,
    height: 585,
    marginTop: 143
  },
  materialHeader1: {
    height: 53,
    width: 375,
    marginTop: -638
  }
});

export default Untitled;
