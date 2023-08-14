import React from 'react'
import './Message.css'
import { useState, useEffect } from 'react'

const Message = ({msg,type}) => {
    const [visible, setVisible] = useState(false);

    useEffect(()=>{
        if(!msg){
            setVisible(false)
            return
        }
        setVisible(true)

        const timer = setTimeout(() => {
            setVisible(false)
        }, 3000)
        return () => clearTimeout(timer)
    },[msg])

    return (
        <>
            {visible && (
                <div className={`${"message"} ${type}`}>{msg}</div>
            )}
        </>
        )
    }

export default Message