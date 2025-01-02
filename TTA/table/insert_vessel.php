<?php
// เชื่อมต่อฐานข้อมูล
$conn = new mysqli("localhost", "root", "", "mydata");

// ตรวจสอบการเชื่อมต่อ
if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}

// ตรวจสอบข้อมูลที่ส่งมาจากฟอร์ม
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $vessel_name = $_POST['vessel_name'];
    $year_built = $_POST['year_built'];
    $year_delivered = $_POST['year_delivered'];
    $status = $_POST['status'];
    $classification = $_POST['classification'];
    $type = $_POST['type'];
    $dwt = $_POST['dwt'];
    $lightship = $_POST['lightship'];
    $age = $_POST['age'];

    // สร้างคำสั่ง SQL สำหรับแทรกข้อมูล
    $sql = "INSERT INTO vessel_info (vessel_name, year_built, year_delivered, status, classification, type, dwt, lightship, age) 
            VALUES ('$vessel_name', '$year_built', '$year_delivered', '$status', '$classification', '$type', $dwt, $lightship, $age)";

    // ตรวจสอบว่า SQL ทำงานสำเร็จหรือไม่
    if ($conn->query($sql) === TRUE) {
        echo "<script>
            alert('Data has been successfully added.');
            window.location.href = 'ship.php'; // เปลี่ยนเป็นหน้าเดิมที่ต้องการ
          </script>";
    } else {
        echo "Error: " . $sql . "<br>" . $conn->error;
    }

    // ปิดการเชื่อมต่อ
    $conn->close();
}
?>
