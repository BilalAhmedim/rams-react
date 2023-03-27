import React from 'react'
import './ProductView.css'
import image_iso from './../assets/1_iso.JPG';
import image_front from './../assets/1_front.JPG';
import image_top from './../assets/1_top.JPG';


const ProductView = () => {

  const product =
  {
    name: '72” Brass Double Slipper Bath tub',
    item_num: 'RA72DB-BL/PL',
    finish: 'Black Outside / Polish Inside',
    material: 'Brass 16 Gauge',
    size: '72”L X 32”W X 31”H',
    avail_finish: 'Antique, Mate, Polish, Others',
    tags: ' Brass, Double Slipper, bath tub',
    certification: 'UPC',
    material_options: 'Brass, Copper, Steel'
  }


  return (
    <React.Fragment>
      <div className='product-view'>
        <div className='wrapper--fixed'>
          <div className='product-view__container'>

            <div className='product-view__light-box'>

              <img src={image_iso} alt="Product Large" />

              <div className='arrow clearfix'>
                <div className='arrow__right'>&nbsp;</div>
                <div className='arrow__left'>&nbsp;</div>
              </div>

              <ul>
                <li className='active'><img src={image_iso} alt='First View' /></li>
                <li><img src={image_front} alt='Second View' /></li>
                <li><img src={image_top} alt='Third View' /></li>
                <li><img src={image_front} alt='Fourth View' /></li>
              </ul>

            </div>

            <div className='product-view__info'>
              <ul>
                <li>Product Name: {product.name}</li>
                <li>Product Item: {product.item_num}</li>
                <li>finsh: {product.finish}</li>
                <li>material: {product.material}</li>
                <li>size: {product.size}</li>
                <li>finish available: {product.avail_finish}</li>
                <li>tags: {product.tags}</li>
                <li>certifications: {product.certification}</li>
                <li>material options: {product.material_options}</li>
              </ul>
            </div>

          </div>
        </div>
      </div>
    </React.Fragment>
  )
}



export default ProductView;