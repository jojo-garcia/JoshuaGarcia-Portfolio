import { Routes, Route } from 'react-router-dom'
import { useState } from 'react'
import './App.css'
import Header from './Components/Header'
import About from './Components/About'
import NewEntryForm from './Components/NewEntryForm'  
import initialEntries from './data/entries'
import type { Entry } from './data/entries'
import EntryCard from './Components/EntryCard'
import Projects from './Pages/Projects'
import Skills from './Pages/Skills'

function Home() {
  return (
    <>
      <Header />
      <main className="main">
        <About />
      </main>
    </>
  )
}

function EntriesPage() {
  const [entries, setEntries] = useState<Entry[]>(initialEntries);
  const sortedEntries = [...entries].sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());
  const [lastSubmitted, setLastSubmitted] = useState<string | null>(null);

  function numberToWord(num: number): string {
    const ones = ['', 'first', 'second', 'third', 'fourth', 'fifth', 'sixth', 'seventh', 'eighth', 'ninth', 'tenth', 
      'eleventh', 'twelfth', 'thirteenth', 'fourteenth', 'fifteenth', 'sixteenth', 'seventeenth', 'eighteenth', 'nineteenth'];
    const tens = ['', '', 'twenty', 'thirty', 'forty', 'fifty', 'sixty', 'seventy', 'eighty', 'ninety'];
    const ordinals = ['twentieth', 'thirtieth', 'fortieth', 'fiftieth', 'sixtieth', 'seventieth', 'eightieth', 'ninetieth'];

    if (num < 20) return ones[num];
    
    const tenDigit = Math.floor(num / 10);  
    const oneDigit = num % 10;

    if (oneDigit === 0) {
      return ordinals[tenDigit - 2];
    }

    return tens[tenDigit] + '-' + ones[oneDigit];
  }

  function handleNewEntry(title: string, content: string) {
    const maxId = entries.length > 0 ? Math.max(...entries.map(e => Number(e.id))) : 0;
    const nextId = maxId + 1;
    const entryNumber = numberToWord(nextId);
    const newEntry: Entry = {
      id: nextId,
      title: title,
      content: content,
      date: new Date().toLocaleDateString('en-US', {
        year: 'numeric',
        month: '2-digit',
        day: '2-digit'
      }).replace(/\//g, '-'),
      summary: `My ${entryNumber} devlog entry`
    };
    setEntries([newEntry, ...entries]);
    setLastSubmitted(`Successfully added: "${title}"`);
    setTimeout(() => setLastSubmitted(null), 3000);
  }
    
  return (
    <>
      <Header />
      <main className="main">
        <h2>Create New Entry</h2>
        <section className="new-entry-section">
          <h3>New Devlog Entry</h3>
          <NewEntryForm onSubmit={handleNewEntry} />
        </section>
        <hr />
        <section className="entries-list-section">
          <h3>Devlog Entries</h3>
          {sortedEntries.map((e: Entry) => <EntryCard key={e.id} entry={e} />)}
          {lastSubmitted && <p className="successful-entry">{lastSubmitted}</p>}
        </section>
      </main>
    </>
  )
}

export default function App() {
  return (
    <div className="portfolio">
      <div className="bg-particles">
        <div className="particle"></div>
        <div className="particle"></div>
        <div className="particle"></div>
        <div className="particle"></div>
        <div className="particle"></div>
      </div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Projects" element={<Projects />} />
        <Route path="/Skills" element={<Skills />} />
        <Route path="/Entries" element={<EntriesPage />} />
      </Routes>
    </div>
  )
}
