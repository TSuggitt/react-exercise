
import Intro from './Intro.jsx'
import React from 'react'
import Songs from "./Songs.jsx"
import Comments from "./fanComments.jsx"




import { createRoot } from "react-dom/client"; 

const root = createRoot(document.getElementById('root'));
root.render(<Intro />);

const songRoot = createRoot(document.getElementById("songs"));
songRoot.render(<Songs />)

const commentRoot = createRoot(document.getElementById("comments"));
commentRoot.render(<Comments />)

  

