import React, { useState } from 'react'
import './App.css';
import { Tab, Row, Col, Nav, Container } from 'react-bootstrap'
import Swiper from './components/Swiper';


function App() {
  const [selectedTabItem, setSelectedTabItem] = useState('first')

  const handleSelect = (_, item) => setSelectedTabItem(item)

  return (
    <Tab.Container className="app-tab-container" defaultActiveKey={selectedTabItem} onSelect={handleSelect}>
      <Tab.Content>
        <Tab.Pane eventKey="first">
          <Swiper />
        </Tab.Pane>
        <Tab.Pane eventKey="second">
          <p>When I do count the clock that tells the time, And see the brave day sunk in hideous night; When I behold the violet past prime, And sable curls, all silvered o'er with white; When lofty trees I see barren of leaves, Which erst from heat did canopy the herd, And summer's green all girded up in sheaves, Borne on the bier with white and bristly beard, Then of thy beauty do I question make, That thou among the wastes of time must go,</p>
        </Tab.Pane>
        <Tab.Pane eventKey="third">
          <p>When I do count the clock that tells the time, And see the brave day sunk in hideous night; When I behold the violet past prime, And sable curls, all silvered o'er with white; When lofty trees I see barren of leaves, Which erst from heat did canopy the herd, And summer's green all girded up in sheaves, Borne on the bier with white and bristly beard, Then of thy beauty do I question make, That thou among the wastes of time must go,</p>
        </Tab.Pane>
        <Tab.Pane eventKey="fourth">
          <p>When I do count the clock that tells the time, And see the brave day sunk in hideous night; When I behold the violet past prime, And sable curls, all silvered o'er with white; When lofty trees I see barren of leaves, Which erst from heat did canopy the herd, And summer's green all girded up in sheaves, Borne on the bier with white and bristly beard, Then of thy beauty do I question make, That thou among the wastes of time must go,</p>
        </Tab.Pane>
      </Tab.Content>
      <Nav className="tabs-container bg-light text-center text-secondary pb-4">
        <Nav.Item className={`tab-item${selectedTabItem === 'first' ? ' active' : ''}`}>
          <Nav.Link eventKey="first" >
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="#dc3545" className="bi bi-file-earmark-minus" viewBox="0 0 16 16">
              <path d="M5.5 9a.5.5 0 0 1 .5-.5h4a.5.5 0 0 1 0 1H6a.5.5 0 0 1-.5-.5z" />
              <path d="M14 4.5V14a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V2a2 2 0 0 1 2-2h5.5L14 4.5zm-3 0A1.5 1.5 0 0 1 9.5 3V1H4a1 1 0 0 0-1 1v12a1 1 0 0 0 1 1h8a1 1 0 0 0 1-1V4.5h-2z" />
            </svg>
          </Nav.Link>
        </Nav.Item>
        <Nav.Item className={`tab-item${selectedTabItem === 'second' ? ' active' : ''}`}>
          <Nav.Link eventKey="second" >
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill='#aaa' className="bi bi-heart" viewBox="0 0 16 16">
              <path d="m8 2.748-.717-.737C5.6.281 2.514.878 1.4 3.053c-.523 1.023-.641 2.5.314 4.385.92 1.815 2.834 3.989 6.286 6.357 3.452-2.368 5.365-4.542 6.286-6.357.955-1.886.838-3.362.314-4.385C13.486.878 10.4.28 8.717 2.01L8 2.748zM8 15C-7.333 4.868 3.279-3.04 7.824 1.143c.06.055.119.112.176.171a3.12 3.12 0 0 1 .176-.17C12.72-3.042 23.333 4.867 8 15z" />
            </svg>
          </Nav.Link>
        </Nav.Item>
        <Nav.Item className={`tab-item${selectedTabItem === 'third' ? ' active' : ''}`}>
          <Nav.Link eventKey="third" >
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="#aaa" className="bi bi-chat-dots-fill" viewBox="0 0 16 16">
              <path d="M16 8c0 3.866-3.582 7-8 7a9.06 9.06 0 0 1-2.347-.306c-.584.296-1.925.864-4.181 1.234-.2.032-.352-.176-.273-.362.354-.836.674-1.95.77-2.966C.744 11.37 0 9.76 0 8c0-3.866 3.582-7 8-7s8 3.134 8 7zM5 8a1 1 0 1 0-2 0 1 1 0 0 0 2 0zm4 0a1 1 0 1 0-2 0 1 1 0 0 0 2 0zm3 1a1 1 0 1 0 0-2 1 1 0 0 0 0 2z" />
            </svg>
          </Nav.Link>
        </Nav.Item>
        <Nav.Item className={`tab-item${selectedTabItem === 'fourth' ? ' active' : ''}`}>
          <Nav.Link eventKey="fourth" >
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill='#aaa' className="bi bi-person-fill" viewBox="0 0 16 16">
              <path d="M3 14s-1 0-1-1 1-4 6-4 6 3 6 4-1 1-1 1H3Zm5-6a3 3 0 1 0 0-6 3 3 0 0 0 0 6Z" />
            </svg>
          </Nav.Link>
        </Nav.Item>
      </Nav>
    </Tab.Container >
  );
}

export default App;
