// import fetch from "node-fetch";
import { Router } from "express";
// import { PrismaClient } from '@prisma/client'

import pkg from '@prisma/client';
const { PrismaClient } = pkg;
const prisma = new PrismaClient()

import fetch from "isomorphic-fetch"
// import superagent from "superagent";
// import bodyParser from "body-parser";


const api = Router();
import cors from "cors"
api.use(cors({
    origin: "*"
}))

async function userFetch(url) {
    const res = await fetch(url, {
        headers: {
          Authorization: `token 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`
        }
      });
    const data = await res.json()
    console.log('UserFetct Data', data)
    return data;
}

async function insertDB(user) {
    let data = {};
    console.log('InsetData USER', user)
    for (const [key, value] of Object.entries(user)){
        if(value){
            
            if (key == "login"){
                data[key] = value.toLowerCase()
            }else {
                data[key] = value
            }
        }
    }
    await prisma.user.create({data})
}


api.get("/:username",  async (request, response) => {

  const { username } = request.params;
  const url = `https://api.github.com/users/${username}`
  console.log("username :", username);
//   const user = await userFetch(url)
//   await insertDB(user)
// const user_query = await prisma.user.findUnique({
//     login: user.login
// });
// response.json({user_query})
  const query = await prisma.user.findUnique({
      where : {
          login: username
      }
  });
  console.log('FIND USER QUERY', query);

  if(!query){
      const user = await userFetch(url);
      if(user.message) {
          response.json({message: user.message})
          console.log('MESSAGE',user.message)
      }
      else {
          await insertDB(user)
          const user_query = await prisma.user.findUnique({
              where : {
              login: user.login
              }
          });
          response.json({user_query})
      }
  }
  else {
  response.json({query});
  console.log("USER GIT ", query)
  }
});

api.get("/", (request, response) => {
  response.json({
    data:  "ERROR 404" ,
  });
});


export default api;
