### Begin project 
npm init -y

### Install Typescript (TS)
npm i typescript -D

### Inicializar archivo TS 
npx tsc --init

### Configurar tsconfig.json

Change:
es5 -> es6

Uncomment: 
- sourceMap
- "outDir": "./" -> "outDir": "./dist"
- "moduleResolution": "node"
- "baseUrl": "./" -> "baseUrl": "./src"

Agregate to finish of file:
"include": ["src"],
"exclude": ["node_modules"]

### Install concurrently

Allows to run 2 commands at once

### Install nodemon
"dev": "concurrently \"tsc\" -w\"nodemon dist/index.js\"",

### Install express

### Allows TS read Express
npm i @types/express -D

### Install Morgan

### Install jasonwebtoken
const token: string = jwt.sign({ _id: savedUser._id },process.env.TOKEN_SECRET || 'toketoken');

### Install dotenv

### Install bcryptjs
 



