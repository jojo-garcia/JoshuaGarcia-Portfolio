import { useState} from 'react'
import type { FormEvent } from 'react'

function NewEntryForm(){
    const [title, setTitle] = useState('')
    const [content, setContent] = useState('')
 
    function handleSubmit(event: FormEvent<HTMLFormElement>) {
        event.preventDefault()
        console.log('Submitted:', {title, content})
        setTitle('')
        setContent('')
    }
 
    return(
        <form onSubmit={handleSubmit}>
            <p>
                <label htmlFor="entry-title">Title</label>
                <br />
                <input id="entry-title" 
                type="text" 
                value={title} 
                onChange={(e) => setTitle(e.target.value)} 
                />
            </p>
            <p>
                <label htmlFor="entry-content">Content</label>
                <br />
                <textarea 
                id="entry-title"
                rows={5}
                value={content}
                onChange={(e) => setContent(e.target.value)}
                />
            </p>
        </form>
    );
}


export default NewEntryForm