import Image from "next/image";
import React from "react";
import FormComment from "./FormComment";
// require blogId, commentId, comment, author, date, replies
const commentsData = [
  {
    blogId: 1,
    commentId: 1,
    commentContent:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam, accusamus. lorem Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam, accusamus. lorem Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam, accusamus. lorem",
    authorCommentName: "Lã Win",
    authorCommentImage: "/images/img-creator-win.jpg",
    commentDate: "22 tháng 12 năm 2021",
    replies: [
      {
        commentId: 1,
        replyId: 1,
        replyContent:
          "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam, accusamus.",
        authorReplyName: "Lã Win 2",
        authorReplyImage: "/images/img-creator-win.jpg",
        replyDate: "22 tháng 12 năm 2021",
      },
      {
        commentId: 1,
        replyId: 2,
        replyContent:
          "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam, accusamus.",
        authorReplyName: "Lã Win 2",
        authorReplyImage: "/images/img-creator-win.jpg",
        replyDate: "22 tháng 12 năm 2021",
      },
    ],
  },
  {
    blogId: 1,
    commentId: 2,
    commentContent:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam, accusamus.",
    authorCommentName: "Lã Win",
    authorCommentImage: "/images/img-creator-win.jpg",
    commentDate: "22 tháng 12 năm 2021",
    replies: [
      {
        commentId: 2,
        replyId: 1,
        replyContent:
          "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam, accusamus.",
        authorReplyName: "Lã Win 2",
        authorReplyImage: "/images/img-creator-win.jpg",
        replyDate: "22 tháng 12 năm 2021",
      },
      {
        commentId: 2,
        replyId: 2,
        replyContent:
          "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam, accusamus.",
        authorReplyName: "Lã Win 2",
        authorReplyImage: "/images/img-creator-win.jpg",
        replyDate: "22 tháng 12 năm 2021",
      },
    ],
  },
];

const Comments = () => {
  return (
    <div className="max-w-4xl mx-auto flex flex-col gap-4">
      <h3 className="font-bold text-xl">{6} Comments</h3>
      <FormComment />
      <ul className="flex flex-col gap-2">
        {commentsData.map((comment) => (
          <li key={comment.blogId} className="flex flex-col gap-2">
            <div className={`z-10 flex relative gap-4 mt-4 ${comment.replies ? "before:content-[''] before:z-[-1] before:absolute before:h-[calc(100%-16px)] before:w-[2px] before:bg-neutral-content/70 left-0 bottom-0 before:translate-y-[24px]" : ""}`}>
              <div className="w-12 h-12 rounded-full bg-primary overflow-hidden">
                <Image
                  className="object-cover z-20"
                  src={comment.authorCommentImage}
                  alt={comment.authorCommentName}
                  width={100}
                  height={100}
                />
              </div>
              <div className="flex-1">
                <div className="flex items-baseline gap-2">
                  <div className="font-bold">{comment.authorCommentName}</div>
                  <div className="text-xs">{comment.commentDate}</div>
                </div>
                <div className="text-sm">{comment.commentContent}</div>
              </div>
            </div>
            {comment.replies && (
              <div className="pl-6 border-l-2 border-neutral-content/70">
              {comment.replies.map((reply) => (
                <div key={reply.replyId} className="z-10 flex gap-4 mt-4 relative before:z-[-1] before:content-[''] before:absolute before:h-12 before:w-12 before:rounded-full before:border-l-2 before:border-neutral-content/70 before:-left-7 before:-top-6 before:-rotate-45 after:absolute after:content-[''] after:h-[18px] after:w-[18px] after:rounded-full after:bg-neutral-content after:-top-4 after:-left-8">
                  <div className="w-10 h-10 rounded-full overflow-hidden bg-primary">
                    <Image
                      className="object-cover z-20"
                      src={reply.authorReplyImage}
                      alt={reply.authorReplyName}
                      width={100}
                      height={100}
                    />
                  </div>
                  <div className="flex flex-1 flex-col gap-2">
                    <div className="flex gap-2 items-baseline">
                      <div className="font-bold">{reply.authorReplyName}</div>
                      <div className="text-xs">{reply.replyDate}</div>
                    </div>
                    <div className="text-sm flex-1">{reply.replyContent}</div>
                  </div>
                </div>
              ))}
            </div>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Comments;
