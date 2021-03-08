import React, { useState } from "react";
import { Editor } from "react-draft-wysiwyg";
import { EditorState, convertToRaw } from "draft-js";
import "../../node_modules/react-draft-wysiwyg/dist/react-draft-wysiwyg.css";

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
      <div style={{ height: 300 }}>
        <Editor
          editorState={editorState}
          wrapperClassName="wrapper-class"
          editorClassName="editor-class"
          toolbarClassName="toolbar-class"
          editorStyle={{ border: "1px solid #C0C0C0", height: 250 }}
          onEditorStateChange={onEditorStateChange}
        />
      </div>
      <textarea
        disabled
        value={htmlValue}
        style={{ width: 900, height: 200, marginTop: 50 }}
      ></textarea>
    </div>
  );
};

export default TextEditor;
