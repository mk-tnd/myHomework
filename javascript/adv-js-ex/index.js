const sales = [
  {
    id: 1,
    product: {
      id: 1,
      name: "iPhone",
      model: "12 Pro",
      unitPrice: 48900,
    },
    saleDate: "01-01-2021",
    customer: "Sun",
    discount: 0.2,
    type: "Cash",
  },
  {
    id: 2,
    product: {
      id: 2,
      name: "iPhone",
      model: "12",
      unitPrice: 32900,
    },
    saleDate: "01-01-2021",
    customer: "Tle",
    type: "Credit",
  },
  {
    id: 3,
    product: {
      id: 1,
      name: "iPhone",
      model: "12 Pro",
      unitPrice: 36900,
    },
    saleDate: "01-01-2021",
    customer: "Beer",
    type: "Cash",
  },
  {
    id: 4,
    product: {
      id: 3,
      name: "Samsung",
      model: "S21",
      unitPrice: 27900,
    },
    saleDate: "01-01-2021",
    customer: "Jit",
    discount: 0.2,
    type: "Credit",
  },
  {
    id: 5,
    product: {
      id: 1,
      name: "iPhone",
      model: "12 Pro",
      unitPrice: 36900,
    },
    saleDate: "01-01-2021",
    customer: "Palm",
    type: "Cash",
  },
  {
    id: 6,
    product: {
      id: 1,
      name: "iPhone",
      model: "12 Pro",
      unitPrice: 48900,
    },
    saleDate: "01-01-2021",
    customer: "Top",
    type: "Credit",
  },
  {
    id: 7,
    product: {
      id: 4,
      name: "Oppo",
      model: "A15",
      unitPrice: 4299,
    },
    saleDate: "02-01-2021",
    customer: "Sun",
    type: "Credit",
  },
  {
    id: 8,
    product: {
      id: 3,
      name: "Samsung",
      model: "S21",
      unitPrice: 27900,
    },
    saleDate: "02-01-2021",
    customer: "Snap",
    discount: 0.1,
    type: "Credit",
  },
  {
    id: 9,
    product: {
      id: 5,
      name: "iPhone",
      model: "11 Pro",
      unitPrice: 36900,
    },
    saleDate: "02-01-2021",
    customer: "Ham",
    discount: 0.25,
    type: "Credit",
  },
  {
    id: 10,
    product: {
      id: 6,
      name: "Samsung",
      model: "A31",
      unitPrice: 7999,
    },
    saleDate: "02-01-2021",
    customer: "Ham",
    discount: 0.25,
    type: "Credit",
  },
  {
    id: 11,
    product: {
      id: 1,
      name: "iPhone",
      model: "12 Pro",
      unitPrice: 48900,
    },
    saleDate: "02-01-2021",
    customer: "Tle",
    discount: 0.3,
    type: "Airpay",
  },
  {
    id: 12,
    product: {
      id: 1,
      name: "iPhone",
      model: "12 Pro",
      unitPrice: 48900,
    },
    saleDate: "02-01-2021",
    customer: "Micky",
    type: "Credit",
  },
  {
    id: 13,
    product: {
      id: 2,
      name: "iPhone",
      model: "12",
      unitPrice: 32900,
    },
    saleDate: "02-01-2021",
    customer: "Boss",
    type: "Cash",
  },
  {
    id: 14,
    product: {
      id: 7,
      name: "Oppo",
      model: "Reno5",
      unitPrice: 19990,
    },
    saleDate: "02-01-2021",
    customer: "Sila",
    type: "Airpay",
  },
  {
    id: 15,
    product: {
      id: 8,
      name: "Xiaomi",
      model: "Redmi 9C",
      unitPrice: 3399,
    },
    saleDate: "02-01-2021",
    customer: "Top",
    type: "Cash",
  },
  {
    id: 16,
    product: {
      id: 9,
      name: "Samsung",
      model: "A42",
      unitPrice: 11990,
    },
    saleDate: "03-01-2021",
    customer: "Cin",
    type: "Cash",
  },
  {
    id: 17,
    product: {
      id: 6,
      name: "Samsung",
      model: "A31",
      unitPrice: 7999,
    },
    saleDate: "03-01-2021",
    customer: "Cin",
    type: "Cash",
  },
  {
    id: 18,
    product: {
      id: 1,
      name: "iPhone",
      model: "12 Pro",
      unitPrice: 36900,
    },
    saleDate: "03-01-2021",
    customer: "Sine",
    discount: 0.3,
    type: "Airpay",
  },
  {
    id: 19,
    product: {
      id: 2,
      name: "iPhone",
      model: "12",
      unitPrice: 32900,
    },
    saleDate: "03-01-2021",
    customer: "Note",
    type: "Credit",
  },
  {
    id: 20,
    product: {
      id: 3,
      name: "Samsung",
      model: "S21",
      unitPrice: 27900,
    },
    saleDate: "03-01-2021",
    customer: "Micky",
    type: "Credit",
  },
  {
    id: 21,
    product: {
      id: 10,
      name: "Vivo",
      model: "V20 Pro",
      unitPrice: 14999,
    },
    saleDate: "04-01-2021",
    customer: "Bank",
    type: "Cash",
  },
  {
    id: 22,
    product: {
      id: 10,
      name: "Vivo",
      model: "V20 Pro",
      unitPrice: 14999,
    },
    saleDate: "04-01-2021",
    customer: "Bank",
    type: "Cash",
  },
  {
    id: 23,
    product: {
      id: 7,
      name: "Oppo",
      model: "Reno5",
      unitPrice: 19990,
    },
    saleDate: "04-01-2021",
    customer: "Leo",
    type: "Cash",
  },
  {
    id: 24,
    product: {
      id: 9,
      name: "Samsung",
      model: "A42",
      unitPrice: 11990,
    },
    saleDate: "04-01-2021",
    customer: "Game",
    type: "Cash",
  },
  {
    id: 25,
    product: {
      id: 6,
      name: "Samsung",
      model: "A31",
      unitPrice: 7999,
    },
    saleDate: "04-01-2021",
    customer: "U",
    discount: 0.3,
    type: "Airpay",
  },
  {
    id: 26,
    product: {
      id: 1,
      name: "iPhone",
      model: "12 Pro",
      unitPrice: 48900,
    },
    saleDate: "05-01-2021",
    customer: "Boy",
    type: "Credit",
  },
  {
    id: 27,
    product: {
      id: 11,
      name: "Vivo",
      model: "X50 Pro",
      unitPrice: 19999,
    },
    saleDate: "05-01-2021",
    customer: "Boom",
    type: "True Wallet",
  },
  {
    id: 28,
    product: {
      id: 12,
      name: "Vivo",
      model: "V20",
      unitPrice: 10999,
    },
    saleDate: "05-01-2021",
    customer: "Boom",
    type: "True Wallet",
  },
  {
    id: 29,
    product: {
      id: 9,
      name: "Samsung",
      model: "A42",
      unitPrice: 11990,
    },
    saleDate: "05-01-2021",
    customer: "Am",
    type: "Cash",
  },
  {
    id: 30,
    product: {
      id: 2,
      name: "iPhone",
      model: "12",
      unitPrice: 32900,
    },
    saleDate: "06-01-2021",
    customer: "Um",
    type: "True Wallet",
  },
  {
    id: 31,
    product: {
      id: 3,
      name: "Samsung",
      model: "S21",
      unitPrice: 27900,
    },
    saleDate: "06-01-2021",
    customer: "Win",
    discount: 0.25,
    type: "Airpay",
  },
  {
    id: 32,
    product: {
      id: 7,
      name: "Oppo",
      model: "Reno5",
      unitPrice: 19990,
    },
    saleDate: "06-01-2021",
    customer: "Cin",
    type: "Cash",
  },
  {
    id: 33,
    product: {
      id: 2,
      name: "iPhone",
      model: "12",
      unitPrice: 32900,
    },
    saleDate: "07-01-2021",
    customer: "Palm",
    discount: 0.1,
    type: "Credit",
  },
  {
    id: 34,
    product: {
      id: 5,
      name: "iPhone",
      model: "11 Pro",
      unitPrice: 36900,
    },
    saleDate: "07-01-2021",
    customer: "Dom",
    discount: 0.15,
    type: "Credit",
  },
  {
    id: 35,
    product: {
      id: 3,
      name: "Samsung",
      model: "S21",
      unitPrice: 27900,
    },
    saleDate: "07-01-2021",
    customer: "Sern",
    type: "True Wallet",
  },
  {
    id: 36,
    product: {
      id: 13,
      name: "iPhone",
      model: "SE2000",
      unitPrice: 14900,
    },
    saleDate: "07-01-2021",
    customer: "Beer",
    type: "Cash",
  },
  {
    id: 37,
    product: {
      id: 14,
      name: "iPhone",
      model: "12 Mini",
      unitPrice: 25900,
    },
    saleDate: "07-01-2021",
    customer: "Game",
    discount: 0.2,
    type: "Credit",
  },
  {
    id: 38,
    product: {
      id: 2,
      name: "iPhone",
      model: "12",
      unitPrice: 32900,
    },
    saleDate: "07-01-2021",
    customer: "Sun",
    discount: 0.25,
    type: "Airpay",
  },
  {
    id: 39,
    product: {
      id: 2,
      name: "iPhone",
      model: "12",
      unitPrice: 32900,
    },
    saleDate: "07-01-2021",
    customer: "Tom",
    type: "Cash",
  },
  {
    id: 40,
    product: {
      id: 14,
      name: "iPhone",
      model: "12 Mini",
      unitPrice: 25900,
    },
    saleDate: "08-01-2021",
    customer: "Ham",
    type: "Cash",
  },
  {
    id: 41,
    product: {
      id: 2,
      name: "iPhone",
      model: "12",
      unitPrice: 32900,
    },
    saleDate: "08-01-2021",
    customer: "Dom",
    type: "Credit",
  },
  {
    id: 42,
    product: {
      id: 3,
      name: "Samsung",
      model: "S21",
      unitPrice: 27900,
    },
    saleDate: "08-01-2021",
    customer: "Cin",
    type: "True Wallet",
  },
  {
    id: 43,
    product: {
      id: 3,
      name: "Samsung",
      model: "S21",
      unitPrice: 27900,
    },
    saleDate: "08-01-2021",
    customer: "Tle",
    type: "Cash",
  },
  {
    id: 44,
    product: {
      id: 7,
      name: "Oppo",
      model: "Reno5",
      unitPrice: 19990,
    },
    saleDate: "09-01-2021",
    customer: "U",
    type: "Cash",
  },
  {
    id: 45,
    product: {
      id: 11,
      name: "Vivo",
      model: "X50 Pro",
      unitPrice: 19999,
    },
    saleDate: "09-01-2021",
    customer: "Am",
    discount: 0.35,
    type: "Airpay",
  },
  {
    id: 46,
    product: {
      id: 10,
      name: "Vivo",
      model: "V20 Pro",
      unitPrice: 14999,
    },
    saleDate: "10-01-2021",
    customer: "Sern",
    type: "Cash",
  },
  {
    id: 47,
    product: {
      id: 1,
      name: "iPhone",
      model: "12 Pro",
      unitPrice: 48900,
    },
    saleDate: "10-01-2021",
    customer: "Game",
    discount: 0.3,
    type: "Credit",
  },
  {
    id: 48,
    product: {
      id: 9,
      name: "Samsung",
      model: "A42",
      unitPrice: 11990,
    },
    saleDate: "10-01-2021",
    customer: "Jit",
    type: "Cash",
  },
  {
    id: 49,
    product: {
      id: 14,
      name: "iPhone",
      model: "12 Mini",
      unitPrice: 25900,
    },
    saleDate: "10-01-2021",
    customer: "Snap",
    type: "True Wallet",
  },
  {
    id: 50,
    product: {
      id: 2,
      name: "iPhone",
      model: "12",
      unitPrice: 32900,
    },
    saleDate: "10-01-2021",
    customer: "Micky",
    type: "Cash",
  },
  {
    id: 51,
    product: {
      id: 3,
      name: "Samsung",
      model: "S21",
      unitPrice: 27900,
    },
    saleDate: "11-01-2021",
    customer: "Boss",
    discount: 0.2,
    type: "Credit",
  },
  {
    id: 52,
    product: {
      id: 8,
      name: "Xiaomi",
      model: "Redmi 9C",
      unitPrice: 3399,
    },
    saleDate: "11-01-2021",
    customer: "Leo",
    discount: 0.05,
    type: "Credit",
  },
  {
    id: 53,
    product: {
      id: 10,
      name: "Vivo",
      model: "V20 Pro",
      unitPrice: 14999,
    },
    saleDate: "11-01-2021",
    customer: "Sine",
    discount: 0.15,
    type: "True Wallet",
  },
  {
    id: 54,
    product: {
      id: 14,
      name: "iPhone",
      model: "12 Mini",
      unitPrice: 25900,
    },
    saleDate: "07-01-2021",
    customer: "Um",
    discount: 0.1,
    type: "Cash",
  },
];

/* const brandmap = new Map(brand);

console.log(brandmap); */

//1. จำนวน transaction ทั้งหมด

console.log(sales.length);

//2. จำนวนลูกค้าที่แตกต่างกัน มีใครบ้าง

const uniqueCustomer = sales.reduce((acc, curr) => {
  const customer = curr.customer;
  return customer in acc
    ? {
        ...acc,
        [customer]: { ...acc[customer], amount: acc[customer].amount + 1 },
      }
    : { ...acc, [customer]: { amount: 1, paid: 0 } };
}, {});

const uniqueCustomerPaid = sales.reduce((acc, curr) => {
  const customer = curr.customer;
  const price = curr.product.unitPrice;
  const finalPrice = "discount" in curr ? price * (1 - curr.discount) : price;
  return {
    ...acc,
    [customer]: { ...acc[customer], paid: acc[customer].paid + finalPrice },
  };
}, uniqueCustomer);

console.log(uniqueCustomerPaid);

//3. ยอดขายทั้งหมด (หลังหัก discount)

const total = sales.reduce((acc, curr) => {
  const discounted = !curr.discount
    ? curr.product.unitPrice
    : curr.product.unitPrice / 1 - curr.discount;
  return Math.round(acc + discounted);
}, 0);

console.log(total);

// {
//   id: 54,
//   product: {
//     id: 14,
//     name: "iPhone",
//     model: "12 Mini",
//     unitPrice: 25900,
//   },
//   saleDate: "07-01-2021",
//   customer: "Um",
//   discount: 0.1,
//   type: "Cash",
// }

//4. สินค้าที่ถูกขายมีกี่ยี่ห้อ แต่ละยี่ห้อขายไปกี่เครื่อง และ ยอดรวมเท่าไหร่

const uniqueBrandAmount = sales.reduce((acc, curr) => {
  const brand = curr.product.name;
  return brand in acc
    ? { ...acc, [brand]: { ...acc[brand], amount: acc[brand].amount + 1 } }
    : { ...acc, [brand]: { amount: 1, paid: 0 } };
}, {});

console.log(uniqueBrandAmount);

const uniqueBrandPaid = sales.reduce((acc, curr) => {
  const brand = curr.product.name;
  const price = curr.product.unitPrice;
  const finalPrice = "discount" in curr ? price * (1 - curr.discount) : price;
  return {
    ...acc,
    [brand]: { ...acc[brand], paid: acc[brand].paid + finalPrice },
  };
}, uniqueBrandAmount);

console.log(uniqueBrandPaid);

//5. สินค้าที่ถูกขายมีกี่รุ่นในแต่ละยี่ห้อ แต่ละรุ่นขายไปกี่เครื่อง และ ยอดรวมเท่าไหร่

const uniqueModelAmount = sales.reduce((acc, curr) => {
  const model = curr.product.model;
  return model in acc
    ? { ...acc, [model]: { ...acc[model], amount: acc[model].amount + 1 } }
    : { ...acc, [model]: { amount: 1, paid: 0 } };
}, {});

console.log(uniqueModelAmount);

const uniqueModelPaid = sales.reduce((acc, curr) => {
  const model = curr.product.model;
  const price = curr.product.unitPrice;
  const finalPrice = "discount" in curr ? price * (1 - curr.discount) : price;
  return {
    ...acc,
    [model]: { ...acc[model], paid: acc[model].paid + finalPrice },
  };
}, uniqueModelAmount);

console.log(uniqueModelPaid);

//6. หายอดรวมของการจ่ายแต่ละประเภท (Cash, Credit, ...)

const paidAmount = sales.reduce((acc, curr) => {
  const paidType = curr.type;
  return paidType in curr
    ? { ...acc, [paidType]: { ...acc[paidType] } }
    : { ...acc, [paidType]: { paid: 0 } };
}, {});

const paidTotal = sales.reduce((acc, curr) => {
  const paidType = curr.type;
  const price = curr.product.unitPrice;
  const discPrice = "discount" in curr ? price * (1 - curr.discount) : price;
  return {
    ...acc,
    [paidType]: { ...acc[paidType], paid: acc[paidType].paid + discPrice },
  };
}, paidAmount);

console.log(paidTotal);

//7. หายอดรวมในแต่ละวัน

const uniqueDate = sales.reduce((acc, curr) => {
  const date = curr.saleDate;
  return date in acc
    ? { ...acc, [date]: { ...acc[date], amount: acc[date].amount + 1 } }
    : { ...acc, [date]: { amount: 1, total: 0 } };
}, {});

console.log(uniqueDate);

const uniqueDateTotal = sales.reduce((acc, curr) => {
  const date = curr.saleDate;
  const price = curr.product.unitPrice;
  const finalPrice = "discount" in curr ? price * (1 - curr.discount) : price;
  return {
    ...acc,
    [date]: { ...acc[date], total: acc[date].total + finalPrice },
  };
}, uniqueDate);

console.log(uniqueDateTotal);

//8. เรียงยอดขายของแต่ละรุ่นจากมากไปน้อย

const uniqueModelForSort = sales.reduce((acc, curr) => {
  const brand = curr.product.name;
  const model = curr.product.model;
  const price = curr.product.unitPrice;
  const finalPrice = "discount" in curr ? price - (1 - curr.discount) : price;
  return model in acc
    ? { ...acc, [model]: [brand + model, (model[1] += finalPrice)] }
    : { ...acc, [model]: [brand + model, finalPrice] };
}, {});

const arrOfModel = Object.values(uniqueModelForSort);
const ModelE = arrOfModel.map((val) =>
  val[1].toString().includes("e") ? [val[0], val[1].split("e")[1]] : val
);

const modelSort = ModelE.sort((a, b) => b[1] - a[1]);
console.log(modelSort);

//9. เรียงลูกค้าที่ซื้อมากที่สุดจากมากไปน้อย

const uniqueCustomerForSort = sales.reduce((acc, curr) => {
  const customer = curr.customer;
  return customer in acc
    ? {
        ...acc,
        [customer]: { ...acc[customer], amount: acc[customer].amount + 1 },
      }
    : { ...acc, [customer]: { amount: 1, paid: 0 } };
}, {});

const uniqueCustomerPaidForSort = sales.reduce((acc, curr) => {
  const customer = curr.customer;
  const price = curr.product.unitPrice;
  const finalPrice = "discount" in curr ? price * (1 - curr.discount) : price;
  return {
    ...acc,
    [customer]: { ...acc[customer], paid: acc[customer].paid + finalPrice },
  };
}, uniqueCustomerForSort);

const CustomerArr = Object.entries(uniqueCustomerPaidForSort);

const CustomerSort = CustomerArr.sort((a, b) => b[1].paid - a[1].paid);

console.log(CustomerSort);

//1.1

const arr1 = [1, 2, 30, 400];

const arr2 = arr1.map((item) => item * 2);

console.log(arr2);

//1.2

const arr3 = [1, 2, 3, 4];

const arr4 = arr3.map((item) => `${item}`);

console.log(arr4);

//1.3

const arr5 = [1, "1", 2, {}];

const arr6 = arr5.map((val) => `${typeof val}`);

console.log(arr6);

//1.4

const arr7 = ["apple", "banana", "orange"];
const arr8 = arr7.map((val) => val.toUpperCase());

console.log(arr8);

//1.5

const arr9 = [
  { name: "apple", age: 14 },
  { name: "banana", age: 18 },
  { name: "watermelon", age: 32 },
];

const arr10 = arr9.map((val) => val.name);

console.log(arr10);

//1.6

const arr11 = [
  { name: "apple", age: 14 },
  { name: "banana", age: 18 },
  { name: "watermelon", age: 32 },
];

const arr12 = arr11.map((val) => val.age);

console.log(arr12);

//1.7

const arr13 = [
  { name: "apple", surname: "London" },
  { name: "banana", surname: "Bangkok" },
  { name: "watermelon", surname: "Singapore" },
];

const arr14 = arr13.map((val) => `${val.name} ${val.surname}`);

console.log(arr14);

//1.8

const arr15 = [1, 3, 4, 5, 6, 7, 8];

const arr16 = arr15.map((val) => {
  val = val % 2 === 0 ? "even" : "odd";
  return val;
});

console.log(arr16);

//1.9

const arr17 = [1, -3, 2, 8, -4, 5];

const arr18 = arr17.map((val) => Math.abs(val));

console.log(arr18);

//1.10

const arr19 = [100, 200.25, 300.84, 400.3];

const arr20 = arr19.map((val) => val.toFixed(2));

console.log(arr20);

//1.11

const arr21 = [
  { name: "apple", birth: "2000-01-01" },
  { name: "banana", birth: "1990-10-01" },
  { name: "watermelon", birth: "1985-12-01" },
];

const arr22 = arr21.map((val) => {
  age = new Date().getFullYear() - new Date(val.birth).getFullYear();
  return {
    ...val,
    age,
  };
});

console.log(arr22);

//1.12

const arr23 = [
  { name: "apple", birth: "2000-01-01" },
  { name: "banana", birth: "1990-10-10" },
  { name: "watermelon", birth: "1985-12-30" },
];

const arr24 = arr23.map((val) => {
  date = new Date(val.birth).toDateString();
  newdate = date.slice(4).split(" ");
  newdate2 = `${newdate[1]} ${newdate[0]} ${newdate[2]}`;
  val =
    "<tr>" +
    "<td>" +
    `${val.name}` +
    "</td>" +
    "<td>" +
    `${newdate2}` +
    "</td>" +
    "</tr>";
  return val;
});

console.log(arr24);
