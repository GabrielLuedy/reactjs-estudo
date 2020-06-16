import React, {Component} from 'react';
import api from "../../services/api";
import "./index.css"
import { Link } from 'react-router-dom';
class Main extends Component {

    state = {
        products : [],
        productInfo: {},
        page: 1
    }

 componentDidMount() {
    this.loadProducts()
 } 

  loadProducts = async (page = 1) => {
      const response = await api.get(`/products?page=${page}`)
      const { docs, ...productInfo }  = response.data;
      this.setState({ products : docs, productInfo, page})  
         
      console.log(response);
      
  }       

  voltar = () => {
   const  { page  } = this.state;

    if(page === 1) return ;

    const pageNumber = page - 1;
    console.log('teste',pageNumber)
    this.loadProducts(pageNumber)

  }
 
  ir = () => {
    const  { page , productInfo } = this.state;
 
     if(page === productInfo.pages) return;
 
     const pageNumber = page + 1;
     this.loadProducts(pageNumber)

   }

  render() {
      const {page, productInfo} = this.state;
  return (
      <div>
          {
             this.state.products.map(products => (
             <div className="card" key={products._id} >
                 <h1>{products.title}</h1> 
                 <h2>{products.description}</h2>
                 <Link to={`/products/${products._id}`}>Acessar</Link> 
                 </div>
             )
             ) 
          }
         <div>
             <button disabled={page == 1} onClick={this.voltar}>Anterior</button>
             <button disabled={page == productInfo.pages } onClick={this.ir}>Proximo</button>

         </div>
          
      </div>
  )
  }
}

export default Main;
