import NewsCard from "./NewsCard"
import Header from "./Header/Header"
import { Container, Row, Col, } from 'react-bootstrap';
import Person from "../Person";
import About from "../Person";



function App() {
  const news = [
    {
      Title: "Lorem ipsum",
      Text: "This is a simple hero unit, a simple jumbotron-style component for calling extra attention to featured content or information.",
      Image: "/images/img1.jpg",
      id: 1
    },
    {
      Title: "News",
      Text: "This is a simple hero unit, a simple jumbotron-style component for calling extra attention to featured content or information.",
      Image: "/images/img2.avif",
     id:2
    },
    {
      Title: "New Page ",
      Text: "This is a simple hero unit, a simple jumbotron-style component for calling extra attention to featured content or information.",
      Image:  "/images/img3.webp",
      id: 3
    },
    {
      Title: "About",
      Text: "This is a simple hero unit, a simple jumbotron-style component for calling extra attention to featured content or information.",
      Image: "/images/img4.avif",
     id:4
    }
  ]

  return (
    <div>
      <About/>
    </div>
    
    /*<div>
      <Header />
      <Container className="mt-5 mb-5">
      <h1>My Personal Blog</h1>
      <p>Lorem ipsum for example your</p>
      </Container>
      <Container>
        <Row>
          {
            news.map((n)=>{
              return(
                <Col md={4} sm={4} lg={3} xs={12} key={n.id}>
                  <NewsCard data={n}/>
                </Col>
              )
            })
          }
        </Row>
      </Container>
      <footer fluid className="bg-dark text-white text-center p-3">
        <Container>
          
            2023 News protal. All Right Reserved
       
      </Container>

      </footer>
    </div> */
  )
}
export default App