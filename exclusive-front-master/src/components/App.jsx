import React, { useEffect, useState } from "react";
import "../modules/index.modules.scss";
import smartWatchSvg from '../icons/smartwatch.svg';
import cameraSvg from '../icons/camera.svg';
import headphonesSvg from '../icons/headphones.svg';
import gamingSvg from '../icons/gaming.svg';
import computersSvg from '../icons/computers.svg';
import audioSvg from '../icons/audio.svg';
import phonesSvg from '../icons/phones.svg';




export default function App() {

  const [categories, setCategories] = useState([]);

  useEffect(() => {
    const fetchCategories = async () => {
      try {
        const response = await fetch("http://localhost:5000/categories");
        if (!response.ok) {
          throw new Error("Failed to fetch categories");
        }
        const data = await response.json();
        const categoryNames = data.map(category => category.name);
        setCategories(categoryNames);
        console.log(categoryNames)
      } catch (error) {
        console.error("Error", error);
      }
    };

    fetchCategories();
  }, []);


  function getCategoryIcon(category) {
    switch (category) {
      case 'SmartWatch':
        return smartWatchSvg;
      case 'Camera':
        return cameraSvg;
      case 'Headphones':
        return headphonesSvg;
      case 'Gaming':
        return gamingSvg;
      case 'Computers':
        return computersSvg;
      case 'Audio':
        return audioSvg;
      case 'Phones':
        return phonesSvg;
      default:
        return null;
    }
  }

  return (
    <>

<div className="container">
  <div className="header">
    <div className="red-square"></div>
    <div className="categories">Categories</div>
  </div>
  <div className="browse">Browse by Category</div>
</div>

<div className="category-box-container">
  {categories.map((category, index) => (
    <div className="category-box" key={index}>
      <img src={getCategoryIcon(category)} alt={category} className="category-icon" />
      <div className="category-name">{category}</div>
    </div>
  ))}
</div>
    </>
  );
}
