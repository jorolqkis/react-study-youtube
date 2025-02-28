import React from 'react';

class SearchBar extends React.Component {
state = {term:''};

onInputChange = (event) =>{

    this.setState({ term: event.target.value })

};

onFormSumbmit = (event) => {
    event.preventDefault();

    this.props.onTermSumbmit(this.state.term);
}

 render () {
     return (
         <div className="search-bar ui segment">

             <form onSubmit ={this.onFormSumbmit} className="ui form">
                 <div className="field">
                    <label>Video Search</label>
                    <input 
                    type="text"
                     value={this.state.term}
                     onChange = {this.onInputChange} />
                 </div>
             </form>

         </div>
     );
 }
}
export default SearchBar;