import { View } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
import { Entypo } from "@expo/vector-icons";
import { useAtom } from "jotai";
import { messagesAtom } from "@/stores/messages";
export default function Header() {
  const [messages, setMessages] = useAtom(messagesAtom);
  function resetMessages() {
    setMessages([]);
  }
  return (
    <View
      style={{
        width: "100%",
        height: 50,
        paddingHorizontal: 25,
        flexDirection: "row",
        justifyContent: "flex-end",
      }}
    >
      <TouchableOpacity
        style={{
          width: 40,
          height: 40,
          borderRadius: 12,
          justifyContent: "center",
          alignItems: "center",
          backgroundColor: "rgba(0,0,0,0.05)",
        }}
        onPress={resetMessages}
      >
        <Entypo name="plus" size={24} color="black" />
      </TouchableOpacity>
    </View>
  );
}
