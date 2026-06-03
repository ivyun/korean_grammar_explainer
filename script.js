function analyzeSentence() {
  const sentence = document.getElementById("inputSentence").value.trim();
  const words = sentence.split(/\s+/);

  let result = `
    <h2>📖 Analysis Result</h2>
    <p><strong>Sentence:</strong> ${sentence}</p>
  `;

  words.forEach(word => {
    // 은/는
    if (word.endsWith("은") || word.endsWith("는")) {
      result += `
        <p>✅ <strong>${word}</strong><br>
        「은/는」是主題助詞，表示句子的主題。<br>
        例：나는 = 我 + 는，意思是「我呢／我是」。</p>
      `;
    }

    // 이/가，只判斷單字最後是 이 或 가，避免亂抓字中間
    else if (word.endsWith("이") || word.endsWith("가")) {
      result += `
        <p>✅ <strong>${word}</strong><br>
        「이/가」是主格助詞，表示主詞。</p>
      `;
    }

    // 을/를
    else if (word.endsWith("을") || word.endsWith("를")) {
      result += `
        <p>✅ <strong>${word}</strong><br>
        「을/를」是受詞助詞，表示動作的對象。</p>
      `;
    }

    // 에
    else if (word.endsWith("에")) {
      result += `
        <p>✅ <strong>${word}</strong><br>
        「에」表示地點、方向或時間。</p>
      `;
    }

    // 이다
    else if (word.endsWith("이다")) {
      result += `
        <p>✅ <strong>${word}</strong><br>
        「이다」是韓文的判斷詞，相當於中文的「是」。<br>
        例：학생이다 = 是學生。</p>
      `;
    }

    // 해요 / 아요 / 어요
    else if (
      word.endsWith("해요") ||
      word.endsWith("아요") ||
      word.endsWith("어요")
    ) {
      result += `
        <p>✅ <strong>${word}</strong><br>
        這是現在式禮貌語尾，常用於日常對話。</p>
      `;
    }

    // 過去式
    else if (
      word.endsWith("했어요") ||
      word.endsWith("았어요") ||
      word.endsWith("었어요")
    ) {
      result += `
        <p>✅ <strong>${word}</strong><br>
        這是過去式禮貌語尾，表示已經做過某件事。</p>
      `;
    }
  });

  if (sentence === "나는 학생이다") {
    result += `
      <hr>
      <p><strong>中文翻譯：</strong> 我是學生。</p>
      <p><strong>句子結構：</strong> 나는 = 我 + 主題助詞 / 학생이다 = 是學生。</p>
    `;
  }

  document.getElementById("result").innerHTML = result;
}

function setExample(sentence) {
  document.getElementById("inputSentence").value = sentence;
}
