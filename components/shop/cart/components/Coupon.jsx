"use client"
import { useRouter } from 'next/navigation';
import { useState } from 'react';
const Coupon = () => {

    const router = useRouter(); // Initialize useRouter
    const [couponCode, setCouponCode] = useState(''); // State to track the coupon code input

    // Function to handle applying coupon
    const handleApplyCoupon = () => {
        if (couponCode.trim() === '') {
            alert('Please enter a coupon code');
            console.log("Please enter a coupon code")
        } else {
            // Perform action to apply coupon code (if needed)
            alert(`Coupon ${couponCode} applied!`);
        }
    };
    // Function to handle button click
    const handleAddMoreItemClick = () => {
        // router.push('/shop/shop-list'); // Navigate to '/shop/shop-list'
        router.back();
    };
    return (
        <div className="apply-coupon">
            <div className="form-group">
                <input
                    type="text"
                    name="coupon-code"
                    className="input"
                    placeholder="Coupon Code"
                    value={couponCode}
                    onChange={(e) => setCouponCode(e.target.value)} // Update couponCode state on input change
                    required
                />
            </div>

            <div className="form-group">
                <button onClick={handleApplyCoupon} type="button" className="theme-btn btn-style-one">
                    Apply Coupon
                </button>
                {/* Display message based on coupon code input */}
                {/* <span>{couponCode.trim() === '' ? '' : 'Your coupon is applied'}</span> */}
            </div>

            <div className="form-group pull-right">
                <button onClick={handleAddMoreItemClick} type="button" className="theme-btn btn-style-three">
                    Add More Item
                </button>
            </div>
        </div>
    );
};

export default Coupon;
