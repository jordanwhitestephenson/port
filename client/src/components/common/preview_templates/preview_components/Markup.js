import React, { Component } from 'react'
import ReactDOM from "react-dom";
import TextField from '@material-ui/core/TextField';
import { renderToStaticMarkup } from 'react-dom/server'
import JumbotronForm from '../../modules/JumboTronForm'

export default class Markup extends Component {
    
    render() {

    return (
        <TextField
        placeholder="MultiLine with rows: 2 and rowsMax: 4"
        multiline={true}
        rows={2}
        rowsMax={4}    
    />
    )
  }
}
