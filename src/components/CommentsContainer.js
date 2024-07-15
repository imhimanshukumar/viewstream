import React from "react";

const initialCommentsData = [
  {
    name: "Himanshu Singh",
    text: "This project is amazing!",
    replies: [],
  },
  {
    name: "Ayush Singh",
    text: "Hi everyone!",
    replies: [
      {
        name: "Harsh",
        text: "Hello Ayush!",
        replies: [],
      },
      {
        name: "Ayush Singh",
        text: "How are you, Harsh?",
        replies: [
          {
            name: "Harsh",
            text: "I'm good, thanks! How about you?",
            replies: [
              {
                name: "Ayush Singh",
                text: "Doing great, thanks for asking!",
                replies: [
                  {
                    name: "Harsh",
                    text: "Let's meet up soon.",
                    replies: [
                      {
                        name: "Ayush Singh",
                        text: "Sure, looking forward to it!",
                        replies: [],
                      },
                    ],
                  },
                  {
                    name: "Yash",
                    text: "Hi",
                    replies: [],
                  },
                ],
              },
            ],
          },
        ],
      },
    ],
  },
  {
    name: "Tripti Pathak",
    text: "Great work!",
    replies: [],
  },
  {
    name: "Tripti Pathak",
    text: "Keep it up!",
    replies: [],
  },
  {
    name: "Tripti Pathak",
    text: "Hello everyone!",
    replies: [],
  },
  {
    name: "Tripti Pathak",
    text: "Hey there!",
    replies: [],
  },
];

const Comment = ({ data }) => {
  const { name, text, replies } = data;
  return (
    <div className="flex shadow-sm bg-slate-100 text-black p-2 rounded-lg my-2 text-sm">
      <img
        className="w-8 h-8 rounded-full"
        alt="user"
        src="https://www.iconpacks.net/icons/2/free-user-icon-3296-thumb.png"
        
      />
      <div className="px-3">
        <p className="font-bold">{name}</p>
        <p>{text}</p>
        {replies.length > 0 && (
          <div className="pl-5 border-l-2 border-gray-600 mt-2">
            <CommentsList comments={replies} />
          </div>
        )}
      </div>
    </div>
  );
};

const CommentsList = ({ comments }) => {
  return comments.map((comment, index) => (
    <div key={index}>
      <Comment data={comment} />
    </div>
  ));
};

const CommentsContainer = () => {
  return (
    <div className="m-5 p-4 bg-slate-100 text-black rounded-lg border border-gray-600">
      <h1 className="text-2xl font-bold mb-4">Comments:</h1>
      <CommentsList comments={initialCommentsData} />
    </div>
  );
};

export default CommentsContainer;
