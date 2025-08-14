import Counter from './components/Counter'
import LiveText from './components/LiveText'
import TodoList from './components/TodoList'
import ToggleMessage from './components/ToggleMessage'
import './css/App.css'

function App() {

  return (
    <div>
      <h1>Hello World</h1>
      <h3>Welcome to my collection of React Exercises!</h3>
      <hr />
      <h2>Beginner React Exercises</h2>
      <Counter/>
      <LiveText/>
      <ToggleMessage/>
      <TodoList/>
      <hr />
      <h2>Intermediate React Exercises</h2>
      <hr />
      <h2>Advanced React Exercises</h2>
    </div>
  )
}

export default App
