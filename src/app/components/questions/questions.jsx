import React from 'react';
import { Link } from 'react-router';

class Questions extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return(
      <div className="container">
        <h2>Question List</h2>
        <table className="table">
          <thead>
            <tr>
              <th>Question Id</th>
              <th>Question Type</th>
              <th>Question Text</th>
              <th>Response</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Q1</td>
              <td>Type1</td>
              <td>Text1</td>
              <td>R1</td>
            </tr>
            <tr>
              <td>Q2</td>
              <td>Type2</td>
              <td>Text2</td>
              <td>R2</td>
            </tr>
            <tr>
              <td>Q3</td>
              <td>Type3</td>
              <td>Text3</td>
              <td>R3</td>
            </tr>
          </tbody>
        </table>
      </div>
    );
  }
}

export default Questions;
