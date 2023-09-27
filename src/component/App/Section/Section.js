import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Table from 'react-bootstrap/Table';
import {Check } from 'react-bootstrap-icons';
function Section (){
return(
    <div className="container">
       <div class="pricing-header p-5 pb-md-5 mx-auto text-center" className="d-flex align-items-center  justify-content-center flex-direction flex-column p-5">
      <h1 class="display-4 fw-bold text-body-emphasis">Pricing</h1>
      <p class="fs-5 fw-light text-center" className="w-50   fw-light text-center h5 font-weight-normal ">Quickly build an effective pricing table for your potential customers with this Bootstrap example.
       It’s built with default Bootstrap components and utilities with little customization.</p>
    </div>
    <div className='d-flex justify-content-center align-items-center gap-5'>
 
 <Card style={{ width: '18rem' }} className="text-center">
      <Card.Header as="h3">Free</Card.Header>
      <Card.Body>
        <Card.Title><p className='fs-1 h1'>$0<span className='h3 fs-2'>/mo</span></p></Card.Title>
        <Card.Text>
        <span>10 users included</span> <br/>
        <span>2 GB of storage</span> <br/>
        <span>Email support</span> <br/>
        <span>Help center access</span>
        </Card.Text>
        <Button variant="outline-primary">Sign up for free</Button>
      </Card.Body>
    </Card>
    <Card style={{ width: '18rem' }} className="text-center">
      <Card.Header as="h3">Pro</Card.Header>
      <Card.Body>
        <Card.Title><p className='fs-1 h1'>$15<span className='h3 fs-2'>/mo</span></p></Card.Title>
        <Card.Text>
        <span>20 users included</span> <br/>
        <span>10 GB of storage</span> <br/>
        <span>Priorety Email support</span> <br/>
        <span>Help center access</span>
        </Card.Text>
        <Button variant="primary">Get Started</Button>
      </Card.Body>
    </Card>
    <Card style={{ width: '18rem' }} border="primary" className="text-center">
      <Card.Header className='bg-primary' as="h3">Enterprise</Card.Header>
      <Card.Body>
        <Card.Title><p className='fs-1 h1'>$0<span className='h3 fs-2'>/mo</span></p></Card.Title>
        <Card.Text>
        <span>30 users included</span> <br/>
        <span>15 GB of storage</span> <br/>
        <span>Email Phone support</span> <br/>
        <span>Help center access</span>
        </Card.Text>
        <Button variant="primary">Contact Us</Button>
      </Card.Body>
    </Card>
/</div>
<p className='text-center mt-4 p-5 h1'>Compare plans</p>
<Table  style={{ width: '60rem' }} className='float-center mx-auto mr-5'>
      <thead >
        <tr >
          <th></th>
          <th>Free</th>
          <th>Pro</th>
          <th>Enterprise</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <th>Public</th>
          <td><Check color="black" size={35} /></td>
          <td><Check color="black" size={35} /></td>
          <td><Check color="black" size={35} /></td>
        </tr>
        <tr>
          <th>Private</th>
          <td></td>
          <td><Check color="black" size={35} /></td>
          <td><Check color="black" size={35} /></td>
        </tr>
        <tr>
          <th>Permissions</th>
          <td><Check color="black" size={35} /></td>
          <td><Check color="black" size={35} /></td>
          <td><Check color="black" size={35} /></td>
        </tr>
        <tr>
          <th>Sharing</th>
          <td></td>
          <td><Check color="black" size={35} /></td>
          <td><Check color="black" size={35} /></td>
        </tr>
        <tr>
          <th>Unlimited members</th>
          <td></td>
          <td><Check color="black" size={35} /></td>
          <td><Check color="black" size={35} /></td>
        </tr>
         <tr>
          <th>Extra security</th>
          <td></td>
          <td></td>
          <td><Check color="black" size={35} /></td>
        </tr>
      </tbody>
    </Table>

</div>
)
}
export default Section