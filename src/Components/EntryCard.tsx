type Entry = {
    id: string | number;
    title: string;
    content: string;
    date: string;
    summary: string;
};

interface EntryCardProps {
    entry: Entry;
}

export default function EntryCard({ entry }: EntryCardProps) {
    return(
        <>
        <article className="entry-card">
            <h3>{entry.title}</h3>
            <time dateTime={entry.date}>{entry.date}</time>
            <p>{entry.content}</p>
            <p>{entry.summary}</p>
        </article>
        </>
    );
}