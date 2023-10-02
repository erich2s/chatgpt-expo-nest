import { TextInput, TouchableOpacity } from "react-native-gesture-handler";
import { View, ActivityIndicator, Text } from "react-native";
import { Feather } from "@expo/vector-icons";
import { useMemo, useState } from "react";
import { useAtom } from "jotai";
import { messagesAtom } from "@/stores/messages";
import { chat } from "@/utils/api";
export default function InputMsg() {
  const [text, setText] = useState("");
  const isEmpty = useMemo(() => {
    return text.length === 0;
  }, [text]);
  const [isLoading, setIsLoading] = useState(false);
  const [messages, setMessages] = useAtom(messagesAtom);
  async function send() {
    const temp = text;
    setText("");
    setIsLoading(true);
    setMessages((prev) => [...prev, { isBot: false, text: temp }]);
    const res = await chat(temp);
    console.log(res);
    setMessages((prev) => [...prev, { isBot: true, text: res }]);
    setIsLoading(false);
  }
  return (
    <View
      style={{
        position: "relative",
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
      <View style={{ position: "relative", flex: 1 }}>
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
          onSubmitEditing={send}
        />
        <ActivityIndicator
          style={{
            position: "absolute",
            right: 15,
            height: "100%",
          }}
          animating={isLoading}
        />
      </View>

      <TouchableOpacity
        disabled={isEmpty || isLoading}
        style={{
          justifyContent: "center",
          alignItems: "center",
          width: 36,
          height: 36,
          backgroundColor: isEmpty ? "#a78bfa" : "#a21caf",
          borderRadius: 9999,
        }}
        onPress={send}
      >
        <Feather name="send" size={20} color="white" />
      </TouchableOpacity>
    </View>
  );
}
