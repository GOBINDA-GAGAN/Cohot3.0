ecommerce_db
│
├── 👤 USERS
│   │
│   ├── LEVEL 1 ⭐ BASIC
│   │   ├── 1. Show all users
│   │   ├── 2. Find one user by email
│   │   ├── 3. Find all customers
│   │   ├── 4. Find all sellers
│   │   ├── 5. Find the admin
│   │   ├── 6. Find active users
│   │   ├── 7. Find verified users
│   │   ├── 8. Find premium customers
│   │   ├── 9. Find users from Bangalore
│   │   └── 10. Count total users
│   │
│   ├── LEVEL 2 ⭐⭐ FILTERING
│   │   ├── 11. Users older than 25
│   │   ├── 12. Users younger than 30
│   │   ├── 13. Users between age 25-30
│   │   ├── 14. Premium customers from Bangalore
│   │   ├── 15. Active customers
│   │   ├── 16. Unverified customers
│   │   ├── 17. Users from Bangalore OR Mumbai
│   │   ├── 18. Users NOT from Bangalore
│   │   ├── 19. Users whose role is seller/admin
│   │   └── 20. Users whose name starts with "A"
│   │
│   ├── LEVEL 3 ⭐⭐ PROJECTION / SORT
│   │   ├── 21. Show only name + email
│   │   ├── 22. Hide _id
│   │   ├── 23. Sort users by age
│   │   ├── 24. Sort users by newest registration
│   │   ├── 25. Find 3 youngest users
│   │   ├── 26. Find 3 oldest users
│   │   ├── 27. Pagination: page 1
│   │   └── 28. Pagination: page 2
│   │
│   └── LEVEL 4 ⭐⭐⭐ UPDATE / DELETE
│       ├── 29. Change a customer's membership
│       ├── 30. Verify a customer
│       ├── 31. Deactivate a user
│       ├── 32. Activate a user
│       ├── 33. Change user's city
│       ├── 34. Update multiple inactive users
│       └── 35. Delete an inactive test user
│
├── 🏪 SELLERS
│   │
│   ├── LEVEL 1
│   │   ├── 36. Find all sellers
│   │   ├── 37. Count sellers
│   │   ├── 38. Find verified sellers
│   │   ├── 39. Find unverified sellers
│   │   └── 40. Find seller from Bangalore
│   │
│   ├── LEVEL 2
│   │   ├── 41. Show seller store names
│   │   ├── 42. Find sellers with rating > 4.5
│   │   ├── 43. Find sellers with rating < 4.5
│   │   ├── 44. Sort sellers by rating
│   │   └── 45. Find highest-rated seller
│   │
│   └── LEVEL 3 ⭐⭐⭐
│       ├── 46. Count products per seller
│       ├── 47. Find seller with most products
│       ├── 48. Calculate seller revenue
│       ├── 49. Find top seller by revenue
│       └── 50. Find sellers with no products
│
├── 📦 PRODUCTS
│   │
│   ├── LEVEL 1 ⭐ BASIC
│   │   ├── 51. Show all products
│   │   ├── 52. Find one product
│   │   ├── 53. Find all laptops
│   │   ├── 54. Find all mobiles
│   │   ├── 55. Find Apple products
│   │   ├── 56. Find products under ₹20,000
│   │   ├── 57. Find products above ₹50,000
│   │   ├── 58. Count products
│   │   └── 59. Count products by category
│   │
│   ├── LEVEL 2 ⭐⭐ FILTERING
│   │   ├── 60. Products between ₹10k-₹50k
│   │   ├── 61. Apple OR Samsung products
│   │   ├── 62. Products with stock < 20
│   │   ├── 63. Products with stock > 50
│   │   ├── 64. Products rating > 4.5
│   │   ├── 65. Products discount > 10%
│   │   ├── 66. Active products
│   │   ├── 67. Out-of-stock products
│   │   └── 68. Products containing "Air" in name
│   │
│   ├── LEVEL 3 ⭐⭐ SORT / CALCULATION
│   │   ├── 69. Cheapest product
│   │   ├── 70. Most expensive product
│   │   ├── 71. Top 5 highest-rated products
│   │   ├── 72. Top 5 most expensive products
│   │   ├── 73. Calculate discounted price
│   │   ├── 74. Calculate discount amount
│   │   ├── 75. Calculate total inventory value
│   │   └── 76. Calculate inventory value per product
│   │
│   └── LEVEL 4 ⭐⭐⭐ UPDATE
│       ├── 77. Increase product stock
│       ├── 78. Decrease product stock
│       ├── 79. Increase price by 10%
│       ├── 80. Change product discount
│       ├── 81. Add a new specification
│       └── 82. Deactivate a product
│
├── 🛒 ORDERS
│   │
│   ├── LEVEL 1 ⭐ BASIC
│   │   ├── 83. Show all orders
│   │   ├── 84. Find one order by orderNumber
│   │   ├── 85. Find delivered orders
│   │   ├── 86. Find shipped orders
│   │   ├── 87. Find cancelled orders
│   │   ├── 88. Find paid orders
│   │   ├── 89. Find UPI orders
│   │   └── 90. Count orders
│   │
│   ├── LEVEL 2 ⭐⭐
│   │   ├── 91. Orders above ₹50,000
│   │   ├── 92. Orders below ₹50,000
│   │   ├── 93. Orders between ₹50k-₹1L
│   │   ├── 94. Orders from Bangalore
│   │   ├── 95. Orders from May 2026
│   │   ├── 96. Delivered + paid orders
│   │   ├── 97. Cancelled orders
│   │   └── 98. Orders sorted by amount
│   │
│   └── LEVEL 3 ⭐⭐⭐ ITEMS
│       ├── 99. Find orders containing more than one item
│       ├── 100. Find orders containing a specific product
│       ├── 101. Find orders with quantity > 1
│       ├── 102. Calculate number of items per order
│       ├── 103. Calculate order total using items
│       ├── 104. Calculate total quantity per order
│       └── 105. Find largest order
│
├── 💰 REVENUE & BUSINESS ANALYTICS
│   │
│   ├── LEVEL 4 ⭐⭐⭐⭐
│   │   ├── 106. Calculate total revenue
│   │   ├── 107. Calculate delivered revenue
│   │   ├── 108. Calculate revenue excluding cancelled orders
│   │   ├── 109. Calculate average order value
│   │   ├── 110. Find highest-value order
│   │   ├── 111. Find lowest-value order
│   │   ├── 112. Total discount given
│   │   ├── 113. Total shipping fees
│   │   ├── 114. Total tax collected
│   │   └── 115. Total number of products sold
│   │
│   ├── LEVEL 5 ⭐⭐⭐⭐
│   │   ├── 116. Revenue by city
│   │   ├── 117. Revenue by payment method
│   │   ├── 118. Revenue by order status
│   │   ├── 119. Revenue by month
│   │   ├── 120. Orders per month
│   │   ├── 121. Average order value by month
│   │   ├── 122. Revenue by customer
│   │   └── 123. Revenue by membership type
│   │
│   └── LEVEL 6 ⭐⭐⭐⭐⭐
│       ├── 124. Top 5 customers by spending
│       ├── 125. Top 5 customers by order count
│       ├── 126. Customer lifetime value
│       ├── 127. Customers with no orders
│       ├── 128. Customers with cancelled orders
│       ├── 129. Repeat customers
│       └── 130. One-time customers
│
├── 🔗 LOOKUP / RELATIONSHIPS
│   │
│   ├── LEVEL 4 ⭐⭐⭐⭐
│   │   ├── 131. Order + customer information
│   │   ├── 132. Product + seller information
│   │   ├── 133. Orders with customer name
│   │   ├── 134. Products with seller store name
│   │   └── 135. Orders with customer + products
│   │
│   ├── LEVEL 5 ⭐⭐⭐⭐⭐
│   │   ├── 136. Customer → orders → products
│   │   ├── 137. Seller → products → orders
│   │   ├── 138. Find each seller's total sales
│   │   ├── 139. Find each product's total quantity sold
│   │   ├── 140. Find each product's total revenue
│   │   └── 141. Find best-selling product
│   │
│   └── LEVEL 6 🔥
│       ├── 142. Top seller by revenue
│       ├── 143. Top customer by spending
│       ├── 144. Top product by quantity
│       ├── 145. Top product by revenue
│       ├── 146. Seller average order value
│       └── 147. Seller with highest average product rating
│
├── 📊 AGGREGATION
│   │
│   ├── $match
│   │   ├── 148. Match delivered orders
│   │   ├── 149. Match premium customers
│   │   └── 150. Match expensive products
│   │
│   ├── $group
│   │   ├── 151. Group users by city
│   │   ├── 152. Group products by category
│   │   ├── 153. Group orders by status
│   │   ├── 154. Revenue by city
│   │   └── 155. Average product price by category
│   │
│   ├── $unwind
│   │   ├── 156. Flatten order items
│   │   ├── 157. Count products sold
│   │   ├── 158. Quantity sold per product
│   │   └── 159. Revenue per product
│   │
│   ├── $lookup
│   │   ├── 160. Join orders → users
│   │   ├── 161. Join products → sellers
│   │   └── 162. Join order items → products
│   │
│   ├── $project
│   │   ├── 163. Calculate discounted price
│   │   ├── 164. Calculate item revenue
│   │   └── 165. Create custom output
│   │
│   └── COMBINED
│       ├── 166. Customer spending report
│       ├── 167. Seller sales report
│       ├── 168. Product sales report
│       └── 169. Monthly revenue dashboard
│
├── 📈 ADVANCED BUSINESS PROBLEMS
│   │
│   ├── 170. Top 3 products in each category
│   ├── 171. Top customer in each city
│   ├── 172. Top seller in each category
│   ├── 173. Best month by revenue
│   ├── 174. Best month by order count
│   ├── 175. Category generating maximum revenue
│   ├── 176. Category with highest average order value
│   ├── 177. Products never ordered
│   ├── 178. Sellers with zero sales
│   ├── 179. Customers who bought from multiple sellers
│   └── 180. Customers who bought multiple categories
│
└── 🚀 EXPERT LEVEL
    │
    ├── 181. Customer lifetime value
    ├── 182. Seller lifetime revenue
    ├── 183. Product conversion/sales ranking
    ├── 184. Monthly revenue growth %
    ├── 185. Month-over-month order growth
    ├── 186. Average customer order frequency
    ├── 187. Repeat purchase rate
    ├── 188. Customer retention analysis
    ├── 189. RFM-style customer segmentation
    │       ├── Recency
    │       ├── Frequency
    │       └── Monetary value
    │
    └── 190. Build complete e-commerce analytics report
            ├── Total customers
            ├── Total sellers
            ├── Total products
            ├── Total orders
            ├── Total revenue
            ├── Average order value
            ├── Best product
            ├── Best seller
            ├── Best customer
            ├── Best category
            └── Monthly revenue