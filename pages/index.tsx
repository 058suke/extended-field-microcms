import React, { useEffect, useState } from 'react';
import { useFieldExtension } from 'microcms-field-extension-react'
import { MdEditor } from 'md-editor-rt';
import 'md-editor-rt/lib/style.css';

const App = () => {
  const [markdown, setMarkdown] = useState('');
  const { data, sendMessage } = useFieldExtension('', {
    origin: "https://example.microcms.io",
    height: 540,
  });

  useEffect(() => {
    if (!markdown) {
      setMarkdown(data);
    }
  }, [data, markdown])

  return (
    <MdEditor 
      modelValue={markdown} 
      onChange={setMarkdown}
      language="en-US"
    />
  );
}

export default App;