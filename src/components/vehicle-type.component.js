import React ,{Component} from 'react';
import axios from 'axios';

export default  class VehicleType extends Component {
    constructor(props) {
      super(props);
      this.state = {vehicletype: ''};
  
      this.handleChange = this.handleChange.bind(this);
      this.handleSubmit = this.handleSubmit.bind(this);
    }
  
    handleChange(event) {
      this.setState({vehicletype: event.target.value});
    }
  
    handleSubmit(event) {
      alert('A name was submitteqqwwd: ' + this.state.vehicletype);
      event.preventDefault();

      const obj = {
        vehicletype: this.state.vehicletype
      };
      axios.post('http://localhost:4000/vechiles/create', obj)
        .then(res => console.log(res.data));
    
    this.setState({
      vehicletype: ''
    });
    }
  
    render() {
      return (
        

<div class="container">
  <div class="row">
    <div class="col-sm">
      One of three columns
    </div>
    <div class="col-sm">
      One of three columns
    </div>
    <div class="col-sm">
    <form onSubmit={this.handleSubmit} >
          <div className="form-group">
              <lable>User</lable>
              <input type="text" className="form-control" value={this.state.value} onChange={this.handleChange} />
          </div>
          {/* <div className="form-group">
              <lable> Password</lable>
              <input type="text" className="form-control" value={this.state.value} onChange={this.handleChange} />
          </div>        */}
          <div className="form-group">
                <input type="submit" class="btn btn-primary" value="Submit" />
          </div>
        </form>
    </div>
  </div>
</div>
    
      );
    }
  }