import React, {Component} from 'react';
import api from "../../services/api";

class Products extends Component {

    state = {
        products : [],
    }

 async componentDidMount() {
    this.load()
 } 

  load = async () => {
      const { id } = this.props.match.params;
      const response = await api.get(`/products/${id}`)
      this.setState({ products : response.data})  
         
      console.log(response.data);
      
  }       

  render() {
      const {products} = this.state;
  return (
             <div className="card" key={products._id} >
                 <h1>{products.title}</h1> 
                 <h2>{products.description}</h2>
                 </div>         
  )
  }
}

export default Products;
