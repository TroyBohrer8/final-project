const db = require("./connection");
const { User, Product, Category, Service, MenProduct } = require("../models");

db.once("open", async () => {
  await Category.deleteMany();

  const categories = await Category.insertMany([
    { name: "Women" },
    { name: "Men" },
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
      category: categories[1]._id,
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
      name: "Eye-Liner",
      description:
        "Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.",
      image: "Eyeliner.png",
      category: categories[0]._id,
      price: 31.98,
      quantity: 500,
    },
    {
      name: "Eye Shadow",
      description:
        "Praesent sed lacinia mauris. Nulla congue nibh magna, at feugiat nunc scelerisque quis. Donec iaculis rutrum vulputate. Suspendisse lectus sem, vulputate ac lectus sed, placerat consequat dui.",
      image: "EyeShadowPalettes.png",
      category: categories[0]._id,
      price: 37.99,
      quantity: 500,
    },
    {
      name: "Manicure",
      category: categories[0]._id,
      description:
        "Donec volutpat erat erat, sit amet gravida justo sodales in. Phasellus tempus euismod urna. Proin ultrices nisi ut ipsum congue, vitae porttitor libero suscipit. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Aliquam lacinia a nisi non congue.",
      image: "Manicure.png",
      price: 7.99,
      quantity: 20,
    },
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
        "Tea Tree Shampoo stimulates and deep cleanses the hair and scalp. Tea Tree Oil increases circulation, balances oil production, and reduces itchiness.",
      image: "TeaTreeShampoo.png",
      category: categories[1]._id,
      price: 37.99,
      quantity: 500,
    },
    {
      name: "Professional Conditioner",
      category: categories[0]._id,
      description:
        "Advanced Full Density Conditioner helps make thin hair look and feel thicker and healthier. Formulated with biotin, zinc PCA, and Gluco-Omega Blend, this lightweight conditioner strengthens and conditions each individual strand to nourish and fortify hair to create more body and shine.",
      image: "ProfessionalConditioner.png",
      price: 7.99,
      quantity: 20,
    },
    {
      name: "Color Extend Conditioner",
      category: categories[0]._id,
      description:
        "The Color Extend Conditioner is formulated with Redken's Color Care complex with cranberry oil to maximize color vibrancy and ceramide to strengthens hair. Detangles and protects against color fading caused by frequent washing Provides a vibrant, shiny finish Not sure if this product is right for you?",
      image: "ColorExtendConditioner.png",
      price: 3.99,
      quantity: 50,
    },
    {
      name: "Color Therapy Shampoo",
      category: categories[0]._id,
      description:
        "This system offers total hair color protection with the power of silk, rooibos, bamboo, and an extract blend of gooseberry. Like all other BioSilk products you can expect silk protein to strengthen hair from the inside out.",
      image: "ColorTherapyShampoo.png",
      price: 42.72,
      quantity: 100,
    },
    {
      name: "Men Scalp Treatment",
      category: categories[1]._id,
      description:
        "A scalp treatment is like a cleansing mask for your head. The treatments come in a variety of forms, such as foams, sprays and oils, and the goal of these is to detoxify your scalp, bring in moisture, or treat issues such as eczema and psoriasis.",
      image: "MenScalpTreatment.png",
      price: 399.99,
      quantity: 30,
    },
    {
      name: "Hold Hair Spray",
      category: categories[0]._id,
      description:
        "Hairspray for Massive Hold and Shine For super shine and quick dry effect use TIGI Bedhead Maxxed Out Hairspray that's a non-aerosol spray made with Pump Massive Style complex. Use this hairspray to get a strong hold for any style. ",
      image: "HoldHairSpray.png",
      price: 199.99,
      quantity: 30,
    },
    {
      name: "Leave In Conditioner",
      category: categories[0]._id,
      description:
        "Sexy Hair offers lightweight moisture & detangling to hair. Helps provide moisture without weight, leaving your hair conditioned optimally for enhanced styling results.",
      image: "LeaveInConditioner.png",
      price: 9.99,
      quantity: 100,
    },
    {
      name: "Flexible Hold Hair Spray",
      category: categories[0]._id,
      description:
        "Big Sexy Hair Spray & Stay Intense Hold Hairspray - All Nighter Hair Spray For All Hair Types provides long-lasting maximum hold & intense shine. Perfect for keep updos and elaborate styles in place.",
      image: "FlexibleHoldHairSpray.png",
      price: 1.99,
      quantity: 1000,
    },
    {
      name: "Water Proof Mascara",
      category: categories[0]._id,
      description:
        "Discover Tarte's bestselling Lights, Camera, Lashes 4-In-1 Mascara in a waterproof version. The same lengthening, curling, volumizing, and conditioning benefits you love in the original are in this splash proof version. ",
      image: "Mascara.png",
      price: 2.99,
      quantity: 1000,
    },
    {
      name: "Moracan Oil",
      category: categories[1]._id,
      description:
        "Moroccan argan oil contains vitamins, minerals, fatty acids and antioxidants that bring important benefits to the skin. ",
      image: "MoracanOil.png",
      price: 7.99,
      quantity: 100,
    },
    {
      name: "Fragrence",
      category: categories[0]._id,
      description:
        "Pure, crisp, clean. pure grace by philosophy represents clean, modern simplicity with its universal scent that will change the way you think about fragrance.",
      image: "Fragrence.png",
      price: 44.99,
      quantity: 600,
    },
    {
      name: "Nioxin",
      description:
        "Nioxin System 2 Shampoo & Conditioner Set is specially designed for noticeably thinning, fine, natural hair. Comes with the System 2 shampoo and conditioner to help remove follicle-clogging sebum while providing thicker-looking hair by increasing the fullness of each hair strand. Reduces hair loss through strengthening and its Peppermint oil provides a refreshed scalp environment and healthy shine to your hair.",
      image: "Nioxin.png",
      category: categories[1]._id,
      price: 31.98,
      quantity: 500,
    },
    {
      name: "Grooming Lounge Beard Master Shave Oil",
      description:
        "Grooming Lounge Beard Master Shave Oil Revolutionary shaving solution provides superior razor glide while helping to eliminate razor burn and rashes. Developed in our Barbershop, see-through oil is loaded with botanicals that help men master their beards. Can be used solo or mixed with Beard Destroyer Shave Cream.",
      image: "GroomingLoungeBeard.png",
      category: categories[1]._id,
      price: 37.99,
      quantity: 500,
    },
    {
      name: "Grooming Lounge Large Comb",
      category: categories[1]._id,
      description:
        "Handmade in Switzerland for Grooming Lounge, mid-size comb is ideal for taming course or sometimes unruly hair. Can also be used to work out kinks on larger and fuller beards.",
      image: "GroomingLoungeLongComb.png",
      price: 7.99,
      quantity: 20,
    },
    {
      name: "Grooming Lounge Conditioner",
      category: categories[1]._id,
      description:
        "Grooming Lounge You Need Conditioner is a men's daily deep hair conditioner that softens follicles, thickens hair and hydrates a dry scalp to promote healthy hair growth. Contains peppermint and other key ingredients to stimulate hair and scalps and provide that tingling pick me up some men need in the AM.",
      image: "GroomingLoungeConditioner.png",
      price: 3.99,
      quantity: 50,
    },
    {
      name: "Brush",
      category: categories[1]._id,
      description:
        "This wooden brush is used to groom animals. Its wooden handle is lined with lots of thin, strong wemp straws. Grooming brushes are used to groom all domesticated animals. Grooming raises your animal husbandry skill, it helps diseased animals to get healthy, and it helps preventing animals from catching further disease. ",
      image: "Brush.png",
      price: 3.99,
      quantity: 50,
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
