import React from 'react'
import Nav from "react-bootstrap/Nav";
import {Link}from "react-router-dom"
import Card from "react-bootstrap/Card";
import Container from "react-bootstrap/Container";
import Button from "react-bootstrap/Button";
import { useState, useEffect } from "react";
export default function Home() {
    const [blogs, setBlogs] = useState([]);

    useEffect(() => {
      getData();
    }, []);
  
    const getData = async () => {
      try {
        const incomingData = await fetch(
          "https://jsonplaceholder.typicode.com/posts"
        );
        const formattedData = await incomingData.json();
        setBlogs(formattedData);
      } catch (err) {
        console.log(err);
      }
    };
  return (
    <div>
         <Nav className="justify-content-center" activeKey="/home">
        <Nav.Item>
          <Nav.Link>
            <Link to="/">Home</Link>
          </Nav.Link>
        </Nav.Item>

        <Nav.Item>
          <Nav.Link>
            <Link to="/form" >Add Blog</Link>
          </Nav.Link>
        </Nav.Item>
      </Nav>
      <center>
      <Container>
      <h1 className="title">Trending  Blogs</h1>
        {blogs.map((blog, i) => {
          return (
            <Card key={i} className="card">
              <Card.Body>
              <Card.Title>Blog num {i+1}</Card.Title>
              <hr />
                <Card.Title>{blog.title}</Card.Title>
                <Card.Text>{blog.body}</Card.Text>
                <Button style={{backgroundColor: '#f6f6f6f', color: 'white'}}>Read More</Button>
              </Card.Body>
            </Card>
          );
        })}

      </Container>
      </center>
    </div>
  )
}
