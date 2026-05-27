function analyzeSentence() {

  const sentence = document.getElementById("inputSentence").value;

  let result = `
    <h2>Analysis Result</h2>
    <p><strong>Sentence:</strong> ${sentence}</p>
  `;

  // 은/는
  if (sentence.includes("는") || sentence.includes("은")) {
    result += `
      <p>✅ <strong>은/는</strong> :
      Topic particle used to mark the topic of the sentence.</p>
    `;
  }

  // 이/가
  if (sentence.includes("이") || sentence.includes("가")) {
    result += `
      <p>✅ <strong>이/가</strong> :
      Subject particle used to identify the subject.</p>
    `;
  }

  // 을/를
  if (sentence.includes("을") || sentence.includes("를")) {
    result += `
      <p>✅ <strong>을/를</strong> :
      Object particle used for the object of the sentence.</p>
    `;
  }

  // 에 / 에서
  if (sentence.includes("에")) {
    result += `
      <p>✅ <strong>에</strong> :
      Location or time particle.</p>
    `;
  }

  // 해요
  if (
    sentence.includes("해요") ||
    sentence.includes("아요") ||
    sentence.includes("어요")
  ) {
    result += `
      <p>✅ <strong>아요/어요/해요</strong> :
      Present tense polite ending.</p>
    `;
  }

  // past tense
  if (
    sentence.includes("았어요") ||
    sentence.includes("었어요") ||
    sentence.includes("했어요")
  ) {
    result += `
      <p>✅ <strong>았어요/었어요</strong> :
      Past tense polite ending.</p>
    `;
  }

  // 고 싶어요
  if (sentence.includes("고 싶어요")) {
    result += `
      <p>✅ <strong>고 싶어요</strong> :
      Expression for "want to do something".</p>
    `;
  }

  document.getElementById("result").innerHTML = result;
}
