const jokes = [
  {
    title:
      "Một người mắc bệnh tưởng mình là chuột. Sau nhiều cố gắng của các bác sĩ thần kinh, cuối cùng ông ta cũng đã tự nói ra được mình không phải là chuột. Lúc xuất viện, ông ta nhìn thấy một con mèo và lại bắt đầu run lẩy bẩy không chịu đi. Bác sĩ động viên: Anh đã biết rõ mình không phải là chuột rồi mà. Ông biết, tôi biết, nhưng con ác thú ăn thịt kia không biết thì sao?",
  },
  {
    title: `
    - Quỷnh: Ở lớp có bạn đánh Quỷnh không dám đánh lại!
    - Mắm: Chuyện lạ à nghen! Nhưng tại sao bạn ấy lại đánh Quỷnh?
    - Quỷnh: Vì quỷnh đánh bạn ấy trước!!!
    - Mắm: Hừ! Biết ngay mà!`,
  },
  {
    title: `Một vụ tai nạn giao thông vừa xảy ra ngoài phố. Mọi người tò mò chen lấn vòng trong vòng ngoài để xem. Một anh línhđến chậm không tài nào vào xem được. Tức quá, anh ta liền hét toáng lên:

    – Tôi là bố kẻ bị nạn đây!
    
    Mọi người kinh ngạc quay lại nhìn và vội vã giãn ra cho anh ta vào. “Kẻ bị nạn” là một… chú chó vừa bị xe cán chết.`,
  },
  {
    title:
      "Chuyện kể rằng: Có một hồ nước thiêng ở Canada. Ai muốn ước gì cứ nói lời ước của mình rồi nhảy xuống hồ tắm là được toại nguyện. Thế là mọi người từ khắp nơi trên thế giới kéo nhau đến rất đông. Người thì ước thành gấu trắng, người thì muốn thành đại bàng và có người còn ước thành hoa anh đào nữa. Có một anh đến bên hồ, hấp tấp thế nào lại trượt chân, vội thốt lên “Oh,SHIT!” và … rơi tõm xuống hồ.",
  },
  {
    title: `Việt Nam, Mỹ, Nhật cung vao wán bar. Thằng Mỹ gọi 1 chai bia, lấy súng và bắn bay cổ nắp bia, rót vào ly. Thằng Nhật thì gọi 1 chai bai, lấy kiếm chém rớt nắp bia. Đến lượt VN, anh ta ngồi đó và nói:” bồi cho chai bia, mỡ nắp sẵn nha”…

    Cả quán ngồi cười haha
    Bia đem ra… người Việt Nam thả vào đó 1 quả lựu đạn US.
    Vèo… cả chủ quán cũng ko thấy đâu nữa…`,
  },
  {
    title: `Trong giờ học, giáo sư giảng cho sinh viên về hộp sọ:

    - Đây là một mẫu sọ khỉ đặc biệt. Trong thành phố của chúng ta chỉ có hai chiếc. Một chiếc trong viện bảo tàng và một chiếc của tôi.`,
  },
  {
    title: `Tác giả kịch bản khoe với bạn:

    - Cậu biết không, khi màn hạ xuống, tất cả khán giả vỗ tay vang dội nhé.
    
    - Thế trên tấm màn vẽ gì?
    
    - HẾT PHIM`,
  },
  {
    title: `Trên chiếc máy bay sắp cất cánh, thấy phi công đi ngang qua, một bà khách tóc vàng túm lấy anh ta dặn dò:

    - Xin ông hãy lái cẩn thận cho, lần đầu tiên tôi đi máy bay đấy!
    
    - Ồ, bà hãy yên tâm, tôi cũng thế.`,
  },
];
const content = document.querySelector(".center > p ");
const btn = document.querySelector(".btn");
let currentIndex = 0;
btn.addEventListener("click", () => {
  if (currentIndex < jokes.length) {
    content.textContent = `${jokes[currentIndex].title}`;
    currentIndex++;
  } else {
    currentIndex = 0;
    content.textContent = `${jokes[currentIndex].title}`;
    currentIndex++;
  }
});
