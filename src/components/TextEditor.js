import React, { useState } from "react";
import { Editor } from "react-draft-wysiwyg";
import { EditorState, convertToRaw } from "draft-js";
import "react-draft-wysiwyg/dist/react-draft-wysiwyg.css";
import draftToHtml from "draftjs-to-html";
import htmlToDraft from "html-to-draftjs";

const TextEditor = () => {
  const [editorState, setEditorState] = useState(EditorState.createEmpty());
  const [htmlValue, setHtmlValue] = useState("");

  const onEditorStateChange = (editorState) => {
    setEditorState(editorState);
    setHtmlValue(draftToHtml(convertToRaw(editorState.getCurrentContent())));
  };

  return (
    <div
      style={{
        width: 900,
      }}
    >
      <Editor
        editorState={editorState}
        toolbarClassName="toolbarClassName"
        wrapperClassName="wrapperClassName"
        editorClassName="editorClassName"
        onEditorStateChange={onEditorStateChange}
      />
      <textarea
        disabled
        value={htmlValue}
        style={{ width: 900, height: 200 }}
      ></textarea>
    </div>
  );
};

export default TextEditor;
