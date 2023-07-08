import { ScrollView } from "react-native";
import Profile from "./Profile";
import { getBottomSpace } from "react-native-iphone-x-helper";
import { View } from "react-native";
import Margin from "./Margin";

const bottomSpace = getBottomSpace();

export default (props) => {
  return (
    // 스크롤바 비노출
    <ScrollView
      showsVerticalScrollIndicator={false}
      contentContainerStyle={{ paddingBottom: bottomSpace }}
    >
      {props.data.map((item, index) => (
        <View key={index}>
          <Profile
            uri={item.uri}
            name={item.name}
            introduction={item.introduction}
          />
          <Margin height={13} />
        </View>
      ))}
    </ScrollView>
  );
};
