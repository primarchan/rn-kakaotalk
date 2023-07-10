import { Image, Text, View } from "react-native";
import Margin from "./Margin";

export default (props) => {
  const size = props.isMe ? 50 : 40;

  return (
    <View style={{ flexDirection: "row" }}>
      <Image
        source={{ uri: props.uri }}
        style={{ width: size, height: size, borderRadius: size * 0.4 }}
      />
      <View style={{ justifyContent: "center", marginLeft: 10 }}>
        <Text
          style={{
            fontWeight: props.isMe ? "bold" : undefined,
            fontSize: props.isMe ? 16 : 15,
          }}
        >
          {props.name}
        </Text>
        {!!props.introduction && (
          <View>
            <Margin height={props.isMe ? 6 : 2} />
            <Text style={{ fontSize: props.isMe ? 12 : 11, color: "grey" }}>
              {props.introduction}
            </Text>
          </View>
        )}
      </View>
    </View>
  );
};
