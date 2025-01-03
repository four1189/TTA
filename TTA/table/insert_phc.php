<?php
// เชื่อมต่อฐานข้อมูล
$conn = new mysqli("localhost", "root", "", "mydata");

// ตรวจสอบการเชื่อมต่อ
if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}

// ตรวจสอบข้อมูลที่ส่งมาจากฟอร์ม
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    if (!empty($_POST['store_Name']) && !empty($_POST['store_Type']) && 
        !empty($_POST['opening_Date']) && !empty($_POST['province']) && 
        !empty($_POST['region']) && !empty($_POST['abbr']) && 
        !empty($_POST['location']) && !empty($_POST['code'])) {

        $code = $_POST['code'];
        $store_Name = $_POST['store_Name'];
        $store_Type = $_POST['store_Type'];
        $opening_Date = $_POST['opening_Date'];
        $province = $_POST['province'];
        $region = $_POST['region'];
        $abbr = $_POST['abbr'];
        $location = $_POST['location'];

        // ใช้ Prepared Statements เพื่อความปลอดภัย
        $stmt = $conn->prepare("INSERT INTO phc_info (code, store_Name, store_Type, opening_Date, province, region, abbr, location) VALUES (?, ?, ?, ?, ?, ?, ?, ?)");
        $stmt->bind_param("isssssss", $code, $store_Name, $store_Type, $opening_Date, $province, $region, $abbr, $location);

        if ($stmt->execute()) {
            echo "<script>
                alert('Data has been successfully added.');
                window.location.href = 'table-phc.html';
              </script>";
        } else {
            echo "Error: " . $stmt->error;
        }
        $stmt->close();
    } else {
        die("Please fill in all required fields.");
    }
}

// ปิดการเชื่อมต่อ
$conn->close();
?>