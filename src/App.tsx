import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import matter from "gray-matter";
import ReactMarkdown from "react-markdown";
import { Helmet } from "react-helmet";
//@ts-ignore
import mdxPrism from "mdx-prism";
/*
pageId: nodevsdeno
author: shreyansh sheth
title: Deno Vs Node.js
subTitle: Deno is built upon same stuff and does same things but is there any diffrence
tags: [hello, hi]
technologyUser: [typescript, javascript]
time: 18 June 2021
*/
function App() {
  const [md, setMd] = useState("");
  const [content, setContent] = useState("## hello``` js let a = 10```");
  const [pageId, setPageId] = useState("");
  const [author, setAuthor] = useState("");
  const [title, setTitle] = useState("");
  const [subTitle, setSubTitle] = useState("");
  const [tags, setTags] = useState("");
  const [technologyUser, SetTechnologyUser] = useState("");
  const [date, setDate] = useState("");

  useEffect(() => {
    try {
      const { content } = matter(md);
      setContent(content);
    } catch {}
  }, [md]);
  return (
    <div className="App">
      <Helmet>
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/prism/1.23.0/themes/prism-okaidia.min.css"
          integrity="sha512-mIs9kKbaw6JZFfSuo+MovjU+Ntggfoj8RwAmJbVXQ5mkAX5LlgETQEweFPI18humSPHymTb5iikEOKWF7I8ncQ=="
          crossOrigin="anonymous"
        />
      </Helmet>
      <div
        style={{
          display: "flex",
          justifyContent: "space-evenly",
        }}
      >
        <div
          style={{
            display: "flex",
            flexFlow: "column",
            width: "100%",
            height: "100vh",
            borderWidth: "5px",
            borderColor: "black",
          }}
        >
          <div style={{ display: "flex", flexFlow: "column" }}>
            <div style={{ display: "flex" }}>
              <label>PageID</label>
              <input
                style={{ width: "100%" }}
                placeholder="pageID"
                value={pageId}
                onChange={(e) => setPageId(e.target.value)}
              ></input>
            </div>
            <div style={{ display: "flex" }}>
              <label>Autho</label>
              <input
                style={{ width: "100%" }}
                placeholder="Author"
                value={author}
                onChange={(e) => setAuthor(e.target.value)}
              ></input>
            </div>
            <div style={{ display: "flex" }}>
              <label>Title</label>
              <input
                style={{ width: "100%" }}
                placeholder="Title"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
              ></input>
            </div>
            <div style={{ display: "flex" }}>
              <label>Sub Title</label>
              <input
                style={{ width: "100%" }}
                placeholder="Sub Title"
                value={subTitle}
                onChange={(e) => setSubTitle(e.target.value)}
              ></input>
            </div>
            <div style={{ display: "flex" }}>
              <label>Tags</label>
              <input
                style={{ width: "100%" }}
                placeholder="tags"
                value={tags}
                onChange={(e) => setTags(e.target.value)}
              ></input>
            </div>
            <div style={{ display: "flex" }}>
              <label>Technology Used</label>
              <input
                style={{ width: "100%" }}
                placeholder="Technology Used"
                value={technologyUser}
                onChange={(e) => SetTechnologyUser(e.target.value)}
              ></input>
            </div>
            <div style={{ display: "flex" }}>
              <label>Date</label>
              <input
                style={{ width: "100%" }}
                placeholder="Date"
                value={date}
                onChange={(e) => setDate(e.target.value)}
              ></input>
            </div>
          </div>
          <textarea
            style={{
              flexGrow: 1,
              display: "block",
              width: "100%",
              overflow: "auto",
              height: "100",
            }}
            onChange={(e) => {
              setMd(e.target.value);
            }}
          ></textarea>
        </div>
        <div
          style={{
            display: "flex",
            flexFlow: "column",

            width: "100%",
            height: "100vh",
            overflow: "scroll",
            paddingLeft: "10px",
          }}
          className="prose lg:prose-xl"
        >
          <div
            style={{ borderWidth: "2px", width: "100%", borderColor: "red" }}
          >
            <button
              onClick={() => {
                const mdx = `
              
---
pageId: ${pageId}
author: ${author}
title: ${title}
subTitle: ${subTitle}
tags: [${tags}]
technologyUser: [${technologyUser}]
time: ${date}
---
${md}

              `;
                function download(filename: string, text: string) {
                  var element = document.createElement("a");
                  element.setAttribute(
                    "href",
                    "data:text/plain;charset=utf-8," + encodeURIComponent(text)
                  );
                  element.setAttribute("download", filename);

                  element.style.display = "none";
                  document.body.appendChild(element);

                  element.click();

                  document.body.removeChild(element);
                }
                download(`${pageId}.mdx`, mdx);
              }}
            >
              Download .MDx
            </button>
          </div>
          <ReactMarkdown
            className="prose lg:prose-xl "
            remarkPlugins={[
              require("remark-autolink-headings"),
              require("remark-slug"),
              require("remark-code-titles"),
              require("remark-emoji"),
            ]}
            rehypePlugins={[mdxPrism]}
            children={content}
          ></ReactMarkdown>
        </div>
      </div>
    </div>
  );
}

export default App;
