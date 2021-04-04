const config = require("./config");

module.exports = {
  links: {
    home: config.baseUrl,
    catalog: "https://shelly-studio.com/collections/all",
    bags: "https://shelly-studio.com/collections/bags",
    jewelery: "https://shelly-studio.com/collections/jewelery",
  },
  currenciesCount: 137,
  currencies: {},
  item: {
    name: "Gold Chains Handbag",
    color: "Green",
  },
  buttons: {
    checkout: "CHECK OUT",
    toShipping: "Continue to shipping",
    toPayment: "Continue to payment",
  },
  titles: {
    // searchResults: "Your search for \"" + item.name + "\" revealed the following:"
  },
  recipient: {
    email: "qaposition@namogoo.com",
    firstName: "Ron",
    lastName: "Glick",
    address: "8 Ha'Sadnaaot st.",
    city: "Hertzliya",
  },
};
