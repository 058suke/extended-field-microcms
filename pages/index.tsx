import React, { useEffect, useState } from 'react';
import { useFieldExtension } from 'microcms-field-extension-react'
import { MdEditor } from 'md-editor-rt';
import 'md-editor-rt/lib/style.css';

const App = () => {
  const [markdown, setMarkdown] = useState('');
  const { data, sendMessage } = useFieldExtension('', {
    origin: process.env.NEXT_PUBLIC_MICROCMS_ORIGIN_URL,
    height: 800,
  });

  useEffect(() => {
    if (!markdown) {
      setMarkdown(data);
    }
  }, [data, markdown])

  useEffect(() => {
    postMessage({ data: markdown })
  }, [markdown, sendMessage])

  return (
    <MdEditor 
      modelValue={markdown} 
      onChange={setMarkdown}
      language="en-US"
      style={{ height: 800 }}
    />
  );
}

export default App;