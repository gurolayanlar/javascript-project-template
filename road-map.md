# Create MongoDB modals
User, Customer, Product, Order, Payment, Category

User: firstName, lastName, email, password, salt, role
Customer: firstName, lastName, email, phoneNumber, birthdate, address, city, country
Product: name, code, description, price, category
Category: name, code
Order: date, status, comments, details[]
Payment: date, amount, order