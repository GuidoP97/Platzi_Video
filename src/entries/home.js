import React from 'react'
import { render } from 'react-dom'
import Home from '../pages/containers/Home.jsx'
import data from '../api.json'

const homeContainer = document.getElementById('home-container')

render(<Home data={ data } />, homeContainer)