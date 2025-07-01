/*import dotenv from 'dotenv';
dotenv.config()*/
import 'dotenv/config';
dotenv.config()
import { neon } from '@neondatabase/serverless';

console.log(`Hello ${process.env}`)

const http = "http://localhost:3333/videos";

export const sql = neon(process.env.DATABASE_URL);





//A resolução a cima foi encontrada neste link
//github.com/neondatabase/serverless/blob/main/README.md

//JEITO FEITO NO VÍDEO BASE, ACREDITO QUE ESTEJA ULTRAPASSADO

//import postgres from 'postgres';

/*const { PGHOST, PGDATABASE, PGUSER, PGPASSWORD } = process.env;
const URL = `postgres//${PGUSER}:${PGPASSWORD}@${PGHOST}/${PGDATABASE}?sslmode=require`;

export const sql = postgres(URL, { ssl: 'require' });*/