import React, { useRef, useState, useEffect } from "react";
import { RiSendPlane2Fill } from "react-icons/ri";
import { Input } from "../ChatMessage/StyledChatMessage";
import { ChatBody, ChatContainer, ChatFooter, MessageContainer, MessageText } from "./StyledChatMessage";

export default function Chat({ socket, userData, dataUserMessage }) {
  const bottomRef = useRef();
  const messageRef = useRef();
  const [messageList, setMessageList] = useState([]);
  const [oldMessages, setOldMessages] = useState([]);

  useEffect(() => {
    if (socket) {
      socket.emit("get_old_messages", dataUserMessage.name, userData.id);
    }

    if (socket) {
      socket.on("old_messages", (data) => {
        setOldMessages(data);
      });

      socket.on("error_old_messages", (error) => {
        console.error("Erro ao obter mensagens antigas:", error);
      });

      return () => {
        socket.off("old_messages");
        socket.off("error_old_messages");
      };
    }
  }, [socket, userData.id])

  useEffect(() => {
    if (socket) {
      socket.on("receive_private_message", (data) => {
        console.log("Mensagem privada recebida:", data);
        setMessageList((current) => [...current, data]);
      });
      return () => socket.off("receive_private_message");
    }
  }, [socket]);

  useEffect(() => {
    scrollDown();
  }, [messageList]);

  const handleSubmit = () => {
    const message = messageRef.current.value;
    const recipient = userData.id;

    if (!message.trim() || !recipient.trim()) return;

    if (socket) {
      socket.emit("private_message", { recipient, text: message });
    }

    clearInput();
    focusInput();
    console.log(message.authorId)
  };

  const clearInput = () => {
    messageRef.current.value = "";
  };

  const focusInput = () => {
    messageRef.current.focus();
  };

  const getEnterKey = (e) => {
    if (e.key === "Enter") handleSubmit();
  };

  const scrollDown = () => {
    bottomRef.current.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div>
      <ChatContainer>
        <ChatBody>
          {oldMessages.map((message) => (
            <MessageContainer
              className={message.send_id_user === dataUserMessage.name ? "message-mine" : ""}
              key={message.id}
            >
              <div>
                <MessageText>{message.message}</MessageText>
              </div>
            </MessageContainer>
          ))}
          {messageList.map((message, index) => (
            <MessageContainer
              className={message.authorId === socket.id ? "message-mine" : ""}
              key={index}
            >
              <div>
                <MessageText>{message.text}</MessageText>
              </div>
            </MessageContainer>
          ))}
          <div ref={bottomRef} />
        </ChatBody>
        <ChatFooter>
          <Input
            ref={messageRef}
            placeholder="Mensagem"
            onKeyDown={(e) => getEnterKey(e)}
          />
          <RiSendPlane2Fill
            size="50px"
            color="#ebc556"
            onClick={() => handleSubmit()}
          />
        </ChatFooter>
      </ChatContainer>
    </div>
  );
}
