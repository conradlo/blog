import React from 'react'
import { withSiteData, Link } from 'react-static'
import TextScramble from './scramble';
import './skeleton.css';
import './style.scss'

export default withSiteData(() => (
    <div className="app">
  <div className="main container">
    <div className="row name-row">
        <div className="twelve columns">
            <h1>Conrad Lo</h1>
            <div className="tag-row">
                I <i className="tag-heart"/>
                <TextScramble/>
            </div>
        </div>
    </div>

    <div className="row motto-row">
        <div className="offset-by-two-thirds one-third column">
            <div className="motto-container">
                <a href="/blog">think like a geek, express like an artist</a>
            </div>
        </div>
    </div>

    <div className="row motto-row-mobile">
        <div className="offset-by-one-half one-half column">
            <div className="motto-container">
                <Link to="/blog">think like a geek<br/>express like an artist</Link>
            </div>
        </div>
    </div>
  </div>
    </div>
))
