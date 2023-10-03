import {  Card } from 'react-bootstrap';
function NewsCard({ data }) {
    const {Title,Text,Image}=data;
    return (
        <Card className='mb-4'>
            <Card.Img variant='top' src={Image}></Card.Img>
             <Card.Body>
                 <Card.Title>{Title}</Card.Title>
                  <Card.Text>{Text}</Card.Text>
             </Card.Body>
          
        </Card>
    )

}
export default NewsCard