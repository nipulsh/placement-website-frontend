import React, { useState } from "react";

const StudentMessages = () => {
  const [selectedChat, setSelectedChat] = useState(null);

  // Dummy data for conversations
  const conversations = [
    {
      id: 1,
      name: "Tech Corp HR",
      lastMessage: "Your interview is scheduled for tomorrow at 10 AM",
      time: "10:30 AM",
      unread: 2,
      avatar: "TC",
      status: "online",
    },
    {
      id: 2,
      name: "Dr. Smith",
      lastMessage: "Please submit your internship report by Friday",
      time: "Yesterday",
      unread: 0,
      avatar: "DS",
      status: "offline",
    },
    {
      id: 3,
      name: "Career Services",
      lastMessage: "New job opportunities available for your profile",
      time: "2 days ago",
      unread: 1,
      avatar: "CS",
      status: "online",
    },
  ];

  // Dummy data for messages
  const messages = {
    1: [
      {
        id: 1,
        sender: "Tech Corp HR",
        message: "Hello! We reviewed your application",
        time: "10:00 AM",
        isReceived: true,
      },
      {
        id: 2,
        sender: "You",
        message: "Thank you for considering my application",
        time: "10:05 AM",
        isReceived: false,
      },
      {
        id: 3,
        sender: "Tech Corp HR",
        message: "Your interview is scheduled for tomorrow at 10 AM",
        time: "10:30 AM",
        isReceived: true,
      },
    ],
  };

  return (
    <div className="h-[calc(100vh-4rem)] bg-gray-50 p-6">
      <div className="max-w-7xl mx-auto h-full">
        <div className="bg-white rounded-xl shadow-sm h-full overflow-hidden">
          <div className="grid grid-cols-12 h-full">
            {/* Conversations List */}
            <div className="col-span-4 border-r border-gray-100">
              <div className="p-4 border-b border-gray-100">
                <h2 className="text-xl font-semibold text-gray-800">
                  Messages
                </h2>
                <div className="mt-4">
                  <input
                    type="text"
                    placeholder="Search conversations..."
                    className="text-black w-full px-4 py-2 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                  />
                </div>
              </div>
              <div className="overflow-y-auto h-[calc(100%-5rem)]">
                {conversations.map((chat) => (
                  <div
                    key={chat.id}
                    onClick={() => setSelectedChat(chat.id)}
                    className={`p-4 cursor-pointer hover:bg-gray-50 transition-colors ${
                      selectedChat === chat.id ? "bg-purple-50" : ""
                    }`}
                  >
                    <div className="flex items-center space-x-3">
                      <div className="relative">
                        <div className="w-12 h-12 rounded-full bg-purple-100 flex items-center justify-center">
                          <span className="text-purple-600 font-semibold">
                            {chat.avatar}
                          </span>
                        </div>
                        <span
                          className={`absolute bottom-0 right-0 w-3 h-3 rounded-full border-2 border-white ${
                            chat.status === "online"
                              ? "bg-green-500"
                              : "bg-gray-300"
                          }`}
                        ></span>
                      </div>
                      <div className="flex-1 min-w-0">
                        <div className="flex justify-between items-start">
                          <h3 className="text-sm font-medium text-gray-900 truncate">
                            {chat.name}
                          </h3>
                          <span className="text-xs text-gray-500">
                            {chat.time}
                          </span>
                        </div>
                        <p className="text-sm text-gray-500 truncate">
                          {chat.lastMessage}
                        </p>
                      </div>
                      {chat.unread > 0 && (
                        <div className="ml-2 bg-purple-600 text-white text-xs font-medium px-2 py-1 rounded-full">
                          {chat.unread}
                        </div>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Chat Area */}
            <div className="col-span-8 flex flex-col h-full">
              {selectedChat ? (
                <>
                  {/* Chat Header */}
                  <div className="p-4 border-b border-gray-100">
                    <div className="flex items-center space-x-3">
                      <div className="w-10 h-10 rounded-full bg-purple-100 flex items-center justify-center">
                        <span className="text-purple-600 font-semibold">
                          {
                            conversations.find((c) => c.id === selectedChat)
                              ?.avatar
                          }
                        </span>
                      </div>
                      <div>
                        <h3 className="text-sm font-medium text-gray-900">
                          {
                            conversations.find((c) => c.id === selectedChat)
                              ?.name
                          }
                        </h3>
                        <p className="text-xs text-gray-500">
                          {conversations.find((c) => c.id === selectedChat)
                            ?.status === "online"
                            ? "Online"
                            : "Offline"}
                        </p>
                      </div>
                    </div>
                  </div>

                  {/* Messages */}
                  <div className="flex-1 overflow-y-auto p-4 space-y-4">
                    {messages[selectedChat]?.map((msg) => (
                      <div
                        key={msg.id}
                        className={`flex ${
                          msg.isReceived ? "justify-start" : "justify-end"
                        }`}
                      >
                        <div
                          className={`max-w-[70%] rounded-lg px-4 py-2 ${
                            msg.isReceived
                              ? "bg-gray-100 text-gray-900"
                              : "bg-purple-600 text-white"
                          }`}
                        >
                          <p className="text-sm">{msg.message}</p>
                          <p
                            className={`text-xs mt-1 ${
                              msg.isReceived
                                ? "text-gray-500"
                                : "text-purple-100"
                            }`}
                          >
                            {msg.time}
                          </p>
                        </div>
                      </div>
                    ))}
                  </div>

                  {/* Message Input */}
                  <div className="p-4 border-t border-gray-100">
                    <div className="flex space-x-4">
                      <input
                        type="text"
                        placeholder="Type your message..."
                        className="flex-1 px-4 py-2 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                      />
                      <button className="px-6 py-2 bg-purple-600 text-white rounded-lg hover:bg-purple-700 transition-colors">
                        Send
                      </button>
                    </div>
                  </div>
                </>
              ) : (
                <div className="flex-1 flex items-center justify-center">
                  <div className="text-center">
                    <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-purple-100 flex items-center justify-center">
                      <span className="text-2xl text-purple-600">💬</span>
                    </div>
                    <h3 className="text-lg font-medium text-gray-900">
                      Select a conversation
                    </h3>
                    <p className="text-gray-500 mt-1">
                      Choose a chat to start messaging
                    </p>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default StudentMessages;
