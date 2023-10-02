import { Container, Row, Col, Card } from 'react-bootstrap';
function NewsCard({ result }) {

    return (

        <div>
             <Container>
                <h1>My Personal Blog</h1>
            </Container>

           
            {
                result.map(({Title,Text,src,index}) => {
                    return <div key={index}>
                         <Container>
                          <Row>
                             <Col md={4} sm={4} lg={3} xxl={3}>
                             <Card className="mb-4">
                                   <Card.Img variant="top" src={src} />
                                    <Card.Body>
                                <Card.Title>{Title}</Card.Title>
                                 <Card.Text>{Text}
                                </Card.Text>
                            </Card.Body>
                           </Card>
                                </Col>
                            </Row>
                        
                        </Container>
                    </div>
                })
            }

        </div>
    )

}
export default NewsCard