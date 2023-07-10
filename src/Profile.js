import { Image, Text, View } from "react-native";
import Margin from "./Margin";
import styled from "styled-components/native";

const Container = styled.View`
  flex-direction: row;
`;

const ProfileImage = styled.Image`
  width: ${(props) => props.size}px;
  height: ${(props) => props.size}px;
  border-radius: ${(props) => props.size * 0.4}px;
`;

const TextContainer = styled.View`
  justify-content: center;
  margin-left: 10;
`;

const NameText = styled.Text`
  font-weight: ${(props) => (props.isMe ? "bold" : "normal")};
  font-size: ${(props) => (props.isMe ? 16 : 15)};
`;

const IntroductionText = styled.Text`
  font-size: ${(props) => (props.isMe ? 12 : 11)};
  color: grey;
`;

export default (props) => {
  const size = props.isMe ? 50 : 40;

  return (
    // <View style={{ flexDirection: "row" }}>
    <Container>
      <ProfileImage source={{ uri: props.uri }} size={size} />
      <TextContainer>
        <NameText isMe={props.isMe}>{props.name}</NameText>
        {!!props.introduction && (
          <View>
            <Margin height={props.isMe ? 6 : 2} />
            <IntroductionText isMe={props.isMe}>
              {props.introduction}
            </IntroductionText>
          </View>
        )}
      </TextContainer>
    </Container>
    // </View>
  );
};
