import { useState } from 'react';
import Categories from './Categories';
import data from './data'
import Menu from './Menu';

const allCategories=['all', ...new Set(data.map((item)=>item.category))]


function App() {
  const [menuItems, setMenuItems]=useState(data);

  const [categories, setCategories]=useState(allCategories);

  const filterItems=(category)=>{
    const newItems=data.filter(item=>item.category===category);
    setMenuItems(newItems);
    if(category==='all'){
      setMenuItems(data)
    }
  }

  return (

    <main>
      <section className='menu section'>
        <div className="title">
          <h2 className='text-center'>Our Menu</h2>
        </div>
        <br />
        <Categories categories={categories} filterItems={filterItems}/>
        <Menu items={menuItems}/>
      </section>
    </main>
  );
}

export default App;
