// ฟังก์ชันสำหรับเปิด/ปิดเมนู
function toggleSubMenu(menuId) {
    var submenu = document.getElementById(menuId);
    var isCurrentlyOpen = submenu.style.display === 'block';

    // ถ้ามีเมนูที่เปิดอยู่แล้ว ปิดเมนูนั้น
    var allSubMenus = document.querySelectorAll('.submenu-dropdown-1, .submenu-dropdown-2, .submenu-dropdown-3, .submenu-dropdown-4');
    allSubMenus.forEach(function(submenuItem) {
        if (submenuItem !== submenu) {
            submenuItem.style.display = 'none'; // ปิดเมนูอื่นๆ
        }
    });

    // เปิด/ปิดเมนูที่คลิก
    if (!isCurrentlyOpen) {
        submenu.style.display = 'block';
    } else {
        submenu.style.display = 'none';
    }
}

// ฟังก์ชันสำหรับเปิด/ปิดเมนูย่อย 1
function toggleSubMenu1(menuId) {
    var submenu = document.getElementById(menuId);
    var isCurrentlyOpen = submenu.style.display === 'block';

    // ปิดเมนูอื่นๆ ที่เปิดอยู่
    var allSubMenus = document.querySelectorAll('.submenu-dropdown-2, .submenu-dropdown-3, .submenu-dropdown-4');
    allSubMenus.forEach(function(submenuItem) {
        if (submenuItem !== submenu) {
            submenuItem.style.display = 'none'; // ปิดเมนูอื่นๆ
        }
    });

    // เปิด/ปิดเมนูที่คลิก
    if (!isCurrentlyOpen) {
        submenu.style.display = 'block';
    } else {
        submenu.style.display = 'none';
    }
}

// ฟังก์ชันสำหรับเปิด/ปิดเมนูย่อย 2
function toggleSubMenu2(menuId) {
    var submenu = document.getElementById(menuId);
    var isCurrentlyOpen = submenu.style.display === 'block';

    // ปิดเมนูอื่นๆ ที่เปิดอยู่
    var allSubMenus = document.querySelectorAll('.submenu-dropdown-3, .submenu-dropdown-4');
    allSubMenus.forEach(function(submenuItem) {
        if (submenuItem !== submenu) {
            submenuItem.style.display = 'none'; // ปิดเมนูอื่นๆ
        }
    });

    // เปิด/ปิดเมนูที่คลิก
    if (!isCurrentlyOpen) {
        submenu.style.display = 'block';
    } else {
        submenu.style.display = 'none';
    }
}

// ฟังก์ชันสำหรับเปิด/ปิดเมนูย่อย 3
function toggleSubMenu3(menuId) {
    var submenu = document.getElementById(menuId);
    var isCurrentlyOpen = submenu.style.display === 'block';

    // ปิดเมนูอื่นๆ ที่เปิดอยู่
    var allSubMenus = document.querySelectorAll('.submenu-dropdown-4');
    allSubMenus.forEach(function(submenuItem) {
        if (submenuItem !== submenu) {
            submenuItem.style.display = 'none'; // ปิดเมนูอื่นๆ
        }
    });

    // เปิด/ปิดเมนูที่คลิก
    if (!isCurrentlyOpen) {
        submenu.style.display = 'block';
    } else {
        submenu.style.display = 'none';
    }
}

//     var lastOpenedMenu1 = null; // เก็บเมนูย่อยระดับ 1
//     var lastOpenedMenu2 = null; // เก็บเมนูย่อยระดับ 2
//     var lastOpenedMenu3 = null; // เก็บเมนูย่อยระดับ 3
//     var lastOpenedMenu4 = null; // เก็บเมนูย่อยระดับ 4
//     var lastOpenedMenu5 = null; // เก็บเมนูย่อยระดับ 5

//     // ฟังก์ชันเปิด/ปิดเมนูหลัก
//     function toggleSubMenu(menuId) {
//         var submenu = document.getElementById(menuId);
//         var isCurrentlyOpen = submenu.style.display === 'block';

//         // ถ้ามีเมนูที่เปิดอยู่แล้ว ปิดเมนูนั้น
//         if (lastOpenedMenu1 && lastOpenedMenu1 !== submenu) {
//             lastOpenedMenu1.style.display = 'none';
//         }

//         // เปิด/ปิดเมนูที่คลิก
//         if (!isCurrentlyOpen) {
//             submenu.style.display = 'block';
//         } else {
//             submenu.style.display = 'none';
//         }

//         // เก็บเมนูที่เปิดล่าสุด
//         lastOpenedMenu1 = submenu;
//     }

//     // ฟังก์ชันเปิด/ปิดเมนูย่อยระดับ 1
// function toggleSubMenu1(menuId) {
//     var submenu = document.getElementById(menuId);
//     var isCurrentlyOpen = submenu.style.display === 'block';

//     // ถ้ามีเมนูที่เปิดอยู่แล้ว ปิดเมนูนั้น
//     if (lastOpenedMenu2 && lastOpenedMenu2 !== submenu) {
//         lastOpenedMenu2.style.display = 'none';
//     }

//     if (lastOpenedMenu3 && lastOpenedMenu3 !== submenu) {
//         lastOpenedMenu3.style.display = 'none';
//     }

//     if (lastOpenedMenu4 && lastOpenedMenu4 !== submenu) {
//         lastOpenedMenu4.style.display = 'none';
//     }

//     // เปิด/ปิดเมนูที่คลิก
//     if (!isCurrentlyOpen) {
//         submenu.style.display = 'block';
//     } else {
//         submenu.style.display = 'none';
//     }

//     // เก็บเมนูที่เปิดล่าสุด
//     lastOpenedMenu1 = submenu;
// }

// // ฟังก์ชันเปิด/ปิดเมนูย่อยระดับ 2
// function toggleSubMenu2(menuId) {
//     var submenu = document.getElementById(menuId);
//     var isCurrentlyOpen = submenu.style.display === 'block';

//     // ถ้ามีเมนูที่เปิดอยู่แล้ว ปิดเมนูนั้น
//     if (lastOpenedMenu3 && lastOpenedMenu3 !== submenu) {
//         lastOpenedMenu3.style.display = 'none';
//     }

//     if (lastOpenedMenu4 && lastOpenedMenu4 !== submenu) {
//         lastOpenedMenu4.style.display = 'none';
//     }

//     // เปิด/ปิดเมนูที่คลิก
//     if (!isCurrentlyOpen) {
//         submenu.style.display = 'block';
//     } else {
//         submenu.style.display = 'none';
//     }

//     // เก็บเมนูที่เปิดล่าสุด
//     lastOpenedMenu2 = submenu;
// }

// // ฟังก์ชันเปิด/ปิดเมนูย่อยระดับ 3
// function toggleSubMenu3(menuId) {
//     var submenu = document.getElementById(menuId);
//     var isCurrentlyOpen = submenu.style.display === 'block';

//     // ถ้ามีเมนูที่เปิดอยู่แล้ว ปิดเมนูนั้น
//     if (lastOpenedMenu4 && lastOpenedMenu4 !== submenu) {
//         lastOpenedMenu4.style.display = 'none';
//     }

//     // เปิด/ปิดเมนูที่คลิก
//     if (!isCurrentlyOpen) {
//         submenu.style.display = 'block';
//     } else {
//         submenu.style.display = 'none';
//     }

//     // เก็บเมนูที่เปิดล่าสุด
//     lastOpenedMenu3 = submenu;
// }

// // ฟังก์ชันเปิด/ปิดเมนูย่อยระดับ 4
// function toggleSubMenu4(menuId) {
//     var submenu = document.getElementById(menuId);
//     var isCurrentlyOpen = submenu.style.display === 'block';

//     // ถ้ามีเมนูที่เปิดอยู่แล้ว ปิดเมนูนั้น
//     if (lastOpenedMenu5 && lastOpenedMenu5 !== submenu) {
//         lastOpenedMenu5.style.display = 'none';
//     }

//     // เปิด/ปิดเมนูที่คลิก
//     if (!isCurrentlyOpen) {
//         submenu.style.display = 'block';
//     } else {
//         submenu.style.display = 'none';
//     }

//     // เก็บเมนูที่เปิดล่าสุด
//     lastOpenedMenu4 = submenu;
// }
// // ฟังก์ชันเปิด/ปิดเมนูย่อยระดับ 5
// function toggleSubMenu5(menuId) {
//     var submenu = document.getElementById(menuId);
//     var isCurrentlyOpen = submenu.style.display === 'block';

//     // เปิด/ปิดเมนูที่คลิก
//     if (!isCurrentlyOpen) {
//         submenu.style.display = 'block';
//     } else {
//         submenu.style.display = 'none';
//     }

//     // เก็บเมนูที่เปิดล่าสุด
//     lastOpenedMenu5 = submenu;
// }

//     // ป้องกันการปิดเมนูย่อยเมื่อคลิกที่เมนูย่อย
//     document.querySelectorAll('.submenu-dropdown').forEach(function(submenu) {
//         submenu.addEventListener('click', function(event) {
//             event.stopPropagation();  // หยุดการคลิกจากการปิดเมนู
//         });
//     });