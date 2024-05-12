import React, { useState } from 'react';
import io from "socket.io-client";
import { useEffect } from 'react';
import { useLocation } from "react-router-dom";

const socket = io.connect("http://localhost:5000");

const Chat = () => {
  const { search } = useLocation();
  const [ params, setParams ] = useState(null);

  console.log("location", location);
  useEffect(() => {
    const params = new URLSearchParams(search);
    const searchParams = Object.fromEntries(params.entries());
    setParams(searchParams)
    socket.emit('join', searchParams);
  }, [search]);

  return (
    <div>Chat</div>
  )
}

export default Chat