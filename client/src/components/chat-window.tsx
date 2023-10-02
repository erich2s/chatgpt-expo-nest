import { View, Text, Image, Pressable } from "react-native";
import Logo from "./logo";
import { FlatList } from "react-native-gesture-handler";
import Header from "./header";
import { useAtom } from "jotai";
import { messagesAtom } from "@/stores/messages";
import { useEffect, useRef, useState } from "react";

export default function ChatWindow() {
  const [messages, setMessages] = useAtom(messagesAtom);
  const flatListRef = useRef<FlatList>(null);
  useEffect(() => {
    if (flatListRef.current) {
      flatListRef.current.scrollToEnd({ animated: true });
    }
  }, [messages]);

  return (
    <View style={{ flex: 1, width: "100%" }}>
      {messages.length > 0 ? (
        <>
          <Header />
          <View
            style={{
              flex: 1,
            }}
          >
            <FlatList
              ref={flatListRef}
              data={messages}
              renderItem={({ item }) => (
                <View
                  style={{
                    alignSelf: item.isBot ? "flex-start" : "flex-end",
                  }}
                >
                  {/* Sender */}
                  {item.isBot && (
                    <View
                      style={{
                        flexDirection: "row",
                        alignItems: "center",
                        gap: 5,
                        marginBottom: 5,
                      }}
                    >
                      <View
                        style={{
                          padding: 5,
                          backgroundColor: "#a21caf",
                          borderRadius: 999,
                        }}
                      >
                        <Image
                          source={require("@/assets/chatgpt-white.png")}
                          style={{ width: 15, height: 15 }}
                        />
                      </View>
                      <Text
                        style={{
                          color: "#a1a1aa",
                          fontWeight: "bold",
                          fontSize: 12,
                        }}
                      >
                        {item.isBot && "CHATGPT"}
                      </Text>
                    </View>
                  )}
                  {/* Messages area */}
                  <View
                    style={{
                      backgroundColor: item.isBot
                        ? "rgba(0,0,0,0.05)"
                        : "#a21caf",
                      paddingHorizontal: 15,
                      paddingVertical: 10,
                      borderRadius: 25,
                      marginBottom: 10,
                      maxWidth: "80%",
                    }}
                  >
                    <Text
                      style={{
                        color: item.isBot ? "black" : "white",
                        fontFamily: "Inter_500Medium",
                      }}
                    >
                      {item.text}
                    </Text>
                  </View>
                </View>
              )}
              keyExtractor={(item, index) => index.toString()}
              style={{ flex: 1, width: "100%" }}
              contentContainerStyle={{
                paddingHorizontal: 25,
              }}
            />
          </View>
        </>
      ) : (
        <Logo />
      )}
    </View>
  );
}
