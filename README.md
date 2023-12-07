# user

To install dependencies:

```bash
bun install
```

To run:

```bash
bun run src/index.ts
```

This project was created using `bun init` in bun v1.0.13. [Bun](https://bun.sh) is a fast all-in-one JavaScript runtime.

# Endpoints

## User Section

## Create Account

```bash
http://localhost:8000/create
```

Method:- `POST`

```bash
{
    "name" : "",
    "email" : "",
    "password" : "",
    "age":
}
```

## Login Account

```bash
     http://localhost:8000/login
```

Method:- `POST`

```bash
{
    "email" : "",
    "password" : "",
}
```

## view Profile

```bash
     http://localhost:8000/profile
```

Method:- `POST`

 `Authenticaiton token get after successful log in`

## Update Profile

```bash
     http://localhost:8000/profile
```

Method:- `POST`

```bash
{
    Authenticaiton token get after successful log in
    "age": (number),
    "sex":"",
    "phone":(number)
}
```

# School Section

## Add School

```bash
     http://localhost:8000/school/add
```

Method:- `POST`

```bash
{
   "name" : "", 
   "state" : "",
   "district" : "",
    "pin" :  (number)
}
```

## School Verification

```bash
     http://localhost:8000/school/verificaion/:schoolId
```

Method:- `POST`

## School Verification

```bash
     http://localhost:8000/school/verificaion/:schoolId
```

Method:- `POST`

## Request to join their School Community

```bash
     http://localhost:8000/school/addstudent/:schoolId
```

Method:- `POST`

```bash
{
    "studentName" : "",
     "studentId" : ""
}
```

## Group Chat

```bash
     http://localhost:8000/school/createchat/:schoolId
```

Method:- `POST`

```bash
{
    "studentName" : "",
     "studentId" : "",
     "message" : "",
}
```

## View Group Chat

```bash
     http://localhost:8000/school/showchat/:schoolId
```

Method:- `POST`

## Quize module

## Update Points

```bash
     http://localhost:8000/savecoins
```

Method:- `POST`

```bash
{
    Authenticaiton token get after successful log in
    "coins": 500
}
```
