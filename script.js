function analyzeSentence() {

  const sentence = document.getElementById("inputSentence").value;

  let result = `
    <h2>📖 Analysis Result</h2>
    <p><strong>Sentence:</strong> ${sentence}</p>
  `;

  // 中文翻譯
  if (sentence === "저는 한국어를 공부해요.") {
    result += `
      <p><strong>中文：</strong> 我學韓文。</p>
    `;
  }

  if (sentence === "학교에 가요.") {
    result += `
      <p><strong>中文：</strong> 我去學校。</p>
    `;
  }

  if (sentence === "김치를 먹었어요.") {
    result += `
      <p><strong>中文：</strong> 我吃了泡菜。</p>
    `;
  }

  // 은/는
  if (sentence.includes("는") || sentence.includes("은")) {
    result += `
      <p>✅ <strong>은/는</strong><br>
      主題助詞，用來表示句子的主題。</p>
    `;
  }

  // 이/가
  if (sentence.includes("이") || sentence.includes("가")) {
    result += `
      <p>✅ <strong>이/가</strong><br>
      主格助詞，用來表示主詞。</p>
    `;
  }

  // 을/를
  if (sentence.includes("을") || sentence.includes("를")) {
    result += `
      <p>✅ <strong>을/를</strong><br>
      受詞助詞，用來表示動作對象。</p>
    `;
  }

  // 에 / 에서
  if (sentence.includes("에")) {
    result += `
      <p>✅ <strong>에</strong><br>
      表示地點或時間。</p>
    `;
  }

  // 現在式
  if (
    sentence.includes("해요") ||
    sentence.includes("아요") ||
    sentence.includes("어요")
  ) {
    result += `
      <p>✅ <strong>아요/어요/해요</strong><br>
      現在式禮貌語尾。</p>
    `;
  }

  // 過去式
  if (
    sentence.includes("았어요") ||
    sentence.includes("었어요") ||
    sentence.includes("했어요")
  ) {
    result += `
      <p>✅ <strong>았어요/었어요</strong><br>
      過去式禮貌語尾。</p>
    `;
  }

  // 고 싶어요
  if (sentence.includes("고 싶어요")) {
    result += `
      <p>✅ <strong>고 싶어요</strong><br>
      表示「想做某件事」。</p>
    `;
  }

  document.getElementById("result").innerHTML = result;
}


// 範例句按鈕功能
function setExample(sentence) {
  document.getElementById("inputSentence").value = sentence;
}
