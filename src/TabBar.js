import { TouchableOpacity, View } from "react-native";
import { Fontisto } from "@expo/vector-icons";
import { Ionicons } from "@expo/vector-icons";
import { getBottomSpace } from "react-native-iphone-x-helper";

const bottomSpace = getBottomSpace();

const TabButton = ({
  isSelectd,
  onPress,
  activeIconName,
  inactiveIconName,
  isIconFontisto,
  isIconIonicons,
}) => {
  return (
    <TouchableOpacity
      activeOpacity={1}
      onPress={onPress}
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        paddingVertical: 10,
      }}
    >
      {isIconFontisto && (
        <Fontisto
          name={isSelectd ? activeIconName : inactiveIconName}
          size={24}
          color="black"
        />
      )}
      {isIconIonicons && (
        <Ionicons
          name={isSelectd ? activeIconName : inactiveIconName}
          size={24}
          color="black"
        />
      )}
    </TouchableOpacity>
  );
};

export default (props) => {
  return (
    <View
      style={{
        flexDirection: "row",
        width: "100%",
        paddingBottom: bottomSpace,
        borderTopWidth: 0.5,
        borderTopColor: "lightgrey",
        backgroundColor: "#f5f5f5",
      }}
    >
      <TabButton
        isSelectd={props.selectedTabIdx === 0}
        onPress={() => props.setSelectedTabIdx(0)}
        activeIconName={"person"}
        inactiveIconName={"persons"}
        isIconFontisto
      />
      <TabButton
        isSelectd={props.selectedTabIdx === 1}
        onPress={() => props.setSelectedTabIdx(1)}
        activeIconName={"chatbubble"}
        inactiveIconName={"chatbubble-outline"}
        isIconIonicons
      />
      <TabButton
        isSelectd={props.selectedTabIdx === 2}
        onPress={() => props.setSelectedTabIdx(2)}
        activeIconName={"pricetag"}
        inactiveIconName={"pricetag-outline"}
        isIconIonicons
      />
      <TabButton
        isSelectd={props.selectedTabIdx === 3}
        onPress={() => props.setSelectedTabIdx(3)}
        activeIconName={"add-circle"}
        inactiveIconName={"add-circle-outline"}
        isIconIonicons
      />
    </View>
  );
};
