// 時計の更新
function updateClock() {
    const now = new Date();
    const h = String(now.getHours()).padStart(2, '0');
    const m = String(now.getMinutes()).padStart(2, '0');
    const days = ['SUN', 'MON', 'TUE', 'WED', 'THU', 'FRI', 'SAT'];
    
    document.getElementById('clock').innerText = `${h}:${h}:${m}`; // 画像に合わせて H:H:M 風にする場合は調整
    document.getElementById('clock').innerText = `${h}:${m}`;
    document.getElementById('date').innerText = 
        `${now.getFullYear()}.${String(now.getMonth()+1).padStart(2,'0')}.${String(now.getDate()).padStart(2,'0')} ${days[now.getDay()]}`;
}
setInterval(updateClock, 1000);
updateClock();

// アプリ起動
function openApp(name) {
    const modal = document.getElementById('app-modal');
    document.getElementById('modal-title').innerText = name;
    modal.classList.add('active');
}

function closeApp() {
    document.getElementById('app-modal').classList.remove('active');
}

// 背景パーティクル (簡易版)
const canvas = document.getElementById('particle-canvas');
const ctx = canvas.getContext('2d');
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

let particles = [];
for(let i=0; i<40; i++) {
    particles.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        s: Math.random() * 2,
        v: Math.random() * 0.2
    });
}

function animate() {
    ctx.clearRect(0,0,canvas.width, canvas.height);
    ctx.fillStyle = "rgba(212, 175, 55, 0.4)";
    particles.forEach(p => {
        p.y -= p.v;
        if(p.y < 0) p.y = canvas.height;
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.s, 0, Math.PI*2);
        ctx.fill();
    });
    requestAnimationFrame(animate);
}
animate();