<?php
// เชื่อมต่อฐานข้อมูล
$conn = new mysqli("localhost", "root", "", "mydata");

// ตรวจสอบการเชื่อมต่อ
if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}

// ตรวจสอบข้อมูลที่ส่งมาจากฟอร์ม
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    if (isset($_POST['construction'], $_POST['location'], $_POST['objective'], $_POST['area'])) {
        $construction = $_POST['construction'];
        $objective = $_POST['objective'];
        $location = $_POST['location'];
        $area = $_POST['area'];

        // ใช้ Prepared Statements เพื่อความปลอดภัย
        $stmt = $conn->prepare("INSERT INTO pmta_info (construction, objective, location, area) VALUES (?, ?, ?, ?)");
        $stmt->bind_param("ssss", $construction, $objective, $location, $area);

        if ($stmt->execute()) {
            echo "<script>
                alert('Data has been successfully added.');
                window.location.href = 'table-pmta.html';
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