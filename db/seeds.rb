puts '🌱 Seeding hairhaven...'
 


cust1 = Customer.create(
    name: "Andrew Kibe",
    location:"Huruma",
    phone_number:6657890
)

cust2 = Customer.create(
    name: "Justin Kenuthia",
    location:"Uthiru",
    phone_number:908856688
)

cust3 = Customer.create(
    name: "Veronica Njeri",
    location:"Nakuru",
    phone_number:75638557
)

cust4 = Customer.create(
    name: "Austin chirchir",
    location:"Bomet",
    phone_number:333445112
)

cust5 = Customer.create(
    name: "Joram Gatuu",
    location:"Kikuyu",
    phone_number:55533888
)

cust6 = Customer.create(
    name: "Vicky Wanjiru",
    location:"Donholm",
    phone_number:44467887
)

cust7 = Customer.create(
    name: "Farahan Ali",
    location:"Isili",
    phone_number:93672211
)

cust8 = Customer.create(
    name: "Gladys Wangari",
    location:"Westlands",
    phone_number:77703445
)

cust9 = Customer.create(
    name: "Susan Otieno",
    location:"Kisumu",
    phone_number:43335867
)

cust10 = Customer.create(
    name: "Drew Musyoka",
    location:"Kitengela",
    phone_number:3336789
)





hairdresser = Hairdresser.create([
    {
      name: "Stacy Roberts",
      image: "https://i.pinimg.com/736x/7e/be/72/7ebe72b98ae14b647731760cf6f6d3fb.jpg",
      phone_number: 20555888
    },
    {
        name: "Steve Kumari",
        image: "https://scontent.fmba5-1.fna.fbcdn.net/v/t39.30808-6/292812639_566614788488774_939644331260870762_n.jpg?_nc_cat=110&ccb=1-7&_nc_sid=09cbfe&_nc_eui2=AeHHFBg9pz0_uEkpSIwEcXbw8FeDclAii67wV4NyUCKLroc2oXrI0_CrjSe_qacwlrI5sBdSn-TsiqzbS_x7m7I9&_nc_ohc=ST_J3wC1OswAX_DGC_e&_nc_pt=5&_nc_zt=23&_nc_ht=scontent.fmba5-1.fna&oh=00_AT-qf3f4L2sv9bQHHnQROXZdx1ACatNCg0aZzQbVcPewUQ&oe=634A68A5",
        phone_number: 20112364
    },
    {
        name: "Mary Simba",
        image: "https://i.insider.com/595d4b80298d4adf338b46a4?width=700&format=jpeg&auto=webp",
        phone_number: 20784512
    },
    {
        name: "Irene Siphiwe",
        image: "https://i.insider.com/595d4b80b4db9b034f8b4588?width=700&format=jpeg&auto=webp",
        phone_number: 20369458
    },
    {
        name: "Saul Juma",
        image: "https://pbs.twimg.com/profile_images/1142526640351850497/Jj8QWmHZ_400x400.jpg",
        phone_number: 20487326
    }
])

hairstyle = Hairstyle.create([
    {
      title: "Rounded",
      image: "https://publish.purewow.net/wp-content/uploads/sites/2/2018/05/rounded-hair-yara-shahidi25.jpg?fit=728%2C921",
      price: 5000,
      duration: 4,
      hairdresser_id: 1

    },
    {
        title: "The Tight Crop",
        image: "https://publish.purewow.net/wp-content/uploads/sites/2/2018/05/tight-crop-hair-lupita-nyongo27.jpg?fit=728%2C921",
        price: 2000,
        duration: 2,
        hairdresser_id: 2
  
      },
      {
        title: "Long And Curly",
        image: "https://publish.purewow.net/wp-content/uploads/sites/2/2018/05/long-and-curly-hair-vanessa-hudgens29.jpg?fit=728%2C921",
        price: 10000,
        duration: 6,
        hairdresser_id: 3
  
      },
      {
        title: "Curly Bangs",
        image: "https://publish.purewow.net/wp-content/uploads/sites/2/2018/05/curly-bangs-zendaya34.jpg?fit=728%2C921",
        price: 6000,
        duration: 2,
        hairdresser_id: 4
  
      },
      {
        title: "Shoulder Length Waves",
        image: "https://publish.purewow.net/wp-content/uploads/sites/2/2018/05/shoulder-length-wavy-hair-kate-middleton.jpg?fit=728%2C524",
        price: 4000,
        duration: 4,
        hairdresser_id: 5
  
      },
      {
        title: "Bouncy Bob",
        image: "https://publish.purewow.net/wp-content/uploads/sites/2/2018/05/bouncy-bob-viola-davis.jpg?fit=728%2C524",
        price: 1500,
        duration: 1,
        hairdresser_id: 2
  
      },
      {
        title: "Tousled Lob",
        image: "https://publish.purewow.net/wp-content/uploads/sites/2/2018/05/tousled-lob-kendall-jenner35.jpg?fit=728%2C921",
        price: 500,
        duration: 1,
        hairdresser_id: 1
  
      },
      {
        title: "Gelled Edges",
        image: "https://publish.purewow.net/wp-content/uploads/sites/2/2018/05/gelled-edges-yara-shahidi14.jpg?fit=728%2C921",
        price: 8000,
        duration: 7,
        hairdresser_id: 3
  
      },
      {
        title: "Loose Curly Afro",
        image: "https://publish.purewow.net/wp-content/uploads/sites/2/2018/05/loose-curly-afro-tracee-ellis-ross9.jpg?fit=728%2C524",
        price: 7000,
        duration: 5,
        hairdresser_id: 4
  
      },
      {
        title: "Super-short Pixie",
        image: "https://publish.purewow.net/wp-content/uploads/sites/2/2018/05/super-short-pixie-hair-zoe-kravitz18.jpg?fit=728%2C921",
        price: 1000,
        duration: 2,
        hairdresser_id: 5
  
      }
])

##appontments
appointment = Appointment.create([
  {
    time: 2,
  customer_id: 1,
  hairdresser_id: 2

  },

  {
    time: 2,
  customer_id: 4,
  hairdresser_id: 1

  },

  {
    time: 3,
  customer_id: 2,
  hairdresser_id: 5
  },

  {
    time: 1,
  customer_id: 4,
  hairdresser_id: 2

  },

  {
    time: 3,
  customer_id: 5,
  hairdresser_id: 4
  }
])
puts '✅ Done seeding'

