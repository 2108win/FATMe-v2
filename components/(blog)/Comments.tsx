import Image from "next/image";
import React from "react";
import FormComment from "./FormComment";
import { useSession } from "next-auth/react";
// require blogId, commentId, comment, author, date, replies
const commentsData = [
  {
    blogId: 11123321,
    commentId: 1123,
    commentContent:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam, accusamus. lorem Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam, accusamus. lorem Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam, accusamus. lorem",
    authorCommentName: "Lã Win",
    authorCommentImage: "/images/img-creator-win.jpg",
    commentDate: "22 tháng 12 năm 2021",
    replies: [
      {
        commentId: 41245125345326,
        replyId: 324543634264362,
        replyContent:
          "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam, accusamus.",
        authorReplyName: "Lã Win 2",
        authorReplyImage: "/images/img-creator-win.jpg",
        replyDate: "22 tháng 12 năm 2021",
      },
      {
        commentId: 12351416345,
        replyId: 1364346254,
        replyContent:
          "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam, accusamus.",
        authorReplyName: "Lã Win 2",
        authorReplyImage: "/images/img-creator-win.jpg",
        replyDate: "22 tháng 12 năm 2021",
      },
    ],
  },
  {
    blogId: 13463463634,
    commentId: 12412341246365,
    commentContent:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam, accusamus.",
    authorCommentName: "Lã Win",
    authorCommentImage: "/images/img-creator-win.jpg",
    commentDate: "22 tháng 12 năm 2021",
    replies: [
      {
        commentId: 13645326343545,
        replyId: 2352364321,
        replyContent:
          "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam, accusamus.",
        authorReplyName: "Lã Win 2",
        authorReplyImage: "/images/img-creator-win.jpg",
        replyDate: "22 tháng 12 năm 2021",
      },
      {
        commentId: 234613464652,
        replyId: 2234783,
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
    <div className="mx-auto flex max-w-4xl flex-col gap-4">
      <h3 className="text-xl font-bold">{6} Comments</h3>
      <FormComment />
      <ul className="flex flex-col gap-2">
        {commentsData.map((comment) => (
          <li key={comment.blogId} className="flex flex-col gap-2">
            <div
              className={`relative z-10 mt-4 flex gap-4 ${
                comment.replies
                  ? "bottom-0 left-0 before:absolute before:z-[-1] before:h-[calc(100%-16px)] before:w-[2px] before:translate-y-[24px] before:bg-neutral-content/70 before:content-['']"
                  : ""
              }`}
            >
              <div className="h-12 w-12 overflow-hidden rounded-full bg-primary">
                <Image
                  className="z-20 object-cover"
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
              <div className="border-l-2 border-neutral-content/70 pl-6">
                {comment.replies.map((reply) => (
                  <div
                    key={reply.replyId}
                    className="relative z-10 mt-4 flex gap-4 before:absolute before:-left-7 before:-top-6 before:z-[-1] before:h-12 before:w-12 before:-rotate-45 before:rounded-full before:border-l-2 before:border-neutral-content/70 before:content-[''] after:absolute after:-left-8 after:-top-4 after:h-[18px] after:w-[18px] after:rounded-full after:bg-neutral-content after:content-['']"
                  >
                    <div className="h-10 w-10 overflow-hidden rounded-full bg-primary">
                      <Image
                        className="z-20 object-cover"
                        src={reply.authorReplyImage}
                        alt={reply.authorReplyName}
                        width={100}
                        height={100}
                      />
                    </div>
                    <div className="flex flex-1 flex-col gap-2">
                      <div className="flex items-baseline gap-2">
                        <div className="font-bold">{reply.authorReplyName}</div>
                        <div className="text-xs">{reply.replyDate}</div>
                      </div>
                      <div className="flex-1 text-sm">{reply.replyContent}</div>
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
