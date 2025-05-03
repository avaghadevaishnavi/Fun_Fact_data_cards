import express from 'express';
const app = express();

// Root route
app.get('/', (req, res) => {
  res.send("Server is ready");
});

// Facts API
app.get('/api/facts', (req, res) => {
  const facts = [
    {
      id: 1,
      title: "Octopus Has Three Hearts",
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRav0_14EzKKcbnAP2DnuQleN_YmeHeoNYX8w&s",
      content: "Two hearts pump blood to the gills, while the third pumps it to the rest of the body."
    },
    {
      id: 2,
      title: "Bananas Are Berries",
      image: "https://nutritionsource.hsph.harvard.edu/wp-content/uploads/2018/08/bananas-1354785_1920.jpg",
      content: "Botanically, bananas are berries, but strawberries are not!"
    },
    {
      id: 3,
      title: "Honey Never Spoils",
      image: "https://i0.wp.com/deepgreenpermaculture.com/wp-content/uploads/2023/05/honey-jar.jpg?ssl=1",
      content: "Archaeologists have found pots of honey in ancient Egyptian tombs that are over 3000 years old and still edible."
    },
    {
      id: 4,
      title: "Water Can Boil and Freeze at the Same Time",
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQPovymAUwWZIsP_-rzYxGhcXalKAe-zdPp3Q&s",
      content: "It’s called the triple point, and it happens under very specific conditions of temperature and pressure."
    },
    {
      id: 5,
      title: "A Day on Venus is Longer than Its Year",
      image: "https://idsb.tmgrup.com.tr/ly/uploads/images/2021/05/04/112746.jpg",
      content: "Venus rotates so slowly that it takes 243 Earth days to spin once, but only 225 Earth days to orbit the Sun."
    },
    {
      id: 6,
      title: "Sharks Are Older Than Trees",
      image: "https://cdn.zmescience.com/wp-content/uploads/2017/01/SHARKOPAEDIA_02_FINAL_01_DLV.jpg",
      content: "Sharks have existed for around 400 million years, while the first trees appeared about 350 million years ago."
    },
    {
      id: 7,
      title: "The Eiffel Tower Grows in Summer",
      image: "https://media.licdn.com/dms/image/v2/D4D12AQE1DRDroTl8YA/article-cover_image-shrink_720_1280/article-cover_image-shrink_720_1280/0/1699335043046?e=2147483647&v=beta&t=zmmA7BGC46lWJEUe6wvG2JcsobSvR9x8_jlEApl55Yk",
      content: "Because of thermal expansion, the iron expands in heat and can grow more than 6 inches taller."
    }
  ];
  res.send(facts);
});

app.get('/api/spaces', (req, res) => {
  const Space = [
    {
      id: 1,
      title: "Sunlight Takes Time to Reach Earth",
      image: "https://c02.purpledshub.com/uploads/sites/48/2023/03/how-long-light-sun-reach-earth.jpg",
      content: "It takes about 8 minutes and 20 seconds for sunlight to travel from the Sun to Earth."
    },
    {
      id: 2,
      title: "One Day on Jupiter is 10 Hours",
      image: "https://static1.srcdn.com/wordpress/wp-content/uploads/2022/01/Jupiter.jpg",
      content: "Jupiter has the shortest day of all the planets — just under 10 hours."
    },
    {
      id: 3,
      title: "Neutron Stars Are Incredibly Dense",
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcToXEJZSvPzJ8Nv4OpuaP0TLXW6OoF4fwagzQ&s",
      content: "A sugar-cube-sized amount of neutron star material would weigh about a billion tons!"
    },
    {
      id: 4,
      title: "Saturn Could Float in Water",
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS1h1mBheVR1PGPhdxPI-bazmcwrXFn_VMxFQ&s",
      content: "Saturn is so light (and made mostly of gas) that it would float if you could place it in water."
    },
    {
      id: 5,
      title: "There’s a Planet Made of Diamonds",
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRZLMvm3JXrO05k2plFSCk37ISExCGsM0oahA&s",
      content: "55 Cancri e is an exoplanet thought to be made largely of diamond."
    },
    {
      id: 6,
      title: "Space Smells Like Seared Steak",
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQJHoMyFQSUHU-aIDNYt3j942QGKFvQWRqXlw&s",
      content: "Astronauts have reported that space smells like burnt metal or seared steak after a spacewalk."
    },
    {
      id: 7,
      title: "The Moon is Drifting Away",
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQE5uIQXScQ7jPTjVbHnP0ReEUvp9Q3rmtW1g&s",
      content: "The Moon moves about 3.8 cm away from Earth each year."
    }
  ];
  res.send(Space);
});
app.get('/api/oceans', (req, res) => {
  const oceans = [
    {
      id: 1,
      title: "The Ocean Is Deep",
      image: "https://cdn.hswstatic.com/gif/deep-ocean-1.jpg",
      content: "The Mariana Trench is the deepest part of the ocean and goes down about 11,034 meters (36,201 feet)."
    },
    {
      id: 2,
      title: "Oceans Produce Most Oxygen",
      image: "https://www.logicallyfacts.com/storage/img/pages/24817985-5b63-4d66-bde9-b81b32cc528a_background.webp",
      content: "Phytoplankton in the ocean produces more than 50% of the Earth’s oxygen supply."
    },
    {
      id: 3,
      title: "We Know Little About Oceans",
      image: "https://maritime-forum.ec.europa.eu/sites/default/files/styles/embed_large/public/2021-05/visualdoyouknowclimateandocean_rectangular_022.png?itok=eqjShTTi",
      content: "Over 80% of the ocean is still unexplored and unmapped by humans."
    },
    {
      id: 4,
      title: "Underwater Waterfalls Exist",
      image: "https://bigthink.com/wp-content/uploads/2022/02/1_8nBTmy5qQlhq-YhYsB4wzw.jpg?w=640",
      content: "Off the coast of Mauritius, ocean currents create an illusion of an underwater waterfall."
    },
    {
      id: 5,
      title: "Ocean Currents Move Heat Around",
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRTqy0zZHddKrkRsomoX7S0x1jmzNa6Z-x6ig&s",
      content: "They regulate climate by distributing heat from the equator to the poles."
    },
    {
      id: 6,
      title: "Sound Travels Farther in Water",
      image: "https://i.ytimg.com/vi/3pZSgw3x_2c/maxresdefault.jpg",
      content: "Sound moves nearly 5 times faster in water than in air."
    }
  ];
  res.send(oceans);
});
app.get('/api/animals', (req, res) => {
  const animals = [
    {
      id: 1,
      title: "Sloths Are Slow but Efficient",
      image: "https://files.worldwildlife.org/wwfcmsprod/images/Sloth_3_12_2014/story_full_width/2a8fgktz30_sloth__c__Jorge_Salas_International_Expeditions.JPG",
      content: "Sloths can hold their breath longer than dolphins—up to 40 minutes underwater."
    },
    {
      id: 2,
      title: "Elephants Can’t Jump",
      image: "https://i.redd.it/lvqmrjbl57621.jpg",
      content: "Elephants are the only mammals that can’t jump due to their heavy body structure."
    },
    {
      id: 3,
      title: "Tigers Have Striped Skin",
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRhzut0RjLlcSVFNgDUh2KiijCp4mEC0eQT8w&s",
      content: "A tiger’s stripes are not just on its fur; they’re also on its skin."
    },
    {
      id: 4,
      title: "Frogs Drink Through Their Skin",
      image: "https://static.wixstatic.com/media/8be6a8_696e60a0b3b545c198fdffb3bc06edad~mv2.jpg/v1/fill/w_568,h_378,al_c,q_80,usm_0.66_1.00_0.01,enc_avif,quality_auto/8be6a8_696e60a0b3b545c198fdffb3bc06edad~mv2.jpg",
      content: "Many frog species absorb water directly through their skin, not through their mouth."
    },
    {
      id: 5,
      title: "Cows Have Best Friends",
      image: "https://preview.redd.it/cows-have-best-friends-just-like-we-do-v0-rk1z6g4gvl5d1.jpg?width=360&format=pjpg&auto=webp&s=b43af1ba324f2ef687248058eb816aafcc097102",
      content: "Studies show cows form strong bonds and get stressed when separated from their best friends."
    },
    {
      id: 6,
      title: "Ostriches Run Faster Than Horses",
      image: "https://i.pinimg.com/736x/7c/cc/e2/7ccce2991da419cc90ad60af76fd084f.jpg",
      content: "Ostriches can sprint up to 70 km/h (43 mph), faster than many horses."
    }
  ];
  res.send(animals);
});



// Start server
const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});
