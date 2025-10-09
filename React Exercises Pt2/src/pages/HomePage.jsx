import Accordion from '../components/Accordion'
import CharCounter from '../components/CharCounter'
import Counter from '../components/Counter'
import FetchPosts from '../components/FetchPosts'
import ImageGallery from '../components/ImageGallery'
import LiveText from '../components/LiveText'
import RouterMiniApp from '../components/RouterMiniApp'
import SearchFilter from '../components/SearchFilter'
import Tabs from '../components/Tabs'
import ThemeSelection from '../components/ThemeSelection'
import ThemeToggle from '../components/ThemeToggle'
import TodoList from '../components/TodoList'
import ToggleMessage from '../components/ToggleMessage'
import ValidatedForm from '../components/ValidatedForm'
import ListGroup from '../components/ListGroup'
import '../css/App.css'
import '../css/Themes.css'
import { ThemeContext } from '../context/ThemeContext'
import { useContext } from 'react'
import LocalStorageTest from '../components/LocalStorageTest'

function HomePage() {
  let cities = ['New York', 'San Francisco', 'Tokyo', 'London'];
  let games = ['Path of Exile', 'Overwatch 2', 'Stardew Valley', 'Split Fiction', 'Returnal'];

  const handleSelectItem = (e) => {
    console.log(e)
  }

  const {theme} = useContext(ThemeContext)

  const beginnerExercises = [
    <h1>Beginner Exercises</h1>,
    <Counter/>, <LiveText/>, <ToggleMessage/>, <TodoList/>, <ThemeToggle/>
  ]

  const intermediateExercises = [
    <h1>Intermediate Exercises</h1>,
    <Tabs/>,
    <Accordion/>,
    <ValidatedForm/>,
    <SearchFilter/>,
    <CharCounter/>,
    <ListGroup items={cities} heading="Cities" onSelectItem={handleSelectItem}/>,
    <ListGroup items={games} heading="Games" onSelectItem={handleSelectItem}/>
  ]

  const advancedExercises = [
    <h1>Advanced Exercises</h1>,
    <FetchPosts/>, <ImageGallery/>, <RouterMiniApp/>, <ThemeSelection/>, <LocalStorageTest/>
  ]

  const tabsArray = [
    {label: "Beginner Exercises", content: [beginnerExercises]},
    {label: "Intermediate Exercises", content: [intermediateExercises]},
    {label: "Advanced Exercises", content: [advancedExercises]},
  ]

  return (
    <div className={`${theme}`}>
      <h1>Hello World</h1>
      <h3>Welcome to my collection of React Exercises!</h3>
      <hr />
      <Tabs tabs={tabsArray}/>
    </div>
  )
}

export default HomePage
