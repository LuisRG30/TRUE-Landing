import * as React from 'react';
import { Remarkable } from 'remarkable';

type MarkdownGoodProps = {
  markdownPath: string;
}

const Markdown = (props: MarkdownGoodProps) => {
  const [markdown, setMarkdown] = React.useState('');
  

  const getMarkdown = async () => {
    const response = await fetch(props.markdownPath, {
      method: 'GET',
    });
    const text = await response.text();
    setMarkdown(text);
  }

  React.useEffect(() => {
    getMarkdown();
  }, []);

  const md = new Remarkable();
  return (
    <div dangerouslySetInnerHTML={{ __html: md.render(markdown) }} />
  );
}

export default Markdown;