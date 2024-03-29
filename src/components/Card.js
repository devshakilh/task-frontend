// Inside your React component
import React from 'react';
import { SiBookstack } from "react-icons/si";
import { SlCalender } from "react-icons/sl";
import { TiMessages } from "react-icons/ti";

import { FaCalendarAlt } from "react-icons/fa";
import FileUpload from './Upload/FileUpload';


const Card = () => {



  return (

    <div className=' flex gap-4 py-6 mb-12 shadow-lg overflow-x-auto scrollable-element pl-8'>

<div className='max-h-[600px] scrollable-element px-4 min-w-[400px] overflow-y-auto'>
    {/* Section 1 */}
    <div className='flex font-semibold justify-between'>
        <h1 className='text-gray-700 flex gap-2'>
            <span className='bg-red-700 rounded-2xl rounded-r-none px-2'></span> Incomplete
        </h1>
        <p className='text-gray-700'>0</p>
    </div>
    
    <div className=''>
        {/* Subsection 1 */}
        <div>
            {/* Client Information */}
            <div className='flex justify-between text-gray-800 pt-12'>
                {/* Client 1 */}
                <div className='flex gap-2'>
                    <img className='h-6 w-6 rounded-full' src='https://t4.ftcdn.net/jpg/02/14/74/61/360_F_214746128_31JkeaP6rU0NzzzdFC4khGkmqc8noe6h.jpg' alt=''/>
                    <p className='text-[14px] font-semibold'>Client Name</p>
                </div>
                {/* Client 2 */}
                <div className='flex gap-2'>
                    <img className='h-6 w-6 rounded-full' src='https://t4.ftcdn.net/jpg/02/14/74/61/360_F_214746128_31JkeaP6rU0NzzzdFC4khGkmqc8noe6h.jpg' alt=''/>
                    <p className='text-[14px] font-semibold'>Client Name</p>
                </div>
            </div>

            {/* Subsection 2 */}
            <div className='flex justify-between py-4 text-gray-700'>
                {/* Information */}
                <p className='flex items-center gap-2 text-12px'><span><SiBookstack /></span> Lorem ipsum dolor sit amet ocur... </p>
                {/* Calendar */}
                <p className='flex items-center gap-2 font-semibold '><SlCalender /> <span>1/2</span></p>
            </div>

            {/* Subsection 3 */}
            <div className='flex justify-between'>
                {/* Images and Details */}
                <img className='h-6 w-6 rounded-full' src='https://t4.ftcdn.net/jpg/02/14/74/61/360_F_214746128_31JkeaP6rU0NzzzdFC4khGkmqc8noe6h.jpg' alt=''/>
                <img className='h-6 w-6 rounded-full' src='https://t4.ftcdn.net/jpg/02/14/74/61/360_F_214746128_31JkeaP6rU0NzzzdFC4khGkmqc8noe6h.jpg' alt=''/>
                <p className='text-[15px] font-medium text-gray-800'>12+</p>
                <p className='flex items-center gap-2 text-gray-600 font-semibold'><span><TiMessages /></span> 15</p>
                <p className='flex items-center gap-2 text-gray-600 font-semibold'><span><FileUpload /></span></p>
                <p className='flex items-center gap-2 text-gray-600 font-semibold'><span><FaCalendarAlt /></span> 30-12-2022</p>
            </div>
        </div>

        <div className='py-12'>

{/* Section 2: Client Information */}
<div className='flex justify-between text-gray-800'>
    {/* Client 1 */}
    <div className='flex gap-2'>
        <img className='h-6 w-6 rounded-full' src='https://t4.ftcdn.net/jpg/02/14/74/61/360_F_214746128_31JkeaP6rU0NzzzdFC4khGkmqc8noe6h.jpg' alt=''/>
        <p className='text-[14px] font-semibold'>Client Name</p>
    </div>
    {/* Client 2 */}
    <div className='flex gap-2'>
        <img className='h-6 w-6 rounded-full' src='https://t4.ftcdn.net/jpg/02/14/74/61/360_F_214746128_31JkeaP6rU0NzzzdFC4khGkmqc8noe6h.jpg' alt=''/>
        <p className='text-[14px] font-semibold'>Client Name</p>
    </div>
</div>

{/* Subsection 2 */}
<div className='flex justify-between py-4 text-gray-700'>
    <p className='flex items-center gap-2 text-12px'><span><SiBookstack /></span> Lorem ipsum dolor sit amet ocur... </p>
    <p className='flex items-center gap-2 font-semibold '><SlCalender /> <span>1/2</span></p>
</div>

{/* Subsection 3: Images and Details */}
<div className='flex justify-between'>
    <img className='h-6 w-6 rounded-full' src='https://t4.ftcdn.net/jpg/02/14/74/61/360_F_214746128_31JkeaP6rU0NzzzdFC4khGkmqc8noe6h.jpg' alt=''/>
    <img className='h-6 w-6 rounded-full' src='https://t4.ftcdn.net/jpg/02/14/74/61/360_F_214746128_31JkeaP6rU0NzzzdFC4khGkmqc8noe6h.jpg' alt=''/>
    <p className='text-[15px] font-medium text-gray-800'>12+</p>
    <p className='flex items-center gap-2 text-gray-600 font-semibold'><span><TiMessages /></span> 15</p>
    <p className='flex items-center gap-2 text-gray-600 font-semibold'><span><FileUpload /></span></p>
    <p className='flex items-center gap-2 text-gray-600 font-semibold'><span><FaCalendarAlt /></span> 30-12-2022</p>
</div>

</div>

    </div>
</div>



{/* Section number 4 ================   start  ---------========== */}
  
 
   <div className='max-h-[600px] scrollable-element px-4 min-w-[400px] overflow-y-auto '>

   <div className='flex font-semibold justify-between'>
<h1 className='text-gray-700 flex gap-2'><span className='bg-[#06b6d4] rounded-2xl rounded-r-none px-2'/>ToDo</h1>
<p className='text-gray-700'>0</p>
</div>
   

<div className=''>
        {/* Subsection 1 */}
        <div>
            {/* Client Information */}
            <div className='flex justify-between text-gray-800 pt-12'>
                {/* Client 1 */}
                <div className='flex gap-2'>
                    <img className='h-6 w-6 rounded-full' src='https://t4.ftcdn.net/jpg/02/14/74/61/360_F_214746128_31JkeaP6rU0NzzzdFC4khGkmqc8noe6h.jpg' alt=''/>
                    <p className='text-[14px] font-semibold'>Client Name</p>
                </div>
                {/* Client 2 */}
                <div className='flex gap-2'>
                    <img className='h-6 w-6 rounded-full' src='https://t4.ftcdn.net/jpg/02/14/74/61/360_F_214746128_31JkeaP6rU0NzzzdFC4khGkmqc8noe6h.jpg' alt=''/>
                    <p className='text-[14px] font-semibold'>Client Name</p>
                </div>
            </div>

            {/* Subsection 2 */}
            <div className='flex justify-between py-4 text-gray-700'>
                {/* Information */}
                <p className='flex items-center gap-2 text-12px'><span><SiBookstack /></span> Lorem ipsum dolor sit amet ocur... </p>
                {/* Calendar */}
                <p className='flex items-center gap-2 font-semibold '><SlCalender /> <span>1/2</span></p>
            </div>

            {/* Subsection 3 */}
            <div className='flex justify-between'>
                {/* Images and Details */}
                <img className='h-6 w-6 rounded-full' src='https://t4.ftcdn.net/jpg/02/14/74/61/360_F_214746128_31JkeaP6rU0NzzzdFC4khGkmqc8noe6h.jpg' alt=''/>
                <img className='h-6 w-6 rounded-full' src='https://t4.ftcdn.net/jpg/02/14/74/61/360_F_214746128_31JkeaP6rU0NzzzdFC4khGkmqc8noe6h.jpg' alt=''/>
                <p className='text-[15px] font-medium text-gray-800'>12+</p>
                <p className='flex items-center gap-2 text-gray-600 font-semibold'><span><TiMessages /></span> 15</p>
                <p className='flex items-center gap-2 text-gray-600 font-semibold'><span><FileUpload /></span></p>
                <p className='flex items-center gap-2 text-gray-600 font-semibold'><span><FaCalendarAlt /></span> 30-12-2022</p>
            </div>
        </div>

        <div className='py-12'>

{/* Section 2: Client Information */}
<div className='flex justify-between text-gray-800'>
    {/* Client 1 */}
    <div className='flex gap-2'>
        <img className='h-6 w-6 rounded-full' src='https://t4.ftcdn.net/jpg/02/14/74/61/360_F_214746128_31JkeaP6rU0NzzzdFC4khGkmqc8noe6h.jpg' alt=''/>
        <p className='text-[14px] font-semibold'>Client Name</p>
    </div>
    {/* Client 2 */}
    <div className='flex gap-2'>
        <img className='h-6 w-6 rounded-full' src='https://t4.ftcdn.net/jpg/02/14/74/61/360_F_214746128_31JkeaP6rU0NzzzdFC4khGkmqc8noe6h.jpg' alt=''/>
        <p className='text-[14px] font-semibold'>Client Name</p>
    </div>
</div>

{/* Subsection 2 */}
<div className='flex justify-between py-4 text-gray-700'>
    <p className='flex items-center gap-2 text-12px'><span><SiBookstack /></span> Lorem ipsum dolor sit amet ocur... </p>
    <p className='flex items-center gap-2 font-semibold '><SlCalender /> <span>1/2</span></p>
</div>

{/* Subsection 3: Images and Details */}
<div className='flex justify-between'>
    <img className='h-6 w-6 rounded-full' src='https://t4.ftcdn.net/jpg/02/14/74/61/360_F_214746128_31JkeaP6rU0NzzzdFC4khGkmqc8noe6h.jpg' alt=''/>
    <img className='h-6 w-6 rounded-full' src='https://t4.ftcdn.net/jpg/02/14/74/61/360_F_214746128_31JkeaP6rU0NzzzdFC4khGkmqc8noe6h.jpg' alt=''/>
    <p className='text-[15px] font-medium text-gray-800'>12+</p>
    <p className='flex items-center gap-2 text-gray-600 font-semibold'><span><TiMessages /></span> 15</p>
    <p className='flex items-center gap-2 text-gray-600 font-semibold'><span><FileUpload /></span></p>
    <p className='flex items-center gap-2 text-gray-600 font-semibold'><span><FaCalendarAlt /></span> 30-12-2022</p>
</div>

</div>

    </div>


  
  
   </div> 




{/* Section number 5 ================   start  ---------========== */}


   <div className='max-h-[600px] scrollable-element px-4 min-w-[400px] overflow-y-auto '>

   <div className='flex font-semibold justify-between'>
<h1 className='text-gray-700 flex gap-2'><span className='bg-amber-600 rounded-2xl rounded-r-none px-2'/> Doing</h1>
<p className='text-gray-700'>0</p>
</div>
    

<div className=''>
        {/* Subsection 1 */}
        <div>
            {/* Client Information */}
            <div className='flex justify-between text-gray-800 pt-12'>
                {/* Client 1 */}
                <div className='flex gap-2'>
                    <img className='h-6 w-6 rounded-full' src='https://t4.ftcdn.net/jpg/02/14/74/61/360_F_214746128_31JkeaP6rU0NzzzdFC4khGkmqc8noe6h.jpg' alt=''/>
                    <p className='text-[14px] font-semibold'>Client Name</p>
                </div>
                {/* Client 2 */}
                <div className='flex gap-2'>
                    <img className='h-6 w-6 rounded-full' src='https://t4.ftcdn.net/jpg/02/14/74/61/360_F_214746128_31JkeaP6rU0NzzzdFC4khGkmqc8noe6h.jpg' alt=''/>
                    <p className='text-[14px] font-semibold'>Client Name</p>
                </div>
            </div>

            {/* Subsection 2 */}
            <div className='flex justify-between py-4 text-gray-700'>
                {/* Information */}
                <p className='flex items-center gap-2 text-12px'><span><SiBookstack /></span> Lorem ipsum dolor sit amet ocur... </p>
                {/* Calendar */}
                <p className='flex items-center gap-2 font-semibold '><SlCalender /> <span>1/2</span></p>
            </div>

            {/* Subsection 3 */}
            <div className='flex justify-between'>
                {/* Images and Details */}
                <img className='h-6 w-6 rounded-full' src='https://t4.ftcdn.net/jpg/02/14/74/61/360_F_214746128_31JkeaP6rU0NzzzdFC4khGkmqc8noe6h.jpg' alt=''/>
                <img className='h-6 w-6 rounded-full' src='https://t4.ftcdn.net/jpg/02/14/74/61/360_F_214746128_31JkeaP6rU0NzzzdFC4khGkmqc8noe6h.jpg' alt=''/>
                <p className='text-[15px] font-medium text-gray-800'>12+</p>
                <p className='flex items-center gap-2 text-gray-600 font-semibold'><span><TiMessages /></span> 15</p>
                <p className='flex items-center gap-2 text-gray-600 font-semibold'><span><FileUpload /></span></p>
                <p className='flex items-center gap-2 text-gray-600 font-semibold'><span><FaCalendarAlt /></span> 30-12-2022</p>
            </div>
        </div>

        <div className='py-12'>

{/* Section 2: Client Information */}
<div className='flex justify-between text-gray-800'>
    {/* Client 1 */}
    <div className='flex gap-2'>
        <img className='h-6 w-6 rounded-full' src='https://t4.ftcdn.net/jpg/02/14/74/61/360_F_214746128_31JkeaP6rU0NzzzdFC4khGkmqc8noe6h.jpg' alt=''/>
        <p className='text-[14px] font-semibold'>Client Name</p>
    </div>
    {/* Client 2 */}
    <div className='flex gap-2'>
        <img className='h-6 w-6 rounded-full' src='https://t4.ftcdn.net/jpg/02/14/74/61/360_F_214746128_31JkeaP6rU0NzzzdFC4khGkmqc8noe6h.jpg' alt=''/>
        <p className='text-[14px] font-semibold'>Client Name</p>
    </div>
</div>

{/* Subsection 2 */}
<div className='flex justify-between py-4 text-gray-700'>
    <p className='flex items-center gap-2 text-12px'><span><SiBookstack /></span> Lorem ipsum dolor sit amet ocur... </p>
    <p className='flex items-center gap-2 font-semibold '><SlCalender /> <span>1/2</span></p>
</div>

{/* Subsection 3: Images and Details */}
<div className='flex justify-between'>
    <img className='h-6 w-6 rounded-full' src='https://t4.ftcdn.net/jpg/02/14/74/61/360_F_214746128_31JkeaP6rU0NzzzdFC4khGkmqc8noe6h.jpg' alt=''/>
    <img className='h-6 w-6 rounded-full' src='https://t4.ftcdn.net/jpg/02/14/74/61/360_F_214746128_31JkeaP6rU0NzzzdFC4khGkmqc8noe6h.jpg' alt=''/>
    <p className='text-[15px] font-medium text-gray-800'>12+</p>
    <p className='flex items-center gap-2 text-gray-600 font-semibold'><span><TiMessages /></span> 15</p>
    <p className='flex items-center gap-2 text-gray-600 font-semibold'><span><FileUpload /></span></p>
    <p className='flex items-center gap-2 text-gray-600 font-semibold'><span><FaCalendarAlt /></span> 30-12-2022</p>
</div>

</div>

    </div>





  
   </div>



{/* Section number 6===========    start  ---------========== */}


   <div className='max-h-[600px] scrollable-element px-4 min-w-[400px] overflow-y-auto '>

  
<div className=''>
        {/* Subsection 1 */}
        <div>
            {/* Client Information */}
            <div className='flex justify-between text-gray-800 pt-12'>
                {/* Client 1 */}
                <div className='flex gap-2'>
                    <img className='h-6 w-6 rounded-full' src='https://t4.ftcdn.net/jpg/02/14/74/61/360_F_214746128_31JkeaP6rU0NzzzdFC4khGkmqc8noe6h.jpg' alt=''/>
                    <p className='text-[14px] font-semibold'>Client Name</p>
                </div>
                {/* Client 2 */}
                <div className='flex gap-2'>
                    <img className='h-6 w-6 rounded-full' src='https://t4.ftcdn.net/jpg/02/14/74/61/360_F_214746128_31JkeaP6rU0NzzzdFC4khGkmqc8noe6h.jpg' alt=''/>
                    <p className='text-[14px] font-semibold'>Client Name</p>
                </div>
            </div>

            {/* Subsection 2 */}
            <div className='flex justify-between py-4 text-gray-700'>
                {/* Information */}
                <p className='flex items-center gap-2 text-12px'><span><SiBookstack /></span> Lorem ipsum dolor sit amet ocur... </p>
                {/* Calendar */}
                <p className='flex items-center gap-2 font-semibold '><SlCalender /> <span>1/2</span></p>
            </div>

            {/* Subsection 3 */}
            <div className='flex justify-between'>
                {/* Images and Details */}
                <img className='h-6 w-6 rounded-full' src='https://t4.ftcdn.net/jpg/02/14/74/61/360_F_214746128_31JkeaP6rU0NzzzdFC4khGkmqc8noe6h.jpg' alt=''/>
                <img className='h-6 w-6 rounded-full' src='https://t4.ftcdn.net/jpg/02/14/74/61/360_F_214746128_31JkeaP6rU0NzzzdFC4khGkmqc8noe6h.jpg' alt=''/>
                <p className='text-[15px] font-medium text-gray-800'>12+</p>
                <p className='flex items-center gap-2 text-gray-600 font-semibold'><span><TiMessages /></span> 15</p>
                <p className='flex items-center gap-2 text-gray-600 font-semibold'><span><FileUpload /></span></p>
                <p className='flex items-center gap-2 text-gray-600 font-semibold'><span><FaCalendarAlt /></span> 30-12-2022</p>
            </div>
        </div>

        <div className='py-12'>

{/* Section 2: Client Information */}
<div className='flex justify-between text-gray-800'>
    {/* Client 1 */}
    <div className='flex gap-2'>
        <img className='h-6 w-6 rounded-full' src='https://t4.ftcdn.net/jpg/02/14/74/61/360_F_214746128_31JkeaP6rU0NzzzdFC4khGkmqc8noe6h.jpg' alt=''/>
        <p className='text-[14px] font-semibold'>Client Name</p>
    </div>
    {/* Client 2 */}
    <div className='flex gap-2'>
        <img className='h-6 w-6 rounded-full' src='https://t4.ftcdn.net/jpg/02/14/74/61/360_F_214746128_31JkeaP6rU0NzzzdFC4khGkmqc8noe6h.jpg' alt=''/>
        <p className='text-[14px] font-semibold'>Client Name</p>
    </div>
</div>

{/* Subsection 2 */}
<div className='flex justify-between py-4 text-gray-700'>
    <p className='flex items-center gap-2 text-12px'><span><SiBookstack /></span> Lorem ipsum dolor sit amet ocur... </p>
    <p className='flex items-center gap-2 font-semibold '><SlCalender /> <span>1/2</span></p>
</div>

{/* Subsection 3: Images and Details */}
<div className='flex justify-between'>
    <img className='h-6 w-6 rounded-full' src='https://t4.ftcdn.net/jpg/02/14/74/61/360_F_214746128_31JkeaP6rU0NzzzdFC4khGkmqc8noe6h.jpg' alt=''/>
    <img className='h-6 w-6 rounded-full' src='https://t4.ftcdn.net/jpg/02/14/74/61/360_F_214746128_31JkeaP6rU0NzzzdFC4khGkmqc8noe6h.jpg' alt=''/>
    <p className='text-[15px] font-medium text-gray-800'>12+</p>
    <p className='flex items-center gap-2 text-gray-600 font-semibold'><span><TiMessages /></span> 15</p>
    <p className='flex items-center gap-2 text-gray-600 font-semibold'><span><FileUpload /></span></p>
    <p className='flex items-center gap-2 text-gray-600 font-semibold'><span><FaCalendarAlt /></span> 30-12-2022</p>
</div>

</div>

    </div>



   </div>


{/* 
Section number 7    start  ---------========== */}

 <div className='max-h-[600px] scrollable-element px-4 min-w-[400px] overflow-y-auto '>
 <div className='flex font-semibold justify-between'>
<h1 className='text-gray-700'>Review</h1>
<p className='text-gray-700'>0</p>
</div>

<div className=''>
        {/* Subsection 1 */}
        <div>
            {/* Client Information */}
            <div className='flex justify-between text-gray-800 pt-12'>
                {/* Client 1 */}
                <div className='flex gap-2'>
                    <img className='h-6 w-6 rounded-full' src='https://t4.ftcdn.net/jpg/02/14/74/61/360_F_214746128_31JkeaP6rU0NzzzdFC4khGkmqc8noe6h.jpg' alt=''/>
                    <p className='text-[14px] font-semibold'>Client Name</p>
                </div>
                {/* Client 2 */}
                <div className='flex gap-2'>
                    <img className='h-6 w-6 rounded-full' src='https://t4.ftcdn.net/jpg/02/14/74/61/360_F_214746128_31JkeaP6rU0NzzzdFC4khGkmqc8noe6h.jpg' alt=''/>
                    <p className='text-[14px] font-semibold'>Client Name</p>
                </div>
            </div>

            {/* Subsection 2 */}
            <div className='flex justify-between py-4 text-gray-700'>
                {/* Information */}
                <p className='flex items-center gap-2 text-12px'><span><SiBookstack /></span> Lorem ipsum dolor sit amet ocur... </p>
                {/* Calendar */}
                <p className='flex items-center gap-2 font-semibold '><SlCalender /> <span>1/2</span></p>
            </div>

            {/* Subsection 3 */}
            <div className='flex justify-between'>
                {/* Images and Details */}
                <img className='h-6 w-6 rounded-full' src='https://t4.ftcdn.net/jpg/02/14/74/61/360_F_214746128_31JkeaP6rU0NzzzdFC4khGkmqc8noe6h.jpg' alt=''/>
                <img className='h-6 w-6 rounded-full' src='https://t4.ftcdn.net/jpg/02/14/74/61/360_F_214746128_31JkeaP6rU0NzzzdFC4khGkmqc8noe6h.jpg' alt=''/>
                <p className='text-[15px] font-medium text-gray-800'>12+</p>
                <p className='flex items-center gap-2 text-gray-600 font-semibold'><span><TiMessages /></span> 15</p>
                <p className='flex items-center gap-2 text-gray-600 font-semibold'><span><FileUpload /></span></p>
                <p className='flex items-center gap-2 text-gray-600 font-semibold'><span><FaCalendarAlt /></span> 30-12-2022</p>
            </div>
        </div>

        <div className='py-12'>

{/* Section 2: Client Information */}
<div className='flex justify-between text-gray-800'>
    {/* Client 1 */}
    <div className='flex gap-2'>
        <img className='h-6 w-6 rounded-full' src='https://t4.ftcdn.net/jpg/02/14/74/61/360_F_214746128_31JkeaP6rU0NzzzdFC4khGkmqc8noe6h.jpg' alt=''/>
        <p className='text-[14px] font-semibold'>Client Name</p>
    </div>
    {/* Client 2 */}
    <div className='flex gap-2'>
        <img className='h-6 w-6 rounded-full' src='https://t4.ftcdn.net/jpg/02/14/74/61/360_F_214746128_31JkeaP6rU0NzzzdFC4khGkmqc8noe6h.jpg' alt=''/>
        <p className='text-[14px] font-semibold'>Client Name</p>
    </div>
</div>

{/* Subsection 2 */}
<div className='flex justify-between py-4 text-gray-700'>
    <p className='flex items-center gap-2 text-12px'><span><SiBookstack /></span> Lorem ipsum dolor sit amet ocur... </p>
    <p className='flex items-center gap-2 font-semibold '><SlCalender /> <span>1/2</span></p>
</div>

{/* Subsection 3: Images and Details */}
<div className='flex justify-between'>
    <img className='h-6 w-6 rounded-full' src='https://t4.ftcdn.net/jpg/02/14/74/61/360_F_214746128_31JkeaP6rU0NzzzdFC4khGkmqc8noe6h.jpg' alt=''/>
    <img className='h-6 w-6 rounded-full' src='https://t4.ftcdn.net/jpg/02/14/74/61/360_F_214746128_31JkeaP6rU0NzzzdFC4khGkmqc8noe6h.jpg' alt=''/>
    <p className='text-[15px] font-medium text-gray-800'>12+</p>
    <p className='flex items-center gap-2 text-gray-600 font-semibold'><span><TiMessages /></span> 15</p>
    <p className='flex items-center gap-2 text-gray-600 font-semibold'><span><FileUpload /></span></p>
    <p className='flex items-center gap-2 text-gray-600 font-semibold'><span><FaCalendarAlt /></span> 30-12-2022</p>
</div>

</div>

    </div>



  
   </div>


    </div>


  );
};

export default Card;