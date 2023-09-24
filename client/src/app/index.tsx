import { KeyboardAvoidingView, Platform, View } from "react-native";
import InputMsg from "@/components/input-msg";
import ChatWindow from "@/components/chat-window";
import { StatusBar } from "expo-status-bar";

export default function index() {
  return (
    <KeyboardAvoidingView
      style={{
        flex: 1,
      }}
      behavior={Platform.OS === "ios" ? "padding" : "height"}
      keyboardVerticalOffset={10}
    >
      <StatusBar style="auto" />
      <View
        style={{
          flex: 1,
          position: "relative",
          alignContent: "center",
        }}
      >
        <ChatWindow />
        <InputMsg />
      </View>
    </KeyboardAvoidingView>
  );
}
