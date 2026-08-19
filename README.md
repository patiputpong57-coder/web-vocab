# 🧙‍♂️ Cyber Spellcaster: Vocab Quest
> **2D Educational Action Game: มหาเวทไซเบอร์ พิชิตศัพท์คอมพิวเตอร์**

เกมแนว 2D Action Spellcaster ผสมผสานการเรียนรู้คำศัพท์คอมพิวเตอร์และเทคโนโลยี (40 คำศัพท์ 4 หมวดหมู่) ในรูปแบบเกมแอ็กชันเรียลไทม์ ควบคุมจอมเวทเขียนโค้ด (Code Wizard) ร่ายเวททำลายไวรัสและบั๊กของระบบ พร้อมระบบไอเทม Power-Up 5 ชนิด และการส่งผลคะแนนผู้เรียนไปยัง **Google Sheets API**

![HTML5](https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white)
![CSS3](https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white)
![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black)
![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg?style=for-the-badge)

---

## 🎮 รูปแบบการเล่น (Gameplay Overview)

* **ระบบลงทะเบียน (Student Login):** กรอกรหัสผู้เรียนและชื่อ-นามสกุลก่อนเริ่มเล่น เพื่อใช้บันทึกคะแนน
* **มุมมอง 2D Arcade Battle:** ตัวละครผู้เล่นยืนฝั่งซ้าย ไวรัส/บั๊กเคลื่อนที่มาจากฝั่งขวาพร้อมข้อความความหมายของศัพท์ลอยอยู่เหนือหัว
* **การร่ายเวท (Spell Casting):** 
  * 🎯 **Choice Mode:** กดปุ่มช้อยส์คำศัพท์ภาษาอังกฤษ 4 ตัวเลือก (ปุ่มคีย์บอร์ด `1`, `2`, `3`, `4`)
  * ⌨️ **Type Mode:** พิมพ์คำศัพท์ภาษาอังกฤษที่ถูกต้องแล้วกด `ENTER`
* **Critical Cast:** หากตอบถูกอย่างรวดเร็วภายใน 3.2 วินาที จะติดคริติคอล สร้างความเสียหายและได้รับคะแนนโบนัส 2.5x พร้อมแบนเนอร์ *CRITICAL! 💥*
* **พลังชีวิต & มานา (HP & MP):** ศัตรูชนตัวเสีย HP, ตอบผิดเสีย MP / เกิด Spell Fizzle

---

## ⚡ ระบบไอเทมพิเศษ (5 Power-Ups)

ได้รับไอเทมเมื่อทำ Combo สตรีคต่อเนื่อง (3, 5, 8, 10 combos) หรือกดปุ่มคีย์ลัด:

| คีย์ลัด | ไอเทม | ฟังก์ชัน |
| :--- | :--- | :--- |
| **Q** | ⏱️ **Time Freeze** | หยุดการเคลื่อนที่ของศัตรูทั้งหมดในจอเป็นเวลา 5 วินาที |
| **W** | 💣 **Cyber Nuke** | ทำลายล้างศัตรูและไวรัสทั้งหมดบนหน้าจอทันที |
| **E** | 💡 **Auto-Hint** | ตัด 2 ตัวเลือกที่ผิดออกไป (ใน Choice Mode) หรือเติม 3 ตัวอักษรแรก (ใน Type Mode) |
| **R** | 🛡️ **Mana Shield** | สร้างเกราะคุ้มกันรับการโจมตี/ตอบผิดได้ 1-2 ครั้งโดยไม่เสีย HP |
| **T** | ⚡ **2x Score Boost** | คูณคะแนนที่ได้รับเป็น 2 เท่า เป็นเวลา 10 วินาที |

---

## 📚 ฐานข้อมูล 40 คำศัพท์คอมพิวเตอร์ (4 หมวดหมู่)

### หมวดที่ 1: Web Structure, Code & Styling
1. `HTML` - ภาษาโครงสร้างหลักที่ใช้กำหนดองค์ประกอบและเนื้อหาบนเว็บเพจ
2. `CSS` - ภาษาที่ใช้จัดตกแต่งรูปแบบ สไตล์ สีสัน และเค้าโครงของเว็บเพจ
3. `JavaScript` - ภาษาโปรแกรมสำหรับใส่ความฟังก์ชัน Interactive และการตอบสนองบนเว็บ
4. `DOM` - โครงสร้างต้นไม้ที่เบราว์เซอร์ใช้จัดระเบียบองค์ประกอบ HTML
5. `Tag` - สัญลักษณ์คุมข้อความใน HTML เพื่อบอกประเภทเนื้อหา
6. `Attribute` - คุณลักษณะเสริมที่ใส่ใน Tag เพื่อกำหนดค่าเพิ่มเติม
7. `Flexbox` - ระบบจัดเค้าโครง CSS แบบ 1 มิติที่ช่วยจัดวาง Element ให้ยืดหยุ่น
8. `Grid` - ระบบจัดเค้าโครง CSS แบบ 2 มิติสำหรับเลย์เอาต์ซับซ้อน
9. `Responsive Design` - การออกแบบเว็บให้รองรับการแสดงผลทุกขนาดหน้าจอ
10. `Framework` - ชุดโค้ดและเครื่องมือสำเร็จรูปที่ช่วยให้เขียนโปรแกรมได้เร็วขึ้น

### หมวดที่ 2: Systems, Hosting, Domain & Design
11. `Web Server` - เครื่องคอมพิวเตอร์ที่ทำหน้าที่จัดเก็บและส่งมอบไฟล์เว็บไซต์
12. `Hosting` - บริการให้เช่าพื้นที่บน Web Server เพื่อรับฝากเว็บไซต์
13. `Domain Name` - ชื่อที่ใช้ระบุตัวตนของเว็บไซต์บนอินเทอร์เน็ตแทน IP Address
14. `DNS` - ระบบแปลงชื่อ Domain Name ให้เป็นหมายเลข IP Address
15. `IP Address` - หมายเลขประจำเครื่องคอมพิวเตอร์ที่เชื่อมต่ออยู่ในเครือข่าย
16. `UI` - ส่วนต่อประสานผู้ใช้ หน้าตา สัญลักษณ์ และการจัดวางปุ่มบนหน้าจอ
17. `UX` - ประสบการณ์และความพึงพอใจโดยรวมของผู้ใช้เมื่อใช้งานระบบ
18. `Wireframe` - แบบโครงร่างขาวดำจำลองหน้าตาเว็บก่อนเริ่มออกแบบจริง
19. `Prototype` - ตัวอย่างแบบจำลองโต้ตอบได้ ใช้ทดสอบการทำงานของเว็บก่อนพัฒนาจริง
20. `Client-Side` - การประมวลผลข้อมูลที่เกิดขึ้นในฝั่งของเว็บเบราว์เซอร์ผู้ใช้

### หมวดที่ 3: Data Storage, Security & CMS
21. `Database` - ระบบจัดเก็บข้อมูลอย่างเป็นระเบียบเพื่อให้ค้นหาและจัดการได้ง่าย
22. `SQL` - ภาษามาตรฐานที่ใช้ในการบริหารจัดการและคิวรีฐานข้อมูล
23. `CMS` - ระบบช่วยสร้างและจัดการเนื้อหาบนเว็บโดยไม่ต้องเขียนโค้ดทั้งหมด
24. `SSL/TLS` - โพรโทคอลความปลอดภัยที่ใช้เข้ารหัสข้อมูลระหว่างเบราว์เซอร์กับเซิร์ฟเวอร์
25. `HTTPS` - โปรโตคอลการสื่อสารเว็บแบบปลอดภัยที่มีการเข้ารหัสข้อมูล
26. `Authentication` - กระบวนการยืนยันตัวตนของผู้ใช้ เช่น การล็อกอินด้วยรหัสผ่าน
27. `Authorization` - กระบวนการตรวจสอบสิทธิ์การเข้าถึงข้อมูลของผู้ใช้
28. `Encryption` - การเข้ารหัสข้อมูลเปลี่ยนข้อความธรรมดาให้กลายเป็นรหัสลับ
29. `Backup` - การสำรองข้อมูลไว้ในอีกแหล่งเพื่อป้องกันข้อมูลสูญหาย
30. `CRUD` - ปฏิบัติการพื้นฐานฐานข้อมูล Create Read Update Delete

### หมวดที่ 4: SEO, Payment & Digital Security
31. `SEO` - การปรับแต่งเว็บให้ติดอันดับต้นๆ บนการค้นหาของ Search Engine
32. `Keyword` - คำหรือวลีค้นหาที่ผู้ใช้พิมพ์ใน Search Engine
33. `Backlink` - ลิงก์จากเว็บไซต์อื่นที่เชื่อมโยงกลับมายังเว็บไซต์ของเรา
34. `Payment Gateway` - ระบบตัวกลางที่ทำหน้าที่เชื่อมต่อและประมวลผลการชำระเงินออนไลน์
35. `PCI-DSS` - มาตรฐานความปลอดภัยสากลสำหรับระบบการจัดการข้อมูลบัตรเครดิต
36. `Firewall` - ระบบความปลอดภัยคอยกรองและป้องกันการเข้าถึงเครือข่ายที่ไม่ได้รับอนุญาต
37. `2FA` - การยืนยันตัวตนแบบ 2 ขั้นตอนเพื่อเพิ่มความปลอดภัย
38. `Phishing` - การหลอกลวงทางออนไลน์เพื่อขโมยข้อมูลสำคัญด้วยหน้าเว็บปลอม
39. `Cybersecurity` - การปกป้องระบบ เครือข่าย และข้อมูลจากภัยคุกคามทางดิจิทัล
40. `Meta Tag` - ข้อมูลอธิบายเนื้อหาเว็บเพจที่ใส่ไว้ในโค้ดเพื่อให้ Search Engine ทำความเข้าใจ

---

## 📊 วิธีเชื่อมต่อ Google Sheets API บันทึกคะแนนนักเรียน

1. สร้าง Google Sheet ใหม่ แล้วไปที่เมนู **ส่วนขยาย (Extensions) > Apps Script**
2. วางโค้ดต่อไปนี้ลงในไฟล์ `Code.gs`:

```javascript
function doPost(e) {
  try {
    var sheet = SpreadsheetApp.getActiveSpreadsheet().getActiveSheet();
    var data = JSON.parse(e.postData.contents);
    
    if (sheet.getLastRow() === 0) {
      sheet.appendRow(["Timestamp", "Student ID", "Student Name", "Category", "Score", "Time Used", "Accuracy"]);
    }
    
    sheet.appendRow([
      new Date(),
      data.studentId,
      data.studentName,
      data.category,
      data.score,
      data.timeUsed,
      data.accuracy
    ]);
    
    return ContentService.createTextOutput(JSON.stringify({ "status": "success" }))
      .setMimeType(ContentService.MimeType.JSON);
  } catch (error) {
    return ContentService.createTextOutput(JSON.stringify({ "status": "error", "message": error.toString() }))
      .setMimeType(ContentService.MimeType.JSON);
  }
}
```

3. คลิก **ทำให้ใช้งานได้ (Deploy) > รายการทำให้ใช้งานได้ใหม่ (New deployment)**
4. เลือกประเภท: **เว็บแอป (Web app)**
   - **ดำเนินการในฐานะ (Execute as):** `ฉัน (Me)`
   - **ผู้มีสิทธิ์เข้าถึง (Who has access):** `ทุกคน (Anyone)`
5. คัดลอก **URL เว็บแอป (Web App URL)** นำมาใส่ในบรรทัดแรกของไฟล์ `index.html`:
   ```javascript
   const webAppUrl = "https://script.google.com/macros/s/YOUR_DEPLOYED_ID/exec";
   ```

---

## 🌐 คู่มือการ Deploy (Deployment Guide)

### 1. GitHub Pages
1. ไปที่แท็บ **Settings** ของ Repository บน GitHub
2. ไปที่ **Pages** > ภายใต้ Source เลือก **Deploy from a branch**
3. เลือก Branch: `main` และ Folder: `/ (root)` แล้วกด **Save**

### 2. Vercel
1. นำเข้า Repository บน [Vercel Dashboard](https://vercel.com)
2. โครงสร้างไฟล์มี `vercel.json` ป้องกันปัญหา 404 เรียบร้อยแล้ว กด Deploy ได้ทันที

### 3. Ubuntu 24.04 Server (Nginx & SSL)
```bash
# 1. ติดตั้ง Nginx และ Certbot
sudo apt update && sudo apt install -y nginx certbot python3-certbot-nginx git

# 2. โคลนโปรเจกต์ลงโฟลเดอร์ Web Root
sudo git clone https://github.com/s6902042856062-cmd/digital-business-vocab-game.git /var/www/cyber-spellcaster

# 3. ตั้งค่า Nginx Server Block
sudo nano /etc/nginx/sites-available/cyber-spellcaster
# ใส่การชี้ root ไปยัง /var/www/cyber-spellcaster

sudo ln -s /etc/nginx/sites-available/cyber-spellcaster /etc/nginx/sites-enabled/
sudo nginx -t && sudo systemctl reload nginx

# 4. ติดตั้ง SSL (HTTPS) ฟรีด้วย Certbot
sudo certbot --nginx -d yourdomain.com
```

---

## 📜 License
MIT License © 2026 Cyber Spellcaster: Vocab Quest
