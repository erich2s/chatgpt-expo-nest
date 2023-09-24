import { TextInput, TouchableOpacity } from "react-native-gesture-handler";
import { View } from "react-native";
import { Feather } from "@expo/vector-icons";
import { useMemo, useState } from "react";
export default function InputMsg() {
  const [text, setText] = useState("");
  const isEmpty = useMemo(() => {
    return text.length === 0;
  }, [text]);
  return (
    <View
      style={{
        position: "absolute",
        bottom: 0,
        width: "100%",
        flexDirection: "row",
        alignItems: "center",
        gap: 10,
        paddingHorizontal: 10,
        paddingTop: 10,
        backgroundColor: "white",
      }}
    >
      <TextInput
        returnKeyType="send"
        style={{
          height: 40,
          flex: 1,
          borderColor: "rgba(0,0,0,0.2)",
          borderWidth: 1,
          borderRadius: 20,
          paddingHorizontal: 15,
        }}
        placeholder="Message"
        placeholderTextColor="#9ca3af"
        onChangeText={(text) => setText(text)}
        value={text}
        onKeyPress={(e) => {
          console.log(e.nativeEvent.key);
        }}
      />
      <TouchableOpacity
        disabled={isEmpty}
        style={{
          justifyContent: "center",
          alignItems: "center",
          width: 36,
          height: 36,
          backgroundColor: isEmpty ? "#a78bfa" : "#a21caf",
          borderRadius: 9999,
        }}
        onPress={() => {
          alert(text);
          setText("");
        }}
      >
        <Feather name="send" size={20} color="white" />
      </TouchableOpacity>
    </View>
  );
}
