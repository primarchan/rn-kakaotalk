import { ScrollView } from "react-native";
import Profile from "./Profile";
import { getBottomSpace } from "react-native-iphone-x-helper";
import { View } from "react-native";
import Margin from "./Margin";

const bottomSpace = getBottomSpace();

export default (props) => {
  /**
   * Case 1. 삼항연산자
   */
  // return props.isOpened ? (
  //   <ScrollView
  //     showsVerticalScrollIndicator={false}
  //     contentContainerStyle={{ paddingBottom: bottomSpace }}
  //   >
  //     {props.data.map((item, index) => (
  //       <View key={index}>
  //         <Profile
  //           uri={item.uri}
  //           name={item.name}
  //           introduction={item.introduction}
  //         />
  //         <Margin height={13} />
  //       </View>
  //     ))}
  //   </ScrollView>
  // ) : null;

  /**
   * Case 2. if 문으로 예외처리
   */
  if (!props.isOpened) return null;
  return (
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

  /**
   * Case 3. && 이용
   */
  // return (
  //   props.isOpened && (
  //     <ScrollView
  //       showsVerticalScrollIndicator={false}
  //       contentContainerStyle={{ paddingBottom: bottomSpace }}
  //     >
  //       {props.data.map((item, index) => (
  //         <View key={index}>
  //           <Profile
  //             uri={item.uri}
  //             name={item.name}
  //             introduction={item.introduction}
  //           />
  //           <Margin height={13} />
  //         </View>
  //       ))}
  //     </ScrollView>
  //   )
  // );
};
