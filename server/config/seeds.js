const db = require("./connection");
const { User, Product, Category, Service, MenProduct } = require("../models");

db.once("open", async () => {
  await Category.deleteMany();

  const categories = await Category.insertMany([
    { name: "Men" },
    { name: "Women" },
  ]);

  console.log("categories seeded");

  await MenProduct.deleteMany();

  const menproducts = await MenProduct.insertMany([
    {
      name: "Tea Tree Shampoo",
      description:
        "Praesent sed lacinia mauris. Nulla congue nibh magna, at feugiat nunc scelerisque quis. Donec iaculis rutrum vulputate. Suspendisse lectus sem, vulputate ac lectus sed, placerat consequat dui.",
      image: "TeaTreeShampoo.png",
      category: categories[1]._id,
      price: 37.99,
      quantity: 500,
    },
    {
      name: "Men Scalp Treatment",
      category: categories[1]._id,
      description:
        "Vestibulum risus metus, luctus non tortor quis, tincidunt consectetur ex. Nullam vitae lobortis ligula, ut sagittis massa. Curabitur consectetur, tellus at pulvinar venenatis, erat augue cursus erat, eu ullamcorper eros lectus ultrices ipsum. Integer rutrum, augue vitae auctor venenatis, turpis turpis elementum orci, at sagittis risus mi a leo.",
      image: "MenScalpTreatment.png",
      price: 399.99,
      quantity: 30,
    },
    {
      name: "Moracan Oil",
      category: categories[1]._id,
      description:
        "Vestibulum et erat finibus erat suscipit vulputate sed vitae dui. Ut laoreet tellus sit amet justo bibendum ultrices. Donec vitae felis vestibulum, congue augue eu, finibus turpis.",
      image: "MoracanOil.png",
      price: 7.99,
      quantity: 100,
    },
  ]);

  console.log("MenProducts seeded");



  await Service.deleteMany();

  const services = await Service.insertMany([
    {
      name: "Extention",
      description: "Prices vary",
      image: "Extension.png",
      category: categories[0]._id,
      price: "200.99",
    },
    {
      name: "Braids",
      description: "Prices vary",
      image: "Braids.png",
      category: categories[0]._id,
      price: "150.99",
    },
    {
      name: "Color Treatment",
      description: "Prices vary",
      image: "ColorTreatment.png",
      category: categories[0]._id,
      price: "55.65",
    },
    {
      name: "Shaving",
      description: "Prices vary",
      image: "20.00",
      category: categories[0]._id,
      price: "20.00",
    },
    {
      name: "Manicure",
      description: "Prices vary",
      image: "Manicure.png",
      category: categories[0]._id,
      price: "20.00",
    },
  ]);

  console.log("services seeded");

  await Product.deleteMany();

  const products = await Product.insertMany([
    {
      name: "Professional Shampoo",
      description:
        "Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.",
      image: "ProfessionalShampoo.png",
      category: categories[0]._id,
      price: 31.98,
      quantity: 500,
    },
    {
      name: "Tea Tree Shampoo",
      description:
        "Praesent sed lacinia mauris. Nulla congue nibh magna, at feugiat nunc scelerisque quis. Donec iaculis rutrum vulputate. Suspendisse lectus sem, vulputate ac lectus sed, placerat consequat dui.",
      image: "TeaTreeShampoo.png",
      category: categories[1]._id,
      price: 37.99,
      quantity: 500,
    },
    {
      name: "Professional Conditioner",
      category: categories[0]._id,
      description:
        "Donec volutpat erat erat, sit amet gravida justo sodales in. Phasellus tempus euismod urna. Proin ultrices nisi ut ipsum congue, vitae porttitor libero suscipit. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Aliquam lacinia a nisi non congue.",
      image: "ProfessionalConditioner.png",
      price: 7.99,
      quantity: 20,
    },
    {
      name: "Color Extend Conditioner",
      category: categories[0]._id,
      description:
        "Praesent placerat, odio vel euismod venenatis, lectus arcu laoreet felis, et fringilla sapien turpis vestibulum nisl.",
      image: "ColorExtendConditioner.png",
      price: 3.99,
      quantity: 50,
    },
    {
      name: "Color Therapy Shampoo",
      category: categories[0]._id,
      description:
        "Vivamus ut turpis in purus pretium mollis. Donec turpis odio, semper vel interdum ut, vulputate at ex. Duis dignissim nisi vel tortor imperdiet finibus. Aenean aliquam sagittis rutrum.",
      image: "ColorTherapyShampoo.png",
      price: 14.99,
      quantity: 100,
    },
    {
      name: "Men Scalp Treatment",
      category: categories[1]._id,
      description:
        "Vestibulum risus metus, luctus non tortor quis, tincidunt consectetur ex. Nullam vitae lobortis ligula, ut sagittis massa. Curabitur consectetur, tellus at pulvinar venenatis, erat augue cursus erat, eu ullamcorper eros lectus ultrices ipsum. Integer rutrum, augue vitae auctor venenatis, turpis turpis elementum orci, at sagittis risus mi a leo.",
      image: "MenScalpTreatment.png",
      price: 399.99,
      quantity: 30,
    },
    {
      name: "Hold Hair Spray",
      category: categories[0]._id,
      description:
        "In sodales, ipsum quis ultricies porttitor, tellus urna aliquam arcu, eget venenatis purus ligula ut nisi. Fusce ut felis dolor. Mauris justo ante, aliquet non tempus in, tempus ac lorem. Aliquam lacinia dolor eu sem eleifend ultrices. Etiam mattis metus metus. Sed ligula dui, placerat non turpis vitae, suscipit volutpat elit. Phasellus sagittis, diam elementum suscipit fringilla, libero mauris scelerisque ex, ac interdum diam erat non sapien.",
      image: "HoldHairSpray.png",
      price: 199.99,
      quantity: 30,
    },
    {
      name: "Leave In Conditioner",
      category: categories[0]._id,
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum ornare diam quis eleifend rutrum. Aliquam nulla est, volutpat non enim nec, pharetra gravida augue. Donec vitae dictum neque. Pellentesque arcu lorem, fringilla non ligula ac, tristique bibendum erat. Ut a semper nibh. Quisque a mi et mi tempor ultricies. Maecenas eu ipsum eu enim hendrerit accumsan at euismod urna.",
      image: "LeaveInConditioner.png",
      price: 9.99,
      quantity: 100,
    },
    {
      name: "Flexible Hold Hair Spray",
      category: categories[0]._id,
      description:
        "Ut vulputate hendrerit nibh, a placerat elit cursus interdum.",
      image: "FlexibleHoldHairSpray.png",
      price: 1.99,
      quantity: 1000,
    },
    {
      name: "Water Proof Mascara",
      category: categories[0]._id,
      description:
        "Sed a mauris condimentum, elementum enim in, rhoncus dui. Phasellus lobortis leo odio, sit amet pharetra turpis porta quis.",
      image: "Mascara.png",
      price: 2.99,
      quantity: 1000,
    },
    {
      name: "Moracan Oil",
      category: categories[1]._id,
      description:
        "Vestibulum et erat finibus erat suscipit vulputate sed vitae dui. Ut laoreet tellus sit amet justo bibendum ultrices. Donec vitae felis vestibulum, congue augue eu, finibus turpis.",
      image: "MoracanOil.png",
      price: 7.99,
      quantity: 100,
    },
    {
      name: "Fragrence",
      category: categories[0]._id,
      description:
        "Morbi consectetur viverra urna, eu fringilla turpis faucibus sit amet. Suspendisse potenti. Donec at dui ac sapien eleifend hendrerit vel sit amet lectus.",
      image: "Fragrence.png",
      price: 9.99,
      quantity: 600,
    },
  ]);

  console.log("products seeded");

  await User.deleteMany();

  await User.create({
    firstName: "Pamela",
    lastName: "Washington",
    email: "pamela@testmail.com",
    password: "password12345",
    orders: [
      {
        products: [products[0]._id, products[0]._id, products[1]._id],
      },
    ],
  });

  await User.create({
    firstName: "Elijah",
    lastName: "Holt",
    email: "eholt@testmail.com",
    password: "password12345",
  });

  console.log("users seeded");

  process.exit();
});
