import { View } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
import { Entypo } from "@expo/vector-icons";
export default function Header() {
  return (
    <View
      style={{
        width: "100%",
        height: 50,
        paddingHorizontal: 25,
        flexDirection: "row",
        alignItems: "center",
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
      >
        <Entypo name="plus" size={24} color="black" />
      </TouchableOpacity>
    </View>
  );
}
