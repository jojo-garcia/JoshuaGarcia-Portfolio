import { useState } from 'react' 
import type { FormEvent } from 'react'

interface NewEntryFormProps {
    onSubmit: (title: string, content: string) => void;
}

export default function NewEntryForm({ onSubmit }: NewEntryFormProps){
    const [title, setTitle] = useState('');
    const [content, setContent] = useState('');

function handleSubmit(event: FormEvent<HTMLFormElement>) {
        event.preventDefault();
        onSubmit(title, content);
        setTitle('');
        setContent('');
    }

    return (
        <>
        <form onSubmit={handleSubmit}>
            <p>
                <label htmlFor="entry-title">Title:</label> <br />
                <input
                    type="text"
                    id="entry-title"
                    value={title}
                    onChange={(e) => setTitle(e.target.value)} 
                    required />
            </p>
            <p>
                <label htmlFor="entry-content">Content:</label> <br />
                <textarea
                    id="entry-content" 
                    value={content}
                    onChange={(e) => setContent(e.target.value)} 
                    required />
            </p>
            <button type="submit">Submit Entry</button>
        </form>
        </>
    )
}