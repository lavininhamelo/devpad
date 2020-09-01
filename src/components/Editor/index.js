import React, { useRef } from 'react';
import SimpleImage from '@editorjs/simple-image';
import Marker from '@editorjs/marker';
import InlineCode from '@editorjs/inline-code';
import Underline from '@editorjs/underline';
import Quote from '@editorjs/quote';
import Delimiter from '@editorjs/delimiter';
// import Paragraph from 'editorjs-paragraph-with-alignment';
import Editor from '@stfy/react-editor.js';
import Header from '@editorjs/header';
import Image from '@editorjs/image';
import List from '@editorjs/list';
import Checklist from '@editorjs/checklist';
import Embed from '@editorjs/embed';
import Link from '@editorjs/link';
import Codebox from '@bomdi/codebox';
import DragDrop from 'editorjs-drag-drop';
import Undo from 'editorjs-undo';

import { Container } from './style';
export default () => {
  const editor = useRef(null);
  const [intervalID, setIntervalID] = React.useState();
  const onDataReceived = (blocks) => {};
  React.useEffect(() => () => {
    clearInterval(intervalID);
  });
  return (
    <Container id="editorjs-container">
      <Editor
        holder="editorjs-container"
        placeholder="Comece a escrever algo..."
        onData={(data) => onDataReceived(data)}
        tools={{
          Header,
          image: Image,
          codeBox: {
            class: Codebox,
            config: {
              themeURL:
                'https://cdn.jsdelivr.net/gh/highlightjs/cdn-release@9.18.1/build/styles/dracula.min.css', // Optional
              themeName: 'dracula', // Optional
              useDefaultTheme: 'dark', // Optional. This also determines the background color of the language select drop-down
            },
          },
          List,
          Checklist,
          Embed,
          Link,
          InlineCode,
          Underline,
          Quote,
          Delimiter,
          Marker,
        }}
        onReady={() => {
          setIntervalID(
            setTimeout(() => {
              while (!editor) {
                new Undo({ ...editor.current });
                new DragDrop(editor.current.editor);
              }
            }, 2000),
          );
        }}
      />
    </Container>
  );
};
