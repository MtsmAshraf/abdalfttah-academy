import React, { Fragment } from 'react'

const BoldText = ({ text }: { text: string }) => {
    // Convert *bold* text to <strong>bold</strong>
    const formattedText = text.replace(/\*(.*?)\*/g, "<strong>$1</strong>");
    return <p dangerouslySetInnerHTML={{ __html: formattedText }} />;
  };

export default BoldText