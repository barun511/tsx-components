import css from "./App.module.css";
import { Sidebar } from "./Sidebar";

function App() {

  return (
    <div className={css.container}>
      <Sidebar />
      {"Hello"}
    </div>
  )
}

export default App
