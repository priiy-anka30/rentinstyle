import React, { useContext, useEffect, useState, useRef } from 'react'
import { useParams } from 'react-router-dom'
import { ShopContext } from '../context/ShopContext';
import { assets } from '../assets/assets';
import RelatedProducts from '../components/RelatedProducts';
// Mock data for rental period options
const rentalPeriods = ['3 Days', '1 Week', '2 Weeks'];

const Product = () => {

  const {productId} = useParams();
  const {products,currency,addToCart} = useContext(ShopContext);
  const [productData,setProductData] = useState(false);
  const [image,setImage] = useState('')
  const [size,setSize] = useState('')
  const [rentalPeriod, setRentalPeriod] = useState('');
  const [showRentPeriodPanel, setShowRentPeriodPanel] = useState(false);
  const rentPeriodRef = useRef(null);  // Ref for positioning

  const fetchProductData = async () =>{
       products.map((item)=>{
        if(item._id === productId){
          setProductData(item)
          setImage(item.image[0])
          return null;
        }
       })
  }

  useEffect(()=>{
    fetchProductData();
  },[productId,products])

  const toggleRentPeriodPanel = () => {
    setShowRentPeriodPanel(!showRentPeriodPanel);
  };

  // Close panel if clicked outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (rentPeriodRef.current && !rentPeriodRef.current.contains(event.target)) {
        setShowRentPeriodPanel(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [rentPeriodRef]);

  return productData ? (
    <div className='border-t-2 border-black pt-10 transition-opacity ease in duration-500 opacity-100'>
      {/* Product Data */}
      <div className='flex gap-12 sm:gap-12 flex-col sm:flex-row'>
          {/* Product Image */}
          <div className='flex-1 flex flex-col-reverse gap-3 sm:flex-row'>
            <div className='flex sm:flex-col overflow-x-auto sm:overflow-y-scroll justify-between sm:justify-normal sm:w-[18.7%] w-full'>
                  {
                    productData.image.map((item,index)=>(
                     <img  onClick={()=>setImage(item)} src={item} key={index} className='w-[24%] sm:w-full sm:mb-3 flex-shrink-0 cursor-pointer' alt="" />
                    ))
                  }
            </div>
            <div className='w-full sm:w-[80%]'>
              <img className='w-full h-auto' src={image} alt="" />
            </div>
          </div>

          {/* Product Info */}
          <div className='flex-1'>
              <h1 className='font-medium text-2xl mt-2'>{productData.name}</h1>
              <div className='flex items-center gap-1 mt-2'>
                <img src={assets.star_icon} alt="" className="w-3 5"/>
                <img src={assets.star_icon} alt="" className="w-3 5"/>
                <img src={assets.star_icon} alt="" className="w-3 5"/>
                <img src={assets.star_icon} alt="" className="w-3 5"/>
                <img src={assets.star_dull_icon} alt="" className="w-3 5"/>
                <p className='pl-2'>(122)</p>
              </div>
              <p className='mt-5 text-3xl font-medium'>{currency}{productData.price}</p>
              <p className='mt-5 text-gray-500 md:w-4/5'>{productData.description}</p>
              <div className='flex flex-col gap-4 my-8'>
                <p>Select Size</p>
                <div className='flex gap-2'>
                  {
                    productData.sizes.map((item,index)=>(
                      <button onClick={()=>setSize(item)} className={`border py-2 px-4 bg-gray-100 ${item === size ? 'border-black' : ''}`} key={index}>{item}</button>
                    ))
                  }
                  <div className="relative" ref={rentPeriodRef}>
                <button onClick={toggleRentPeriodPanel} className='bg-gray-600 text-white px-4 py-3 rounded text-sm active:bg-gray-700 border-white ml-2'>
                  {rentalPeriod ? rentalPeriod : 'Rent Period'}
                </button>

                {/* Rent Period Panel */}
                {showRentPeriodPanel && (
                  <div className='absolute bg-white shadow-lg rounded-lg border p-4 mt-1 right-0 w-48 z-10'>
                    {rentalPeriods.map((period, index) => (
                      <button
                        key={index}
                        onClick={() => { setRentalPeriod(period); setShowRentPeriodPanel(false); }}
                        className={`block w-full text-left px-4 py-2 hover:bg-gray-700 hover:text-white rounded ${rentalPeriod === period ? 'font-bold black' : ''}`}
                      >
                        {period}
                      </button>
                    ))}

                </div>
                )}
              </div>
              </div>
          </div>

              <button onClick={()=>addToCart(productData._id,size)} className='bg-black text-white px-8 py-3 text-sm active:bg-gray-700'>RENT IT</button>
              <hr className='mt-8 sm:w-4/5'/>
              <div className='text-sm text-gray-500 mt-5 flex flex-col gap-1'>
                <p>100% Original Product.</p>
                <p>Cash on delivery is available on this product.</p>
                <p>Easy return and exchange policy within 7 days.</p>
              </div>
          </div>
      </div>
      {/* Description And Review Section */}
      <div className='mt-20'>
        <div className='flex'>
          <b className='border border-black px-5 py-3 text-sm'>Description</b>
          <p className='border border-black px-5 py-3 text-sm'>Reviews (122)</p>
        </div>
        <div className='flex flex-col gap-4 border border-black px-6 py-6 text-sm text-gray-500'>
          <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Libero, exercitationem? Quibusdam consequuntur neque ab ullam? Repudiandae, maxime alias! Veritatis, voluptatum.</p>
          <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Maxime saepe ea, eius voluptates cupiditate, architecto distinctio explicabo, vel ipsam sit facere consectetur voluptatem! Dolorem, pariatur.</p>
        </div>
      </div>
      {/* Display Related Products */}
      <RelatedProducts category={productData.category} />   {/*subCategory={productData.subCategory}*/}
    </div>
  ) : <div className='opacity-0'></div>
}

export default Product;
