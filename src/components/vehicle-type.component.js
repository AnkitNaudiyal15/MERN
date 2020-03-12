import React ,{Component} from 'react';

export default  class VehicleType extends Component {
    constructor(props) {
      super(props);
      this.state = {value: ''};
  
      this.handleChange = this.handleChange.bind(this);
      this.handleSubmit = this.handleSubmit.bind(this);
    }
  
    handleChange(event) {
      this.setState({value: event.target.value});
    }
  
    handleSubmit(event) {
      alert('A name was submitted: ' + this.state.value);
      event.preventDefault();
    }
  
    render() {
      return (
        
        <form onSubmit={this.handleSubmit} >
          <div className="form-group">
              <lable> Vechile Type</lable>
              <input type="text" className="form-control" value={this.state.value} onChange={this.handleChange} />
          </div>
         
          <div className="form-group">
                <input type="submit" class="btn btn-primary" value="Submit" />
          </div>
          
        </form>
      );
    }
  }