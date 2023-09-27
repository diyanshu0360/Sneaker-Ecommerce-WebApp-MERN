import React, { useEffect, useState } from 'react'
import Announcement from '../components/Announcement'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import ProductItem from '../components/ProductItem'
import { useLocation } from "react-router";
import axios from "axios"
import { Link } from "react-router-dom";

const ProductList = () => {

  const location = useLocation();
  const cat = location.pathname.split("/")[2];

  const [filters, setFilters] = useState({});
  const [sort, setSort] = useState("newest");
  const [products, setProducts] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);

  const handleFilters = (e) => {
    const value = e.target.value;
    setFilters({
      ...filters,
      [e.target.name]: value,
    });
  };

  useEffect(() => {
    const getProducts = async () => {
      try {
        const res = await axios.get(
          cat
            ? `http://localhost:5002/api/products?category=${cat}`
            : "http://localhost:5002/api/products"
        );
        setProducts(res.data);
      } catch (err) { }
    };
    getProducts();
  }, [cat]);

  useEffect(() => {
    const filtered = products.filter((item) => {
      if (cat && item.categories.indexOf(cat) === -1) {
        return false;
      }
      if (filters.color && item.color.indexOf(filters.color) === -1) {
        return false;
      }
      if (filters.size && item.size.indexOf(filters.size) === -1) {
        return false;
      }
      return true;
    });

    let sortedProducts = [...filtered];
    if (sort === "newest") {
      sortedProducts.sort((a, b) => a.createdAt - b.createdAt);
    } else if (sort === "asc") {
      sortedProducts.sort((a, b) => a.price - b.price);
    } else {
      sortedProducts.sort((a, b) => b.price - a.price);
    }
    setFilteredProducts(sortedProducts);
  }, [products, cat, filters, sort]);

  return (
    <div>
      <Announcement />
      <Navbar />
      <div>
        <div className='container mx-auto p-10'>
          <div className='font-bold text-2xl m-3'><p>PRODUCTS</p></div>
          <div className='flex justify-between m-3 flex-wrap'>
            <div className='flex gap-3 self-center m-2'>
              <p className='w-28'>Filter Products : </p>
              <select className='border w-16 h-6 border-black' name="color" onChange={handleFilters}>
                <option disabled>Color</option>
                <option>yellow</option>
                <option>green</option>
                <option>red</option>
                <option>blue</option>
                <option>white</option>
                <option>black</option>
              </select>
              <select className='border w-16 h-6 border-black' name="size" onChange={handleFilters}>
                <option disabled>Size</option>
                <option >S</option>
                <option >M</option>
                <option >L</option>
              </select>
            </div>
            <div className='flex gap-3 self-center m-2'>
              <p className='w-28'>Filter Products : </p>
              <select className='border h-6 border-black' onChange={(e) => setSort(e.target.value)}>
                <option value="newest">Newest</option>
                <option value="asc">Low Price</option>
                <option value="desc">High Price</option>
              </select>
            </div>
          </div>
          <div className='flex flex-wrap justify-evenly gap-[45px]'>
            {filteredProducts
              ? filteredProducts.map((item, index) =>
                <Link to={`/product/${item._id}`} key={index}>
                  <ProductItem item={item} />
                </Link>
              )
              : products
                .slice(0, 8)
                .map((item, index) =>
                  <Link to={`/product/${item._id}`} key={index}>
                    <ProductItem item={item} />
                  </Link>
                )}
          </div>
        </div>
        <div></div>
      </div>
      <Footer />
    </div>
  )
}

export default ProductList