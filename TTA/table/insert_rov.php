<?php
// เชื่อมต่อฐานข้อมูล
$conn = new mysqli("localhost", "root", "", "mydata");

// ตรวจสอบการเชื่อมต่อ
if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}

// ตรวจสอบข้อมูลที่ส่งมาจากฟอร์ม
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    if (isset($_POST['name_of_vessels'], $_POST['vessel_Type'], $_POST['purchase_year'])) {
        $name_of_vessels = $_POST['name_of_vessels'];
        $vessel_Type = $_POST['vessel_Type'];
        $purchase_year = $_POST['purchase_year'];

        // ใช้ Prepared Statements เพื่อความปลอดภัย
        $stmt = $conn->prepare("INSERT INTO rov_info (name_of_vessels, vessel_Type, purchase_year) VALUES (?, ?, ?)");
        $stmt->bind_param("sss", $name_of_vessels, $vessel_Type, $purchase_year);

        if ($stmt->execute()) {
            echo "<script>
                alert('Data has been successfully added.');
                window.location.href = 'table-rov.html';
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