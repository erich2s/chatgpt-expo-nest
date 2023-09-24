import { atom } from "jotai";
type Message = {
  text: string;
  isBot: boolean;
};

export const messagesAtom = atom<Message[]>([
  { text: "Welcome to ChatGPT", isBot: true },
  { text: "Hello", isBot: false },
  { text: "Hi there", isBot: true },
  { text: "How can I help you?", isBot: false },
  { text: "This is a sample message", isBot: true },
  { text: "Nice to meet you", isBot: false },
  { text: "Random text 1", isBot: true },
  { text: "Another message", isBot: false },
  { text: "Lorem ipsum dolor sit amet", isBot: true },
  { text: "Test message", isBot: false },
  {
    text: "Nostrud consectetur qui culpa ut et qui officia ex occaecat tempor tempor ad. Ipsum sint id laborum adipisicing est elit ullamco tempor et id nulla. Pariatur non ullamco ullamco incididunt magna minim. Quis nostrud do pariatur sunt id quis exercitation amet in sit exercitation ad non exercitation. Aliquip et dolor occaecat adipisicing quis aliquip anim amet excepteur amet. Culpa elit cillum commodo amet sit irure cupidatat non.",
    isBot: true,
  },
  {
    text: "Non tempor velit id irure laborum Lorem do nostrud cupidatat commodo voluptate. Minim mollit labore tempor ullamco deserunt officia cupidatat labore ex sint voluptate veniam do consequat. Adipisicing officia elit aute irure ut veniam irure fugiat velit ut sunt ea laborum. Duis nostrud aliquip eiusmod dolor officia sint nulla dolore ea eu qui. Duis exercitation velit commodo eu voluptate excepteur tempor duis pariatur ut adipisicing consectetur commodo enim. Est in mollit excepteur sit ad ad laborum aliquip aliqua cillum et veniam.",
    isBot: false,
  },
]);
