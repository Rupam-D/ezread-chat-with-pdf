"use client"

import { sendMessage } from "@/controllers/sendMessage"
import { ChatContextTypes } from "@/types/types"
import { useMutation } from "@tanstack/react-query"
import { useChat } from "ai/react"
import { ChangeEvent, ReactNode, createContext, useState } from "react"

import { Message } from "ai"


interface ContextTypes {
  allMessages: Message[];
  typedInp: string;
  handleInpChange: (e: ChangeEvent<HTMLTextAreaElement>) => void;
  handleSmt: (e: React.FormEvent<HTMLFormElement>) => void;
  loading: boolean
}

// create context
export const chatContext = createContext<ContextTypes>({
  allMessages: [],
  typedInp: "",
  handleInpChange: () => { },
  handleSmt: () => { },
  loading: false

  // msg: "",
  // isLoading: false,
  // handleInputChanged: (ev: ChangeEvent<HTMLTextAreaElement>) => { },
  // sendMsg: () => { }

})

// Provider
const Store = ({ children, fileKey }: { children: ReactNode, fileKey: string }) => {
  const { messages, input, handleInputChange, handleSubmit, isLoading, error } = useChat({
    body: {
      fileKey
    }
  })
  const loading = isLoading
  const allMessages = messages
  const typedInp = input
  const handleInpChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
    handleInputChange(e)
  }
  const handleSmt = (e: React.FormEvent<HTMLFormElement>) => {
    handleSubmit(e)
  }
  // const [msg, setMsg] = useState<string>("");
  // const [isLoading, setIsLoading] = useState<boolean>(false)

  // // react query to send response in a stream effect
  // const { mutate: addMsg } = useMutation({
  //   mutationFn: sendMessage
  // })

  // const handleInputChanged = (ev: ChangeEvent<HTMLTextAreaElement>) => {
  //   setMsg(ev.target.value)
  // }
  // const sendMsg = () => addMsg({ message: msg, fileKey })


  return (
    <chatContext.Provider
      value={{ allMessages, typedInp, handleInpChange, handleSmt, loading }}>
      {children}
    </chatContext.Provider>
  )
}

export default Store
