"use client";

import React, { useState } from "react";
import { Article, ArticleComment } from "@/data/articles";

interface ArticleCommentsProps {
  article: Article;
}

const defaultExtraComments = [
  { id: 101, name: "Jessica Hall", date: "Nov 1, 2022", text: "Such great content! I always learn something new from SoZo's articles." },
  { id: 102, name: "Brian Scott", date: "Nov 5, 2022", text: "Very informative and well written. Shared this with all my friends!" },
  { id: 103, name: "Maria Lopez", date: "Nov 10, 2022", text: "Love how detailed and practical these tips are. Keep them coming!" },
  { id: 104, name: "Chris Turner", date: "Nov 15, 2022", text: "My stylist recommended I read this blog and I'm so glad she did. Amazing advice." },
  { id: 105, name: "Anna Wright", date: "Nov 20, 2022", text: "The photography is beautiful and the writing is so easy to follow. Thank you!" },
];

export default function ArticleComments({ article }: ArticleCommentsProps) {
  const [prevArticleId, setPrevArticleId] = useState(article.id);
  const [comments, setComments] = useState<ArticleComment[]>(() => [
    ...article.comments,
    ...defaultExtraComments,
  ]);
  const [shownCount, setShownCount] = useState(3);
  const [commentName, setCommentName] = useState("");
  const [commentEmail, setCommentEmail] = useState("");
  const [commentText, setCommentText] = useState("");

  if (article.id !== prevArticleId) {
    setPrevArticleId(article.id);
    setComments([...article.comments, ...defaultExtraComments]);
    setShownCount(3);
  }

  const handlePostComment = (e: React.FormEvent) => {
    e.preventDefault();
    if (!commentName.trim() || !commentText.trim()) {
      alert("Please fill in your name and comment.");
      return;
    }

    const now = new Date().toLocaleDateString("en-US", {
      month: "long",
      day: "numeric",
      year: "numeric",
    });

    const newComment: ArticleComment = {
      id: Date.now(),
      name: commentName.trim(),
      date: now,
      text: commentText.trim(),
    };

    setComments((prev) => [newComment, ...prev]);
    setCommentName("");
    setCommentEmail("");
    setCommentText("");
    setShownCount((prev) => prev + 1); // Expand to show the newly posted comment
  };

  const handleLoadMore = () => {
    setShownCount((prev) => prev + 3);
  };

  const visibleComments = comments.slice(0, shownCount);

  return (
    <div className="comments-section">
      <h2 className="comments-title">Comments ({comments.length})</h2>
      <form className="comment-form" onSubmit={handlePostComment}>
        <h3>Leave a Comment</h3>
        <div className="form-row">
          <div className="form-field">
            <label htmlFor="commentName">Your Name</label>
            <input
              type="text"
              id="commentName"
              placeholder="e.g. Jane Smith"
              value={commentName}
              onChange={(e) => setCommentName(e.target.value)}
              required
            />
          </div>
          <div className="form-field">
            <label htmlFor="commentEmail">Email Address</label>
            <input
              type="email"
              id="commentEmail"
              placeholder="your@email.com"
              value={commentEmail}
              onChange={(e) => setCommentEmail(e.target.value)}
            />
          </div>
        </div>
        <div className="form-field" style={{ marginBottom: "16px" }}>
          <label htmlFor="commentText">Your Comment</label>
          <textarea
            id="commentText"
            placeholder="Share your thoughts..."
            value={commentText}
            onChange={(e) => setCommentText(e.target.value)}
            required
          />
        </div>
        <button type="submit" className="btn-post">
          Post Comment
        </button>
      </form>

      <div id="commentList">
        {visibleComments.map((comment) => (
          <div key={comment.id} className="comment-item">
            <div className="comment-header">
              <div className="comment-avatar">{comment.name.charAt(0)}</div>
              <div>
                <div className="comment-meta-name">{comment.name}</div>
                <div className="comment-meta-date">{comment.date}</div>
              </div>
            </div>
            <p className="comment-text">{comment.text}</p>
          </div>
        ))}
      </div>

      {shownCount < comments.length && (
        <div className="load-more-wrap">
          <button className="btn-load" onClick={handleLoadMore}>
            Load More Comments
          </button>
        </div>
      )}
    </div>
  );
}
