import React from 'react'
import ReactDOM from 'react-dom'
import ClassComponent from './classComponent'

ReactDOM.render(
     <ClassComponent value='Contador' initialValue={ 10 } />
, document.getElementById('app'))