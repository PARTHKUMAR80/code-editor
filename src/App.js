import React,{useState,useEffect} from 'react'
import Editor from './Editor'
import './App.css'
function App(){

  const [html,setHtml]=useState('');
  const [css,setCss]=useState('');
  const [js,setJs]=useState('');
  const [srcDoc,setSrcDoc]=useState('')
  const [html_open,setHtmlOpen]=useState(false);
  const [css_open,setCssOpen]=useState(false);
  const [js_open,setJsOpen]=useState(false);
  const [ori,setOri]=useState(false);
  const [pane_ori,setPane_Ori]=useState(false);
  const [space,setSpace]=useState(false);

  useEffect(()=>{
    const timeout=setTimeout(()=>{
      setSrcDoc(`
        <html>
        <body>${html}<body/>
        <style>${css}<style}
        <script>${js}<script/>
        </html>
      `)
    },500)
    return ()=>clearTimeout(timeout)
  },[html,css,js])

  const my_func=()=>{
    setOri(prev=>!prev)
    setPane_Ori(prev=>!prev)
    setSpace(prev=>!prev)
  }

  return (
    <>
      <header>
        <button onClick={()=>setHtmlOpen(pre=>!pre)} className="html">HTML</button>
        <button onClick={()=>setCssOpen(pre=>!pre)} className="css">CSS</button>
        <button onClick={()=>setJsOpen(pre=>!pre)} className="js">JAVASCRIPT</button>
      </header>
      <div className={ori ? 'main-container' : ''}>
        <div className={`top-box box ${pane_ori ? 'box_set' : ''}`}>
          <Editor
            language="xml" 
            displayName="HTML" 
            value={html} 
            onChange={setHtml}
            para={html_open}
          />
  
          <Editor 
            language="css" 
            displayName="CSS" 
            value={css} 
            onChange={setCss}
            para={css_open}
          />
  
          <Editor 
            language="javascript" 
            displayName="JS" 
            value={js} 
            onChange={setJs}
            para={js_open}
          />
  
        </div>
        <div id="space" className="box">
          <iframe
            className={`${space ? "add" : ''}`} 
            srcDoc={srcDoc}
            title="output"
            sandbox="allow-scripts"
            width="100%"
            height="100%"
          />
        </div>
      </div>
      <div className="btn-1">
        <button onClick={my_func}>Hor/Ver</button>
      </div>
    </>
  )
}
export default App;