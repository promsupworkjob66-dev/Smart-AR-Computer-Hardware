// ดึงคะแนนรวม
function getScore(){
  return Number(localStorage.getItem("score") || 0);
}

// เพิ่มคะแนน (กันซ้ำ)
function addScore(point, key){
  if(key && localStorage.getItem(key)) return;

  let score = getScore() + point;
  localStorage.setItem("score", score);

  if(key) localStorage.setItem(key, true);
  updateScoreBox();
}

// อัปเดตกล่องคะแนนหน้า Home
function updateScoreBox(){
  let box = document.getElementById("totalScore");
  if(box) box.innerText = getScore();
}

// รีเซ็ตทั้งหมด (โหมดครู)
function resetAll(){
  localStorage.clear();
  updateScoreBox();
}

// เรียกเมื่อโหลดหน้า
document.addEventListener("DOMContentLoaded", updateScoreBox);
