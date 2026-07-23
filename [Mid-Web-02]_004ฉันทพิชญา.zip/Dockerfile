# ใช้ Node.js version 18 เบาๆ
FROM node:18-alpine

# สร้าง Directory สำหรับเก็บแอป
WORKDIR /app

# คัดลอก package.json เพื่อติดตั้ง Dependencies
COPY package.json ./
RUN npm install

# คัดลอก Source Code ทั้งหมด
COPY . .

# สร้างโฟลเดอร์สำหรับเก็บไฟล์ฐานข้อมูล
RUN mkdir -p /app/data

# เปิด Port 3000
EXPOSE 3000

# รันแอปพลิเคชัน
CMD ["npm", "start"]