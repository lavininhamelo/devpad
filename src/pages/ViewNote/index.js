import React, { useState, useEffect, useRef } from 'react';
import { useParams } from 'react-router-dom';
import { Container, Title } from './style';
import * as Note from '../../services/notes';

import SimpleImage from '@editorjs/simple-image';
import Marker from '@editorjs/marker';
import InlineCode from '@editorjs/inline-code';
import Underline from '@editorjs/underline';
import Quote from '@editorjs/quote';
import Delimiter from '@editorjs/delimiter';
import Paragraph from '@editorjs/paragraph';
import Editor from '@stfy/react-editor.js';
import Header from '@editorjs/header';
// import Image from '@editorjs/image';
import List from '@editorjs/list';
import Checklist from '@editorjs/checklist';
import Embed from '@editorjs/embed';
import Link from '@editorjs/link';
import Codebox from '@bomdi/codebox';
import DragDrop from 'editorjs-drag-drop';
import Undo from 'editorjs-undo';

//Editor Imports
import TagList from '../../components/TagList';

// import Editor from '../../components/Editor';
function ViewNote() {
  const { path } = useParams();
  const [data, setData] = useState({});
  const editor = useRef(null);


  useEffect(() => {
    const fetchData = async () => {
      const result = await Note.view(path);
      setData(result);
    };
    fetchData();
  }, []);

  return (
    <>
      <Container id="editorjs-container">
        <Title>{data.title}</Title>
        <TagList tags={data.tags} clickable />
          {/* <Editor
        ref={editor}
        data={data.content}
        holder="editorjs-container"
        onReady={() => console.log(data)}
        tools={{
          Header,
          image: {
            class: SimpleImage,
            inlineToolbar: true,
            config: {
              placeholder: 'Paste image URL',
            },
          },
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
          Paragraph,
        }}
     
      /> */}
      </Container>
    </>
  );
}
export default ViewNote;
