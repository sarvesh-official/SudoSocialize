import { useState } from "react"
import { BsSend } from "react-icons/bs"
import UseSendMessage from "../../../Hooks/UseSendMessage"

export const MessageInput = () => {
  const [message,setMessage] = useState("")
  const {loading,sendMessage} = UseSendMessage()

  const handleSubmit = async (e) =>{
      e.preventDefault()
      if(!message) return
      await sendMessage(message)
      setMessage("") 


  }
  return (
    <form className="px-4 my-3" onSubmit={handleSubmit}>
        <div className="w-full relative">
            <input type="text" className="border text-sm rounded-lg block w-full p-2.5 bg-gray-700 border-gray-600 text-white"
            placeholder="Send a message" value={message} onChange={(e) =>setMessage(e.target.value)} />
            <button type="submit" className="absolute inset-y-0 end-0 flx items-center pe-3">
                {loading ? <div className="loading loading-spinner"></div> : <BsSend/>}
            </button>
        </div>
    </form>
  )
}


