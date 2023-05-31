import { Result } from '../interface';
import Card from 'react-bootstrap/Card';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
interface Props {
    character: Result
}
export const CardJob = ({ character }: Props) => {
    return (
        <Card style={{ width: '20rem' }}>
             <Card.Body>
                <Card.Img variant="left" src={character.image} />
                <Card.Title>{character.name}</Card.Title>
                <Card.Text>
                    <Container>
                        <Row>
                            <Col sm={12}>บริษัท XXXXXXXXXXXXXXX</Col>
                        </Row>
                        <Row>
                            <Col sm={5}>xx ตำแหน่ง</Col>
                            <Col sm={7}>เงินเดือน xxxxx บาท</Col>
                        </Row>
                        <Row>
                         
                            <Col sm={12}>ที่อยู่ อำเภอ จังหวัด</Col>
                            
                            
                        </Row>
                        <Row>
                            <Col sm={12}>ID:XXXXXXXX</Col>
                        </Row>
                        <Row>
                            <Col sm={12}>10 นาทีที่ผ่านมา</Col>
                        </Row>
                    </Container>
                </Card.Text>
             </Card.Body>
            
        </Card> 
    )
}