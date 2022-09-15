import React, { useState } from "react";
import FlashcardList from "./components/FlashcardList";
import Header from "./components/Header";
import Footer from "./components/Footer";


function App() {
  const[flashcards, setFlashcards] = useState(SAMPLE_FLASHCARDS)
  return (
    <div className="App">
      <Header />
      <FlashcardList 
        flashcards = {flashcards}
      />
      <Footer />

    </div>
  );
}

const SAMPLE_FLASHCARDS = [
  {
    id:1,
    question: 'pwd',
    answer: 'print working directory',
  },
  {
    id:2,
    question: 'hostname',
    answer: "my computer's network name",
  },
  {
    id:3,
    question: 'mkdir',
    answer: 'make directory',
  },
  {
    id:4,
    question: 'cd',
    answer: 'change directory',
  },
  {
    id:5,
    question: 'ls',
    answer: 'list directory',
  },
  {
    id:6,
    question: 'rmdir',
    answer: 'remove directory',
  },
  {
    id:7,
    question: 'pushd',
    answer: 'push directory',
  },
  {
    id:8,
    question: 'popd',
    answer: 'pop directory',
  },
  {
    id:9,
    question: 'cp',
    answer: 'copy file or directory',
  },
  {
    id:10,
    question: 'mv',
    answer: 'move a file or directory',
  },
  {
    id:11,
    question: 'less',
    answer: 'page through a file',
  },
  {
    id:12,
    question: 'cat',
    answer: 'print the whole file',
  },
  {
    id:13,
    question: 'xargs',
    answer: 'execute arguments',
  },
  {
    id:14,
    question: 'find',
    answer: 'find files',
  },
  {
    id:15,
    question: 'grep',
    answer: 'find things inside files',
  },
  {
    id:16,
    question: 'man',
    answer: 'read a manual page',
  },
  {
    id:17,
    question: 'apropos',
    answer: 'find what man page is appropriate',
  },
  {
    id:18,
    question: 'env',
    answer: 'look at your environment',
  },
  {
    id:19,
    question: 'echo',
    answer: 'print some arguments',
  },
  {
    id:20,
    question: 'export',
    answer: 'export/set a new environment variable',
  },
  {
    id:21,
    question: 'exit',
    answer: 'exit the shell',
  },
  {
    id:22,
    question: 'sudo',
    answer: 'DANGER! become a super user root DANGER!',
  },
  {
    id:23,
    question: 'chmod',
    answer: 'change permission modifiers',
  },
  {
    id:24,
    question: 'chown',
    answer: 'change ownership',
  },
]

export default App;
