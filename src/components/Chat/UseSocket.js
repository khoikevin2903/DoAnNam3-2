import React, {useState } from 'react';
import { SOCKET_URL } from '../../constants/Socket_URL';
import useSockjs from 'react-use-sockjs';

const UseSocket = () => {
    const [data, setData] = useState({});

    const { sendMessage } = useSockjs({
        url: SOCKET_URL,
        
        onMessage: (body, destination) => {
            console.log(body, destination);
            setData(body);
        },
    });
    return <div>text</div>
}

export default UseSocket;