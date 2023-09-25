import { atom } from "jotai";
type Message = {
  text: string;
  isBot: boolean;
};

export const messagesAtom = atom<Message[]>([]);
