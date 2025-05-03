import express from 'express';
const app=express();
app.get('/',(req,res)=>{
    res.send("Server is ready");
});

app.get('/api/jokes',(req,res)=>{
    const jokes =[
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
            content: "Due to thermal expansion, the iron expands in heat and can grow more than 6 inches taller."
          }
    ];
    res.send(jokes);
})

const port=process.env.PORT || 3000;
app.listen (port,()=>{
    console.log(`server at http://localhost:${port}`);

}
);