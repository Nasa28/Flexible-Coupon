# FLEXIBLE COUPON API

## Flexible coupon system App is an implementation of a new feature for an e-commerce website that allows for different discount strategies without requiring major rewrites in the future. The discount strategies implemented in this project are FIXED10, PERCENT10, MIXED10 and REJECTED10.

## Built With

- Nodejs
- Express
- Postgresql
- Sequelize

### Below are the available endpoints

- /cart: https://flexible-coupon.herokuapp.com/api/v1/cart    

- /coupon: https://flexible-coupon.herokuapp.com/api/v1/coupon

## How to use

- /cart endpoint accepts a /GET request and shows a small list of items by default with each item having a name and price.

- /coupon accepts a /POST request with a coupon code, checks its validity, and returns the total adjusted price,discount
amount, old price before the coupon code was applied and the list of items.

### Local Setup 

To get a local copy up and running follow these simple steps.
On your terminal, run

```
git clone git@github.com:Nasa28/Flexible-Coupon.git

```

- cd into the project folder

- Install dependencies with:

```
npm install
```
- Set up your SQL database and create .env file on the root directory of your project and add the following environment variables;

PORT=8000, 
POSTGRES_PASSWORD='your password', 
DB_USERNAME='your username', 
NODE_ENV=development

- Start the local server with:

```
    npm run dev
```

Open `http://localhost:8000/api/v1/cart` in your browser to fetch the list of items in the cart.


## Authors

👨‍💻 **Kalu Chinasa Agu**

- Github: [@Nasa28](https://github.com/Nasa28)
- Twitter: [@Ultimate_Nasa](https://twitter.com/Ultimate_Nasa)
- LinkedIn: [LinkedIn](https://www.linkedin.com/in/kalu-chinasa-agu-a15080103/)

## 🤝 Contributing

Contributions, issues and feature requests are welcome!

Feel free to check the [issues page](https://github.com/Nasa28/Flexible-Coupon/issues).

## Show your support

Give a ⭐️ if you like this project!

## Acknowledgements

## 📝 License

This project is [MIT](https://github.com/stevenvachon/broken-link-checker/blob/main/license) licensed.
