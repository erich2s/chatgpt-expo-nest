import { View, Text } from "react-native";
import Logo from "./logo";
import { useEffect, useState } from "react";
import { FlatList } from "react-native-gesture-handler";
import Header from "./header";

export default function ChatWindow() {
  const [messages, setMessages] = useState([
    {
      id: 0,
      text: "Hello, how can i help you today?",
      sender: "other",
    },
    {
      id: 1,
      text: "Hello ds gfd df hgudsh ih dsi hfdis  hfdsh fieuh f hfewih f",
      sender: "me",
    },
    {
      id: 2,
      text: "Ipsum ad velit laboris sunt sint et consectetur quis.",
      sender: "other",
    },
    {
      id: 3,
      text: "Veniam eu sunt nostrud elit ullamco qui velit pariatur id magna elit ad est elit Lorem.",
      sender: "me",
    },
    {
      id: 4,
      text: "Culpa occaecat elit commodo veniam non ex voluptate nostrud excepteur sint velit ipsum.",
      sender: "other",
    },
    {
      id: 5,
      text: "Ipsum incididunt Lorem cupidatat quis ea excepteur cillum incididunt do.",
      sender: "me",
    },
    {
      id: 6,
      text: "Veniam eu sunt nostrud elit ullamco qui velit pariatur id magna elit ad est elit Lorem.",
      sender: "other",
    },
    {
      id: 7,
      text: "Officia id mollit cillum do aliqua magna anim sint enim.",
      sender: "me",
    },
    {
      id: 8,
      text: "Hello ds gfd df hgudsh ih dsi hfdis  hfdsh fieuh f hfewih f",
      sender: "other",
    },
    {
      id: 9,
      text: "Hello ds gfd df hgudsh ih dsi hfdis  hfdsh fieuh f hfewih f",
      sender: "me",
    },
    {
      id: 10,
      text: "Hello ds gfd df hgudsh ih dsi hfdis  hfdsh fieuh f hfewih f",
      sender: "me",
    },
  ]);
  //   useEffect(() => {
  //     setMessages([]);
  //   }, []);
  return (
    <View
      style={{
        flex: 1,
        width: "100%",
      }}
    >
      {messages.length > 0 ? (
        <>
          <Header />
          <FlatList
            data={messages}
            renderItem={({ item }) => (
              <View
                style={{
                  alignSelf: item.sender === "me" ? "flex-end" : "flex-start",
                  backgroundColor: item.sender === "me" ? "#a21caf" : "#e4e4e7",
                  paddingHorizontal: 20,
                  paddingVertical: 10,
                  borderRadius: 90,
                  marginBottom: 10,
                  maxWidth: "80%",
                }}
              >
                <Text
                  style={{ color: item.sender === "me" ? "white" : "black" }}
                >
                  {item.text}
                </Text>
              </View>
            )}
            keyExtractor={(item) => item.id.toString()}
            style={{ flex: 1, width: "100%" }}
            contentContainerStyle={{
              justifyContent: "flex-end",
              paddingHorizontal: 25,
              paddingBottom: 50,
            }}
          />
        </>
      ) : (
        <>
          <Logo />
        </>
      )}
    </View>
  );
}
