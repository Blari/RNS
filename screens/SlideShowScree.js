import React from "react";
import Images from 'react-native-chat-images';
import { View } from "react-native";
import { Button } from 'react-native-paper';
let initData = [
    {url: "https://cdn.pixabay.com/photo/2020/04/22/12/28/book-5077895_960_720.jpg", caption: 'by Moritz320' },
    {url: "https://cdn.pixabay.com/photo/2020/02/25/19/16/stawberry-4879794_960_720.jpg", caption: 'by Zlatano16' },
    {url: "https://cdn.pixabay.com/photo/2019/12/11/15/12/dogs-4688586_960_720.jpg", caption: 'by Kwiaatekk'},
    {url: "https://cdn.pixabay.com/photo/2020/02/06/08/51/water-4823443_960_720.jpg", caption: 'by rahulpandit'},
    {url: "https://cdn.pixabay.com/photo/2020/05/20/00/45/time-5193038_960_720.jpg", caption: 'by TaniaRose'},
    {url: "https://cdn.pixabay.com/photo/2020/03/11/19/42/denmark-4923135_960_720.jpg", caption: 'by pcjvdwiel'},
    {url: "https://cdn.pixabay.com/photo/2020/05/09/09/13/house-5148865_960_720.jpg", caption: 'by Valentin_Photography'}
]

export default function SlideShowScreen() {

    let [data, setDate] = React.useState(initData);

    const getData = () => {
        let randomPage = Math.floor(Math.random() * 30 + 1);
        let url = `https://pixabay.com/api/?key=7418760-4f146093d30fda84c90bb1360&image_type=photo&page=${ randomPage }`;
        let newData = [];
        let dataObj = {url: null, caption: null};

        fetch(url)
            .then(res => res.json())
            .then(res => {
                for (let i = 0; i < 10; i++) {
                    dataObj.url = res.hits[i].webformatURL;
                    dataObj.caption = `by ${res.hits[i].user}`;
                    newData.push(dataObj);

                    dataObj = {};
                }
                setDate(newData);
        })
    };

    return (
        <View style={{ flex: 1 }}>
            <Images images={data} title="Images from https://pixabay.com/" backgroundColor="transparent" />
            <Button
                icon="refresh"
                onPress={ () => getData() }
                style={{margin: 10, backgroundColor: '#006E2E'}}
                mode="contained"
            >
                Get new Photo
            </Button>

        </View>

    );
}
