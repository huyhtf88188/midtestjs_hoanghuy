function highlightKeyword(content, keyword) {
  let keyword = content.include(keyword);
  console.log(keyword);
}
highlightKeyword(
  "Học lập trình tại F8 rất thú vị, bạn có biết điều gì THÚ VỊ hơn không?",
  "thú vị"
);
