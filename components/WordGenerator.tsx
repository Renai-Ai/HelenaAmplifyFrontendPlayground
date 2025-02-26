'use client'

import React, { useState, useRef } from 'react';

interface StoryResponse {
  word: string;
  percentComplete: string;
}

const BASE_URL=process.env.NEXT_PUBLIC_BASE_URL;
const StoryGenerator: React.FC = () => {
// type StreamChunk = ReadableStreamReadResult<Uint8Array>;

  const [story, setStory] = useState<string>('');
  const [percentComplete, setPercentComplete] = useState<string>('0');
  const [error, setError] = useState<string>('');
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const storyOutputRef = useRef<string>('');

  const processStreamChunk = (text: string): void => {
    const multipleOutputs: string[] = text.split('}{');
    
    if (multipleOutputs.length === 1) {
      const json: StoryResponse = JSON.parse(multipleOutputs[0]);
      updateOutput(json);
      return;
    } 
    const firstJson: StoryResponse = JSON.parse(multipleOutputs[0] + '}');
    updateOutput(firstJson);

    for (let i = 1; i < multipleOutputs.length - 1; i++) {
      const json: StoryResponse = JSON.parse('{' + multipleOutputs[i] + '}');
      updateOutput(json);
    }

    const lastJson: StoryResponse = JSON.parse('{' + multipleOutputs[multipleOutputs.length - 1]);
    updateOutput(lastJson);
    
  };

  const updateOutput = (json: StoryResponse): void => {
    storyOutputRef.current += ' ' + json.word.trim();
    setStory(storyOutputRef.current);
    setPercentComplete(json.percentComplete);
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>): Promise<void> => {
    e.preventDefault();
    const formElement = e.target as HTMLFormElement;
    const lengthInput = formElement.length as unknown as HTMLInputElement;
    const length = lengthInput.value.trim();

    if (!length) return;

    setIsLoading(true);
    setError('');
    storyOutputRef.current = '';
    setStory('Thinking...');

    try {
      const response = await fetch(`${BASE_URL}/api/story`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ length }),
      });

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      if (!response.body) {
        throw new Error('ReadableStream not supported');
      }

      const reader = response.body.getReader();
      const decoder = new TextDecoder();

      setStory('');

      while (true) {
        const result = await reader.read();
        if (result.done) break;
        console.log(result.value)
        const text = decoder.decode(result.value);
        console.log(text);
        processStreamChunk(text);
      }
    } catch (err) {
      const errorMessage = err instanceof Error ? err.message : 'An unknown error occurred';
      setError(`An error occurred. Please try again later. ${errorMessage}`);
      setStory('');
    } finally {
      setIsLoading(false);
    }
  };

  const styles = {
    container: {
      maxWidth: '800px',
      margin: '0 auto',
      padding: '20px'
    },
    inputContainer: {
      display: 'flex',
      gap: '10px',
      marginBottom: '20px'
    },
    input: {
      flex: 1,
      padding: '8px',
      color:'#000',
      border: '1px solid #ccc',
      borderRadius: '4px'
    },
    button: {
      padding: '8px 16px',
      backgroundColor: isLoading ? '#ccc' : '#007bff',
      color: 'white',
      border: 'none',
      borderRadius: '4px',
      cursor: isLoading ? 'not-allowed' : 'pointer'
    },
    progress: {
      fontSize: '14px',
      color: '#fff',
      marginBottom: '10px'
    },
    storyContainer: {
      marginTop: '20px',
      padding: '15px',
      backgroundColor: '#f8f9fa',
      borderRadius: '4px',
      minHeight: '100px',
      color: '#000',
    },
    error: {
      marginTop: '20px',
      padding: '12px',
      backgroundColor: '#fee',
      color: '#c00',
      borderRadius: '4px',
      border: '1px solid #fcc'
    }
  } as const;

  return (
    <div style={styles.container}>
      <form onSubmit={handleSubmit}>
        <div style={styles.inputContainer}>
          <input
            type="text"
            id="length"
            name="length"
            placeholder="Enter story length..."
            disabled={isLoading}
            style={styles.input}
          />
          <button
            type="submit"
            disabled={isLoading}
            style={styles.button}
          >
            {isLoading ? 'Generating...' : 'Generate'}
          </button>
        </div>

        {percentComplete !== '0' && (
          <div style={styles.progress}>
            Progress: {percentComplete}%
          </div>
        )}

        {story && (
          <div style={styles.storyContainer}>
            {story}
          </div>
        )}

        {error && (
          <div style={styles.error}>
            {error}
          </div>
        )}
      </form>
    </div>
  );
};

export default StoryGenerator;