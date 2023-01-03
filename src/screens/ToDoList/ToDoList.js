import React from 'react'
import { Button, Card, Accordion,Badge } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import MainScreen from '../../components/MainScreen';
import notes, { } from "../../data/notes";

const ToDoList = () => {
    return (
        <MainScreen title='Welcome Back Pablo Yeezy...'>
            <Link to='createlist'>
                <Button style={{marginLeft:10, marginBottom: 6 }} size="lg">
                    Create New List
                </Button>
            </Link>
            {
            notes.map((note) =>(
                <Accordion defaultActiveKey={['0']}>
                    <Accordion.Item eventKey='0'>
                <Card style= {{ margin: 10 }}>
                    <Card.Header style= {{display:'flex'}}>
                            <span 
                                style={{
                                    color: 'black',
                                    textDecoration: 'none',
                                    flex: 1, 
                                    cursor: 'pointer',
                                    alignSelf: 'center',
                                    fontSize: 18, 
                                }}
                                >
                                    <Accordion.Button as={Card.Text} bg='link' eventKey='0'>
                                        {note.title}
                                    </Accordion.Button>
                            </span>
                        <div>
                            <Button href={'/note/${note._id}'}>Edit</Button>
                            <Button variant='danger' className='mx-2' onClick={()=>deleteHandler(note._id)}>Delete</Button>
                        </div>
                    </Card.Header>
                                <Accordion.Collapse eventKey="0">
                                        <Card.Body>
                                            <h4>
                                                <Badge bg='success' text='light'>
                                                    Category -  {note.category}
                                                </Badge>
                                            </h4>
                                        <blockquote className="blockquote mb-0">
                                            <p>
                                                {note.content}
                                            </p>
                                            <footer className="blockquote-footer">
                                                Created on - date </footer>
                                            </blockquote>
                                        </Card.Body>
                                </Accordion.Collapse>
                </Card>
                </Accordion.Item>
                </Accordion>
            ))
        }
    </MainScreen>
        
);
};

export default ToDoList