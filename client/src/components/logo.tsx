import { View, Text, Image } from "react-native";

export default function logo() {
  return (
    <View
      style={{
        gap: 3,
        position: "absolute",
        alignSelf: "center",
        top: "50%",
        transform: [{ translateY: -50 }],
      }}
    >
      <Image
        source={require("@/assets/chatgpt.png")}
        style={{
          width: 65,
          height: 65,
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
          fontSize: 24,
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
        expo-nest
      </Text>
    </View>
  );
}
