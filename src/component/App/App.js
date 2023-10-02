import NewsCard from "../NewsCard"
import Header from "./Header/Header"


function App() {
  const result=[
    {
    Title:"Lorem ipsum", 
    Text:"This is a simple hero unit, a simple jumbotron-style component for calling extra attention to featured content or information.",
    src:"https://cdn.pixabay.com/photo/2014/02/27/16/10/flowers-276014_1280.jpg",
    index:"1"
  },
  {
    Title:"News", 
    Text:"This is a simple hero unit, a simple jumbotron-style component for calling extra attention to featured content or information.",
    src:"https://images.unsplash.com/reserve/bOvf94dPRxWu0u3QsPjF_tree.jpg?ixid=M3wxMjA3fDB8MXxzZWFyY2h8M3x8bmF0dXJhbHxlbnwwfHx8fDE2OTYxNDE2OTN8MA&ixlib=rb-4.0.3",
    index:"2"
  },
  {
    Title:"New Page ", 
    Text:"This is a simple hero unit, a simple jumbotron-style component for calling extra attention to featured content or information.",
    src:"https://media.istockphoto.com/id/1322277517/photo/wild-grass-in-the-mountains-at-sunset.jpg?s=612x612&w=0&k=20&c=6mItwwFFGqKNKEAzv0mv6TaxhLN3zSE43bWmFN--J5w=",
    index:"3"
  },
  {
    Title:"About", 
    Text:"This is a simple hero unit, a simple jumbotron-style component for calling extra attention to featured content or information.",
    src:"https://thumbs.dreamstime.com/b/environment-earth-day-hands-trees-growing-seedlings-bokeh-green-background-female-hand-holding-tree-nature-field-gra-130247647.jpg",
    index:"4"
  }
  ]
  return (
    <div>
      <Header />
    <NewsCard result={result} />
     
    </div>
  )

}
export default App