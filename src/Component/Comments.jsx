import React from 'react'

export default function Comments(props) {
  return (
    <div className='comments'>
        <div className="comment-box">
            <div className="com-head">
                <div className="com-name">{props.send.userDisplayName}</div>
                <div className="com-date">{props.send.commentCreatedAt?.toDate()?.toLocaleString('en-IN',{
                  timeZone: "Asia/Kolkata",
                  weekday: "short",
                  day: "2-digit",
                  month: "short",
                  year: "numeric",
                  hour: "2-digit",
                  minute: "2-digit",
                  second: "2-digit",
                }).replace(/,/g," ")}</div>
            </div>
            <div className="com-body">
                <p>{props.send.comments}</p>
            </div>
        </div>
    </div>
  )
}
