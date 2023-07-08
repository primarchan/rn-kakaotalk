import { StatusBar } from "expo-status-bar";
import { Platform, SafeAreaView, StyleSheet, Text, View } from "react-native";
import Header from "./src/Header";
import {
  getStatusBarHeight,
  getBottomSpace,
} from "react-native-iphone-x-helper";
import Profile from "./src/Profile";
import { myProfile, friendProfiles } from "./src/data";
import Margin from "./src/Margin";
import Division from "./src/Division";
import FriendSection from "./src/FriendSection";
import FriendList from "./src/FriendList";

const statusBarHeight = getStatusBarHeight(true);
const bottomSpace = getBottomSpace();

// console.log(`${Platform.OS}: ${statusBarHeight}, ${bottomSpace}`);

export default function App() {
  const onPressArrow = () => {
    console.log("click arrow");
  };

  return (
    <View style={styles.container}>
      <Header />

      <Margin height={10} />

      <Profile
        uri={myProfile.uri}
        name={myProfile.name}
        introduction={myProfile.introduction}
      />

      <Margin height={15} />

      <Division />

      <Margin height={12} />

      <FriendSection
        friendProfileLen={friendProfiles.length}
        onPressArrow={onPressArrow}
      />

      <FriendList data={friendProfiles} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: statusBarHeight,
    // paddingBottom: bottomSpace,
    backgroundColor: "#fff",
    paddingHorizontal: 15,
  },
});
