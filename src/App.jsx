import Superior from './components/Superior'
import './App.css'
import Inferior from './components/Inferior'

export default function App() {


  return (
    <>
      <Superior />
      <br></br>
      <br></br>
      <br></br>
      <div className ="containerCard">
        <Inferior icon="💡" title="Instant Server start" content="On demand File serving over native ESM, no bulding required!"/>
        <Inferior icon="⚡" title="Lightning Fast HMR" content="Hot Module Replacement (HMR) that stays fast regardless of app size."/>
        <Inferior icon="🛠️" title="Rich Features" content="Out-of-the-box support for TypeScript, JSX,CSS and more"/>
        <Inferior icon="📦" title="Optimized Build" content="Pre-configured Rollups build with multi-page and library mode support."/>
        <Inferior icon="🔩" title="Universal Plugins" content="Rollup-superset plugin interface shared between dev and build."/>
        <Inferior icon="🔑" title="Fully Typed APIs" content="Flexible programmatic APIs with full TypeScript typing"/>
      </div>
    </>
  )
}

