<?php
// เชื่อมต่อฐานข้อมูล
$conn = new mysqli("localhost", "root", "", "mydata");

// ตรวจสอบการเชื่อมต่อ
if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}

// ตรวจสอบข้อมูลที่ส่งมาจากฟอร์ม
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    if (!empty($_POST['company_name']) && !empty($_POST['shareholding']) && 
        !empty($_POST['before_s']) && !empty($_POST['impairment']) && 
        !empty($_POST['after_c']) && !empty($_POST['tta_Loan']) && 
        !empty($_POST['fy19']) && !empty($_POST['fy20']) && 
        !empty($_POST['fy21']) && !empty($_POST['fy22']) && 
        !empty($_POST['fy23']) && !empty($_POST['fy24']) && 
        !empty($_POST['years']) && !empty($_POST['after_r']) && 
        !empty($_POST['received']) && !empty($_POST['act_FY19'])) {

        $company_name = $conn->real_escape_string($_POST['company_name']);
        $shareholding = $conn->real_escape_string($_POST['shareholding']);
        $before_s = (int) $_POST['before_s'];
        $impairment = (int) $_POST['impairment'];
        $after_c = (int) $_POST['after_c'];
        $tta_Loan = (int) $_POST['tta_Loan'];
        $fy19 = (int) $_POST['fy19'];
        $fy20 = (int) $_POST['fy20'];
        $fy21 = (int) $_POST['fy21'];
        $fy22 = (int) $_POST['fy22'];
        $fy23 = (int) $_POST['fy23'];
        $fy24 = (int) $_POST['fy24'];
        $years = (int) $_POST['years'];
        $after_r = $conn->real_escape_string($_POST['after_r']);
        $received = (int) $_POST['received'];
        $act_FY19 = $conn->real_escape_string($_POST['act_FY19']);

        // ใช้ Prepared Statements เพื่อความปลอดภัย
        $stmt = $conn->prepare("INSERT INTO phc2_info (company_name, shareholding, before_s, impairment, after_c, tta_Loan, fy19, fy20, fy21, fy22, fy23, fy24, years, after_r, received, act_FY19) 
        VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)");
        $stmt->bind_param("ssssiiiiiiiiisis", $company_name, $shareholding, $before_s, $impairment, $after_c, $tta_Loan, $fy19, $fy20, $fy21, $fy22, $fy23, $fy24, $years, $after_r, $received, $act_FY19);

        if ($stmt->execute()) {
            echo "<script>
                alert('Data has been successfully added.');
                window.location.href = 'table-phc2.html';
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