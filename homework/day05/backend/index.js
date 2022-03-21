import express from "express";
import swaggerUi from 'swagger-ui-express'
import swaggerJsdoc from 'swagger-jsdoc'
import { options } from './swagger/config.js'
import cors from 'cors'

const port = 3000;
const app = express();
const openapiSpecification = swaggerJsdoc(options);


app.use(cors())
app.use(express.json());
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(openapiSpecification));
app.get('/users', (req,res)=>{
    const arr = [
        { 
            email : "aaa@gmail.com", 
            name : "철수",
            phone : "01032325678",
            personal : "220110-2222222",
            prefer : "https://naver.com"
        },
        { 
            email : "fff@gmail.com", 
            name : "유리",
            phone : "01012345678",
            personal : "220110-555555",
            prefer : "https://facebook.com"
        },
        { 
            email : "fdsf@gmail.com", 
            name : "훈이",
            phone : "01012221678",
            personal : "220110-4444444",
            prefer : "https://instagram.com"
        },
        { 
            email : "afasdf@gmail.com", 
            name : "맹구",
            phone : "01018751224",
            personal : "220110-3333333",
            prefer : "https://naverwebtoon.com"
        },
        { 
            email : "mm@gmail.com", 
            name : "짱구",
            phone : "01043443278",
            personal : "220110-1111111",
            prefer : "https://daum.net"
        },
    ];
    res.send(arr);
})

app.get('/starbucks', (req,res)=>{
    const arr = [
        { name: '아메리카노', kcal: 50 },
        { name: '핫초코', kcal: 67 },
        { name: '카페라떼', kcal: 70 },
        { name: '바닐라라떼', kcal: 80 },
        { name: '돌체라떼', kcal: 55 },
        { name: '카라멜마끼아또', kcal: 75 },
        { name: '물', kcal: 25 },
        { name: '따뜻한 우유', kcal: 50 },
        { name: '헤이즐넛라떼', kcal: 66 },
        { name: '스무디', kcal: 150 }
    ]
    res.send(arr);
})

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)})