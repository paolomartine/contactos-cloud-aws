# ☁️ Contactos Cloud AWS

## 📌 Descripción

Este proyecto es una aplicación web de gestión de contactos (CRUD) desarrollada con una arquitectura serverless en AWS. Permite crear, listar, actualizar y eliminar contactos desde una interfaz web en React, conectada a un backend en AWS Lambda mediante API Gateway y utilizando DynamoDB como base de datos.

---

## 🏗️ Arquitectura

Frontend (React en S3)  
↓  
API Gateway (REST API)  
↓  
AWS Lambda (Backend serverless)  
↓  
DynamoDB (Base de datos NoSQL)

---

## 🚀 Tecnologías utilizadas

- React
- AWS S3
- AWS Lambda
- API Gateway
- DynamoDB
- IAM Roles
- Git & GitHub

---

## ⚙️ Funcionalidades

- Crear contactos
- Listar contactos
- Actualizar contactos
- Eliminar contactos

---

## 📁 Estructura del proyecto

Contactos-Cloud-AWS/
├── frontend-contactos/
├── lambda/
├── diagrams/
├── docs/
└── README.md

---

## 🌐 Endpoints API

- POST /contactos → Crear contacto  
- GET /contactos → Listar contactos  
- PUT /contactos/{id} → Actualizar contacto  
- DELETE /contactos/{id} → Eliminar contacto  

---

## 🚀 Despliegue

Frontend:
- npm install
- npm run build
- Despliegue en AWS S3

Backend:
- Funciones desplegadas en AWS Lambda
- Expuestas mediante API Gateway

Base de datos:
- AWS DynamoDB

---

## 📊 Evidencias

Las evidencias del funcionamiento y despliegue se encuentran en la carpeta /docs.

El diagrama de arquitectura se encuentra en /diagrams.

---

## 👨‍💻 Autor

Proyecto desarrollado por:  
Paolo Stevan Martinez Cardona
