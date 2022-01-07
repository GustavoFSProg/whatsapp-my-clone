import React from 'react'
import './App.css'
import Avatar from '../src/assets/avatar.png'
import Donut from '@material-ui/icons/DonutLarge'
import ChatIcon from '@material-ui/icons/Chat'
import MoreVert from '@material-ui/icons/MoreVert'
import Search from '@material-ui/icons/Search'

function App() {
  return (
    <div className="app-window">
      <div className="sidebar">
        <header>
          <img className="header-avatar" src={Avatar} alt="avatar" />
          <div className="header-buttons">
            <div className="header-btn">
              <Donut style={{ color: '#919191' }} />
              <ChatIcon style={{ color: '#919191' }} />

              <MoreVert style={{ color: '#919191' }} />
            </div>
          </div>
        </header>
        <div className="search">
          <div className="search-input">
            <Search
              fontSize="small"
              style={{ color: '#919191', marginLeft: '-10px', marginTop: '10px' }}
            />
            <input
              className="search-input-field"
              type="search"
              style={{ marginLeft: '10px', border: 'none' }}
              placeHolder="Procurar ou começar uma nova conversa"
            />
          </div>
        </div>
        <div className="chatlist">
          <div style={{ marginBottom: '18px' }}>
            <img
              className="header-avatar"
              style={{
                marginLeft: '13px',
                marginTop: '9px',
                width: '53px',
                height: '53px',
                borderRadius: '100%',
              }}
              src={Avatar}
              alt="avatar"
            />
            <div
              style={{
                marginTop: '-50px',
                marginLeft: '85px',
                fontSize: '16px',
                fontFamily: 'Arial',
              }}
            >
              <span>Fernanda</span>
            </div>
            <div
              style={{
                marginTop: '10px',
                marginLeft: '85px',
                fontSize: '14px',
                fontFamily: 'Arial',
                color: '#8c8c8c',
                width: '310px',
              }}
            >
              <span>Olá, pessoal! Bom dia! Tem o encontro la na igreja </span>
            </div>
          </div>
          <div style={{ marginBottom: '18px' }}>
            <img
              className="header-avatar"
              style={{
                marginLeft: '13px',
                marginTop: '10px',
                width: '53px',
                height: '53px',
                borderRadius: '100%',
              }}
              src={Avatar}
              alt="avatar"
            />
            <div style={{ marginBottom: '18px' }}>
              <div
                style={{
                  marginTop: '-50px',
                  marginLeft: '85px',
                  fontSize: '16px',
                  fontFamily: 'Arial',
                }}
              >
                <span>Anderson</span>
              </div>
              <div
                style={{
                  marginTop: '10px',
                  marginLeft: '85px',
                  fontSize: '14px',
                  fontFamily: 'Arial',
                  color: '#8c8c8c',
                }}
              >
                <span> Bom dia amigo!</span>
              </div>
            </div>
          </div>

          <div style={{ marginBottom: '18px' }}>
            <img
              className="header-avatar"
              style={{
                marginLeft: '13px',
                marginTop: '9px',
                width: '53px',
                height: '53px',
                borderRadius: '100%',
              }}
              src={Avatar}
              alt="avatar"
            />
            <div
              style={{
                marginTop: '-50px',
                marginLeft: '85px',
                fontSize: '16px',
                fontFamily: 'Arial',
              }}
            >
              <span>Ana Paula</span>
            </div>
            <div
              style={{
                marginTop: '10px',
                marginLeft: '85px',
                fontSize: '14px',
                fontFamily: 'Arial',
                color: '#8c8c8c',
              }}
            >
              <span>Olá, pessoal! Bom dia a todos do grupo!</span>
            </div>
          </div>
          <div style={{ marginBottom: '18px' }}>
            <img
              className="header-avatar"
              style={{
                marginLeft: '13px',
                marginTop: '9px',
                width: '53px',
                height: '53px',
                borderRadius: '100%',
              }}
              src={Avatar}
              alt="avatar"
            />
          </div>

          <div style={{ marginBottom: '18px' }}>
            <img
              className="header-avatar"
              style={{
                marginLeft: '13px',
                marginTop: '9px',
                width: '53px',
                height: '53px',
                borderRadius: '100%',
              }}
              src={Avatar}
              alt="avatar"
            />
          </div>

          <div style={{ marginBottom: '18px' }}>
            <img
              className="header-avatar"
              style={{
                marginLeft: '13px',
                marginTop: '9px',
                width: '53px',
                height: '53px',
                borderRadius: '100%',
              }}
              src={Avatar}
              alt="avatar"
            />
          </div>

          <div style={{ marginBottom: '18px' }}>
            <img
              className="header-avatar"
              style={{
                marginLeft: '13px',
                marginTop: '9px',
                width: '53px',
                height: '53px',
                borderRadius: '100%',
              }}
              src={Avatar}
              alt="avatar"
            />
          </div>

          <div style={{ marginBottom: '18px' }}>
            <img
              className="header-avatar"
              style={{
                marginLeft: '13px',
                marginTop: '9px',
                width: '53px',
                height: '53px',
                borderRadius: '100%',
              }}
              src={Avatar}
              alt="avatar"
            />
          </div>
        </div>
      </div>

      <div className="contentarea"></div>
    </div>
  )
}

export default App
