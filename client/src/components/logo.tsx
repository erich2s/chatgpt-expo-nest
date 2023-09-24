import { View, Text, Image } from "react-native";

export default function logo() {
  return (
    <View
      style={{
        gap: 3,
        position: "absolute",
        alignSelf: "center",
        top: "52%",
        transform: [{ translateY: -50 }],
      }}
    >
      <Image
        source={require("@/assets/chatgpt.png")}
        style={{
          width: 50,
          height: 50,
          resizeMode: "contain",
          alignSelf: "center",
        }}
      />
      <Text
        style={{
          justifyContent: "center",
          alignItems: "center",
          textAlign: "center",
          fontWeight: "600",
          fontSize: 20,
        }}
      >
        ChatGPT
      </Text>
      <Text
        style={{
          justifyContent: "center",
          alignItems: "center",
          textAlign: "center",
          fontSize: 16,
          color: "#9ca3af",
        }}
      >
        expo-nest-clone
      </Text>
    </View>
  );
}
