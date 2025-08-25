import Accordion from './components/Accordion'
import CharCounter from './components/CharCounter'
import Counter from './components/Counter'
import FetchPosts from './components/FetchPosts'
import ImageGallery from './components/ImageGallery'
import LiveText from './components/LiveText'
import SearchFilter from './components/SearchFilter'
import Tabs from './components/Tabs'
import ThemeToggle from './components/ThemeToggle'
import TodoList from './components/TodoList'
import ToggleMessage from './components/ToggleMessage'
import ValidatedForm from './components/ValidatedForm'
import './css/App.css'

function App() {
  const beginnerExercises = [
    <h1>Beginner Exercises</h1>,
    <Counter/>, <LiveText/>, <ToggleMessage/>, <TodoList/>, <ThemeToggle/>
  ]

  const intermediateExercises = [
    <h1>Intermediate Exercises</h1>,
    <Tabs/>, <Accordion/>, <ValidatedForm/>, <SearchFilter/>, <CharCounter/>
  ]

  const advancedExercises = [
    <h1>Advanced Exercises</h1>,
    <FetchPosts/>, <ImageGallery/>, "React Router Mini App", "Theme Context", "Custom Hook: useLocalStorage"
  ]

  const tabsArray = [
    {label: "Beginner Exercises", content: [beginnerExercises]},
    {label: "Intermediate Exercises", content: [intermediateExercises]},
    {label: "Advanced Exercises", content: [advancedExercises]},
  ]

  return (
    <div>
      <h1>Hello World</h1>
      <h3>Welcome to my collection of React Exercises!</h3>
      <hr />
      <Tabs tabs={tabsArray}/>
    </div>
  )
}

export default App
