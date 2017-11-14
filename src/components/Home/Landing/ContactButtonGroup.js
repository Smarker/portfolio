import React from 'react';
import { Button } from 'semantic-ui-react';
import createPDF from '../../PDF/PDF';

export default class ContactButtonGroup extends React.Component {
  constructor(props) {
    super(props);
    this.githubClick = this.githubClick.bind(this);
    this.linkedinClick = this.linkedinClick.bind(this);
    this.emailClick = this.emailClick.bind(this);
    this.pdfClick = this.pdfClick.bind(this);
  }

  pdfClick = () => {
    createPDF();
  }

  githubClick = () => {
    location.href = 'https://github.com/Smarker';
  }

  linkedinClick = () => {
    location.href = 'https://www.linkedin.com/in/stephaniemarker/';
  }

  emailClick = () => {
    location.href = 'mailto:StephanieMarker93@gmail.com';
  }

  render() {
    return (
      <div style={{'margin-top':'15px'}}>
        <Button inverted icon='github' size='small' onClick={this.githubClick}  />
        <Button inverted icon='linkedin' size='small' onClick={this.linkedinClick}  />
        <Button inverted icon='mail' size='small' onClick={this.emailClick}  />
        <Button inverted icon='file pdf outline' size='small' onClick={this.pdfClick}  />
      </div>
    )
  }
}