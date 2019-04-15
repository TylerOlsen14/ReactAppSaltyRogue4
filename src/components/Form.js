import React, { Component } from 'react'

const Form = props => (
    <form onSubmit={props.getProperty}>
        <input type="text" name='propertyName' />
        <button>Search</button>
    </form>
)




// export class Form extends Component {
//   render() {
//     return (
//       <div>
        
//       </div>
//     )
//   }
// }

export default Form
